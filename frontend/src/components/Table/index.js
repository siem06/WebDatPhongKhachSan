import { TextField } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { createBlogCate, uploadImg } from "../../service/api";
import Button from "../Button/Button";
import UploadImg from "../Form/UploadImg";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 600,
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
  // const [modalShow, setModalShow] = useState(false);
  const [records, setRecords] = useState(data);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  function handleFilter(event) {
    const newData = data.filter((row) => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase());
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

  const [selectedFile, setSelectedFile] = useState(null);
  const handleCancel = async (event) => {
    event.preventDefault();
    try {
      setOpen(false);
    } catch (e) {
      console.log("lỗi", e);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Hiển thị Loading khi bắt đầu xử lý
    try {
      const formData = new FormData();
      formData.append("avatar", selectedFile);
      const img = await uploadImg(formData);
      await createBlogCate(topic, content, img.thumbnailLink, type);
      setOpen(false);
      const updatedRecords = [...records, { topic, content, img }];
      setRecords(updatedRecords);
      setLoading(false);
      // navigation("/login");
      // console.log(email, otp);
    } catch (e) {
      setLoading(false); // Ẩn Loading sau khi xử lý hoàn thành
      console.log("lỗi", e);
      // setError(e.response?.data?.message);
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <div>
            {/* <Button </Button> */}
            <Button onClick={handleOpen} title="Tạo" />
            {model && <Modal />}
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <Typography
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    {type === "1" ? "Tạo Danh Mục Blog mới" : "Tạo bài báo mới"}
                  </Typography>
                  <p>---------------------</p>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
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
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Nội dung"
                      value={type}
                      // onChange={handleContent}
                      multiline
                      maxRows={4}
                      className="m-2"
                      sx={{ width: "100%", display: "none" }}
                    />
                    <UploadImg title="Hình ảnh" onChange={handleFileChange} />
                  </Typography>
                  <div className="d-flex  justify-content-center">
                    <Button
                      title="ADD"
                      className="m-1"
                      onClick={handleSubmit}
                    />
                    <Button
                      title="Cancel"
                      className="m-1"
                      onClick={handleCancel}
                    />
                  </div>
                </Box>
              </Fade>
            </Modal>
          </div>
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
        // subHeader
        // subHeaderAlign="right"
        // onRowClicked={() => setModalShow(true)}
        pointerOnHover
      />

      {/* <ModalDetail
        show={modalShow}
        bookDetail={true}
        btnClose
        header="Chi tiết thông tin đặt phòng"
        title="Thông tin đặt phòng"
        onHide={() => setModalShow(false)}
      /> */}
    </div>
  );
}
