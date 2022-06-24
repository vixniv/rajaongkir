const { getCity } = require("../controller");
const route = require("express").Router();

route.get("/", getCity);

module.exports = route;
