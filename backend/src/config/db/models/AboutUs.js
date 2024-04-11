const Model = require("../models/model");
module.exports = new (class AboutModel extends Model {
  constructor() {
    super("aboutus");
  }
})();
