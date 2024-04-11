const express = require("express");
const bookingController = require("../controllers/BookingController");
const bookingRouter = express.Router();

bookingRouter.get("/", bookingController.get);
bookingRouter.get("/:id", bookingController.find);
bookingRouter.post("/", bookingController.create);
bookingRouter.put("/:id", bookingController.update);
bookingRouter.delete("/:id", bookingController.delete);

module.exports = bookingRouter;
