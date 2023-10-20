import React, { useState } from "react";
// import NavbarLogo from "./Logo/NavbarLogo";
import NavbarProfile from "./Profile/NavbarProfile";
import NavbarAppList from "./AppList/NavbarAppList";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import NavbarLogo from "./Logo/NavbarLogo";

import { useLocation } from "react-router-dom";

const Navbar = ({ setAppTabs, appTabs, windowWidth }) => {
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
              ? "justify-between"
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
          <div className=" absolute md:hidden lg:hidden xl:hidden m-auto shadow-lg py-3 top-20 left-0 w-full z-20 flex flex-col gap-2 bg-white border border-gray-200">
            {/* <NavbarAppList /> */}
            <NavbarAppList
              cssClasses="flex  mx-8 justify-evenly gap-2 overflow-scroll"
              setIsHamburgerOpen={setIsHamburgerOpen}
              setAppTabs={setAppTabs}
              appTabs={appTabs}
              windowWidth={windowWidth}
            />
          </div>
        )}
        {location.pathname === "/dashboard" ? (
          <img className="w-24" src="./baskethuntLogo.jpg" alt="Logo" />
        ) : (
          <NavbarAppList
            cssClasses="hidden md:flex justify-start flex-nowrap"
            setIsHamburgerOpen={setIsHamburgerOpen}
            setAppTabs={setAppTabs}
            appTabs={appTabs}
            windowWidth={windowWidth}
          />
        )}
        {/* Profile */}
        <NavbarProfile />
      </div>
    </nav>
  );
};

export default Navbar;
