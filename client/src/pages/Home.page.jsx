import React from "react";

// Layout
import HomeLayout from "../layouts/Homepage.layout";
import Dasboard from "../components/DashboardContainer/Dasboard";
import Navbar from "../components/DashboardContainer/Navbar/Navbar";
import AppDashboard from "../components/DashboardContainer/AppDashboard";

const Home = () => {
  const user = {
    name: "DemoUser",
    email: "demo@gmail.com",
    role: "Admin",
    token: "fuifweghfuigsaedfjkhfghui",
  };
  return (
    <>
      {user?.token ? (
        <>
          <Navbar />
          <AppDashboard />
        </>
      ) : (
        <h1> Un-Authorize Access. Please Login .</h1>
      )}
    </>
  );
};

export default HomeLayout(Home);
