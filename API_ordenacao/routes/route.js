const express = require("express");
const routerApp = express.Router();

const appSort = require("../controller/controllerSort");

routerApp.post("/sort", appSort.sort);

module.exports = routerApp;