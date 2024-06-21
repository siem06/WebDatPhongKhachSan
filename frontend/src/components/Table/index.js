import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { createBlogCate, updateBlog, uploadImg } from "../../service/api"; // Assuming you have an update API function
import Button from "../Button/Button";

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
  const [status, setStatus] = useState("");
  const [initialData, setInitialData] = useState({});

  const [loading, setLoading] = useState(false);
  const [records, setRecords] = useState(data);
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (model) {
      const { topic, content, status, img } = model;
      setInitialData({ topic, content, status, img });
      setTopic(topic || "");
      setContent(content || "");
      setStatus(status || 0);
      setSelectedFile(null);
      setOpen(true);
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

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      let imgLink = initialData.img;
      if (selectedFile) {
        const formData = new FormData();
        formData.append("avatar", selectedFile);
        const img = await uploadImg(formData);
        imgLink = img.thumbnailLink;
      }

      const updatedFields = {};
      if (topic !== initialData.topic) updatedFields.topic = topic;
      if (content !== initialData.content) updatedFields.content = content;
      if (status !== initialData.status) updatedFields.status = status;
      if (imgLink !== initialData.img) updatedFields.img = imgLink;

      if (model) {
        // Update existing record
        await updateBlog(model.id, updatedFields);
        const updatedRecords = records.map((record) =>
          record.id === model.id ? { ...record, ...updatedFields } : record
        );
        setRecords(updatedRecords);
      } else {
        // Create new record
        await createBlogCate(topic, content, imgLink, type);
        const newRecord = { topic, content, img: imgLink, status };
        setRecords([...records, newRecord]);
      }

      setOpen(false);
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
            <FormControl sx={{ width: "100%" }} className="m-2">
              <InputLabel id="status-select-label">Trạng thái</InputLabel>
              <Select
                id="status-select"
                labelId="status-select-label"
                value={status}
                onChange={handleStatus}
                label="Trạng thái"
              >
                <MenuItem value={0}>Ẩn</MenuItem>
                <MenuItem value={1}>Hiện</MenuItem>
              </Select>
            </FormControl>

            <div className="d-flex m-2">
              <span className="avatar avatar-xl me-4">
                <img
                  id="uploadfile-1-preview"
                  className="avatar-img border-white custom-img"
                  src={
                    selectedFile
                      ? URL.createObjectURL(selectedFile)
                      : initialData.img
                  }
                  alt="avatar"
                />
              </span>
              <div className="d-flex">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  id="fileInput"
                />
                <button
                  className="btn-changAva text-capitalize"
                  onClick={() => document.getElementById("fileInput").click()}
                >
                  Đổi ảnh
                </button>
              </div>
            </div>

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
