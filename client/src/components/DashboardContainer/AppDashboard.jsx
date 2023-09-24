import React, { useState,useEffect } from "react";
import "./Styles/AppDashboard.css";
const AppDashboard = ({ setAppTabs, appTabs, windowWidth }) => {

  const removeTab = (tabValue) => {
    setAppTabs((prev) => {
      return prev.filter((item) => item.id !== tabValue);
    });
  };

  useEffect(() => {
    if (windowWidth < 1280 && appTabs.length===3)
    {
      setAppTabs((prev) => {
          if (prev.length!==2) prev.pop();
          return [...prev];
      })
    }
    else if (windowWidth < 640 && appTabs.length===2)
    {
      setAppTabs((prev) => {
        if (prev.length!==1)prev.pop()
        // console.log(640)
        return [...prev];
        
      })
    }
  }, [windowWidth,appTabs])
  return (
    <div className="main">
      {appTabs.map((item, index) => {
        return (
          <div className="part_Farman" key={index}>
            <ChatComponent
              removeTab={removeTab}
              tabValue={item}
              tabsNo={appTabs.length}
              windowWidth={windowWidth}
            />
          </div>
        );
      })}
    </div>
  );
};

export default AppDashboard;

const ChatComponent = ({ removeTab, tabValue, tabsNo, windowWidth }) => {
  const [adjustWidth,setAdjustWidth] = useState(19)

  useEffect(() => {
    if (tabsNo === 1)
    {
      setAdjustWidth(19);
    }
    else if(tabsNo === 2){
      setAdjustWidth(11);
    }
    else if(tabsNo === 3){
      setAdjustWidth(8);
    }
  }, [tabsNo]);

  return (
    <div className="p3">
      <div className="orange" style={{ width: parseInt(windowWidth / tabsNo) - adjustWidth }}>
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
