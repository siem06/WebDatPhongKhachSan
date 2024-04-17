const reviewModel = require("../config/db/models/Review");
class ReviewController {
  get(req, res) {
    let result = reviewModel.get_all();
    result
      .then(function (value) {
        console.log(value);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  find(req, res) {
    let result = reviewModel.find(req.params.id);
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
      rating: req.body.rating,
      comment: req.body.comment,
      
    //   note: req.body.note,
    };
    let result = reviewModel.create(data);
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
        rating: req.body.rating,
        comment: req.body.comment,
    //   note: req.body.note,
    };
    let result = reviewModel.update(req.params.id, data);
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
    let result = reviewModel.delete(req.params.id);
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

module.exports = new ReviewController();
