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
  res.send("Hello World!");
});

app.all("*", (req, res) => {
  res.send("404 Not Found");
});

app.use((err, req, res, next) => {
  res.status(500).json({
    status: "500",
    message: err.message,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
