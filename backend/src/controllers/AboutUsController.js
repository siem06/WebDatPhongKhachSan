// const db = require("../models"); // Import các mô hình Sequelize

// const Aboutus = ; // Lấy mô hình Aboutus từ các mô hình đã được định nghĩa

// // Controller để tạo một bản ghi mới về About Us
// exports.create = (req, res) => {
//   // Lấy thông tin từ yêu cầu
//   const { information, status } = req.body;

//   // Tạo một bản ghi mới với thông tin từ yêu cầu
//   const aboutus = {
//     information: information,
//     status: status,
//   };

//   // Lưu bản ghi mới vào cơ sở dữ liệu
//   Aboutus.create(aboutus)
//     .then((data) => {
//       res.send(data); // Trả về dữ liệu đã được tạo
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the About Us.",
//       });
//     });
// };

// // Controller để lấy thông tin về About Us
// exports.findOne = (req, res) => {
//   // Lấy id từ yêu cầu
//   const id = req.params.id;

//   // Tìm bản ghi với id tương ứng trong cơ sở dữ liệu
//   Aboutus.findByPk(id)
//     .then((data) => {
//       res.send(data); // Trả về thông tin của bản ghi đã tìm thấy
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Error retrieving About Us with id=" + id,
//       });
//     });
// };

// // Controller để cập nhật thông tin về About Us
// exports.update = (req, res) => {
//   // Lấy id từ yêu cầu
//   const id = req.params.id;

//   // Lấy thông tin mới từ yêu cầu
//   const { information, status } = req.body;

//   // Cập nhật bản ghi với thông tin mới
//   Aboutus.update(
//     { information: information, status: status },
//     {
//       where: { id: id },
//     }
//   )
//     .then((num) => {
//       if (num == 1) {
//         res.send({
//           message: "About Us was updated successfully.",
//         });
//       } else {
//         res.send({
//           message: `Cannot update About Us with id=${id}. Maybe About Us was not found or req.body is empty!`,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Error updating About Us with id=" + id,
//       });
//     });
// };

// // Controller để xóa thông tin về About Us
// exports.delete = (req, res) => {
//   // Lấy id từ yêu cầu
//   const id = req.params.id;

//   // Xóa bản ghi với id tương ứng
//   Aboutus.destroy({
//     where: { id: id },
//   })
//     .then((num) => {
//       if (num == 1) {
//         res.send({
//           message: "About Us was deleted successfully!",
//         });
//       } else {
//         res.send({
//           message: `Cannot delete About Us with id=${id}. Maybe About Us was not found!`,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Could not delete About Us with id=" + id,
//       });
//     });
// };

// // Controller để lấy tất cả thông tin về About Us
// exports.findAll = (req, res) => {
//   // Tìm tất cả các bản ghi trong cơ sở dữ liệu
//   Aboutus.findAll()
//     .then((data) => {
//       res.send(data); // Trả về danh sách tất cả các bản ghi
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving About Us.",
//       });
//     });
// };
