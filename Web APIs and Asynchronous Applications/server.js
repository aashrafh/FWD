const express = require("express");
const bodyParser = require("body-parser"); // middle-ware layer to handle a POST request
// Cors for cross origin allowance
const cors = require("cors");
const port = 8080;
const app = express();

app.use(express.static("demo"));
const server = app.listen(port, () =>
  console.log(`server is running on localhost:${port}`)
);
// connect the other packages to our app in our code with the .use() method
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
