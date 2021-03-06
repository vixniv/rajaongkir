const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
const routes = require("./routes");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.get("/", (req, res) => {
  res.send(
    "Thank you for using this app, docs: https://github.com/vixniv/rajaongkir"
  );
});

app.all("*", (req, res) => {
  res.send("404 not found - available routes /province, /city, /cost");
});

app.use((err, req, res, next) => {
  if (err.response.data.rajaongkir.status.code === 400) {
    return res.status(400).json({
      status: "400",
      message: err.response.data.rajaongkir.status.description,
    });
  }

  res.status(500).json({
    status: "500",
    message: err.message,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
