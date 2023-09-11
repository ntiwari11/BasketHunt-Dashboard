import React from "react";

const NavbarAppList = () => {
  const appLists = [
    {
      appName: "App 1",
      appLogo: "https://via.placeholder.com/40",
      active: true,
    },
    {
      appName: "App 2",
      appLogo: "https://via.placeholder.com/40",
      active: true,
    },
    {
      appName: "App 3",
      appLogo: "https://via.placeholder.com/40",
      active: false,
    },
    {
      appName: "App 4",
      appLogo: "https://via.placeholder.com/40",
      active: true,
    },
    {
      appName: "App 5",
      appLogo: "https://via.placeholder.com/40",
      active: true,
    },
    {
      appName: "App 6",
      appLogo: "https://via.placeholder.com/40",
      active: true,
    },
    {
      appName: "App 7",
      appLogo: "https://via.placeholder.com/40",
      active: true,
    },
    {
      appName: "App 8",
      appLogo: "https://via.placeholder.com/40",
      active: true,
    },
    {
      appName: "App 9",
      appLogo: "https://via.placeholder.com/40",
      active: true,
    },
    {
      appName: "App 10",
      appLogo: "https://via.placeholder.com/40",
      active: true,
    },
    {
      appName: "App 11",
      appLogo: "https://via.placeholder.com/40",
      active: true,
    },
    {
      appName: "App 12",
      appLogo: "https://via.placeholder.com/40",
      active: true,
    },
    {
      appName: "App 13",
      appLogo: "https://via.placeholder.com/40",
      active: true,
    },
  ];
  return (
    <ul className="flex justify-evenly  flex-wrap gap-2 ">
      {appLists.length > 10
        ? appLists.slice(0, 9).map((item, index) => (
            <>
              <li
                className={`flex justify-between items-center  border-2 ml-3  rounded-full w-28 ${
                  item.active === true
                    ? "border-appListColor-400"
                    : "border-gray-400"
                }`}
              >
                <img
                  src={item.appLogo}
                  alt="app name"
                  className="w-8 h-8 rounded-full"
                />
                <a href="/" className="text-black pr-6  hover:text-gray-300">
                  {item.appName}
                </a>
              </li>
            </>
          ))
        : appLists.map((item, index) => (
            <>
              <li
                className={`flex justify-between items-center border-2  rounded-full w-28 ${
                  item.active === true
                    ? "border-appListColor-400"
                    : "border-gray-400"
                }`}
              >
                <img
                  src={item.appLogo}
                  alt="app name"
                  className="w-8 h-8 rounded-full"
                />
                <a href="/" className="text-black pr-6  hover:text-gray-300">
                  {item.appName}
                </a>
              </li>
            </>
          ))}

      {appLists.length > 10 ? (
        <>
          <li
            className={`flex justify-between items-center border-2  rounded-full w-28 border-gray-400`}
          >
            <img
              src="https://via.placeholder.com/40"
              alt="app name"
              className="w-8 h-8 rounded-full"
            />
            <a href="/" className="text-black pr-6  hover:text-gray-300">
              view all
            </a>
          </li>
        </>
      ) : (
        ""
      )}
    </ul>
  );
};

export default NavbarAppList;
