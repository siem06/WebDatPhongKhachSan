import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import { getAllRooms, getUpdatedRooms } from "../../service/api";
import CurrencyFormat from "react-currency-format";
import "../assets/styles.css";
import { useNavigate } from "react-router-dom";

const getRoomDescription = (type) => {
  switch (type) {
    case 1:
      return "Phòng đơn tiêu chuẩn";
    case 2:
      return "Phòng đơn cao cấp";
    case 3:
      return "Phòng đơn đặc biệt";
    case 4:
      return "Phòng tổng thống";
    case 5:
      return "Phòng đôi tiêu chuẩn";
    case 6:
      return "Phòng đôi cao cấp";
    case 7:
      return "Phòng đôi đặc biệt";
    default:
      return "Loại phòng không xác định";
  }
};

const ManageRoom = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigation = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getAllRooms();
      setData(response);
      console.log("API ", response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleCreate = () => {
    navigation("/createRoom");
  };
  const handleEdit = (row) => {
    setCurrentRow(row);
    setOpen(true);
  };

  const handleLock = async (row) => {
    try {
      const data = {
        status: 5,
      };
      await getUpdatedRooms(row.id, data);
      alert("Bạn đã ẩn phòng này thành công!");
    } catch (e) {
      console.log(e);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentRow(null);
  };

  const handleSave = async () => {
    const updatedData = {
      images: currentRow.images,
      type: currentRow.type,
      price: currentRow.price,
      status: currentRow.status,
      description: currentRow.description,
      note: currentRow.note,
    };

    setData((prevData) =>
      prevData.map((item) =>
        item.id === currentRow.id ? { ...currentRow, ...updatedData } : item
      )
    );

    setOpen(false);

    try {
      const updatedRoom = await getUpdatedRooms(currentRow.id, updatedData);
      console.log("API response", updatedRoom);
    } catch (error) {
      console.error("Error saving room:", error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  console.log("d", currentItems);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="main-content position-relative border-radius-lg">
      <Header pageCurrent="Quản lý phòng" />
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12">
            <div className="card my-4">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                  <h6 className="text-white text-capitalize ps-3">
                    Bảng danh sách phòng
                  </h6>
                </div>
              </div>
              <div className="card-body px-0 pb-2">
                <div
                  className="justify-content-start mb-3"
                  style={{ padding: "0 1.5rem" }}
                >
                  <button className="btn btn-primary" onClick={handleCreate}>
                    Thêm phòng
                  </button>
                </div>
                <div className="table-responsive p-0">
                  <table className="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Id Phòng
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Hình ảnh
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Loại phòng
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Giá phòng
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Trạng thái
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Hành động
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>
                            <img
                              src={item.images[0].img}
                              alt="Room"
                              style={{
                                width: "100px",
                                height: "auto",
                                marginRight: "5px",
                              }}
                            />
                          </td>
                          <td>{getRoomDescription(item.type)}</td>
                          <td>
                            <CurrencyFormat
                              value={item.price}
                              thousandSeparator={true}
                              suffix={" VND/Ngày"}
                              decimalScale={2}
                              displayType={"text"}
                              className="text-black customInput"
                              style={{
                                border: "none",
                              }}
                            />
                          </td>
                          <td>{item.status === 1 ? "Hiển thị" : "Ẩn"}</td>
                          <td>
                            <div style={{ display: "flex", gap: "0.5rem" }}>
                              <button
                                onClick={() => handleEdit(item)}
                                className="btn btn-secondary"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleLock(item)}
                                className="btn btn-danger"
                              >
                                Lock
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                      <button
                        key={index}
                        onClick={() => handleClick(index + 1)}
                        className={`pagination-btn ${
                          index + 1 === currentPage ? "active" : ""
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <h2>Edit Room</h2>
            {currentRow && (
              <form>
                <label>
                  Hình ảnh:
                  <input
                    type="text"
                    value={currentRow.images[0]?.img || ""}
                    onChange={(e) =>
                      setCurrentRow({
                        ...currentRow,
                        images: [
                          { ...currentRow.images[0], img: e.target.value },
                        ],
                      })
                    }
                  />
                </label>
                <label>
                  Kiểu phòng:
                  <input
                    type="text"
                    value={currentRow.type}
                    onChange={(e) =>
                      setCurrentRow({ ...currentRow, type: e.target.value })
                    }
                  />
                </label>
                <label>
                  Giá Phòng:
                  <input
                    type="text"
                    value={currentRow.price}
                    onChange={(e) =>
                      setCurrentRow({ ...currentRow, price: e.target.value })
                    }
                  />
                </label>
                <label>
                  Trạng thái:
                  <input
                    type="text"
                    value={currentRow.status}
                    onChange={(e) =>
                      setCurrentRow({ ...currentRow, status: e.target.value })
                    }
                  />
                </label>
                <label>
                  Mô tả:
                  <input
                    type="text"
                    value={currentRow.description}
                    onChange={(e) =>
                      setCurrentRow({
                        ...currentRow,
                        description: e.target.value,
                      })
                    }
                  />
                </label>
                <label>
                  Lưu ý:
                  <input
                    type="text"
                    value={currentRow.note}
                    onChange={(e) =>
                      setCurrentRow({ ...currentRow, note: e.target.value })
                    }
                  />
                </label>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "1rem",
                  }}
                >
                  <button
                    type="button"
                    onClick={handleClose}
                    style={{ marginRight: "1rem" }}
                  >
                    Cancel
                  </button>
                  <button type="button" onClick={handleSave}>
                    Save
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default ManageRoom;
