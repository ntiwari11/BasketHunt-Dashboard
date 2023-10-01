import React, { useState } from "react";
// import NavbarLogo from "./Logo/NavbarLogo";
import NavbarProfile from "./Profile/NavbarProfile";
import NavbarAppList from "./AppList/NavbarAppList";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

import { useLocation } from "react-router-dom";

const Navbar = ({ setAppTabs, appTabs, windowWidth, cardsData }) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const location = useLocation();
  // console.log(location);
  // console.log(location === "/dashboard");
  return (
    <nav className="bg-white-500 border-b-4 border-navbarbottomline-200 p-4 ">
      {/* hamburger */}

      <div
        className={` flex  items-center 
          ${
            location.pathname === "/dashboard"
              ? "justify-end"
              : "justify-between"
          }`}
      >
        {/*Logo   */}
        {/* <NavbarLogo /> */}
        {/* Menu List */}
        {/* <NavbarAppList /> */}

        <div
          onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
          // className="md:hidden cursor-pointer "
          className={`md:hidden cursor-pointer ${
            location.pathname === "/dashboard" ? "hidden" : ""
          }`}
        >
          {isHamburgerOpen ? (
            <RxCross2 size={40} />
          ) : (
            <GiHamburgerMenu size={40} />
          )}
        </div>
        {isHamburgerOpen && (
          <div className=" absolute shadow-lg py-3 top-20 left-0 w-full z-20 flex flex-col gap-2 bg-white border border-gray-200">
            {/* <NavbarAppList /> */}
            <p>App List will render here</p>
          </div>
        )}
        {location.pathname === "/dashboard" ? (
          ""
        ) : (
          <NavbarAppList
            setAppTabs={setAppTabs}
            appTabs={appTabs}
            windowWidth={windowWidth}
            appLists={cardsData}
          />
        )}
        {/* Profile */}
        <NavbarProfile />
      </div>
    </nav>
  );
};

export default Navbar;
