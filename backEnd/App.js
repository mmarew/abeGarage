const cors = require("cors");
require("dotenv").config();
// import expresss module
const express = require("express");
let app = express(); // Set up a listener on the imported express app
const PORT = process.env.PORT || 4000;
// const mysql = require("mysql");
const mysql = require("mysql2");
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.use(cors()); // Middleware to parse incoming JSON requests
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ name: "marew" });
});

app.get("/data", (req, res) => {
  // Assuming data is to be received from a query parameter
  const data = req.query.data;
  res.json({ receivedData: data });
});
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
};

const connection = mysql.createConnection(dbConfig);

connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});
