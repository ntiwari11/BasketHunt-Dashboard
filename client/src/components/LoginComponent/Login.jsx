import React from "react";
// import circle_image from "./circle image.png";
import "../DashboardContainer/Styles/Login.css";
const Login = () => {
  return (
    <div className="App_Farman">
      <header className="App-header_Farman">
        <p className="p1_Farman">Welcome back!</p>
        <p className="p2_Farman">
          Login below to reach your application behind Access
        </p>
        <section className="sec_Farman">
          <img src="./image.png" alt="img" />
          <button className="btn_Farman">
            <a href="/dashboard">Login</a>
          </button>
        </section>
        <img className="low_Farman" src="./circle image.png" alt="img" />
      </header>
    </div>
  );
};

export default Login;
