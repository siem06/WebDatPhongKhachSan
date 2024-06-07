import React, { useEffect, useState } from "react";
import Button from "../components/Button/Button.js";
import {
  getLikeRoom,
  removeRoomLike,
  removeRoomLikeAll,
} from "../service/api.js";
export default function LikeRoom() {
  const [rooms, setRooms] = useState([]);
  const [heartStates, setHeartStates] = useState({});
  const getLike = async () => {
    try {
      const loggedInUser = JSON.parse(localStorage.getItem("user"));
      const userId = loggedInUser.user.id;
      const response = await getLikeRoom(userId);
      setRooms(response);
      const initialHeartStates = {};
      response.forEach((room) => {
        initialHeartStates[room.id] = true;
      });
      setHeartStates(initialHeartStates);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getLike();
  }, []);

  const handleRemoveFavorite = async (idAccount, idRoom) => {
    try {
      await removeRoomLike(idAccount, idRoom);
      setHeartStates((prevState) => ({ ...prevState, [idRoom]: false }));
      getLike();
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  };
  const handleHeartClick = async (idRoom) => {
    const isFavorite = heartStates[idRoom];
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    try {
      if (isFavorite) {
        await handleRemoveFavorite(loggedInUser.user.id, idRoom);
      }
      setHeartStates((prevState) => ({
        ...prevState,
        [idRoom]: !prevState[idRoom],
      }));
    } catch (err) {
      console.error(err);
    }
  };
  const handleDeleteAll = async (idRoom) => {
    const isFavorite = heartStates[idRoom];
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    try {
      await removeRoomLikeAll();
      setHeartStates({});
      getLike();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className="card border bg-transparent">
        <div className="card-header bg-transparent border-bottom">
          <h4 className="card-header-title">DANH SÁCH PHÒNG YÊU THÍCH</h4>
        </div>

        <div className="card-body vstack gap-4 ">
          <div className="d-flex justify-content-end">
            <div className="col-3 text-white">
              <Button
                title="Xóa tất cả"
                className=" mb-0 text-danger btn-delete"
                onClick={handleDeleteAll}
              />
            </div>
          </div>
          {rooms !== null ? (
            rooms.map((room, index) => (
              <div className="card shadow p-2" key={index}>
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src={room.img}
                      className="card-img rounded-2"
                      alt="Card image"
                      style={{ height: "160px" }}
                    />
                    <div
                      className="position-absolute end-0 top-0 mt-2 me-2"
                      onClick={() => handleHeartClick(room.id)}
                      style={{ cursor: "pointer" }}
                      title="Lưu yêu thích"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                    >
                      <i
                        className={`fa${
                          heartStates[room.id] ? "s" : "r"
                        } fa-heart text-danger`}
                        style={{ fontSize: "24px" }}
                      ></i>
                    </div>
                  </div>

                  <div className="col-md-9">
                    <div className="card-body py-md-2 d-flex flex-column h-100">
                      <div className="d-flex justify-content-between align-items-center">
                        <ul className="list-inline small mb-0">
                          <li className="list-inline-item me-0">
                            <i className="fa-solid fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="fa-solid fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="fa-solid fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="fa-solid fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="fa-solid fa-star-half-alt text-warning"></i>
                          </li>
                        </ul>
                      </div>

                      <h5 className="card-title mb-1">
                        <a href="hotel-detail.html">{room.name}</a>
                      </h5>
                      <small>
                        <i className="bi bi-geo-alt me-2"></i>31J W Spark
                        Street, California - 24578
                      </small>

                      <div className="d-sm-flex justify-content-sm-between align-items-center">
                        <div className="d-flex align-items-center">
                          <h5 className="fw-bold mb-0 me-1">{room.price}$</h5>
                          <span className="mb-0 me-2">/day</span>
                        </div>
                        <div className=" mt-sm-0">
                          <a
                            href="hotel-detail.html"
                            className="btn btn-sm btn-dark w-100 mb-0"
                          >
                            View hotel
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>dd</p>
          )}
        </div>
      </div>
    </>
  );
}
