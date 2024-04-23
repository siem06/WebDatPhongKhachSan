const mysql = require("mysql");
const connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bookhotel",
  port: "3306",
});
connect.connect(function (err) {
  if (err) {
    // throw err.stack;
  } else console.log("connect success");
});

module.exports = connect;
