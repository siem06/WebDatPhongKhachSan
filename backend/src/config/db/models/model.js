const db = require("../db");
module.exports = class Model {
  constructor(table) {
    this.table = table;
  }

  //get all table rows and return the result object:
  get_all() {
    let cThis = this;
    return new Promise(function (myResolve, myReject) {
      db.query("SELECT * FROM ??", [cThis.table], function (error, result) {
        if (error) throw error;
        myResolve(result);
      });
    });
  }
  get_Limit() {
    let cThis = this;
    return new Promise(function (myResolve, myReject) {
      db.query(
        "SELECT * FROM ?? LIMIT 1",
        [cThis.table],
        function (error, result) {
          if (error) throw error;
          myResolve(result);
        }
      );
    });
  }
  //get row by id and return the result object:
  find(id) {
    let cThis = this;
    return new Promise(function (myResolve, myReject) {
      db.query(
        "SELECT * FROM ?? WHERE id = ?",
        [cThis.table, id],
        function (error, result) {
          if (error) throw error;
          myResolve(result[0]);
        }
      );
    });
  }
  // tìm theo email

  //insert data via object such as {id: 1, title: 'Hello MySQL'}
  create(data) {
    let cThis = this;
    return new Promise(function (myResolve, myReject) {
      db.query(
        "INSERT INTO ?? SET ?",
        [cThis.table, data],
        function (error, result) {
          if (error) throw error;
          let data = cThis.find(result.insertId);
          data
            .then(function (value) {
              myResolve(value);
            })
            .catch(function (error) {
              myReject(error);
            });
        }
      );
    });
  }

  //update row and return new data as an object
  update(id, data) {
    let cThis = this;
    return new Promise(function (myResolve, myReject) {
      db.query(
        "UPDATE  ?? SET ? WHERE id = ?",
        [cThis.table, data, id],
        function (error, result) {
          if (error) throw error;
          let data = cThis.find(id);
          data
            .then(function (value) {
              myResolve(value);
            })
            .catch(function (error) {
              myReject(error);
            });
        }
      );
    });
  }

  //delete row and return info
  // {"fieldCount":0,"affectedRows":1,"insertId":0,"serverStatus":2,"warningCount":0,"message":"","protocol41":true,"changedRows":0}

  delete(id) {
    let cThis = this;
    return new Promise(function (myResolve, myReject) {
      db.query(
        "DELETE FROM  ??  WHERE id = ?",
        [cThis.table, id],
        function (error, result) {
          if (error) throw error;
          myResolve(result);
        }
      );
    });
  }
};
