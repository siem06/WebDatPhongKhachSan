import React from "react";
import Table from "../../components/Table";
import EmailIcon from "@mui/icons-material/Email";
import Header from "../layout/Header";
export default function Support() {
  const column = [
    {
      name: "STT",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Khách hàng",
      selector: (row) => row.name,
      sortable: true,
    },

    {
      name: "Tiêu đề",
      selector: (row) => row.topic,
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
          <EmailIcon />
        </button>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      name: "soem",
      state: "Chưa phản hồi",
      topic: "Không đăng nhập",
    },
    {
      id: 2,
      name: "siem",
      state: "Đẫ phản hồi",
      topic: "Không đăng nhập",
    },
    {
      id: 3,
      name: "Bình",
      state: "Chưa phản hồi",
      topic: "Không đăng nhập",
    },
  ];
  return (
    <main className="main-content position-relative border-radius-lg ">
      <Header pageCurrent="Hỗ trợ khách hàng" />
      <div className="container-fluid py-4">
        <div className="row">
          <Table columns={column} data={data} />
        </div>
      </div>
    </main>
  );
}
