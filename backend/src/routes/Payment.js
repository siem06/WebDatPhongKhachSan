const express = require("express");
const paymentController = require("../controllers/PaymentController");
const paymentRouter = express.Router();

paymentRouter.get("/check", paymentController.checkPayment);
// paymentRouter.post("/create", paymentController.create);

paymentRouter.post("/create-paypal-order", paymentController.paypalOrder);
paymentRouter.post("/send", paymentController.sendInfo);

module.exports = paymentRouter;
