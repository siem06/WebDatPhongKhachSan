const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const handlebars = require("express-handlebars");
const route = require("./routes");
const multer = require("multer");
const session = require("express-session");
const path = require("path");

dotenv.config();

const app = express();
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "static")));
app.use(morgan("combined"));
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

route(app);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
