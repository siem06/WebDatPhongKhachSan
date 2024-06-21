const express = require("express");
const favoriteController = require("../controllers/FavoriteController");
const roomFavoriteRouter = express.Router();
const authJwt = require("../middleware/authJWT");

roomFavoriteRouter.get(
  "/:id",
  authJwt.verifyToken,
  favoriteController.findByIdA
);
roomFavoriteRouter.post("/", authJwt.verifyToken, favoriteController.create);
roomFavoriteRouter.delete("/", authJwt.verifyToken, favoriteController.delete);
roomFavoriteRouter.delete(
  "/deleteAll",
  authJwt.verifyToken,
  favoriteController.deleteAll
);

module.exports = roomFavoriteRouter;
