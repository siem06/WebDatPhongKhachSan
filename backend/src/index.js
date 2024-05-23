const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const handlebars = require("express-handlebars");
const route = require("./routes");
const multer = require("multer");
const session = require("express-session");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { options } = require("./routes/Account");

dotenv.config();
const app = express();
const paypal = require("paypal-rest-sdk");
paypal.configure({
  mode: "sandbox",
  client_id:
    "AVxHtK_CCRhl5wJzy0DSfSCSP1PbOIyatGFLX1ty2daEyj02dvFJDOCcL7h5QLv3jceUwexB3tFVd1sr",
  client_secret:
    "EGEfy-Q47Pax4ziuIQqslxOJIiSbn9A1FHSrSmEG-cZNCVFjvVLNwGufKssORk5q-v0r7HqkZwO-kqya",
});
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionSuccessStatus: 200,
  })
);
app.use(
  session({
    secret: "somesecret",
    cookie: {},
    resave: true,
    saveUninitialized: false,
    store: new session.MemoryStore(),
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "static")));
app.use(morgan("combined"));
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

route(app);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
