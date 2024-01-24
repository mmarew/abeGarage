const cors = require("cors");
require("dotenv").config();
const { pool } = require("./Database");
let { createTables } = require("./CreateTables");
// import expresss module
const express = require("express");
let app = express(); // Set up a listener on the imported express app
// let Router = express.Router();
const PORT = process.env.PORT || 4000;
createTables();
// const mysql = require("mysql");
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.use(cors()); // Middleware to parse incoming JSON requests
app.use(express.json());
app.use("/login", require("./Login"));
app.use("/employees", require("./Employee"));
app.get("/", (req, res) => {
  res.json({ name: "marew" });
});

app.get("/data", (req, res) => {
  // Assuming data is to be received from a query parameter
  const data = req.query.data;
  res.json({ receivedData: data });
});
