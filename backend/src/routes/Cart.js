const express = require("express");
const cartController = require("../controllers/CartController");
const cartRoute = express.Router();

cartRoute.get("/:id", cartController.getCartByUser);
// imageRouter.get("/", imageController.find);
cartRoute.post("/", cartController.create);
// imageRouter.put("/:id", imageController.update);
cartRoute.delete("/:id", cartController.delete);
cartRoute.delete("/all/:id", cartController.deleteAllUser);

module.exports = cartRoute;
