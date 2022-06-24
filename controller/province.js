const axios = require("axios").default;

const getProvince = (req, res, next) => {
  axios
    .get("https://api.rajaongkir.com/starter/province", {
      headers: { key: process.env.API_RAJAONGKIR },
    })
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      next(error);
    });
};

module.exports = getProvince;
