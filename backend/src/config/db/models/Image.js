const Model = require("../models/model");
module.exports = new (class ImageModel extends Model {
  constructor() {
    super("image");
  }
})();
