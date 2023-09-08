import React from "react";


// Layout
import HomeLayout from "../layouts/Homepage.layout";
import Dasboard from "../components/DashboardContainer/Dasboard";
import Navbar from "../components/DashboardContainer/Navbar/Navbar";


const Home = () => {

      const user = {
        name : "DemoUser",
        email : "demo@gmail.com",
        role : "Admin",
        token : "fuifweghfuigsaedfjkhfghui"
      }
  return (
    <>

      {
        user?.token? ( 
          <>
              <Navbar />
              <Dasboard />
           </>
         ) : (
          <h1> Un-Authorize Access. Please Login .</h1>
         ) 
      }
    </>
  );
};

export default HomeLayout(Home);
