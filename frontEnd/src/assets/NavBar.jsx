// NavigationBar.js
import React from "react";
import { AppBar, Toolbar, Typography, Button, makeStyles } from "@mui/material";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  let classes = {
    appBar: {
      display: "flex",
      justifyContent: "space-between",
    },
    title: {
      flexGrow: 1,
    },
  };
  let linkStayle = { textDecoration: "none", color: "white" };
  return (
    <AppBar position="static">
      <Toolbar sx={classes.appBar}>
        <div>
          <Typography variant="h6" sx={classes.title}>
            <Link to="/" style={linkStayle}>
              Abie Garage
            </Link>
          </Typography>
        </div>
        <div>
          <Button color="inherit"></Button>
          <Button color="inherit">
            <Link style={linkStayle} to="/add-employee">
              Add Employee
            </Link>
          </Button>{" "}
          <Button color="inherit">
            <Link style={linkStayle} to="/login">
              Login
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
