const Model = require("../models/model");
const db = require("../db");
module.exports = new (class BookingModel extends Model {
  constructor() {
    super("booking");
  }
  get_all_booking() {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT
          b.id AS bookingId,
          b.idAccount,
          b.idRoom,
          b.totalPrice,
          b.checkinDate,
          b.checkoutDate,
          b.statusBooking,
          b.note AS bookingNote,
          r.id AS roomId,
          r.typeRoom,
          r.price AS roomPrice,
          r.status AS roomStatus,
          r.description,
          r.amenities,
          r.note AS roomNote,
          a.id AS accountId,
          a.useName,
          a.password,
          a.email,
          a.phone,
          a.avatar,
          a.status AS accountStatus,
          a.role,
          a.createDate,
          a.birthday
        FROM booking b
        JOIN room r ON b.idRoom = r.id
        JOIN account a ON b.idAccount = a.id
      `;

      db.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
// Lấy thông tin một booking theo id
// getBookingById(req, res) {
//   const bookingId = req.params.id;
//   console.log(bookingId)
//   const query = `
//       SELECT
//           b.id AS bookingId,
//           b.idAccount,
//           b.idRoom,
//           b.totalPrice,
//           b.checkinDate,
//           b.checkoutDate,
//           b.statusBooking,
//           b.note AS bookingNote,
//           r.id AS roomId,
//           r.typeRoom,
//           r.price AS roomPrice,
//           r.status AS roomStatus,
//           r.description,
//           r.amenities,
//           r.note AS roomNote,
//           a.id AS accountId,
//           a.useName,
//           a.password,
//           a.email,
//           a.phone,
//           a.avatar,
//           a.status AS accountStatus,
//           a.role,
//           a.createDate,
//           a.birthday
//       FROM booking b
//       JOIN room r ON b.idRoom = r.id
//       JOIN account a ON b.idAccount = a.id
//       WHERE b.id = ?
//   `;

//   db.query(query, [bookingId], (err, results) => {
//       if (err) {
//           res.status(500).send(err);
//       } else if (results.length === 0) {
//           res.status(404).send({ message: 'Booking not found' });
//       } else {
//           res.status(200).json(results[0]);
//       }
//   });
// }
// Tạo một booking mới
// createBooking(req, res) {
//   const { idAccount, idRoom, totalPrice, checkinDate, checkoutDate, statusBooking, note } = req.body;

//   const query = `
//       INSERT INTO booking (idAccount, idRoom, totalPrice, checkinDate, checkoutDate, statusBooking, note)
//       VALUES (?, ?, ?, ?, ?, ?, ?)
//   `;

//   db.query(query, [idAccount, idRoom, totalPrice, checkinDate, checkoutDate, statusBooking, note], (err, result) => {
//       if (err) {
//           res.status(500).send(err);
//       } else {
//           res.status(201).send({ message: 'Booking created successfully', bookingId: result.insertId });
//       }
//   });
// }
createBooking(data) {
  return new Promise(function (myResolve, myReject) {
    db.query(
      "INSERT INTO booking SET ?",
      data,
      function (error, result) {
        if (error) {
          myReject(error);
        } else {
          const newBooking = { id: result.insertId, ...data };
          myResolve(newBooking);
        }
      }
    );
  });
}

})();
