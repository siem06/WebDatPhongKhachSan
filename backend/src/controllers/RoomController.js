const roomModel = require("../config/db/models/Room");
const { get_Limit } = require('../config/db/models/model');
class RoomController {
  get(req, res) {
    let result = roomModel.get_all();
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
    let result = roomModel.find(req.params.id);
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
      typeRoom: req.body.typeRoom,
      status: req.body.status,
      description: req.body.description,
      amenities: req.body.amenities,
      note: req.body.note,
    };
    let result = roomModel.create(data);
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
      typeRoom: req.body.typeRoom,
      status: req.body.status,
      description: req.body.description,
      amenities: req.body.amenities,
      note: req.body.note,
    };
    let result = roomModel.update(req.params.id, data);
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
    let result = roomModel.delete(req.params.id);
    result
      .then(function (value) {
        console.log(value);
        res.json(value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // phân trang
  async pageNumbers(req, res) {
    try {
      const pageNumber = req.query.page || 1; // Get the requested page number from the query parameters
      const limit = 6; // Number of rooms per page
      const offset = (pageNumber - 1) * limit; // Calculate the offset

      const rooms = await get_Limit(limit, offset); // Fetch rooms with pagination
      console.log(rooms)
      res.json(rooms); // Send paginated rooms as JSON response
    } catch (error) {
      console.error('Error fetching paginated rooms:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  // xắp sếp giá
  async getRoomsSortedByPrice(req, res) {
    try {
      const { order } = req.params; // Lấy giá trị order từ URL params
      const lowercaseOrder = order.trim().toLowerCase();
      // Chuyển đổi sang chữ thường

      console.log("Order:", lowercaseOrder); // In ra để kiểm tra order nhận được từ URL

      let rooms;
      if (lowercaseOrder === 'asc') { // So sánh với 'asc'
        rooms = await roomModel.getSortedByPriceAsc();
      } else if (lowercaseOrder === 'desc') { // So sánh với 'desc'
        rooms = await roomModel.getSortedByPriceDesc();
      } else {
        // Nếu order không hợp lệ, trả về mã lỗi 400 và thông báo lỗi
        return res.status(400).json({ error: 'Invalid order parameter' });
      }

      res.json(rooms); // Trả về danh sách phòng đã sắp xếp theo giá
    } catch (error) {
      console.error('Error sorting rooms by price:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  // lọc loại phòng
  async getRoomsByType(req, res) {
    try {
      const { type } = req.params;
      const rooms = await roomModel.getRoomType(parseInt(type));
      res.json(rooms);
    } catch (error) {
      console.error('Error fetching rooms by type:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  //  lọc đánh giá
  async getReviewByRoomId(req, res) {
    try {
      const { rating } = req.params;
      const reviews = await roomModel.get_all_with_reviews(rating);
      console.log(rating)
      res.json(reviews);
    } catch (error) {
      console.error('Error fetching reviews for room:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = new RoomController();
