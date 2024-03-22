import React, { useEffect } from "react";
import "../assets/css/profile.css";
import Table from "react-bootstrap/Table";
import Button from "../components/Button/Button";
import ModalDetail from "../Layout/ModalDetail";
export default function HistoryBook() {
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
  const bookRoom = [
    {
      id: "#3drc",
      numberRoom: "2",
      date: "1/1/2023 => 3/1/2023",
      total: "1.200.000",
      status: "Thành công",
      action: "Xem chi tiết",
    },
    {
      id: "#4drc",
      numberRoom: "2",
      date: "1/1/2023 => 3/1/2023",
      total: "1.200.000",
      status: "Thất bại",
      action: "Xem chi tiết",
    },
    {
      id: "#5drc",
      numberRoom: "2",
      date: "1/1/2023 => 3/1/2023",
      total: "1.200.000",
      status: "Thất bại",
      action: "Xem chi tiết",
    },
    {
      id: "#6drc",
      numberRoom: "2",
      date: "1/1/2023 => 3/1/2023",
      total: "1.200.000",
      status: "Thất bại",
      action: "Xem chi tiết",
    },
    {
      id: "#7drc",
      numberRoom: "2",
      date: "1/1/2023 => 3/1/2023",
      total: "1.200.000",
      status: "Thành công",
      action: "Xem chi tiết",
    },
    {
      id: "#8drc",
      numberRoom: "2",
      date: "1/1/2023 => 3/1/2023",
      total: "1.200.000",
      status: "Thành công",
      action: "Xem chi tiết",
    },
    {
      id: "#9drc",
      numberRoom: "2",
      date: "1/1/2023 => 3/1/2023",
      total: "1.200.000",
      status: "Hết hạn",
      action: "Xem chi tiết",
    },
  ];
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      {/* <!-- Tab items --> */}
      <div className="tabs">
        <div className="tab-item active">
          Tất cả
        </div>
        <div className="tab-item">
          Giao dịch thành công
        </div>
        <div className="tab-item">
          Giao dịch thất bại
        </div>
        <div className="tab-item">
          Giao dịch đã hủy
        </div>
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
              <Button title="Đặt ngay" />
            </div>
          </div>
          <div className="table-scroll ">
            <Table responsive="sm" striped bordered hover>
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
                {bookRoom.map((room, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{room.id}</td>
                    <td>{room.numberRoom}</td>
                    <td>{room.date}</td>
                    <td>{room.total}</td>
                    <td>{room.status}</td>
                    <td className=" text-center lnr lnr-select"onClick={() => setModalShow(true)}></td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <ModalDetail
              show={modalShow}
              bookDetail={true}
              btnClose
              header="Chi tiết thông tin đặt phòng"
              title="Thông tin đặt phòng"
              onHide={() => setModalShow(false)}
            />
          </div>
        </div>
        <div className="tab-pane">
          <div className="table-scroll ">
            <Table responsive="sm" striped bordered hover>
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
            </Table>
          </div>
        </div>
        <div className="tab-pane">
          <div className="table-scroll ">
            <Table responsive="sm" striped bordered hover>
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
                  .filter((room) => room.status === "Thất bại")
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
        </div>
        <div className="tab-pane">
          <div className="table-scroll ">
            <Table responsive="sm" striped bordered hover>
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
        </div>
      </div>
    </div>
  );
}
