let express = require("express");
const { pool } = require("./Database");
let app = express.Router();

app.post("/add_employee", async (req, res) => {
  console.log("req.body", req.body);
  try {
    const { firstName, lastName, position, Email } = req.body;
    let select = `SELECT * FROM employees WHERE Email = '${Email}'`;
    let [result] = await pool.query(select);
    if (result.length > 0) {
      return res.json({ Messages: "Email already exists" });
    }
    let insert = `INSERT INTO employees (first_name, last_name, position, Email) VALUES ('${firstName}', '${lastName}', '${position}', '${Email}');`;
    // execute the query and send the response
    let [responces] = await pool.query(insert);

    if (responces.affectedRows > 0) {
      res.json({ Messages: "success" });
    } else {
      throw Error("Something went wrong");
    }

    // res.send(result);
  } catch (error) {
    console.log(error.message);
    res.json({ Messages: error.Error });
  }
  // res.json({ Messages: "Connected" });
});

module.exports = app;
