const { getProvince } = require("../controller");
const route = require("express").Router();

route.get("/", getProvince);

module.exports = route;
