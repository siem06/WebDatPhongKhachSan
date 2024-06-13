import { TextField } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { createBlogCate, uploadImg } from "../../service/api";
import Button from "../Button/Button";
import UploadImg from "../Form/UploadImg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  justifyContent: "center",
};

export default function Table({ columns, data, type, model }) {
  const customStyles = {
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "16px",
      },
    },
  };

  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [records, setRecords] = useState(data);
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (model) {
      // Initialize topic and content if model is provided for edit
      setTopic(model.topic || "");
      setContent(model.content || "");
      setOpen(true); // Open the modal for edit
    }
  }, [model]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleFilter(event) {
    const inputValue = event?.target?.value?.toLowerCase() || "";
    const newData = data.filter((row) => {
      return row.name.toLowerCase().includes(inputValue);
    });
    setRecords(newData);
  }
  const handleTopic = (event) => {
    setTopic(event.target.value);
  };

  const handleContent = (event) => {
    setContent(event.target.value);
  };

  const handleFileChange = (file) => {
    setSelectedFile(file);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("avatar", selectedFile);
      const img = await uploadImg(formData);
      await createBlogCate(topic, content, img.thumbnailLink, type);
      setOpen(false);
      const updatedRecords = [...records, { topic, content, img }];
      setRecords(updatedRecords);
    } catch (error) {
      console.error("Error submitting data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <Button onClick={handleOpen} title="Tạo" />
        </div>
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={handleFilter}
          />
        </div>
      </div>

      <DataTable
        columns={columns}
        data={records}
        selectableRows
        fixedHeader
        pagination
        customStyles={customStyles}
        selectableRowsHighlight
        highlightOnHover
        responsive
        pointerOnHover
      />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography variant="h6" component="h2">
              {model
                ? "Chỉnh sửa bài đăng"
                : type === "1"
                ? "Tạo Danh Mục Blog mới"
                : "Tạo bài báo mới"}
            </Typography>
            <TextField
              id="outlined-multiline-flexible"
              label="Chủ đề"
              value={topic}
              onChange={handleTopic}
              multiline
              maxRows={4}
              className="m-2"
              sx={{ width: "100%" }}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Nội dung"
              value={content}
              onChange={handleContent}
              multiline
              maxRows={4}
              className="m-2"
              sx={{ width: "100%" }}
            />
            <UploadImg title="Hình ảnh" onChange={handleFileChange} />
            <div className="d-flex justify-content-center">
              <Button title="ADD" className="m-1" onClick={handleSubmit} />
              <Button title="Cancel" className="m-1" onClick={handleCancel} />
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
