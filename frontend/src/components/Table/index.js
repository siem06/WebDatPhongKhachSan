import React, { useState } from "react";
import DataTable from "react-data-table-component";
import ModalDetail from "../../Layout/ModalDetail";
import Button from "../Button/Button";

export default function Table({ columns, data }) {
  const customStyles = {
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "16px",
      },
    },
  };
  const [modalShow, setModalShow] = useState(false);
  const [records, setRecords] = useState(data);

  function handleFilter(event) {
    const newData = data.filter((row) => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={handleFilter}
          />
        </div>
        <div>
          <Button title="Tạo" />
        </div>
      </div>
      <DataTable
        columns={columns}
        data={records}
        selectableRows
        fixedHeader
        pagination
        customStyles={customStyles}
        selectableRowsHighlight
        highlightOnHover
        // subHeader
        // subHeaderAlign="right"
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
