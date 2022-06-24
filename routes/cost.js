const { getCost } = require("../controller");
const route = require("express").Router();

route.get("/", getCost);

module.exports = route;
