import React from "react";
import { useDispatch,useSelector } from "react-redux";
import {addMessage} from "../../../../reduxToolkit/tempAction"

const NavbarAppList = ({
  setAppTabs,
  appTabs,
  windowWidth,
  appLists,
  cssClasses,
  setIsHamburgerOpen,
}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.tempData);
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

    //dispatch(addMessage(item.id))  //store some data in redux store
    //console.log(data)  //these two line use to check redux-toolkit is properly work or not

  };

  return (
    <ul
      className={`${cssClasses} lg:flex overflow-x-scroll gap-1 removeScroll`}
    >
      {appLists.map((item, index) => (
        <>
          <div
            className="hover:cursor-pointer"
            key={index}
            onClick={() => {
              setIsHamburgerOpen(false);
              addTab(item);
            }}
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
