import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.page";
// import About from "./components/About";
import PageNotFound from "./components/Errors/PageNotFound";
import AdminLogin from "./components/LoginComponent/AdminLogin";
import UserLogin from "./components/LoginComponent/UserLogin";
import Dasboard from "./components/DashboardContainer/Dasboard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/appdashboard" element={<Home />} />
      <Route path="/dashboard" element={<Dasboard />} />

      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/userlogin" element={<UserLogin />} />
    </Routes>
  );
}

export default App;
