const express = require("express");
const paymentController = require("../controllers/PaymentController");
const paymentRouter = express.Router();

paymentRouter.get("/", paymentController.get);
//  tìm ko thấy hiển thị ra thông báo
paymentRouter.get("/:id", paymentController.find);
paymentRouter.post("/", paymentController.create);
// update thì chỗ status là thành công thì ...., hủy phòng thì ....
paymentRouter.put("/:id", paymentController.update);
// paymentRouter.delete("/:id", paymentController.delete);

module.exports = paymentRouter;