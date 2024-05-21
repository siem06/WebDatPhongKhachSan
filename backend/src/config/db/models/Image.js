const Model = require("../models/model");
const db = require("../db");
module.exports = new (class ImageModel extends Model {
  constructor() {
    super("image");
  }
  // load Image
  get_all_with_images(roomId) {
    return new Promise(function (myResolve, myReject) {
      const query = "SELECT Room.id, Room.typeRoom, Room.price, Room.status, Room.description, Room.idService, Room.note, Image.img \
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
})();
