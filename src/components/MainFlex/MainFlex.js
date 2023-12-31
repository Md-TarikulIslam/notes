import React from "react";
import Sidenav from "../Sidenav/Sidenav";
import Notes from "../Notes/Notes";

const MainFlex = () => {
  return (
    <div className="flex justify-between">
      <Sidenav />
      <Notes />
    </div>
  );
};

export default MainFlex;
