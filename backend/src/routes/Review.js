const express = require("express");
const reviewController = require("../controllers/ReviewController");
const reviewRouter = express.Router();

reviewRouter.get("/", reviewController.get);
//  tìm ko thấy hiển thị ra thông báo
reviewRouter.get("/:id", reviewController.find);
reviewRouter.post("/", reviewController.create);
// update thì chỗ status là thành công thì ...., hủy phòng thì ....
reviewRouter.put("/:id", reviewController.update);
reviewRouter.delete("/:id", reviewController.delete);

module.exports = reviewRouter;