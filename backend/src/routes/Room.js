const express = require("express");
const roomController = require("../controllers/RoomController");
const authJwt = require("../middleware/authJWT");
const roomRouter = express.Router();

roomRouter.get("/:id", roomController.getRoomInfo);
// roomRouter.get("/:id", roomController.);
roomRouter.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  roomController.create
);
roomRouter.put(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  roomController.update
);
roomRouter.delete(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  roomController.delete
);
roomRouter.get("/", roomController.pageNumbers);
roomRouter.get("/sortedByPrice/:order", roomController.getRoomsSortedByPrice);
roomRouter.get("/type/:type", roomController.getRoomsByType);
roomRouter.get("/review/:rating", roomController.getReviewByRoomId);
roomRouter.get("/:roomId/rating-stats", roomController.getRoomRatingStats);
module.exports = roomRouter;


