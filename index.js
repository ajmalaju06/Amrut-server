import express from "express";
import bodyParser from "body-parser";
import schema from "./data/schema";
import api from "./endpoints/index";

const app = express();
const port = 3000;
app.set("port", port);
var server = require("http").createServer(app);

server.listen(port);
console.log("Server listening on localhost:" + port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

// Register Api Routes
app.use(api.path, api.handler);

schema.sequelize
  .sync()
  .then(() => {
    console.log("Sequelize synchronized successfully.......");
  })
  .catch((error) => console.log(error));
