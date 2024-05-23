const express = require("express");
const favoriteController = require("../controllers/FavoriteController");
const roomFavoriteRouter = express.Router();

roomFavoriteRouter.get("/:id", favoriteController.findById);
roomFavoriteRouter.post("/", favoriteController.create);
roomFavoriteRouter.delete("/", favoriteController.delete);

module.exports = roomFavoriteRouter;
