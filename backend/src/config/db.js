module.exports = {
  HOST: "localhost",
  USER: "hotel3",
  PASSWORD: "12345678",
  DB: "hotel",
  // HOST: "localhost",
  // USER: "root",
  // PASSWORD: "",
  // DB: "hotel",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
