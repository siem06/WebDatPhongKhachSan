const session = require("node-sessionstorage");

module.exports = function (req, res, next) {
  let check = false;
  if (check) {
    next();
  } else {
    res.redirect("/login");
  }
};
