// const roomModel = require("../config/db/models/Room");
// const { get_Limit } = require('../config/db/models/model');
// class RoomController {
//   get(req, res) {
//     let result = roomModel.get_all();
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
//     let result = roomModel.find(req.params.id);
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
//       typeRoom: req.body.typeRoom,
//       status: req.body.status,
//       description: req.body.description,
//       idService: req.body.idService,
//       note: req.body.note,
//     };
//     let result = roomModel.create(data);
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
//       typeRoom: req.body.typeRoom,
//       status: req.body.status,
//       description: req.body.description,
//       idService: req.body.idService,
//       note: req.body.note,
//     };
//     let result = roomModel.update(req.params.id, data);
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
//     let result = roomModel.delete(req.params.id);
//     result
//       .then(function (value) {
//         console.log(value);
//         res.json(value);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
//   // phân trang
//   async pageNumbers(req, res) {
//     try {
//       const pageNumber = req.query.page || 1; // Get the requested page number from the query parameters
//       const limit = 6; // Number of rooms per page
//       const offset = (pageNumber - 1) * limit; // Calculate the offset

//       const rooms = await get_Limit(limit, offset); // Fetch rooms with pagination
//       console.log(rooms)
//       res.json(rooms); // Send paginated rooms as JSON response
//     } catch (error) {
//       console.error('Error fetching paginated rooms:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   }
//   // xắp sếp giá
//   async getRoomsSortedByPrice(req, res) {
//     try {
//       const { order } = req.params; // Lấy giá trị order từ URL params
//       const lowercaseOrder = order.trim().toLowerCase();
//       // Chuyển đổi sang chữ thường

//       console.log("Order:", lowercaseOrder); // In ra để kiểm tra order nhận được từ URL

//       let rooms;
//       if (lowercaseOrder === 'asc') { // So sánh với 'asc'
//         rooms = await roomModel.getSortedByPriceAsc();
//       } else if (lowercaseOrder === 'desc') { // So sánh với 'desc'
//         rooms = await roomModel.getSortedByPriceDesc();
//       } else {
//         // Nếu order không hợp lệ, trả về mã lỗi 400 và thông báo lỗi
//         return res.status(400).json({ error: 'Invalid order parameter' });
//       }

//       res.json(rooms); // Trả về danh sách phòng đã sắp xếp theo giá
//     } catch (error) {
//       console.error('Error sorting rooms by price:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   }
//   // lọc loại phòng
//   async getRoomsByType(req, res) {
//     try {
//       const { type } = req.params;
//       const rooms = await roomModel.getRoomType(parseInt(type));
//       res.json(rooms);
//     } catch (error) {
//       console.error('Error fetching rooms by type:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   }
//   //  lọc đánh giá
//   async getReviewByRoomId(req, res) {
//     try {
//       const { rating } = req.params;
//       const reviews = await roomModel.get_all_with_reviews(rating);
//       console.log(rating)
//       res.json(reviews);
//     } catch (error) {
//       console.error('Error fetching reviews for room:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   }
// }

// module.exports = new RoomController();
// const bookingModel = require("../config/db/models/Booking");
// class BookingController {
//   get(req, res) {
//     let result = bookingModel.get_all_booking();
//     result
//       .then(function (value) {
//         // console.log(value);
//         res.json(value);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
//   find(req, res) {
//     let result = bookingModel.find(req.params.id);
//     result
//       .then(function (value) {
//         // console.log(value);
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
//       totalPrice: req.body.totalPrice,
//       checkinDate: req.body.checkinDate,
//       checkoutDate: req.body.checkoutDate,
//       statusBooking: req.body.statusBooking,
//       note: req.body.note,
//     };
//     let result = bookingModel.create(data);
//     result
//       .then(function (value) {
//         // console.log(value);
//         res.json(value);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
//   update(req, res) {
//     const data = {
//       idAccount: req.body.idAccount,
//       idRoom: req.body.idRoom,
//       totalPrice: req.body.totalPrice,
//       checkinDate: req.body.checkinDate,
//       checkoutDate: req.body.checkoutDate,
//       statusBooking: req.body.statusBooking,
//       note: req.body.note,
//     };
//     Object.keys(data).forEach((key) => {
//       if (data[key] === undefined || data[key] === null) {
//         delete data[key];
//       }
//     });
//     let result = bookingModel.update(req.params.id, data);
//     result
//       .then(function (value) {
//         // console.log(value);
//         res.json(value);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
//   delete(req, res) {
//     let result = bookingModel.delete(req.params.id);
//     result
//       .then(function (value) {
//         // console.log(value);
//         res.json(value);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
//   createBooking(req, res) {
//     const data = {
//       idAccount: req.body.idAccount,
//       // idRoom: req.body.idRoom,
//       totalPrice: req.body.totalPrice,
//       totalRoom: req.body.totalRoom,
//       totalDate: req.body.totalDate,
//       checkinDate: req.body.checkinDate,
//       checkoutDate: req.body.checkoutDate,
//       statusBooking: 1,
//       note: req.body.note,
//       bookingDate: new Date(),
//       methodPay: req.body.methodPay,
//     };

