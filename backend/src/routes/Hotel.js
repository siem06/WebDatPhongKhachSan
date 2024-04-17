const express = require("express");
const hotelController = require("../controllers/AboutUsController");
const hotelRouter = express.Router();

hotelRouter.get("/", hotelController.get);
hotelRouter.get("/:id", hotelController.find);
hotelRouter.post("/", hotelController.create);
hotelRouter.put("/:id", hotelController.update);
hotelRouter.delete("/:id", hotelController.delete);

module.exports = hotelRouter;
