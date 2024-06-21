import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalDetail from "../Layout/ModalDetail";
import "../assets/css/profile.css";
import Button from "../components/Button/Button";
import TableMui from "../components/Table/TableMui";
import { getBookingById, getByIdUserAll } from "../service/api";
import moment from "moment";
import dayjs from "dayjs";

export default function HistoryBook() {
  const navigation = useNavigate();
  const columns = [
    {
      accessorKey: "id",
      key: "id",
      header: "Mã",
    },
    {
      accessorKey: "totalRoom",
      header: "Số phòng",
    },
    {
      accessorKey: "checkinDate",
      header: "Ngày checkin",
      Cell: ({ cell, row }) => (
        <div>{dayjs(row.original.checkinDate).format("DD-MM-YYYY")}</div>
      ),
    },
    {
      accessorKey: "checkoutDate",
      header: "Ngày checkout",
      Cell: ({ cell, row }) => (
        <div>{dayjs(row.original.checkoutDate).format("DD-MM-YYYY")}</div>
      ),
    },

    {
      accessorKey: "methodPay",
      header: "Thanh toán",
      Cell: ({ cell, row }) => <div>{row.original.methodPay}</div>,
    },
    {
      accessorKey: "statusBooking",
      header: "Trạng thái",
      Cell: ({ cell, row }) => (
        <div
          style={{
            backgroundColor: row.original.statusBooking === 1 ? "green" : "red",
            color: "white",
            borderRadius: "5px",
          }}
        >
          {row.original.statusBooking === 1 ? "Thành công" : "Đã hủy"}
        </div>
      ),
    },
  ];

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
        const bookingData = await getByIdUserAll(loggedInUser.id);
        setData(bookingData.bookings);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    dataBooking();
  }, []);

  const currentDate = moment();

  const upcomingBookings = data.filter(
    (booking) =>
      moment(booking.checkinDate).isAfter(currentDate) ||
      (moment(booking.checkinDate).isSameOrBefore(currentDate) &&
        moment(booking.checkoutDate).isSameOrAfter(currentDate))
  );

  const completedBookings = data.filter((booking) =>
    moment(booking.checkoutDate).isBefore(currentDate)
  );
  const handleRowClick = (row) => {
    navigation(`/bookingDetail?${row.original.id}`, { state: row.original });
    console.log("Cell clicked", row.original);
  };
  return (
    <div>
      {/* <!-- Tab items --> */}
      <div className="tabs">
        <div className="tab-item active">Tất cả</div>
        <div className="tab-item">Sắp tới</div>
        <div className="tab-item">Hoàn tất</div>
        <div className="tab-item">Đã hủy</div>
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
              columns={columns}
              data={data}
              onRowClick={handleRowClick}
            />
          </div>
        </div>
        <div className="tab-pane">
          <div className="table-scroll ">
            <TableMui
              columns={columns}
              data={upcomingBookings}
              onRowClick={handleRowClick}
            />
          </div>
        </div>
        <div className="tab-pane">
          <div className="table-scroll ">
            <TableMui
              columns={columns}
              data={completedBookings}
              onRowClick={handleRowClick}
            />
          </div>
        </div>
        <div className="tab-pane">
          <div className="table-scroll ">
            <TableMui
              columns={columns}
              data={data.filter((booking) => booking.statusBooking === 5)}
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
      </div>
    </div>
  );
}
