import React, { useEffect } from "react";
import Header from "../layout/Header";
import Table from "../components/Table";
import DeleteIcon from "@mui/icons-material/Delete";
export default function ManagerGeneral() {
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

  const columns = [
    {
      name: "Tiêu đề",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Danh mục",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Trạng thái",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <button className="btn w-30 text-capitalize d-flex justify-content-center ">
          <DeleteIcon />
        </button>
      ),
    },
  ];

  const dataBlog = [
    {
      id: 1,
      name: "Yem",
      category: "hongsiem@your",
      state: "Hiển thị",
    },
    {
      id: 2,
      name: "Mya",
      category: "hnaiem@your",
      state: "Ẩn",
    },
    {
      id: 3,
      name: "siêm",
      category: "lymh@your",
      state: "Ẩn",
    },
    {
      id: 4,
      name: "Yem",
      category: "hongsiem@your",
      state: "Hiển thị",
    },
    {
      id: 5,
      name: "Mya",
      category: "hnaiem@your",
      state: "Ẩn",
    },
    {
      id: 6,
      name: "siêm",
      category: "lymh@your",
      state: "Ẩn",
    },
    {
      id: 7,
      name: "Yem",
      category: "hongsiem@your",
      state: "Hiển thị",
    },

    {
      id: 8,
      name: "siêm",
      category: "lymh@your",
      state: "Ẩn",
    },
    {
      id: 9,
      name: "Yem",
      category: "hongsiem@your",
      state: "Hiển thị",
    },
    {
      id: 10,
      name: "Mya",
      category: "hnaiem@your",state: "Ẩn",
    },
    {
      id: 11,
      name: "siêm",
      category: "lymh@your",state: "Ẩn",
    },
    {
      id: 12,
      name: "Yem",
      category: "hongsiem@your",
      state: "Hiển thị",
    },
    {
      id: 13,
      name: "Mya",
      category: "hnaiem@your",state: "Ẩn",
    },
    {
      id: 14,
      name: "siêm",
      category: "lymh@your",state: "Ẩn",
    },
    {
      id: 15,
      name: "Yem",
      category: "hongsiem@your",
      state: "Hiển thị",
    },
    {
      id: 16,
      name: "Mya",
      category: "hnaiem@your",state: "Ẩn",
    },
    {
      id: 17,
      name: "siêm",
      category: "lymh@your",state: "Ẩn",
    },
    {
      id: 18,
      name: "Yem",
      category: "hongsiem@your",
      state: "Hiển thị",
    },
    {
      id: 19,
      name: "Mya",
      category: "hnaiem@your",state: "Ẩn",
    },
    {
      id: 20,
      name: "siêm",
      category: "lymh@your",state: "Ẩn",
    },
    {
      id: 11,
      name: "Yem",
      category: "hongsiem@your",
      state: "Hiển thị",
    },
    {
      id: 22,
      name: "Mya",
      category: "hnaiem@your",state: "Ẩn",
    },
    {
      id: 23,
      name: "siêm",
      category: "lymh@your",state: "Ẩn",
    },
    {
      id: 24,
      name: "Yem",
      category: "hongsiem@your",
      state: "Hiển thị",
    },
    {
      id: 25,
      name: "Mya",
      category: "hnaiem@your",state: "Ẩn",
    },
    {
      id: 26,
      name: "aa",
      category: "lymh@your",state: "Ẩn",
    },
  ];
 const columnService = [
    {
      name: "Dịch vụ",
      selector: (row) => row.name,
      sortable: true,
    },
  
    {
      name: "Trạng thái",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <button className="btn w-30 text-capitalize d-flex justify-content-center ">
          <DeleteIcon />
        </button>
      ),
    },
  ];
  const dataService = [
    {
      id: 1,
      name: "Dịch vụ",
      state: "Hiển thị",
    },
    {
      id: 2,
      name: "Phương tiện di chuyển",
      state: "Ẩn",
    },
    {
      id: 3,
      name: "Vệ sinh",
      state: "Ẩn",
    },
    {
      id: 4,
      name: "Tập gym",
      state: "Hiển thị",
    },
    {
      id: 5,
      name: "Hồ bơi",
      state: "Ẩn",
    },
    {
      id: 6,
      name: "Thăm quan",
      state: "Ẩn",
    },
   
   
  ];
  return (
    <main className="main-content position-relative border-radius-lg ">
      <Header pageCurrent="Quản lý phòng" />

      <div className="container-fluid py-4">
        <div>
          {/* <!-- Tab items --> */}
          <div className="tabs">
            <div className="tab-item active">Quản lý Blog</div>
            <div className="tab-item">Quản lý dịch vụ</div>
            <div className="tab-item">Quản lý About us</div>
            <div className="line"></div>
          </div>

          <div className="tab-content">
            <div className="tab-pane active">
              <div className="table-scroll ">
                <div className="row">
                  <h4 className="bg-secondary p-3">
                    Danh sách bài đăng nổi bật
                  </h4>
                  <Table columns={columns} data={dataBlog} />
                </div>
              </div>
              <div className="table-scroll mt-4">
                <div className="row">
                  <h4 className="bg-secondary p-3"> Danh sách bài đăng mới</h4>
                  <Table columns={columns} data={dataBlog} />
                </div>
              </div>
            </div>
            <div className="tab-pane">
              <div className="table-scroll ">
                <div className="row">
                  <Table columns={columnService} data={dataService} />
                </div>
              </div>
            </div>
            <div className="tab-pane">
              <div className="table-scroll "></div>
            </div>
            <div className="tab-pane">
              <div className="table-scroll "></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
