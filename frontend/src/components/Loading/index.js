import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./style.css";
export default function Loading() {
  return (
    <div className="wrapper">
      <div className="container">
        <CircularProgress />
      </div>
    </div>
  );
}
