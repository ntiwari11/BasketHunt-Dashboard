import React from "react";
import DashboardNavbar from "./Navbar/DashboardNavbar";
import DashboardSearchBar from "./DashboardSearchBar";
import DashboardCards from "./DashboardCards";

const Dasboard = () => {
  return (
    <>
      {/* <div>dasboard</div> */}
      <div>
        <DashboardNavbar />
        <DashboardSearchBar />
        <DashboardCards />
      </div>
    </>
  );
};

export default Dasboard;
