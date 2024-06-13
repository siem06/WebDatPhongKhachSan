const { where } = require("sequelize");
const db = require("../models");

class CartController {
  async create(req, res) {
    try {
      const { userId, roomId } = req.body;

      const user = await db.user.findByPk(userId);
      if (!user) {
        console.error("User not found with id:", userId);
        return res
          .status(404)
          .json({ success: false, message: "Người dùng không tồn tại." });
      }

      const room = await db.room.findByPk(roomId);
      if (!room) {
        console.error("Room not found with id:", roomId);
        return res
          .status(404)
          .json({ success: false, message: "Phòng không tồn tại." });
      }

      const existingSelection = await db.cart.findOne({
        where: {
          userId: userId,
          roomId: roomId,
        },
      });
      console.log("Existing selection:", existingSelection);

      if (existingSelection) {
        console.log("Room already selected by user");
        return res.json({
          success: false,
          message: "Bạn đã chọn phòng này rồi!",
        });
      } else {
        await db.cart.create({
          userId: userId,
          roomId: roomId,
        });
        console.log("Room selected successfully");
        return res
          .status(201)
          .json({ success: true, message: "Room selected successfully." });
      }
    } catch (error) {
      console.error("Error selecting room:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while selecting room.",
      });
    }
  }
  delete(req, res) {
    db.cart
      .destroy({ where: { id: req.params.id } })
      .then((result) => {
        if (result === 0) {
          return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted successfully" });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: "Server internal error" });
      });
  }
  deleteAllUser(req, res) {
    db.cart
      .destroy({ where: { userId: req.params.id } })
      .then((result) => {
        res.json({ message: "User deleted successfully" });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: "Server internal error" });
      });
  }
  getCartByUser(req, res) {
    db.cart
      .getCartByIdUser(req.params.id)
      .then((value) => {
        console.log(value);
        res.json(value);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send("Server error");
      });
  }
}

module.exports = new CartController();
