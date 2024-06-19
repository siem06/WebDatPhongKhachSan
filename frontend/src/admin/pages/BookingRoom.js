import React, { useState, useEffect } from 'react';
import Header from '../layout/Header';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import {
  Box,
  Modal,
  TextField,
  Button,
  Tooltip,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteBooking, getAllBooking, getupdatedBooking } from '../../service/api'; // Import function to fetch bookings

const BookingRoom = () => {
  const [bookings, setBookings] = useState([]);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [currentBooking, setCurrentBooking] = useState(null);
  const [editData, setEditData] = useState({
    userId: '',
    totalPrice: '',
    checkinDate: '',
    checkoutDate: '',
    statusBooking: '',
    note: '',
    totalRoom: '',
    totalDate: '',
    methodPay: '',
  });

  useEffect(() => {
    fetchData(); // Fetch bookings when component mounts
  }, []);

  const fetchData = async () => {
    try {
      const response = await getAllBooking();
      setBookings(response);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const handleEdit = (booking) => {
    setCurrentBooking(booking);
    setEditData({
      userId: booking.userId,
      totalPrice: booking.totalPrice,
      checkinDate: booking.checkinDate,
      checkoutDate: booking.checkoutDate,
      statusBooking: booking.statusBooking,
      note: booking.note,
      totalRoom: booking.totalRoom,
      totalDate: booking.totalDate,
      methodPay: booking.methodPay,
    });
    setOpenEditModal(true);
  };

  const handleSaveEdit = async () => {
    try {
      const { userId, totalPrice, checkinDate, checkoutDate, statusBooking, note, totalRoom, totalDate, methodPay } = editData;
      const updatedBooking = { userId, totalPrice, checkinDate, checkoutDate, statusBooking, note, totalRoom, totalDate, methodPay };
      // Implement update booking API call here
      await getupdatedBooking(currentBooking.id, updatedBooking); 
      fetchData(); // Reload bookings after update
      setOpenEditModal(false);
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await deleteBooking(id); // Call API to delete booking
      fetchData(); // Reload bookings after deletion
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value
    });
  };

  const columns = [
    {
      accessorKey: 'id',
      header: 'STT',
      size: 150,
    },
    {
      accessorKey: 'userId',
      header: 'ID Người dùng',
      size: 150,
    },
    {
      accessorKey: 'totalPrice',
      header: 'Tổng giá',
      size: 150,
    },
    {
      accessorKey: 'checkinDate',
      header: 'Ngày nhận phòng',
      size: 200,
    },
    {
      accessorKey: 'checkoutDate',
      header: 'Ngày trả phòng',
      size: 200,
    },
    {
      accessorKey: 'totalRoom',
      header: 'Tổng phòng',
      size: 150,
    },
    {
      accessorKey: 'totalDate',
      header: 'Tổng ngày',
      size: 150,
    },
    {
      accessorKey: 'methodPay',
      header: 'Phương thức thanh toán',
      size: 200,
    },
    {
      accessorKey: 'statusBooking',
      header: 'Trạng thái đặt phòng',
      size: 200,
    },
    {
      accessorKey: 'editaction',
      header: 'Hành động',
      size: 150,
      Cell: ({ row }) => (
        <Box sx={{ display: 'flex' }}key={`${row.original.id}_edit`}>
          <Tooltip title="Chỉnh sửa">
          <IconButton onClick={() => handleEdit(row.original)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        </Box>
      ),
    },
    {
      accessorKey: 'action',
      header: 'Hành động',
      size: 150,
      Cell: ({ row }) => (
        <Box sx={{ display: 'flex', }} key={`${row.original.id}_delete`} >
          <Tooltip title="Delete">
            <IconButton onClick={() => handleDelete(row.original.id)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  const table = useMaterialReactTable({
    columns,
    data: bookings,
  });

  return (
    <>
      
      <main className="main-content position-relative border-radius-lg ">
      <Header pageCurrent="Quản lý đặt phòng" />
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                    <h6 className="text-white text-capitalize ps-3">Bảng danh sách đặt phòng</h6>
                  </div>
                </div>
                <div className="card-body px-0 pb-2">
                  <div className="table-responsive p-0">
                    <MaterialReactTable table={table} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Edit Modal */}
      <Modal open={openEditModal} onClose={() => setOpenEditModal(false)}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '2rem', width: '400px',maxHeight: '80vh', overflowY: 'auto' }}>
          <h2>Chỉnh sửa đặt phòng</h2>
          <form>
            <TextField
              label="ID Người dùng"
              name="userId"
              value={editData.userId}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Tổng giá"
              name="totalPrice"
              type="number"
              value={editData.totalPrice}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Ngày nhận phòng"
              name="checkinDate"
              type="date"
              value={editData.checkinDate}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Ngày trả phòng"
              name="checkoutDate"
              type="date"
              value={editData.checkoutDate}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Trạng thái đặt phòng"
              name="statusBooking"
              value={editData.statusBooking}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Ghi chú"
              name="note"
              value={editData.note}
              onChange={handleChange}
              fullWidth
              margin="normal"
              multiline
              rows={4}
            />
            <TextField
              label="Số lượng phòng"
              name="totalRoom"
              type="number"
              value={editData.totalRoom}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Số ngày đặt"
              name="totalDate"
              type="number"
              value={editData.totalDate}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Phương thức thanh toán"
              name="methodPay"
              value={editData.methodPay}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Box mt={2} display="flex" justifyContent="space-between">
              <Button variant="contained" color="primary" onClick={handleSaveEdit}>Lưu</Button>
              <Button variant="outlined" onClick={() => setOpenEditModal(false)}>Đóng</Button>
            </Box>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default BookingRoom;
