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
  TextField,
  Button,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { getAllReviews, getdeleteReviews, updateReview } from '../../service/api';

const ManageComment = () => {
  const [reviews, setReviews] = useState([]);
  const [openReplyModal, setOpenReplyModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [currentReview, setCurrentReview] = useState(null);
  const [editData, setEditData] = useState({
    roomId: '',
    userId: '',
    rating: '',
    comment: '',
    note: '',
    reply: ''
  });
  useEffect(() => {
    fetchData(); // Fetch reviews when component mounts
  }, []);

  const fetchData = async () => {
    try {
      const response = await getAllReviews();
      console.log("test review", response);
      setReviews(response);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      // setReviews([]);
    }
  };


  const handleEdit = (review) => {
    setCurrentReview(review);
    setEditData({
      roomId: review.roomId,
      userId: review.userId,
      rating: review.rating,
      comment: review.comment,
      note: review.note,
      reply: review.reply
    });
    setOpenEditModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await getdeleteReviews(id); // Call deleteReview API with the review ID
      fetchData();
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  const handleSaveEdit = async () => {
    try {
      const { roomId, userId, rating, comment, note, reply } = editData;
      const updatedReview = { roomId, userId, rating, comment, note, reply };
      await updateReview(currentReview.id, updatedReview);
      fetchData();
      setOpenEditModal(false);
    } catch (error) {
      console.error('Error updating review:', error);
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
      accessorKey: 'roomId',
      header: 'ID phòng',
      size: 100,
    },
    {
      accessorKey: 'userId',
      header: ' ID người dùng',
      size: 100,
    },
    {
      accessorKey: 'rating',
      header: 'Số lượng sao',
      size: 100,
    },
    {
      accessorKey: 'comment',
      header: 'Bình luận',
      size: 300,
    },
    {
      accessorKey: 'reply',
      header: 'Trả lời',
      size: 300,
    },
    {
      accessorKey: 'note',
      header: 'Note',
      size: 200,
    },
    {
      accessorKey: 'editAction',
      header: 'Hành động',
      size: 150,
      Cell: ({ row }) => (
        <Box sx={{ display: 'flex' }} key={`${row.original.id}_edit`}>
          <Tooltip title="Edit">
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
        <Box sx={{ display: 'flex' }} key={`${row.original.id}_delete`} >
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
    data: reviews,
  });

  return (
    <>
      <main className="main-content position-relative border-radius-lg ">
        <Header pageCurrent="Quản lý đánh giá" />
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                    <h6 className="text-white text-capitalize ps-3">Bảng danh sách bình luận</h6>
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
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '2rem', width: '400px', maxHeight: '80vh', overflowY: 'auto' }}>
          <h2>Chỉnh sửa, trả lời bình luận</h2>
          <form>
            <TextField
              label="Room ID"
              name="roomId"
              value={editData.roomId}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="User ID"
              name="userId"
              value={editData.userId}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Rating"
              name="rating"
              type="number"
              value={editData.rating}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Comment"
              name="comment"
              value={editData.comment}
              onChange={handleChange}
              fullWidth
              margin="normal"
              multiline
              rows={4}
            />
            <TextField
              label="Note"
              name="note"
              value={editData.note}
              onChange={handleChange}
              fullWidth
              margin="normal"
              multiline
              rows={2}
            />
            <TextField
              label="Reply"
              name="reply"
              value={editData.reply}
              onChange={handleChange}
              fullWidth
              margin="normal"
              multiline
              rows={2}
            />
            <Box mt={2} display="flex" justifyContent="space-between">
              <Button variant="contained" color="primary" onClick={handleSaveEdit}>Save</Button>
              <Button variant="outlined" onClick={() => setOpenEditModal(false)}>Close</Button>
            </Box>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ManageComment;
