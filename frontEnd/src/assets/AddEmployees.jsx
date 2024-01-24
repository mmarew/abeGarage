// EmployeeForm.js
import React, { useState } from "react";
import { TextField, Button, Container, Typography, Chip } from "@mui/material";
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
  const [Errors, setErrors] = useState(null);
  const [employeeData, setEmployeeData] = useState(Data);

  const handleChange = (e) => {
    setErrors(null);
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic to handle the form submission (e.g., send data to server)
    try {
      setProcessing(true);
      console.log("Submitted:", employeeData);
      // Reset form data if needed
      console.log("targetUrl", targetUrl);
      // return;
      let Responces = await axios.post(targetUrl + "/employees/add_employee", {
        ...employeeData,
      });
      console.log("Responces", Responces);
      let { Messages } = Responces.data;
      if (Messages === "success") setEmployeeData(Data);
      else {
        setErrors(Messages);
        // alert(Messages);
      }
      setProcessing(false);
    } catch (error) {
      setProcessing(false);
      setErrors(error.message);
    }
  };
  const [Processing, setProcessing] = useState(false);

  return (
    <Container maxWidth="sm">
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          marginTop: "30px",
          padding: "20px 30px",
          backgroundColor: "white",
          gap: "20px",
        }}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Register Employee
        </Typography>
        <TextField
          label="First Name"
          name="firstName"
          value={employeeData.firstName}
          onChange={handleChange}
          required
        />

        <TextField
          label="Last Name"
          name="lastName"
          value={employeeData.lastName}
          onChange={handleChange}
          required
        />

        <TextField
          label="Email"
          name="Email"
          value={employeeData.Email}
          onChange={handleChange}
          required
        />

        <TextField
          label="Position"
          name="position"
          value={employeeData.position}
          onChange={handleChange}
          required
        />

        {!Processing ? (
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        ) : (
          <Button variant="contained" disabled>
            Processing...
          </Button>
        )}
        {Errors && (
          <Chip
            label={Errors}
            style={{ color: "red", fontSize: "20px" }}
          ></Chip>
        )}
      </form>
    </Container>
  );
};

export default EmployeeForm;
