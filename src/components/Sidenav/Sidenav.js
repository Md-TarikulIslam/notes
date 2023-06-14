import React from "react";
import './SideNav.css'

const Sidenav = () => {
  return (
    <div>
      <ul className="menu nav bg-blue-700 text-white rounded-box">
        <li>
          <a>Dashboard</a>
        </li>
        <li>
          <a>My Tickets</a>
        </li>
        <li>
          <a>My Profile</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
