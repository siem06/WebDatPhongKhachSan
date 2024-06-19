const express = require("express");
const reviewController = require("../controllers/ReviewController");
const reviewRouter = express.Router();


//  tìm ko thấy hiển thị ra thông báo
// reviewRouter.get("/:id", reviewController.find);
reviewRouter.get("/", reviewController.get);
reviewRouter.post("/", reviewController.create);
reviewRouter.put("/:id", reviewController.update);
reviewRouter.delete("/:id", reviewController.delete);
reviewRouter.get("/:roomId", reviewController.getReviews);
reviewRouter.get("/ratings/stats",reviewController.calculateRatingStats);
module.exports = reviewRouter;