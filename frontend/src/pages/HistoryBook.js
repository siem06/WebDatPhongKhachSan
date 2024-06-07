import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalDetail from "../Layout/ModalDetail";
import "../assets/css/profile.css";
import Button from "../components/Button/Button";
import TableMui from "../components/Table/TableMui";
import { getBookingById } from "../service/api";

export default function HistoryBook() {
  const navigation = useNavigate();

  useEffect(() => {
    const tabs = document.querySelectorAll(".tab-item");
    const panes = document.querySelectorAll(".tab-pane");

    const tabActive = document.querySelector(".tab-item.active");
    const line = document.querySelector(".tabs .line");

    if (line && tabActive) {
      line.style.left = tabActive.offsetLeft + "px";
      line.style.width = tabActive.offsetWidth + "px";
    }

    tabs.forEach((tab, index) => {
      const pane = panes[index];

      tab.onclick = function () {
        document.querySelector(".tab-item.active").classList.remove("active");
        document.querySelector(".tab-pane.active").classList.remove("active");

        if (line) {
          line.style.left = this.offsetLeft + "px";
          line.style.width = this.offsetWidth + "px";
        }

        this.classList.add("active");
        pane.classList.add("active");
      };
    });
  }, []);
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  const [modalShow, setModalShow] = useState(false);
  const [selectedCellValue, setSelectedCellValue] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataBooking = async () => {
      try {
        const bookingData = await getBookingById(loggedInUser.user.id);
        setData(bookingData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    dataBooking();
  }, []);
  return (
    <div>
      {/* <!-- Tab items --> */}
      <div className="tabs">
        <div className="tab-item active">Tất cả</div>
        <div className="tab-item">Giao dịch thành công</div>
        {/* <div className="tab-item">Giao dịch thất bại</div> */}
        <div className="tab-item">Giao dịch đã hủy</div>
        <div className="line"></div>
      </div>

      {/* <!-- Tab content --> */}
      <div className="tab-content">
        <div className="tab-pane active">
          <div className="row">
            <div className="col-md-9">
              <h2>Lịch sử đặt phòng</h2>
              <p> Theo dõi và quản lý quá trình lịch sử đặt phòng của bạn.</p>
            </div>
            <div className="col-md-3">
              <Button
                title="Đặt ngay"
                className="text-white"
                onClick={() => navigation(`/room`)}
              />
            </div>
          </div>
          <div className="table-scroll ">
            <TableMui
              data={data}
              setModalShow={setModalShow}
              setSelectedCellValue={setSelectedCellValue}
            />
          </div>
        </div>
        <div className="tab-pane">
          <div className="table-scroll ">
            {/* <Table responsive="sm" striped bordered hover>
              <thead className="fixed-header">
                <tr>
                  <th>#</th>
                  <th>Mã đặt phòng</th>
                  <th>Số phòng</th>
                  <th>Thời gian</th>
                  <th>Tổng tiền</th>
                  <th>Trạng thái</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {bookRoom
                  .filter((room) => room.status === "Thành công")
                  .map((room, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{room.id}</td>
                      <td>{room.numberRoom}</td>
                      <td>{room.date}</td>
                      <td>{room.total}</td>
                      <td>{room.status}</td>
                      <td>{room.action}</td>
                    </tr>
                  ))}
              </tbody>
            </Table> */}
            <TableMui
              data={data.filter((booking) => booking.statusBooking === 1)}
              setModalShow={setModalShow}
              setSelectedCellValue={setSelectedCellValue}
            />
          </div>
        </div>
        <div className="tab-pane">
          <div className="table-scroll ">
            <TableMui
              data={data.filter((booking) => booking.statusBooking === 0)}
              setModalShow={setModalShow}
              setSelectedCellValue={setSelectedCellValue}
            />
          </div>
        </div>
        <ModalDetail
          show={modalShow}
          bookDetail={true}
          btnclose="true"
          header="Chi tiết đặt phòng"
          title="Thông tin đặt phòng"
          data={selectedCellValue}
          onHide={() => setModalShow(false)}
        />
        {/* <div className="tab-pane">
          <div className="table-scroll ">
            {/* <Table responsive="sm" striped bordered hover>
              <thead className="fixed-header">
                <tr>
                  <th>#</th>
                  <th>Mã đặt phòng</th>
                  <th>Số phòng</th>
                  <th>Thời gian</th>
                  <th>Tổng tiền</th>
                  <th>Trạng thái</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {bookRoom
                  .filter((room) => room.status === "Hết hạn")
                  .map((room, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{room.id}</td>
                      <td>{room.numberRoom}</td>
                      <td>{room.date}</td>
                      <td>{room.total}</td>
                      <td>{room.status}</td>
                      <td>{room.action}</td>
                    </tr>
                  ))}
              </tbody>
            </Table> 
          </div>
        </div> */}
      </div>
    </div>
  );
}
