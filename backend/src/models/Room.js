// const Model = require("../models/model");
// const db = require("../../db");
// module.exports = new (class RoomModel extends Model {
//   constructor() {
//     super("room");
//   }
//   // load Image
//   get_all_with_images(roomId) {
//     return new Promise(function (myResolve, myReject) {
//       const query =
//         "SELECT Room.id, Room.typeRoom, Room.price, Room.status, Room.description, Room.idService, Room.note, Image.img \
//                 FROM Room \
//                 LEFT JOIN Image ON Room.id = Image.idRoom \
//                 WHERE Room.id = ?";
//       db.query(query, [roomId], function (error, result) {
//         if (error) {
//           myReject(error);
//         } else {
//           myResolve(result);
//         }
//       });
//     });
//   }
//   // load price
//   getSortedByPriceAsc() {
//     let cThis = this;
//     return new Promise(function (myResolve, myReject) {
//       db.query(
//         "SELECT * FROM ?? ORDER BY price asc",
//         [cThis.table],
//         function (error, result) {
//           if (error) throw error;
//           myResolve(result);
//         }
//       );
//     });
//   }
//   getSortedByPriceDesc() {
//     let cThis = this;
//     return new Promise(function (myResolve, myReject) {
//       db.query(
//         "SELECT * FROM ?? ORDER BY price desc",
//         [cThis.table],
//         function (error, result) {
//           if (error) throw error;
//           myResolve(result);
//         }
//       );
//     });
//   }
//   // load type room
//   getRoomType(typeRoom) {
//     let cThis = this;
//     return new Promise(function (myResolve, myReject) {
//       db.query(
//         "SELECT * FROM ?? WHERE typeRoom = ?",
//         [cThis.table, typeRoom],
//         function (error, result) {
//           if (error) throw error;
//           myResolve(result);
//         }
//       );
//     });
//   }

//   // load Rating
//   get_all_with_reviews(rating) {
//     return new Promise(function (myResolve, myReject) {
//       const query =
//         "SELECT Room.id, Room.typeRoom, Room.price, Room.status, Room.description, Room.idService, Room.note,  Review.rating, Review.comment, Review.note AS review_note \
//                   FROM Room \
//                   LEFT JOIN Review ON Room.id = Review.idRoom \
//                   WHERE rating = ?";
//       db.query(query, [rating], function (error, result) {
//         if (error) {
//           myReject(error);
//         } else {
//           myResolve(result);
//         }
//       });
//     });
//   }
// })();
const Image = require("./Image.js");

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
        where: { type: type},
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

  return Room;
};
