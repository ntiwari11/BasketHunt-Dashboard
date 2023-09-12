import React from "react";
import DashboardNavbar from "./Navbar/DashboardNavbar";
import DashboardSearchBar from "./DashboardSearchBar";
import DashboardCards from "./DashboardCards";
import Navbar from "./Navbar/Navbar";
const Dasboard = () => {
  return (
    <>
      {/* <div>dasboard</div> */}
      <div>
        {/* <DashboardNavbar /> */}
        <Navbar />
        <DashboardSearchBar />
        <DashboardCards />
      </div>
    </>
  );
};

export default Dasboard;
