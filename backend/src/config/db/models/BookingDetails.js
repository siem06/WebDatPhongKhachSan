const Model = require("../models/model");
module.exports = new (class BookingDetails extends Model {
  constructor() {
    super("bookingDetails");
  }
})();
