app.post("/employees/add_employee", async (req, res) => {
  console.log("req.body", req.body);
  try {
    const { firstName, lastName, position, Email } = req.body;
    let insert = `INSERT INTO employees (first_name, last_name, position, Email) VALUES ('${firstName}', '${lastName}', '${position}', '${Email}');`;
    // execute the query and send the response
    let [responces] = await pool.query(insert);
    if (err) {
      res.json({ Messages: "error" });
    } else {
      if (responces.affectedRows > 0) {
        res.json({ Messages: "success" });
      } else {
        throw Error("Something went wrong");
      }

      // res.send(result);
    }
  } catch (error) {
    console.log(error);
    res.json({ Messages: "error" });
  }
  // res.json({ Messages: "Connected" });
});
