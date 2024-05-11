const Model = require("../models/model");
const db = require("../db");
module.exports = new (class AboutModel extends Model {
  constructor() {
    super("aboutus");
  }
  getAboutStatus() {
    let cThis = this;
    return new Promise(function (myResolve, myReject) {
      db.query(
        "SELECT * FROM ?? WHERE status= 1",
        [cThis.table],
        function (error, result) {
          if (error) {
            myReject(error);
          } else {
            myResolve(result);
          }
        }
      );
    });
  }
})();
