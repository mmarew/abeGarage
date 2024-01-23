const mysql = require("mysql2/promise");
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "AbeGaragePMA",
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
