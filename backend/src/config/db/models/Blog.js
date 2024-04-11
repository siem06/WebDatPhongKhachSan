const Model = require("../models/model");
module.exports = new (class BlogModel extends Model {
  constructor() {
    super("blog");
  }
})();
