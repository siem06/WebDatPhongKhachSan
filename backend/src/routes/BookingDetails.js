const express = require("express");
const bookingDetailsController = require("../controllers/BookingDetailsController");
const bookingDetailsRoute = express.Router();

bookingDetailsRoute.post("/", bookingDetailsController.create);
bookingDetailsRoute.get("/:id", bookingDetailsController.find);
bookingDetailsRoute.put("/:id", bookingDetailsController.update);
bookingDetailsRoute.delete("/:id", bookingDetailsController.delete);

module.exports = bookingDetailsRoute;
