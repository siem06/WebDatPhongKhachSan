const Model = require("../models/model");
const db = require("../db");

module.exports = new (class BlogModel extends Model {
  constructor() {
    super("blog");
  }
  get_all_category() {
    let cThis = this;
    return new Promise(function (myResolve, myReject) {
      db.query(
        "SELECT * FROM ?? where type =1",
        [cThis.table],
        function (error, result) {
          if (error) throw error;
          myResolve(result);
        }
      );
    });
  }
  get_all_article() {
    let cThis = this;
    return new Promise(function (myResolve, myReject) {
      db.query(
        "SELECT * FROM ?? where type =2",
        [cThis.table],
        function (error, result) {
          if (error) throw error;
          myResolve(result);
        }
      );
    });
  }
  get_blogCate_status() {
    let cThis = this;
    return new Promise(function (myResolve, myReject) {
      db.query(
        "SELECT * FROM ?? WHERE status = 1 and type =1",
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
  get_blogArticle_status() {
    let cThis = this;
    return new Promise(function (myResolve, myReject) {
      db.query(
        "SELECT * FROM ?? WHERE status = 1 and type =2",
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
