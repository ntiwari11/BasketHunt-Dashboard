import React from "react";
import NavbarLogo from "./Logo/NavbarLogo";
import NavbarProfile from "./Profile/NavbarProfile";
import NavbarAppList from "./AppList/NavbarAppList";

const Navbar = () => {
  return (
    <nav className="bg-white-500 border-b-4 border-navbarbottomline-200 p-4 ">
      <div className=" flex justify-between items-center ">
        {/*Logo   */}
        <NavbarLogo />
        {/* Menu List */}
        {/* <NavbarAppList /> */}
        {/* Profile */}
        <NavbarProfile />
      </div>
    </nav>
  );
};

export default Navbar;
