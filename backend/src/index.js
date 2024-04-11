const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const handlebars = require("express-handlebars");
const route = require("./routes");
const multer = require("multer");
const session = require("express-session");
const path = require("path");
const fs = require("fs");
const { google } = require("googleapis");
const apiKey = require("./key.json");

dotenv.config();

const app = express();
const upload = multer();
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));
app.use(morgan("combined"));
// app.use(auth);
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

route(app);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
