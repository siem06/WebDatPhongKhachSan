const Model = require("../models/model");
module.exports = new (class BookingModel extends Model {
  constructor() {
    super("booking");
  }
})();
