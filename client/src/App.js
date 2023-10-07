import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.page";
// import About from "./components/About";
import PageNotFound from "./components/Errors/PageNotFound";
import AdminLogin from "./components/LoginComponent/AdminLogin";
import UserLogin from "./components/LoginComponent/UserLogin";
import Dasboard from "./components/DashboardContainer/Dasboard";
import Login from "./components/LoginComponent/Login";

import { useState } from "react";

function App() {
  const tempTab = [];
  const [appTabs, setAppTabs] = useState(tempTab);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route
        path="/appdashboard"
        element={
          <Home
            setAppTabs={setAppTabs}
            appTabs={appTabs}
            windowWidth={windowWidth}
          />
        }
      />
      <Route
        path="/dashboard"
        element={
          <Dasboard
            setAppTabs={setAppTabs}
            appTabs={appTabs}
            windowWidth={windowWidth}
          />
        }
      />
      <Route path="/login" element={<Login />} />

      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/userlogin" element={<UserLogin />} />
    </Routes>
  );
}

export default App;
