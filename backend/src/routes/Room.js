const express = require("express");
const roomController = require("../controllers/RoomController");
const roomRouter = express.Router();

roomRouter.get("/:id", roomController.getRoomInfo);
// roomRouter.get("/:id", roomController.);
roomRouter.post("/", roomController.create);
roomRouter.put("/:id", roomController.update);
roomRouter.delete("/:id", roomController.delete);
roomRouter.get("/", roomController.pageNumbers);
roomRouter.get("/sortedByPrice/:order", roomController.getRoomsSortedByPrice);
roomRouter.get("/type/:type", roomController.getRoomsByType);
roomRouter.get("/review/:rating", roomController.getReviewByRoomId);
module.exports = roomRouter;
