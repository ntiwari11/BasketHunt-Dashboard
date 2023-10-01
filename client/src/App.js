import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.page";
// import About from "./components/About";
import PageNotFound from "./components/Errors/PageNotFound";
import AdminLogin from "./components/LoginComponent/AdminLogin";
import UserLogin from "./components/LoginComponent/UserLogin";
import Dasboard from "./components/DashboardContainer/Dasboard";
import Login from "./components/LoginComponent/Login";

import { useEffect, useState } from "react";

function App() {
  const tempTab = [];
  const [appTabs, setAppTabs] = useState(tempTab);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let cardsData = [
    // { id: 1, title: "BasketHunt Academy", content: "Content for Card 1" },
    {
      id: 1,
      appName: "BasketHunt Academy",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 2,
      appName: "BasketHunt Atlas",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 3,
      appName: "BasketHunt Career",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 4,
      appName: "BasketHunt Office",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 5,
      appName: "BasketHunt Training",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 6,
      appName: "BasketHunt Wiki",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 7,
      appName: "BasketHunt WorkPlace",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 8,
      appName: "BasketHunt Zoho Cliq",
      appLogo: "https://via.placeholder.com/40",
    },
  ];

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
            cardsData={cardsData}
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
            cardsData={cardsData}
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
