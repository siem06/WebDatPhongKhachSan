const express = require("express");
const reviewController = require("../controllers/ReviewController");
const reviewRouter = express.Router();
const authJwt = require("../middleware/authJWT");

//  tìm ko thấy hiển thị ra thông báo
// reviewRouter.get("/:id", reviewController.find);
reviewRouter.get("/", reviewController.get);
reviewRouter.post("/", authJwt.verifyToken, reviewController.create);
reviewRouter.put(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  reviewController.update
);
reviewRouter.delete(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  reviewController.delete
);
reviewRouter.get("/:roomId", reviewController.getReviews);
reviewRouter.get("/ratings/stats", reviewController.calculateRatingStats);
module.exports = reviewRouter;
