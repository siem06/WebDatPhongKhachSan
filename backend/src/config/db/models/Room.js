const Model = require("../models/model");
const db = require("../db");
module.exports = new (class RoomModel extends Model {
  constructor() {
    super("room");
  }
  // load Image
  get_all_with_images(roomId) {
    return new Promise(function (myResolve, myReject) {
      const query = "SELECT Room.id, Room.typeRoom, Room.price, Room.status, Room.description, Room.amenities, Room.note, Image.img \
                FROM Room \
                LEFT JOIN Image ON Room.id = Image.idRoom \
                WHERE Room.id = ?";
      db.query(query, [roomId], function (error, result) {
        if (error) {
          myReject(error);
        } else {
          myResolve(result);
        }
      });
    });
  }
  // load price 
  getSortedByPriceAsc() {
    let cThis = this;
    return new Promise(function (myResolve, myReject) {
      db.query("SELECT * FROM ?? ORDER BY price asc", [cThis.table], function (error, result) {
        if (error) throw error;
        myResolve(result);
      });
    });
  }
  getSortedByPriceDesc() {
    let cThis = this;
    return new Promise(function (myResolve, myReject) {
      db.query("SELECT * FROM ?? ORDER BY price desc", [cThis.table], function (error, result) {
        if (error) throw error;
        myResolve(result);
      });
    });
  }
  // load type room
  getRoomType(typeRoom) {
    let cThis = this;
    return new Promise(function (myResolve, myReject) {
      db.query("SELECT * FROM ?? WHERE typeRoom = ?", [cThis.table, typeRoom], function (error, result) {
        if (error) throw error;
        myResolve(result);
      });
    });
  }

  // load Rating
  get_all_with_reviews(rating) {
    return new Promise(function (myResolve, myReject) {
      const query = "SELECT Room.id, Room.typeRoom, Room.price, Room.status, Room.description, Room.amenities, Room.note,  Review.rating, Review.comment, Review.note AS review_note \
                  FROM Room \
                  LEFT JOIN Review ON Room.id = Review.idRoom \
                  WHERE rating = ?";
      db.query(query, [rating], function (error, result) {
        if (error) {
          myReject(error);
        } else {
          myResolve(result);
        }
      });
    });
  }
})();
