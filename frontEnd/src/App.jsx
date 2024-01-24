import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./assets/Login";
import AddEmployees from "./assets/AddEmployees";
import Home from "./assets/Home";
import "./App.css";
import NavigationBar from "./assets/NavBar.jsx";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<Home />} />
      <Route path="/add-employee" element={<AddEmployees />} />
    </Routes>
  );
}

export default App;
