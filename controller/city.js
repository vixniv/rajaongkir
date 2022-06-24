const axios = require("axios").default;

const getCity = (req, res, next) => {
  const { province } = req.query;
  axios
    .get(`https://api.rajaongkir.com/starter/city?province=${province}`, {
      headers: { key: process.env.API_RAJAONGKIR },
    })
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      next(error);
    });
};

module.exports = getCity;
