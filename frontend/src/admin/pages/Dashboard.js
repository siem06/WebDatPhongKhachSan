import Header from "../layout/Header";
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { useNavigate } from "react-router-dom";
import { getAll, getAllBooking, getAllRooms } from "../../service/api";
import CurrencyFormat from "react-currency-format";
export default function Dashboard() {
  const chartBarsRef = useRef(null);
  const chartLineRef = useRef(null);
  const navigate = useNavigate();
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalRooms, setTotalRooms] = useState(0);
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalBooking, setTotalBooking] = useState(0);
  const chartTasksRef = useRef(null);
  
  useEffect(() => {
    // if (!loggedInUser || loggedInUser.role !== 1) {
    //   navigate("/login");
    //   return;
    // }
    // Hủy biểu đồ cũ trước khi tạo biểu đồ mới
    fetchTotalRevenue();
    fetchTotalRooms();
    fetchTotalUsers();
    fetchTotalBooking();
  }, [loggedInUser, navigate]);
  const fetchTotalRevenue = async () => {
    try {
      const data = await getAllBooking();
      console.log("test price", data);
      // Calculate total revenue from fetched data
      let revenue = 0;
      data.forEach((booking) => {
        revenue += parseFloat(booking.totalPrice); 
        console.log("test price", revenue);
      });
      setTotalRevenue(revenue);
    } catch (error) {
      console.error("Error fetching total revenue:", error);
    }
  };
  const fetchTotalRooms = async () => {
    try {
      const roomsData = await getAllRooms();
      setTotalRooms(roomsData.length); // Set total rooms count
    } catch (error) {
      console.error("Error fetching total rooms:", error);
    }
  };
  const fetchTotalUsers = async () => {
    try {
      const usersData = await getAll();
      setTotalUsers(usersData.length); // Set total users count
    } catch (error) {
      console.error("Error fetching total users:", error);
    }
  };
  const fetchTotalBooking = async () => {
    try {
      const bookingData = await getAllBooking();
      setTotalBooking(bookingData.length); // Set total users count
    } catch (error) {
      console.error("Error fetching total users:", error);
    }
  };
  useEffect(() => {
    // Create charts once data is fetched
    if (totalRevenue !== 0) {
      createBarChart();
    }
    if (totalUsers !== 0) {
      createLineChart();
    }
    if (totalBooking !== 0) {
      createTasksChart();
    }
  }, [totalRevenue, totalUsers, totalBooking]);
  const createBarChart = () => {
    if (chartBarsRef.current) {
      // Destroy existing chart if it exists
      if (chartBarsRef.current.chart) {
        chartBarsRef.current.chart.destroy();
      }
      const ctx = chartBarsRef.current.getContext("2d");
      chartBarsRef.current.chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [
            {
              label: "Danh thu",
              data: [2000, 3000, 5000, 4000, 6000, 3500, 7000],
              backgroundColor: "#5E72E4",
            },
          ],
        },
      });
    }
  };

  const createLineChart = () => {
    if (chartLineRef.current) {
      // Destroy existing chart if it exists
      if (chartLineRef.current.chart) {
        chartLineRef.current.chart.destroy();
      }
      const ctx = chartLineRef.current.getContext("2d");
      chartLineRef.current.chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          datasets: [
            {
              label: "Số lượng người dùng",
              data: [10, 15, 20, 18, 25],
              borderColor: "#2DCE89",
              fill: false,
            },
          ],
        },
      });
    }
  };


  const createTasksChart = () => {
    if (chartTasksRef.current) {
      // Destroy existing chart if it exists
      if (chartTasksRef.current.chart) {
        chartTasksRef.current.chart.destroy();
      }
      const ctx = chartTasksRef.current.getContext("2d");
      chartTasksRef.current.chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"],
          datasets: [
            {
              label: "Số lượng đặt phòng",
              data: [5, 7, 3, 10, 6],
              backgroundColor: "#172B4D",
            },
          ],
        },
      });
    }
  };
  return (
    <>
      <main className="main-content position-relative  border-radius-lg ">
        <Header />

        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-header p-3 pt-2">
                  <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                    <i className="material-icons opacity-10">weekend</i>
                  </div>
                  <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize">Doanh thu</p>
                    <h4 className="mb-0">
                    <CurrencyFormat
                        value={totalRevenue}
                        thousandSeparator={true}
                        suffix={" VNĐ"}
                        decimalScale={2}
                        displayType={"text"}
                        className="text-dark customInput"
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                        }}
                      />
                    </h4>
                  </div>
                </div>
                <hr className="dark horizontal my-0" />
                <div className="card-footer p-3">
                  {/* <p className="mb-0">
                    <span className="text-success text-sm font-weight-bolder">
                      +55%
                    </span>
                    than lask week
                  </p> */}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-header p-3 pt-2">
                  <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                    <i className="material-icons opacity-10">weekend</i>
                  </div>
                  <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize">Tổng số lượng đặt phòng</p>
                    <h4 className="mb-0">
                   {totalBooking}
                    </h4>
                  </div>
                </div>
                <hr className="dark horizontal my-0" />
                <div className="card-footer p-3">
                  {/* <p className="mb-0">
                    <span className="text-success text-sm font-weight-bolder">
                      +55%
                    </span>
                    than lask week
                  </p> */}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-header p-3 pt-2">
                  <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                    <i className="material-icons opacity-10">person</i>
                  </div>
                  <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize">
                      Người dùng 
                    </p>
                    <h4 className="mb-0">{totalUsers}</h4>
                  </div>
                </div>
                <hr className="dark horizontal my-0"/>
                <div className="card-footer p-3">
                  {/* <p className="mb-0">
                    <span className="text-success text-sm font-weight-bolder">
                      +3%
                    </span>
                    than lask month
                  </p> */}
                </div>
              </div>
            </div>
            
            <div className="col-xl-3 col-sm-6">
              <div className="card">
                <div className="card-header p-3 pt-2">
                  <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                    <i className="material-icons opacity-10">weekend</i>
                  </div>
                  <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize">Phòng</p>
                    <h4 className="mb-0">{totalRooms}</h4>
                  </div>
                </div>
                <hr className="dark horizontal my-0"/>
                <div className="card-footer p-3">
                  {/* <p className="mb-0">
                    <span className="text-success text-sm font-weight-bolder">
                      +5%
                    </span>
                    than yesterday
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-4 col-md-6 mt-4 mb-4">
              <div className="card z-index-2 ">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                    <div className="chart">
                      <canvas
                      ref={chartBarsRef}
                        id="chart-bars"
                        className="chart-canvas"
                        height="170"
                      ></canvas>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h6 className="mb-0 ">Bán hàng hàng ngày</h6>
                  {/* <p className="text-sm ">Last Campaign Performance</p> */}
                  {/* <hr className="dark horizontal"> */}
                  <div className="d-flex ">
                    <i className="material-icons text-sm my-auto me-1">
                      schedule
                    </i>
                    {/* <p className="mb-0 text-sm"> campaign sent 2 days ago </p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 mb-4">
              <div className="card z-index-2  ">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                  <div className="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                    <div className="chart">
                      <canvas
                        ref={chartLineRef}
                        id="chart-line"
                        className="chart-canvas"
                        height="170"
                      ></canvas>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h6 className="mb-0 "> Đăng ký hàng ngày </h6>
                  <p className="text-sm ">
                    {/* (<span className="font-weight-bolder">+15%</span>) increase */}
                    {/* in today sales. */}
                  </p>
                  {/* <hr className="dark horizontal"> */}
                  <div className="d-flex ">
                    <i className="material-icons text-sm my-auto me-1">
                      schedule
                    </i>
                    {/* <p className="mb-0 text-sm"> updated 4 min ago </p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mb-3">
              <div className="card z-index-2 ">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                  <div className="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
                    <div className="chart">
                      <canvas
                        ref={chartTasksRef}
                        id="chart-line-tasks"
                        className="chart-canvas"
                        height="170"
                      ></canvas>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h6 className="mb-0 ">Đặt phòng hàng ngày</h6>
                  {/* <p className="text-sm ">Last Campaign Performance</p> */}
                  {/* <hr className="dark horizontal"> */}
                  <div className="d-flex ">
                    <i className="material-icons text-sm my-auto me-1">
                      schedule
                    </i>
                    {/* <p className="mb-0 text-sm">just updated</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
