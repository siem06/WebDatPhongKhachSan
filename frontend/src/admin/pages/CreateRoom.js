import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../layout/Header";
import { createRoom } from "../../service/api"; // Đây là service/API method để tạo phòng
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";

export default function CreateRoom() {
  const navigation = useNavigate();

  const [roomData, setRoomData] = useState({
    images: [],
    type: "",
    price: "",
    status: 1,
    description: "",
    note: "",
  });

  const [previewImages, setPreviewImages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomData({ ...roomData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const newPreviewImages = [...previewImages, reader.result];
      setPreviewImages(newPreviewImages);
      // Update images array by creating a new array with the current images and the new one
      setRoomData((prevRoomData) => ({
        ...prevRoomData,
        images: [...prevRoomData.images, { img: reader.result }],
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newRoom = await createRoom(roomData);
      console.log("Room created", newRoom);

      alert("Đã thêm phòng thành công!");
      navigation("/manageroom");
      setRoomData({
        images: [],
        type: "",
        price: "",
        status: 1,
        description: "",
        note: "",
      });

      setPreviewImages([]);
    } catch (error) {
      console.error("Lỗi khi tạo phòng:", error);
      alert("Không thể thêm phòng. Vui lòng thử lại.");
    }
  };

  return (
    <main className="main-content position-relative border-radius-lg">
      <Header pageCurrent="Thêm phòng" />
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12">
            <div className="card my-4">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                  <h6 className="text-white text-capitalize ps-3">
                    Thêm phòng
                  </h6>
                </div>
              </div>
              <div className="card-body px-0 pb-2">
                <form onSubmit={handleSubmit} style={{ padding: "0 1.5rem" }}>
                  <div className="col-12 mb-3">
                    <label className="form-label">Cập nhật ảnh của bạn</label>
                    <div className="d-flex align-items-center">
                      <span
                        className="position-relative d-flex"
                        title="Thay đổi ảnh"
                      >
                        <span className="avatar avatar-xl me-4">
                          {previewImages.map((preview, index) => (
                            <img
                              key={index}
                              className="avatar-img me-2"
                              src={preview}
                              alt={`Preview ${index}`}
                            />
                          ))}
                        </span>
                        <div className="d-flex justify-content-between align-items-center">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            id="fileInput"
                          />
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label>Loại phòng</label>
                    <input
                      type="text"
                      className="form-control"
                      name="type"
                      value={roomData.type}
                      onChange={handleChange}
                      placeholder="Loại phòng"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Giá phòng</label>
                    <CurrencyFormat
                      className="form-control"
                      name="price"
                      value={roomData.price}
                      onValueChange={(values) => {
                        const { value } = values;
                        setRoomData({ ...roomData, price: value });
                      }}
                      thousandSeparator={true}
                      suffix={" VND/Ngày"}
                      decimalScale={2}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Trạng thái</label>
                    <select
                      className="form-control"
                      name="status"
                      value={roomData.status}
                      onChange={handleChange}
                      required
                    >
                      <option value={1}>Hiển thị</option>
                      <option value={0}>Ẩn</option>
                    </select>
                  </div>
                  <div className="form-group mb-3">
                    <label>Mô tả</label>
                    <textarea
                      className="form-control"
                      name="description"
                      value={roomData.description}
                      onChange={handleChange}
                      placeholder="Mô tả"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Lưu ý</label>
                    <textarea
                      className="form-control"
                      name="note"
                      value={roomData.note}
                      onChange={handleChange}
                      placeholder="Lưu ý"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Tạo phòng
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
