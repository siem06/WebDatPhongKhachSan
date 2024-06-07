import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  MRT_GlobalFilterTextField,
  MRT_TableBodyCellValue,
  MRT_TablePagination,
  MRT_ToolbarAlertBanner,
  flexRender,
  useMaterialReactTable,
} from "material-react-table";
import React from "react";
import CurrencyFormat from "react-currency-format";

const columns = [
  {
    accessorKey: "bookingId",
    key: "bookingId",
    header: "Mã",
  },
  {
    accessorKey: "totalRoom",
    header: "Số phòng",
  },
  {
    accessorKey: "checkoutDate",
    header: "Ngày checkin",
  },
  {
    accessorKey: "checkinDate",
    header: "Ngày checkout",
  },
  {
    accessorKey: "roomPrice",
    header: "Số tiền",
    Cell: ({ cell, row }) => (
      <CurrencyFormat
        value={row.original.roomPrice}
        thousandSeparator={true}
        suffix={"VND"}
        decimalScale={2}
        displayType="text"
        className="text-black "
        style={{
          backgroundColor: "transparent",
          border: "none",
        }}
      />
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
        {row.original.statusBooking === 1 ? "Thành công" : "Thất bại"}
      </div>
    ),
  },
];

const TableMui = ({ data, setModalShow, setSelectedCellValue }) => {
  const table = useMaterialReactTable({
    columns,
    data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    //MRT display columns can still work, optionally override cell renders with `displayColumnDefOptions`
    enableRowSelection: true,
    initialState: {
      pagination: { pageSize: 5, pageIndex: 0 },
      showGlobalFilter: true,
    },
    //customize the MRT components
    muiPaginationProps: {
      rowsPerPageOptions: [5, 10, 15],
      variant: "outlined",
    },
    paginationDisplayMode: "pages",
  });
  const handleCellClick = (cellValue) => {
    setSelectedCellValue(cellValue.original);
    setModalShow(true);
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
    </Stack>
  );
};

export default TableMui;
