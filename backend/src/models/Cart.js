module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define("carts", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });
  Cart.getCartByIdUser = async function (userId) {
    const db = require("../models");

    try {
      const cart = await this.findAll({
        where: { userId },
        // include: [
        //   { model: db.user, as: "user" },
        //   { model: db.room, as: "room" },
        // ],
      });
      return cart;
    } catch (error) {
      console.error("Error fetching user with bookings:", error);
      throw error;
    }
  };

  return Cart;
};
