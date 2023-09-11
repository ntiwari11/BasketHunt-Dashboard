import React from "react";
import "../Styles/DashboardNavbar.css";
import { Link } from "react-router-dom";
const DashboardNavbar = () => {
  return (
    <>
      <div className="header">
        <Link to="/">
          <h1>Basekthunt Bussiness</h1>
        </Link>
        <ul className="nav-bar_menu">
          <li>
            <Link to="/hi vishal">Hi Vishal</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DashboardNavbar;
