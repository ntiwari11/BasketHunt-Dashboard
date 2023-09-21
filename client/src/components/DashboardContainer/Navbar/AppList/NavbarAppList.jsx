import React from "react";

const NavbarAppList = ({ setAppTabs, appTabs }) => {
  const appLists = [
    {
      id: 1,
      appName: "App 1",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 2,
      appName: "App 2",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 3,
      appName: "App 3",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 4,
      appName: "App 4",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 5,
      appName: "App 5",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 6,
      appName: "App 6",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 7,
      appName: "App 7",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 8,
      appName: "App 8",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 9,
      appName: "App 9",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 10,
      appName: "App 10",
      appLogo: "https://via.placeholder.com/40",
    },
    // {
    //   id:11,
    //   appName: "App 11",
    //   appLogo: "https://via.placeholder.com/40",
    // },
    // {
    //   id:12,
    //   appName: "App 12",
    //   appLogo: "https://via.placeholder.com/40",
    // },
    // {
    //   id:13,
    //   appName: "App 13",
    //   appLogo: "https://via.placeholder.com/40",
    // },
  ];

  const addTab = (item) => {
    setAppTabs((prev) => {
      const presentData = prev.find((data) => data.id === item.id);
      if (!presentData) {
        if (prev.length < 3) {
          return [item, ...prev];
        } else {
          const data = [item, ...prev];
          data.pop();
          return data;
        }
      }
      return prev;
    });
  };

  return (
    <ul className="hidden lg:flex justify-evenly  flex-wrap gap-2 ">
      {appLists.length > 10
        ? appLists.slice(0, 9).map((item, index) => (
            <div
              className="hover:cursor-pointer"
              key={index}
              onClick={() => addTab(item)}
            >
              <li
                className={`flex justify-between items-center  border-2 ml-3  rounded-full w-28 ${
                  appTabs.find((tab) => tab.id === item.id)
                    ? "border-appListColor-400"
                    : "border-gray-400"
                }`}
              >
                <img
                  src={item.appLogo}
                  alt="app name"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-black pr-6  hover:text-gray-300">
                  {item.appName}
                </span>
              </li>
            </div>
          ))
        : appLists.map((item, index) => (
            <div
              className="hover:cursor-pointer"
              key={index}
              onClick={() => addTab(item)}
            >
              <li
                className={`flex justify-between items-center border-2  rounded-full w-28 ${
                  appTabs.find((tab) => tab.id === item.id)
                    ? "border-appListColor-400"
                    : "border-gray-400"
                }`}
              >
                <img
                  src={item.appLogo}
                  alt="app name"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-black pr-6  hover:text-gray-300">
                  {item.appName}
                </span>
              </li>
            </div>
          ))}

      {appLists.length > 10 ? (
        <div>
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
        </div>
      ) : (
        ""
      )}
    </ul>
  );
};

export default NavbarAppList;
