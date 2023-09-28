import React from "react";
// import DashboardNavbar from "./Navbar/DashboardNavbar";
import DashboardSearchBar from "./DashboardSearchBar";
import DashboardCards from "./DashboardCards";
import Navbar from "./Navbar/Navbar";
const Dasboard = ({ setAppTabs, appTabs, windowWidth }) => {
  return (
    <>
      {/* <div>dasboard</div> */}
      <div>
        {/* <DashboardNavbar /> */}
        <Navbar />
        <DashboardSearchBar />
        <DashboardCards
          setAppTabs={setAppTabs}
          appTabs={appTabs}
          windowWidth={windowWidth}
        />
      </div>
    </>
  );
};

export default Dasboard;
