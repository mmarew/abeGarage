import React, { useState } from "react";
import { TextField, Button, Select, MenuItem } from "@mui/material";
import axios from "axios";
const targetUrl = import.meta.env.VITE_REACT_APP_URL;

const LoginForm = () => {
  const [Processing, setProcessing] = useState(false);
  let Data = { Password: null, Email: null, Error: null };
  const [formInput, setformInput] = useState(Data);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setProcessing(true);
      console.log("formInput", formInput);
      let Results = await axios.post(targetUrl + "/login", formInput);
      console.log("Results===", Results);
      setProcessing(false);
      setformInput(Data);
      console.log(Results.data.Messages);
    } catch (error) {
      setProcessing(false);
      setformInput({
        ...formInput,
        Error: error.message,
      });
      console.log("error", error);
    }
    // Handle form submission logic here
  };
  let handleInputChange = (e) => {
    const { name, value } = e.target;
    setformInput({ ...formInput, Error: null, [name]: value });
  };
  let role = [
    "admin",
    "employee",
    "manager",
    "supervisor",
    "technician",
    "driver",
  ];

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "300px",
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "10px",
        margin: "20px auto",
      }}
      onSubmit={handleSubmit}
    >
      <h4>Abe Garage Login form </h4>
      <TextField
        required
        name="Email"
        label="Email"
        variant="outlined"
        value={formInput.Email}
        onChange={handleInputChange}
      />
      <TextField
        required
        name="Password"
        label="Password"
        variant="outlined"
        type="password"
        value={formInput.Password}
        onChange={handleInputChange}
      />
      <h5 style={{ margin: "auto" }}>Choose Role</h5>
      <Select
        required
        name="Role"
        value={formInput.Role}
        onChange={handleInputChange}
        label="Role"
      >
        {role.map((role) => {
          return <MenuItem value={role}>{role}</MenuItem>;
        })}
      </Select>
      {!Processing ? (
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      ) : (
        <Button variant="contained" disabled>
          Processing...
        </Button>
      )}
      {formInput.Error && (
        <div style={{ color: "red", margin: "10px" }}>{formInput.Error}</div>
      )}
    </form>
  );
};
export default LoginForm;
