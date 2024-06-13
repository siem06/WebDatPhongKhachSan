import React, { useState } from "react";
import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  MRT_GlobalFilterTextField,
  MRT_TableBodyCellValue,
  MRT_TablePagination,
  MRT_ToolbarAlertBanner,
  flexRender,
  useMaterialReactTable,
} from "material-react-table";
import CurrencyFormat from "react-currency-format";
import dayjs from "dayjs";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";

const TableMui = ({ columns, data, setModalShow, setSelectedCellValue }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: true,
    initialState: {
      pagination: { pageSize: 5, pageIndex: 0 },
      showGlobalFilter: true,
    },
    muiPaginationProps: {
      rowsPerPageOptions: [5, 10, 15],
      variant: "outlined",
    },
    paginationDisplayMode: "pages",
  });

  const handleCellClick = (row) => {
    setSelectedCellValue(row.original);
    setModalShow(true);
  };

  const handleEditClick = (row) => {
    setSelectedRow(row);
    setEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
    setSelectedRow(null);
  };

  return (
    <Stack sx={{ m: "2rem 0" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <MRT_GlobalFilterTextField table={table} />
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableCell align="center" variant="head" key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.Header ??
                            header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableCell>
                ))}
                {/* Add column header for actions */}
                {data.some((row) => row.email) && (
                  <TableCell align="center" variant="head">
                    Hành động
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row, rowIndex) => (
              <TableRow
                key={row.id}
                selected={row.getIsSelected()}
                onClick={() => handleCellClick(row)}
              >
                {row.getVisibleCells().map((cell, _columnIndex) => (
                  <TableCell align="center" variant="body" key={cell.id}>
                    <MRT_TableBodyCellValue
                      cell={cell}
                      table={table}
                      staticRowIndex={rowIndex}
                    />
                  </TableCell>
                ))}
                {/* Render action button if row has action */}
                {row.original.email && (
                  <TableCell align="center" className="d-flex">
                    <Button
                      onClick={() => handleEditClick(row.original)}
                      startIcon={<Edit />}
                    ></Button>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <MRT_TablePagination table={table} />
      </Box>
      <MRT_ToolbarAlertBanner stackAlertBanner table={table} />

      {/* Edit Modal */}
      {/* <Dialog open={editModalOpen} onClose={handleEditModalClose}> */}
      {/* <DialogTitle>Chỉnh sửa thông tin</DialogTitle> */}
      {/* <DialogContent> */}
      {/* Replace with your edit form or component */}
      {/* <Box p={2}> */}
      {/* <div>ID: {selectedRow?.id}</div> */}
      {/* <div>Email: {selectedRow?.email}</div> */}
      {/* <div> */}
      {/* Trạng thái:{" "} */}
      {/* {selectedRow?.status === 1 ? "Đã xác thực" : "Chưa xác thực"} */}
      {/* </div> */}
      {/* Add more fields as needed */}
      {/* </Box> */}
      {/* </DialogContent> */}
      {/* <DialogActions> */}
      {/* <Button onClick={handleEditModalClose}>Đóng</Button> */}
      {/* Add Save or Update button for editing */}
      {/* </DialogActions> */}
      {/* </Dialog> */}
    </Stack>
  );
};

export default TableMui;
