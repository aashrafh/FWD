// Setup empty JS object to act as endpoint for all routes
projectData = {};

const express = require("express");
const bodyParser = require("body-parser"); // middle-ware layer to handle a POST request
const cors = require("cors");

// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const server = app.listen(8000, () => {
  console.log("server is listening on port:", 8000);
});

app.get("/all", (req, res) => {
  res.send(projectData);
});

app.post("/add", (req, res) => {
  projectData.temperature = req.body.temperature;
  projectData.date = req.body.date;
  projectData.userResponse = req.body.userResponse;
  res.send(projectData);
  console.log(projectData);
});
