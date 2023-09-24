import React from "react";
import { useNavigate } from "react-router-dom";
// import "../DashboardContainer/Styles/Login.css";
const Login = () => {
  const navigate = useNavigate();

  // Navigate to dashboard function
  const navigateToDashboard = () => {
    navigate("/dashboard");
  };
  return (
    // <div className="App_Farman">
    //   <header className="App-header_Farman">
    //     <p className="p1_Farman">Welcome back!</p>
    //     <p className="p2_Farman">
    //       Login below to reach your application behind Access
    //     </p>
    //     <section className="sec_Farman">
    //       <img src="./image.png" alt="img" />
    //       <button className="btn_Farman">
    //         <a href="/dashboard">Login</a>
    //       </button>
    //     </section>
    //     <img className="low_Farman" src="./circle image.png" alt="img" />
    //   </header>
    // </div>

    <div className="min-h-screen flex items-center justify-center flex-col">
  <header className="text-center">
    <p className="font-semibold text-5xl text-black">Welcome back!</p>
    <p className="text-xl font-normal text-black">
      Login below to access your application
    </p>
    <section className="flex flex-col items-center">
      <img src="./image.png" alt="img" />
      <button
        onClick={navigateToDashboard}
        className="mt-4 px-8 py-3 bg-yellow-500 rounded-full text-xl text-black no-underline hover:bg-yellow-600"
      >
        Login
      </button>
    </section>
    <img
      className="absolute right-0 bottom-0"
      src="./circle image.png"
      alt="img"
    />
  </header>
</div>

  );
};

export default Login;
