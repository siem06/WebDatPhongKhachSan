const Model = require("../models/model");
module.exports = new (class ReviewModel extends Model {
  constructor() {
    super("review");
  }
})();
