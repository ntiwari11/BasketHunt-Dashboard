import React from "react";

const NavbarAppList = ({ setAppTabs, appTabs, windowWidth, appLists }) => {
  const addTab = (item) => {
    setAppTabs((prev) => {
      const presentData = prev.find((data) => data.id === item.id);
      if (!presentData) {
        if (windowWidth >= 1280) {
          if (prev.length === 3) prev.pop();
          return [item, ...prev];
        } else if (windowWidth < 640) {
          return [item];
        } else if (windowWidth < 1280) {
          if (prev.length === 2) prev.pop();
          return [item, ...prev];
        }
        return prev;
      }
      return prev;
    });
  };

  return (
    <ul className="hidden md:flex lg:flex justify-start flex-nowrap overflow-x-scroll gap-1 removeScroll">
      {appLists.map((item, index) => (
        <>
          <div
            className="hover:cursor-pointer"
            key={index}
            onClick={() => addTab(item)}
          >
            <li
              className={`flex justify-start gap-1 items-center border-2 rounded-full w-60 ${
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
              <span className="text-black hover:text-gray-300">
                {item.appName}
              </span>
            </li>
          </div>
        </>
      ))}
    </ul>
  );
};

export default NavbarAppList;
