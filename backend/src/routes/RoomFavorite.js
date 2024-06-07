const express = require("express");
const favoriteController = require("../controllers/FavoriteController");
const roomFavoriteRouter = express.Router();

roomFavoriteRouter.get("/:id", favoriteController.findById);
roomFavoriteRouter.post("/", favoriteController.create);
roomFavoriteRouter.delete("/", favoriteController.delete);
roomFavoriteRouter.delete("/deleteAll", favoriteController.deleteAll);

module.exports = roomFavoriteRouter;
