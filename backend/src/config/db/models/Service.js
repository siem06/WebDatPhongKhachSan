const Model = require("../models/model");
module.exports = new (class ServiceModel extends Model {
  constructor() {
    super("service");
  }
})();
