// const reviewModel = require("../config/db/models/Review");
// class ReviewController {
//   get(req, res) {
//     let result = reviewModel.get_all();
//     result
//       .then(function (value) {
//         console.log(value);
//         res.json(value);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
//   find(req, res) {
//     let result = reviewModel.find(req.params.id);
//     result
//       .then(function (value) {
//         console.log(value);
//         res.json(value);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
//   create(req, res) {
//     const data = {
//       idAccount: req.body.idAccount,
//       idRoom: req.body.idRoom,
//       rating: req.body.rating,
//       comment: req.body.comment,

//     //   note: req.body.note,
//     };
//     let result = reviewModel.create(data);
//     result
//       .then(function (value) {
//         console.log(value);
//         res.json(value);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
//   update(req, res) {
//     const data = {
//         idAccount: req.body.idAccount,
//         idRoom: req.body.idRoom,
//         rating: req.body.rating,
//         comment: req.body.comment,
//     //   note: req.body.note,
//     };
//     let result = reviewModel.update(req.params.id, data);
//     result
//       .then(function (value) {
//         console.log(value);
//         res.json(value);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
//   delete(req, res) {
//     let result = reviewModel.delete(req.params.id);
//     result
//       .then(function (value) {
//         console.log(value);
//         res.json(value);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
// }

// module.exports = new ReviewController();
const db = require("../models");
const { where } = require("sequelize");
const review = db.review;

class ReviewController {
  async get(req, res) {
    try {
      const reviews = await review.findAll();
      res.json(reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async find(req, res) {
    try {
      const review = await review.findByPk(req.params.id);
      if (review) {
        res.json(review);
      } else {
        res.status(404).json({ error: "Review not found" });
      }
    } catch (error) {
      console.error("Error fetching review:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async create(req, res) {
    try {
      const { roomId, userId, rating, comment, note } = req.body;
      console.log("log", roomId, userId, rating, comment, note);
      console.log("Request body:", req.body); // Log request body for debugging
      const newReview = await review.create({ roomId, userId, rating, comment, note });
      res.status(201).json(newReview);
    } catch (error) {
      console.error("Error creating review:", error.message);
      console.error("Stack trace:", error.stack); // Log stack trace
      res.status(500).json({ error: "Internal server error",details:error.message });
    }
  }

  async update(req, res) {
    try {
      const { idAccount, idRoom, rating, comment, note } = req.body;
      const [updated] = await review.update(
        { idAccount, idRoom, rating, comment, note },
        { where: { id: req.params.id } }
      );
      if (updated) {
        const updatedReview = await review.findByPk(req.params.id);
        res.json(updatedReview);
      } else {
        res.status(404).json({ error: "Review not found" });
      }
    } catch (error) {
      console.error("Error updating review:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async delete(req, res) {
    try {
      const deleted = await review.destroy({ where: { id: req.params.id } });
      if (deleted) {
        res.json({ message: "Review deleted" });
      } else {
        res.status(404).json({ error: "Review not found" });
      }
    } catch (error) {
      console.error("Error deleting review:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  async getReviews(req, res)  {
    try {
      const { roomId } = req.params;
      const reviews = await review.findAll({
        where: { roomId },
        include: [{
          model: db.user,
          attributes: ['username','avatar']
        }]
      });
      res.status(200).json(reviews);
    } catch (error) {
      console.error("Error getting reviews:", error.message);
      res.status(500).json({ error: "Internal server error", details: error.message });
    }
  };
   async calculateRatingStats(req, res)  {
    try {
      const reviews = await review.findAll(); // Fetch all reviews
      let totalStars = 0;
      let count = 0;
      const starsCount = [0, 0, 0, 0, 0]; // Array to store count of each star rating
  
      reviews.forEach(review => {
        totalStars += review.rating;
        count++;
        starsCount[review.rating - 1]++; // Increment count for respective star rating
      });
  
      // Calculate percentages
      const percentages = starsCount.map((count, index) => ({
        stars: index + 1,
        percent: count > 0 ? ((count / reviews.length) * 100).toFixed(2) : 0
      }));
  
      // Prepare response object
      const ratingStats = {
        totalStars,
        averageRating: count > 0 ? (totalStars / count).toFixed(2) : 0,
        ratingsCount: reviews.length,
        percentages
      };
  
      res.status(200).json(ratingStats); // Send JSON response with rating statistics
    } catch (error) {
      console.error('Error calculating rating stats:', error);
      res.status(500).json({ error: 'Internal Server Error' }); // Handle errors
    }
  };
}

module.exports = new ReviewController();