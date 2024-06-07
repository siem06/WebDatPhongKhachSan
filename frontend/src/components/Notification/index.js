import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const Notification = ({ type, message }) => {
  useEffect(() => {
    if (type && message) {
      switch (type) {
        case "success":
          toast.success(message, {});
          break;
        case "error":
          toast.error(message);
          break;
        case "info":
          toast.info(message);
          break;
        case "warning":
          toast.warning(message);
          break;
        default:
          break;
      }
    }
  }, [type, message]);

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};

export default Notification;
