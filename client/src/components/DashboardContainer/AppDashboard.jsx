import React, { useState } from "react";
import "./Styles/AppDashboard.css";
const AppDashboard = ({ setAppTabs, appTabs }) => {
  const removeTab = (tabValue) => {
    setAppTabs((prev) => {
      return prev.filter((item) => item.id !== tabValue);
    });
  };
  console.log(appTabs);
  return (
    <div className="main">
      {appTabs.map((item, index) => {
        return (
          <div className="part_Farman" key={index}>
            <ChatComponent
              removeTab={removeTab}
              tabValue={item}
              tabsNo={appTabs.length}
            />
          </div>
        );
      })}
    </div>
  );
};

export default AppDashboard;

const ChatComponent = ({ removeTab, tabValue, tabsNo }) => {
  return (
    <div className="p3">
      <div className="orange" style={{ width: parseInt(1347 / tabsNo) }}>
        <section className="flex justify-center flex-1">
          <p>{tabValue.appName}</p>
        </section>
        <section>
          <button className="btn" onClick={() => removeTab(tabValue.id)}>
            X
          </button>
        </section>
      </div>
    </div>
  );
};
