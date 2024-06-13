import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import { getAll } from "../../service/api";
import TableMui from "../../components/Table/TableMui";
import ModalDetail from "../../Layout/ModalDetail";
import { Edit } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function ManagerAccount() {
  const columns = [
    {
      accessorKey: "id",
      key: "id",
      header: "Mã",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "status",
      header: "Trạng thái",
      Cell: ({ row }) => (
        <div style={{ color: row.original.status === 1 ? "green" : "red" }}>
          {row.original.status === 1 ? "Đã xác thực" : "Chưa xác thực"}
        </div>
      ),
    },
  ];

  const [selectedCellValue, setSelectedCellValue] = useState([]);
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    async function getAllUser() {
      try {
        const users = await getAll();
        setData(users);
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    }
    getAllUser();
  }, []);

  const handleEditClick = (row) => {
    setSelectedCellValue(row);
    setModalShow(true);
  };

  return (
    <main className="main-content position-relative border-radius-lg ">
      <Header pageCurrent="Quản lý tài khoản" />
      <div className="container-fluid py-4">
        <div className="row">
          <h4 className="bg-secondary p-3">Danh sách bài đăng nổi bật</h4>
          <TableMui
            columns={columns}
            data={data}
            setModalShow={setModalShow}
            setSelectedCellValue={setSelectedCellValue}
          />
        </div>
      </div>
      <ModalDetail
        show={modalShow}
        userDetails={true}
        btnsave="true"
        header="Chi tiết tài khoản"
        title="Thông tin tài khoản"
        data={selectedCellValue}
        onHide={() => setModalShow(false)}
      />
    </main>
  );
}
