const express = require("express");
const routerApp = express.Router();

const appMagnitude = require("../controller/controllerMagnitudes");

routerApp.post("/magnitudes", appMagnitude.magnitudes);

module.exports = routerApp;