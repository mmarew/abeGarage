// EmployeeRegistrationForm.js
import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import axios from "axios";

const roles = ["Admin", "Manager", "Employee"];

const EmployeeRegistrationForm = () => {
  const [employee, setEmployee] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your backend API with the employee data
      const response = await axios.post("your-api-endpoint", employee);
      console.log("Registration successful", response.data);
      // You can handle success accordingly (e.g., redirect or show a success message)
    } catch (error) {
      console.error("Registration failed", error.message);
      // You can handle errors accordingly (e.g., show an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Full Name"
        type="text"
        name="fullName"
        value={employee.fullName}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone"
        type="tel"
        name="phone"
        value={employee.phone}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        type="email"
        name="email"
        value={employee.email}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={employee.password}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Role</InputLabel>
        <Select
          label="Role"
          name="role"
          value={employee.role}
          onChange={handleChange}
          required
        >
          {roles.map((role) => (
            <MenuItem key={role} value={role}>
              {role}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </form>
  );
};

export default EmployeeRegistrationForm;
