import React from "react";
import './SideNav.css'
import { FaDashcube, FaStickyNote, FaUserSecret, FaUserFriends, FaLaptopCode, FaFile,FaSlidersH } from "react-icons/fa";
const Sidenav = () => {
  return (
    <div>
      <ul className="menu nav bg-blue-700 text-white rounded-box text-xl">
        <h1 className="text-3xl font-extrabold mx-4 my-5">LOGO</h1>
        <li className="flex flex-row items-center"> 
         <span> <FaDashcube /></span>
          <a>Dashboard</a>
        </li>
        <li className="flex flex-row items-center"> 
         <span> <FaStickyNote /></span>
          <a>My Tickets</a>
        </li>
        <li className="flex flex-row items-center"> 
         <span> <FaUserSecret /></span>
          <a>My Profile</a>
        </li>
        <li className="flex flex-row items-center"> 
         <span> <FaUserFriends /></span>
          <a>Users</a>
        </li>
        <li className="flex flex-row items-center"> 
         <span> <FaLaptopCode /></span>
          <a>Assets</a>
        </li>
        <li className="flex flex-row items-center bg-blue-900 rounded-2xl"> 
         <span> <FaFile /></span>
          <a >Tickets Type</a>
        </li>
        <li className="flex flex-row items-center"> 
         <span> <FaSlidersH /></span>
          <a>Tickets Queue</a>
        </li>
     
      </ul>
    </div>
  );
};

export default Sidenav;
