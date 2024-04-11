const Model = require("../models/model");
module.exports = new (class FavoriteModel extends Model {
  constructor() {
    super("favorite");
  }
})();
