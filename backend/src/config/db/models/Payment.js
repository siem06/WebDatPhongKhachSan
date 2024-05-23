const Model = require("./model");
module.exports = new (class PaymentModel extends Model {
  constructor() {
    super("payment");
  }
  createPayment() {}
})();
