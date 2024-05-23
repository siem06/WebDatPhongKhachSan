const Model = require("../models/model");
const db = require("../db");
module.exports = new (class FavoriteModel extends Model {
  constructor() {
    super("favorite");
  }
  find(id) {
    let cThis = this;
    return new Promise(function (myResolve, myReject) {
      db.query(
        "SELECT * FROM favorite f join room r on f.idRoom=r.id join image i on i.idRoom = r.id where idAccount=?",
        [id],
        function (error, result) {
          if (error) throw error;
          myResolve(result);
        }
      );
    });
  }
  create(data) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO favorite (idAccount, idRoom) VALUES (?, ?)";
      db.query(query, [data.idAccount, data.idRoom], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  }
  delete(idAccount, idRoom) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM favorite WHERE idAccount = ? AND idRoom = ?";
      db.query(query, [idAccount, idRoom], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  }
})();
