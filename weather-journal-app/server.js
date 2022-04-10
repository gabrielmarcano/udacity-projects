// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = "8000";
function feedback() {
    console.log("Server running");
    console.log(`Server running on localhost: ${port}`);
}
const server = app.listen(port, feedback);

// GET Route To Return Endpoint Data
app.get("/data", (request, response) => {
    response.send(projectData);
});

// POST Route To Add Data to projectData
app.post("/add", (request, response) => {
    projectData = request.body;
    console.log(projectData);
});
