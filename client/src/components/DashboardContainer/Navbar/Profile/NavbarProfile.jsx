import React, { useState } from "react";
import { useNavigation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useSelector } from "react-redux";

const NavbarProfile = () => {
  const { user } = useSelector((state) => state.authReducer.authData);

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  // const navigate = useNavigation();

  const adminProfileOptions = [
    {
      id: "1",
      optionName: "View Profile",
      optionLogo: CgProfile,
    },

    {
      id: "2",
      optionName: "Add Application",
    },
    {
      id: "3",
      optionName: "Remove Application",
    },
    {
      id: "4",
      optionName: "modify Application",
    },
    {
      id: "5",
      optionName: "Sign Out ",
    },
  ];

  const userProfileOptions = [
    {
      id: "1",
      optionName: "View Profile",
      optionLogo: CgProfile,
    },
    {
      id: "2",
      optionName: "Change Password",
    },
    {
      id: "3",
      optionName: "Sign Out",
    },
  ];
  const profileOptions =
    user.role === "admin" ? adminProfileOptions : userProfileOptions;

  const functionSignOut = () => {
    // navigate("/");
  };
  const optionFunction = (index) => {
    if (
      (index === 3 && user.role === "user") ||
      (index === 5 && user.role === "admin")
    ) {
      functionSignOut();
    }
  };
  return (
    <>
      {/* profile  */}
      <div
        onClick={() => setIsProfileOpen(!isProfileOpen)}
        className=" flex items-center justify-between relative cursor-pointer"
      >
        <span className="mr-2">
          <CgProfile size={30} />
        </span>
        {/* <span className="mr-2 text-lg">{user.name}</span> */}
        <span>
          {isProfileOpen ? (
            <IoMdArrowDropup size={30} />
          ) : (
            <IoMdArrowDropdown size={30} />
          )}
        </span>

        {isProfileOpen && (
          <div className=" absolute shadow-lg py-3 top-10 -right-0 w-72 z-20 flex flex-col gap-2 bg-white border border-rounded-lg border-gray-200">
            {profileOptions.map((items, index) => (
              <>
                <button
                  onClick={items.optionFunction}
                  className=" ml-7 flex justify-start items-center gap-1"
                >
                  {/* <span></span> */}
                  <span onClick={optionFunction(index)}>
                    {items.optionName}{" "}
                  </span>
                </button>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NavbarProfile;
