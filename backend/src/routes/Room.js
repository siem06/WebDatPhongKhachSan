const express = require("express");
const roomController = require("../controllers/RoomController");
const roomRouter = express.Router();

roomRouter.get("/", roomController.get);
roomRouter.get("/:id", roomController.find);
roomRouter.post("/", roomController.create);
roomRouter.put("/:id", roomController.update);
roomRouter.delete("/:id", roomController.delete);

module.exports = roomRouter;
