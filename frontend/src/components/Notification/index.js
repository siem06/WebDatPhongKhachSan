import React, { useEffect } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const Notification = ({ type, message }) => {
  useEffect(() => {
    if (type && message) {
      switch (type) {
        case "success":
          NotificationManager.success(message);
          break;
        case "error":
          NotificationManager.error(message);
          break;
        case "info":
          NotificationManager.info(message);
          break;
        case "warning":
          NotificationManager.warning(message);
          break;
        default:
          break;
      }
    }
  }, [type, message]);

  return <NotificationContainer />;
};

export default Notification;
