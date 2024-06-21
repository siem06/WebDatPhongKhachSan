const express = require("express");
const bookingDetailsController = require("../controllers/BookingDetailsController");
const bookingDetailsRoute = express.Router();
const authJwt = require("../middleware/authJWT");

bookingDetailsRoute.post(
  "/",
  authJwt.verifyToken,
  bookingDetailsController.create
);
// bookingDetailsRoute.get("/:id", bookingDetailsController.find);

// bookingDetailsRoute.delete("/:id", bookingDetailsController.delete);

module.exports = bookingDetailsRoute;
