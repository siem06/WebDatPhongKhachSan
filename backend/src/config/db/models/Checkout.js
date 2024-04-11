const Model = require("../models/model");
module.exports = new (class CheckoutModel extends Model {
  constructor() {
    super("checkout");
  }
})();
