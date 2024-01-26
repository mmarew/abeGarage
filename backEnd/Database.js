const mysql = require("mysql2/promise");
require("dotenv").config();

const dbConfig = {
  // host: process.env.host,
  host: "host",
  // user: process.env.user,
  user: "demo1",
  // password: process.env.password,
  password: "+M(/BirE9w9]v(hqc",
  // database: process.env.database,
  database: "demo1",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};
let pool = mysql.createPool(dbConfig);
pool.getConnection((error, connection) => {
  const pool = mysql.createPool(dbConfig);
  if (error) throw error;
  console.log("Successfully connected to the database.");
  connection.release();
});
module.exports.pool = pool;
