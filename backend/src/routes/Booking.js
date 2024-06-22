const express = require("express");
const bookingController = require("../controllers/BookingController");
const bookingRouter = express.Router();
const authJwt = require("../middleware/authJWT");

bookingRouter.get("/", bookingController.get);
bookingRouter.get("/status", bookingController.getBookingByStatus);
bookingRouter.get(
  "/getBookingA/:id",
  authJwt.verifyToken,
  bookingController.getBookingByIdA
);
bookingRouter.get("/:id", bookingController.findById);
bookingRouter.get("/getBooking/:id", bookingController.getBooking);
bookingRouter.post("/", authJwt.verifyToken, bookingController.create);

bookingRouter.put("/:id", authJwt.verifyToken, bookingController.update);
bookingRouter.put(
  "/updateStatus/:id",
  authJwt.verifyToken,
  bookingController.updateStatus
);
bookingRouter.delete(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  bookingController.delete
);

module.exports = bookingRouter;
