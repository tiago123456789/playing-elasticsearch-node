const express = require("express");
const app = express();
require("dotenv").config();
const routesApp = require("../routes");
require("./ElasticSearch");

// Enable middleware to parse data for json.
app.use(express.json());

routesApp(app);

module.exports = app;