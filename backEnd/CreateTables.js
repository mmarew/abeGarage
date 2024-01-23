let { pool } = require("./Database");
let createTables = async () => {
  let createTablesSql = `CREATE TABLE IF NOT EXISTS employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    position VARCHAR(255),
    Email VARCHAR(100) UNIQUE NOT NULL
);
`;

  await pool.query(createTablesSql);
};
module.exports.createTables = createTables;
