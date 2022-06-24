const axios = require("axios").default;

const getCost = (req, res, next) => {
  let { origin, destination, weight, courier } = req.query;
  weight = +weight;

  if (!origin || !destination || !weight || !courier) {
    res.json({ message: "Please fill all field" });
    return;
  }

  axios
    .post(
      `https://api.rajaongkir.com/starter/cost`,
      { origin, destination, weight, courier },
      {
        headers: { key: process.env.API_RAJAONGKIR },
      }
    )
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      next(error);
    });
};

module.exports = getCost;
