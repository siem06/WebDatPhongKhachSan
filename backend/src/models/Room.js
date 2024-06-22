module.exports = (sequelize, Sequelize) => {
  const Room = sequelize.define("rooms", {
    type: {
      type: Sequelize.INTEGER,
      collate: "utf8_general_ci",
    },
    price: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    status: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },

    description: {
      type: Sequelize.STRING,
    },
    note: {
      type: Sequelize.STRING,
      collate: "utf8_general_ci",
    },
  });

  Room.getRoomImg = async function (id) {
    const db = require("../models/index.js");

    try {
      const roomIn = await Room.findByPk(id, {
        include: [
          { model: db.image, as: "images" },
          {
            model: db.service,
            as: "services",
          },
        ],
      });
      return roomIn;
    } catch (error) {
      console.error("Error fetching room with images:", error);
      throw error;
    }
  };
  Room.getAllWithImages = async function (roomId) {
    const db = require("../models/index.js");

    try {
      const roomsWithImages = await Room.findAll({
        where: { id: roomId },
        include: [{ model: db.RoomImages, as: "images" }],
      });
      return roomsWithImages;
    } catch (error) {
      console.error("Error fetching rooms with images:", error);
      throw error;
    }
  };

  Room.getSortedByPriceAsc = async function () {
    try {
      const roomsSortedByPriceAsc = await Room.findAll({
        order: [["price", "ASC"]],
      });
      return roomsSortedByPriceAsc;
    } catch (error) {
      console.error("Error fetching rooms sorted by price (ascending):", error);
      throw error;
    }
  };
  Room.getSortedByPriceDesc = async function () {
    try {
      const roomsSortedByPriceDesc = await Room.findAll({
        order: [["price", "DESC"]],
      });
      return roomsSortedByPriceDesc;
    } catch (error) {
      console.error(
        "Error fetching rooms sorted by price (descending):",
        error
      );
      throw error;
    }
  };
  Room.getRoomByType = async function (typeRoom) {
    try {
      const roomsByType = await Room.findAll({
        where: { type: type },
      });
      return roomsByType;
    } catch (error) {
      console.error("Error fetching rooms by type:", error);
      throw error;
    }
  };

  // Function to get rooms with reviews by rating
  Room.getAllWithReviews = async function (rating) {
    const db = require("../models/index.js");

    try {
      const roomsWithReviews = await Room.findAll({
        where: { rating },
        include: [{ model: db.review, as: "reviews" }],
      });
      return roomsWithReviews;
    } catch (error) {
      console.error("Error fetching rooms with reviews:", error);
      throw error;
    }
  };
  Room.calculateAverageRating = async function (roomId) {
    const db = require("../models/index.js");
    
    try {
      const reviews = await db.review.findAll({
        where: { roomId },
      });

      let totalStars = 0;
      let count = 0;

      reviews.forEach(review => {
        totalStars += review.rating;
        count++;
      });

      const averageRating = count > 0 ? (totalStars / count).toFixed(2) : 0;

      return {
        averageRating,
        ratingsCount: reviews.length
      };
    } catch (error) {
      console.error("Error calculating average rating:", error);
      throw error;
    }
  };
  return Room;
};
