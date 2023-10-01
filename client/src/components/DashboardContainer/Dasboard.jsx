import React, { useState } from "react";
// import DashboardNavbar from "./Navbar/DashboardNavbar";
import DashboardSearchBar from "./DashboardSearchBar";
import DashboardCards from "./DashboardCards";
import Navbar from "./Navbar/Navbar";
const Dasboard = ({ setAppTabs, appTabs, windowWidth, cardsData }) => {
  const [query, setQuery] = useState("");
  return (
    <>
      {/* <div>dasboard</div> */}
      <div>
        {/* <DashboardNavbar /> */}
        <Navbar />
        <DashboardSearchBar query={query} setQuery={setQuery} />
        <DashboardCards
          setAppTabs={setAppTabs}
          appTabs={appTabs}
          windowWidth={windowWidth}
          query={query}
          setQuery={setQuery}
          cardsData={cardsData}
        />
      </div>
    </>
  );
};

export default Dasboard;
