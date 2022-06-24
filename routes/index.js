const route = require("express").Router();
const provinceRoute = require("./province");
const cityRoute = require("./city");
const costRoute = require("./cost");

route.use("/province", provinceRoute);
route.use("/city", cityRoute);
route.use("/cost", costRoute);

module.exports = route;
