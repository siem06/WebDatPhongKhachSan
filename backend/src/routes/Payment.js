const express = require("express");
const paymentController = require("../controllers/PaymentController");
const paymentRouter = express.Router();

paymentRouter.get("/check", paymentController.checkPayment);
paymentRouter.post("/create", paymentController.create);

// paymentRouter.post("/paypalBooking", paymentController.paypalBooking);
// paymentRouter.post("/check", paymentController.checkPayment);

module.exports = paymentRouter;
