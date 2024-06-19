import React, { useState, useEffect } from 'react';
import Header from '../layout/Header';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import {
  Box,
  IconButton,
  Tooltip,
  Modal,
  Button,
  TextField,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import LockIcon from '@mui/icons-material/Lock';
import { getAllRooms, getUpdatedRooms } from '../../service/api';
const getRoomDescription = (type) => {
  switch (type) {
    case 1:
      return 'Phòng đơn tiêu chuẩn';
    case 2:
      return 'Phòng đơn cao cấp';
    case 3:
      return 'Phòng đơn đặc biệt';
    case 4:
      return 'Phòng tổng thống';
    case 5:
      return 'Phòng đôi tiêu chuẩn';
    case 6:
      return 'Phòng đôi cao cấp';
    case 7:
      return 'Phòng đôi đặc biệt';
    default:
      return 'Loại phòng không xác định';
  }
};
const ManageRoom = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  useEffect(() => {
    fetchData(); // Gọi hàm fetchData khi trang hoặc pageSize thay đổi
  }, []);
  // Fetch data from API with pagination
  const fetchData = async () => {
    try {
      const response = await getAllRooms();
      setData(response);
      console.log('API ', response);
      // if (response && Array.isArray(response.rows)) {
      //   setData(response.rows); // Đảm bảo response.rows là một mảng
      // } else {
      //   console.error('Invalid response format:', response);
      //   setData([]); // Đặt mảng trống nếu định dạng phản hồi không hợp lệ
      // }

      // if (response && typeof response.count === 'number') {
      //   setTotalCount(response.count); // Đảm bảo response.count là một số
      // } else {
      //   console.error('Invalid count format:', response);
      //   setTotalCount(100); // Đặt giá trị mặc định nếu định dạng count không hợp lệ
      // }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

 

  const columns = [
      {
        accessorKey: 'id',
        header: 'Id Phòng',
        size: 50,
      },
      {
        accessorKey: 'images',
        header: 'Hình ảnh',
        size: 150,
        Cell: ({ cell }) => (
          <>
            {cell.getValue()?.map(image => (
              <img
                key={image.id}
                src={image.img}
                alt="Room"
                style={{ width: '100px', height: 'auto', marginRight: '5px' }}
              />
            ))}
          </>
        ),
      },
      {
        accessorKey: 'type',
        header: 'Loại phòng',
        size: 150,
        Cell: ({ cell }) => getRoomDescription(cell.getValue()),
      },
      {
        accessorKey: 'price',
        header: 'Giá phòng',
        size: 150,
      },
      {
        accessorKey: 'status',
        header: 'Trạng thái',
        size: 50,
      },
      {
        accessorKey: 'description',
        header: 'Mô tả',
        size: 200,
      },
      {
        accessorKey: 'note',
        header: 'Lưu ý',
        size: 200,
      },
      {
        accessorKey: 'action',
        header: 'Hành động',
        size: 120,
        Cell: ({ row }) => (
          <Box sx={{ display: 'flex', gap: '0.5rem' }}>
            {/* Button Edit */}
            <Tooltip title="Edit">
              <IconButton onClick={() => handleEdit(row)}>
                <EditIcon />
              </IconButton>
            </Tooltip>
            {/* Button Lock */}
            <Tooltip title="Lock">
              <IconButton onClick={() => handleLock(row)}>
                <LockIcon />
              </IconButton>
            </Tooltip>
          </Box>
        ),
      },
    ];
  

  const table = useMaterialReactTable({
    columns,
    data:data,
   
  });

  const handleEdit = (row) => {
    setCurrentRow(row);
    setOpen(true);
  };

  const handleLock = (row) => {
    console.log('Lock action for row:', row);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentRow(null);
  };

  const handleSave = async () => {
    const updatedData = {
      images: currentRow.original.images,
      type: currentRow.original.type,
      price: currentRow.original.price,
      status: currentRow.original.status,
      description: currentRow.original.description,
      note: currentRow.original.note,
    };

    // Cập nhật state data ngay lập tức
    setData((prevData) =>
      prevData.map((item) =>
        item.id === currentRow.original.id ? { ...currentRow.original, ...updatedData } : item
      )
    );

    setOpen(false);

    try {
      const updatedRoom = await getUpdatedRooms(currentRow.original.id, updatedData);
      console.log("API response", updatedRoom);
    } catch (error) {
      console.error('Error saving room:', error);
      // Nếu có lỗi, có thể hiển thị thông báo lỗi hoặc hoàn tác cập nhật state
    }
  };
  

  return (
    <>
      <main className="main-content position-relative border-radius-lg">
        <Header pageCurrent="Quản lý phòng" />
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                    <h6 className="text-white text-capitalize ps-3">Bảng danh sách phòng</h6>
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
      <Modal open={open} onClose={handleClose}>
        <Box
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            backgroundColor: 'white',
            padding: '2rem',
            maxHeight: '80vh', overflowY: 'auto'
          }}
        >
          <h2>Edit Room</h2>
          {currentRow && currentRow.original && (
            <>
              <TextField
                label="Hình ảnh"
                value={currentRow.original.images[0].img||''} // Giả sử chỉ có 1 hình ảnh, bạn có thể thay đổi phần này phù hợp với cấu trúc dữ liệu thực tế
                onChange={(e) =>
                  setCurrentRow({
                    ...currentRow,
                    original: {
                      ...currentRow.original,
                      images: [{
                        ...currentRow.original.images[0],
                        img: e.target.value,
                      }]
                    },
                  })
                }
                fullWidth
                margin="normal"
              />
              <TextField
                label="Kiểu phòng"
                value={currentRow.original.type}
                onChange={(e) =>
                  setCurrentRow({
                    ...currentRow,
                    original: {
                      ...currentRow.original,
                      type: e.target.value,
                    },
                  })
                }
                fullWidth
                margin="normal"
              />
              <TextField
                label="Giá Phòng"
                value={currentRow.original.price}
                onChange={(e) =>
                  setCurrentRow({
                    ...currentRow,
                    original: {
                      ...currentRow.original,
                      price: e.target.value,
                    },
                  })
                }
                fullWidth
                margin="normal"
              />
              <TextField
                label="Trạng thái"
                value={currentRow.original.status}
                onChange={(e) =>
                  setCurrentRow({
                    ...currentRow,
                    original: {
                      ...currentRow.original,
                      status: e.target.value,
                    },
                  })
                }
                fullWidth
                margin="normal"
              />
              <TextField
                label="Mô tả"
                value={currentRow.original.description}
                onChange={(e) =>
                  setCurrentRow({
                    ...currentRow,
                    original: {
                      ...currentRow.original,
                      description: e.target.value,
                    },
                  })
                }
                fullWidth
                margin="normal"
              />
              <TextField
                label="Lưu ý"
                value={currentRow.original.note}
                onChange={(e) =>
                  setCurrentRow({
                    ...currentRow,
                    original: {
                      ...currentRow.original,
                      note: e.target.value,
                    },
                  })
                }
                fullWidth
                margin="normal"
              />
            </>
          )}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button onClick={handleClose} sx={{ mr: 2 }}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleSave}>
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ManageRoom;