//     bookingModel
//       .createBooking(data)
//       .then(function (newBooking) {
//         res.json(newBooking);
//       })
//       .catch(function (error) {
//         console.error("Error creating booking:", error);
//         res.status(500).json({ error: "Error creating booking" });
//       });
//   }
//   getBookingByIdA(req, res) {
//     const userId = req.params.id;
//     console.log("id: " + userId);

//     let result = bookingModel.getBookingByIdA(userId);
//     result
//       .then(function (value) {
//         res.json(value);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
// }
const db = require("../models");
const { where } = require("sequelize");
const room = db.room;
class RoomController {
  async get(req, res) {
    try {
      const rooms = await room.findAll();
      res.json(rooms);
    } catch (error) {
      console.error("Error fetching rooms:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  getRoomInfo(req, res) {
    room
      .getRoomImg(req.params.id)
      .then((value) => {
        console.log(value);
        res.json(value);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async find(req, res) {
    try {
      const room = await db.room.findByPk(req.params.id);
      res.json(room);
    } catch (error) {
      console.error("Error fetching room:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  async create(req, res) {
    try {
      const { type, price, status, description, note, service } = req.body;

      const data = { type, price, status, description, note };

      const newRoom = await db.room.create(data);

      if (service && service.length > 0) {
        const services = await db.service.findAll({
          where: {
            typeService: {
              [db.Sequelize.Op.or]: service,
            },
          },
        });
        await newRoom.addServices(services);
      }

      res.json(newRoom);
    } catch (error) {
      console.error("Error creating room:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  async update(req, res) {
    try {
      const roomId = req.params.id;
      const data = {
        type: req.body.type,
        price: req.body.price,
        status: req.body.status,
        description: req.body.description,
        note: req.body.note,
      };
      await room.update(data, { where: { id: roomId } });
      // Lấy lại thông tin Room sau khi cập nhật (bao gồm cả images và services)
    const updatedRoom = await room.findByPk(roomId, {
      include: [
        {
          model: db.image,
          as: 'images',
          attributes: ['id', 'roomId', 'img'],
        },
        {
          model: db.service,
          as: 'services',
        },
      ],
    });
      res.json({ message: "Room updated successfully",room:updatedRoom });
    } catch (error) {
      console.error("Error updating room:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  async delete(req, res) {
    try {
      const roomId = req.params.id;
      await room.destroy({ where: { id: roomId } });
      res.json({ message: "Room deleted successfully" });
    } catch (error) {
      console.error("Error deleting room:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  async pageNumbers(req, res) {
    try {
      const pageNumber = req.query.page || 1;
      const limit = 1000;
      const offset = (pageNumber - 1) * limit;

      const rooms = await room.findAll({
        limit,
        offset,
        include: [
          {
            model: db.image,
            as: "images",
            attributes: ["id", "roomId", "img"],
          },
          {
            model: db.service,
            as: "services",
          },
        ],
      });
      res.json(rooms);
    } catch (error) {
      console.error("Error fetching paginated rooms:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  async getRoomsSortedByPrice(req, res) {
    try {
      const { order } = req.params;
      const sortOrder = order.toLowerCase() === "desc" ? "DESC" : "ASC";

      const rooms = await room.findAll({
        order: [["price", sortOrder]],
        include: [{ model: db.image, as: "images", attributes: ["id", "roomId", "img"], }]
      });
      res.json(rooms);
    } catch (error) {
      console.error("Error sorting rooms by price:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  async getRoomsByType(req, res) {
    try {
      const { type } = req.params;
      const rooms = await room.findAll({
         where: { type: type },
         include: [{ model: db.image, as: "images", attributes: ["id", "roomId", "img"], }]
      });
      res.json(rooms);
    } catch (error) {
      console.error("Error fetching rooms by type:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  async getReviewByRoomId(req, res) {
    try {
      const { rating } = req.params;
      const reviews = await room.findAll({

        include: [
          {
            model: db.review, as: "reviews", where: { rating: rating }, required: true,
          },
          {
            model: db.image,
            as: "images",
            required: false,
          },
        ],
      });
      res.json(reviews);
    } catch (error) {
      console.error("Error fetching reviews for room:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  async getRoomRatingStats(req, res) {
    const { roomId } = req.params;

    try {
      // Fetch all reviews for the specified room
      const reviews = await db.review.findAll({
        where: { roomId },
      });

      // Calculate the total number of stars and count of reviews
      let totalStars = 0;
      let count = 0;

      reviews.forEach(review => {
        totalStars += review.rating;
        count++;
      });

      // Calculate the average rating
      const averageRating = count > 0 ? (totalStars / count).toFixed(2) : 0;

      // Prepare the result object
      const result = {
        averageRating,
        ratingsCount: reviews.length
      };

      // Send the result as JSON response
      res.status(200).json(result);
    } catch (error) {
      console.error("Error calculating average rating:", error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  async getRoomUtilities(req, res) {
    try {
      const ress = await db.service.findAll({
        attributes: ['utilities'],
      });
  
      res.status(200).json(ress);
    } catch (error) {
      console.error("Error fetching room utilities:", error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
}

module.exports = new RoomController();
