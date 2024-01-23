// EmployeeForm.js
import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import axios from "axios";
const targetUrl = import.meta.env.VITE_REACT_APP_URL;

const EmployeeForm = () => {
  let Data = {
    firstName: "",
    lastName: "",
    position: "",
    Email: "",
    // Add more fields as needed
  };
  const [employeeData, setEmployeeData] = useState(Data);
  const REACT_APP_URL = "localhost:4000"; // process.env.REACT_APP_URL ||
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic to handle the form submission (e.g., send data to server)
    console.log("Submitted:", employeeData);
    // Reset form data if needed
    console.log("targetUrl", targetUrl);
    let Responces = await axios.post(targetUrl + "/employees/add_employee", {
      ...employeeData,
    });
    console.log("Responces", Responces);
    setEmployeeData(Data);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" align="center" gutterBottom>
        Register Employee
      </Typography>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          padding: "30px",
          backgroundColor: "white",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="First Name"
          name="firstName"
          value={employeeData.firstName}
          onChange={handleChange}
          required
        />
        <br /> <br />
        <TextField
          label="Last Name"
          name="lastName"
          value={employeeData.lastName}
          onChange={handleChange}
          required
        />
        <br /> <br />
        <TextField
          label="Email"
          name="Email"
          value={employeeData.Email}
          onChange={handleChange}
          required
        />
        <br /> <br />
        <TextField
          label="Position"
          name="position"
          value={employeeData.position}
          onChange={handleChange}
          required
        />
        <br /> <br />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default EmployeeForm;
