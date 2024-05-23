const favoriteModel = require("../config/db/models/Favorite");
class FavoriteController {
  findById(req, res) {
    let result = favoriteModel.find(req.params.id);
    result
      .then(function (value) {
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  find(req, res) {
    let result = favoriteModel.find(req.params.id);
    result
      .then(function (value) {
        console.log(value);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  create(req, res) {
    const data = {
      idAccount: req.body.idAccount,
      idRoom: req.body.idRoom,
    };
    let result = favoriteModel.create(data);
    result
      .then(function (value) {
        console.log(value);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  update(req, res) {
    const data = {
      idAccount: req.body.idAccount,
      idRoom: req.body.idRoom,
    };
    let result = favoriteModel.update(req.params.id, data);
    result
      .then(function (value) {
        console.log(value);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  delete(req, res) {
    const { idAccount, idRoom } = req.body;
    let result = favoriteModel.delete(idAccount, idRoom);
    result
      .then(function (value) {
        console.log(value);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

module.exports = new FavoriteController();
