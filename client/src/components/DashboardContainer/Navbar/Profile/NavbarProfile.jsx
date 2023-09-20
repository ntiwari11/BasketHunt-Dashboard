import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import NavbarAppList from "../AppList/NavbarAppList";

const NavbarProfile = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  return (
    <>
      {/* hamburger */}
      <div
        onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
        className="md:hidden cursor-pointer "
      >
        {isHamburgerOpen ? (
          <RxCross2 size={40} />
        ) : (
          <GiHamburgerMenu size={40} />
        )}
      </div>
      {isHamburgerOpen && (
        <div className=" absolute shadow-lg py-3 top-20 left-0 w-full z-20 flex flex-col gap-2 bg-white border border-gray-200">
          <NavbarAppList />
        </div>
      )}
      {/* profile  */}
      <div
        onClick={() => setIsProfileOpen(!isProfileOpen)}
        className=" hidden md:flex items-center justify-between relative cursor-pointer"
      >
        <span className="mr-2">
          <CgProfile size={30} />
        </span>
        <span className="mr-2 text-lg">Name</span>
        <span>
          {isProfileOpen ? (
            <IoMdArrowDropup size={30} />
          ) : (
            <IoMdArrowDropdown size={30} />
          )}
        </span>

        {isProfileOpen && (
          <div className=" absolute shadow-lg py-3 -bottom-14 -right-0 w-36 z-20 flex flex-col gap-2 bg-white border border-gray-200">
            <button onClick={() => {console.log("sign out Btn Click")}}>Sign Out</button>
          </div>
        )}
      </div>
    </>
  );
};

export default NavbarProfile;
