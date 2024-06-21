const express = require("express");
const cartController = require("../controllers/CartController");
const cartRoute = express.Router();
const authJwt = require("../middleware/authJWT");
cartRoute.get("/:id", authJwt.verifyToken, cartController.getCartByUser);
// imageRouter.get("/", imageController.find);
cartRoute.post("/", authJwt.verifyToken, cartController.create);
// imageRouter.put("/:id", imageController.update);
cartRoute.delete("/:id", authJwt.verifyToken, cartController.delete);
cartRoute.delete("/all/:id", authJwt.verifyToken, cartController.deleteAllUser);

module.exports = cartRoute;
