import React from "react";
import Sidenav from "../Sidenav/Sidenav";
import Notes from "../Notes/Notes";

const MainFlex = () => {
  return (
    <div className="flex">
      <Sidenav />
      <Notes />
    </div>
  );
};

export default MainFlex;
