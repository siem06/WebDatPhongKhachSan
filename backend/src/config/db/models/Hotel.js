const Model = require("../models/model");
module.exports = new (class HotelModel extends Model {
  constructor() {
    super("hotel");
  }
})();
