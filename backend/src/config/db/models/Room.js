const Model = require("../models/model");
module.exports = new (class RoomModel extends Model {
  constructor() {
    super("room");
  }
})();
