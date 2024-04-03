import React, { useState } from "react";
import DataTable from "react-data-table-component";
import Model from "./Model";
import ModalDetail from "../../../Layout/ModalDetail";

export default function Table({ columns, data }) {
  //   const columns = [
  //     {
  //       name: "Name",
  //       selector: (row) => row.name,
  //       sortable: true,
  //     },
  //     {
  //       name: "Email",
  //       selector: (row) => row.email,
  //       sortable: true,
  //     },
  //     {
  //       name: "Phone",
  //       selector: (row) => row.phone,
  //     },
  //   ];
  //   const data = [
  //     {
  //       id: 1,
  //       name: "Yem",
  //       email: "hongsiem@your",
  //       phone: "phone@your",
  //     },
  //     {
  //       id: 2,
  //       name: "Mya",
  //       email: "hnaiem@your",
  //       phone: "phone@your",
  //     },
  //     {
  //       id: 3,
  //       name: "siêm",
  //       email: "lymh@your",
  //       phone: "phone@your",
  //     },
  //     {
  //       id: 4,
  //       name: "Yem",
  //       email: "hongsiem@your",
  //       phone: "phone@your",
  //     },
  //     {
  //       id: 5,
  //       name: "Mya",
  //       email: "hnaiem@your",
  //       phone: "phone@your",
  //     },
  //     {
  //       id: 6,
  //       name: "siêm",
  //       email: "lymh@your",
  //       phone: "phone@your",
  //     },
  //     {
  //       id: 7,
  //       name: "Yem",
  //       email: "hongsiem@your",
  //       phone: "phone@your",
  //     },

  //     {
  //       id: 8,
  //       name: "siêm",
  //       email: "lymh@your",
  //       phone: "phone@your",
  //     },
  //     {
  //       id: 9,
  //       name: "Yem",
  //       email: "hongsiem@your",
  //       phone: "phone@your",
  //     },
  //     {
  //       id: 10,
  //       name: "Mya",
  //       email: "hnaiem@your",
  //       phone: "phone@your",
  //     },
  //     {
  //       id: 11,
  //       name: "siêm",
  //       email: "lymh@your",
  //       phone: "phone@your",
  //     },
  //     {
  //       id: 12,
  //       name: "Yem",
  //       email: "hongsiem@your",
  //       phone: "phone@your",
  //     },
  //     {
  //       id: 13,
  //       name: "Mya",
  //       email: "hnaiem@your",
  //       phone: "phone@your",
  //     },
  //     {
  //       id: 14,
  //       name: "siêm",
  //       email: "lymh@your",
  //       phone: "phone@your",
  //     },
  //     {
  //       id: 15,
  //       name: "Yem",
  //       email: "hongsiem@your",
  //       phone: "phone@your",
  //     },
  //     {
  //       id: 16,
  //       name: "Mya",
  //       email: "hnaiem@your",
  //       phone: "phone@your",
  //     },
  //     {
  //       id: 17,
  //       name: "siêm",
  //       email: "lymh@your",
  //       phone: "phone@your",
  //     },
  //     {
  //       id: 18,
  //       name: "Yem",
  //       email: "hongsiem@your",
  //       phone: "phone@your",
  //     },
  //     {
  //       id: 19,
  //       name: "Mya",
  //       email: "hnaiem@your",
  //       phone: "phone@your",
  //     },
  //     {
  //       id: 20,
  //       name: "siêm",
  //       email: "lymh@your",
  //       phone: "phone@your",
  //     },
  //     {
  //       id: 11,
  //       name: "Yem",
  //       email: "hongsiem@your",
  //       phone: "phone@your",
  //     },
  //     {
  //       id: 22,
  //       name: "Mya",
  //       email: "hnaiem@your",
  //       phone: "phone@your",
  //     },
  //     {
  //       id: 23,
  //       name: "siêm",
  //       email: "lymh@your",
  //       phone: "phone@your",
  //     },
  //     {
  //       id: 24,
  //       name: "Yem",
  //       email: "hongsiem@your",
  //       phone: "phone@your",
  //     },
  //     {
  //       id: 25,
  //       name: "Mya",
  //       email: "hnaiem@your",
  //       phone: "phone@your",
  //     },
  //     {
  //       id: 26,
  //       name: "aa",
  //       email: "lymh@your",
  //       phone: "phone@your",
  //     },
  //   ];

  const customStyles = {
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "16px",
      },
    },
  };
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const [records, setRecords] = useState(data);
  function handleFilter(event) {
    const newData = data.filter((row) => {
      return (
        row.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
        row.email.toLowerCase().includes(event.target.value.toLowerCase()) ||
        row.phone.toLowerCase().includes(event.target.value.toLowerCase()) ||
        row.category.toLowerCase().includes(event.target.value.toLowerCase())
      );
    });
    setRecords(newData);
  }
  return (
    <div className=" container">
      <div className="d-flex justify-content-end "></div>
      <DataTable
        columns={columns}
        data={records}
        selectableRows
        fixedHeader
        pagination
        customStyles={customStyles}
        selectableRowsHighlight
        highlightOnHover
        // actions={<button className="btn">Export pdf</button>}
        subHeader
        subHeaderComponent={
          <input
            type="text"
            className="w-25 form-control"
            placeholder="Search..."
            onChange={handleFilter}
            
          />
        }
        subHeaderAlign="right"
        onRowClicked={() => setModalShow(true)}
        pointerOnHover
      />

      <ModalDetail
        show={modalShow}
        bookDetail={true}
        btnClose
        header="Chi tiết thông tin đặt phòng"
        title="Thông tin đặt phòng"
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
