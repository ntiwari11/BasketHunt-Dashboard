import React,{useState,useEffect} from "react";

// Layout
import HomeLayout from "../layouts/Homepage.layout";
import Dasboard from "../components/DashboardContainer/Dasboard";
import Navbar from "../components/DashboardContainer/Navbar/Navbar";
import AppDashboard from "../components/DashboardContainer/AppDashboard";

const Home = () => {
  const user = {
    name: "DemoUser",
    email: "demo@gmail.com",
    role: "Admin",
    token: "fuifweghfuigsaedfjkhfghui",
  };

  const tempTab = [
    {
      id:1,
      appName: "App 1",
      appLogo: "https://via.placeholder.com/40",
      active: true,
    },
    {
      id:2,
      appName: "App 2",
      appLogo: "https://via.placeholder.com/40",
      active: true,
    },
    {
      id:3,
      appName: "App 3",
      appLogo: "https://via.placeholder.com/40",
      active: true,
    }
  ]
  const [appTabs, setAppTabs] = useState(tempTab) 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);

    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

  return (
    <>
      {user?.token ? (
        <>
          <Navbar setAppTabs={setAppTabs} appTabs={appTabs} windowWidth={windowWidth}/>
          <AppDashboard setAppTabs={setAppTabs} appTabs={appTabs} windowWidth={windowWidth} />
        </>
      ) : (
        <h1> Un-Authorize Access. Please Login .</h1>
      )}
    </>
  );
};

export default HomeLayout(Home);
