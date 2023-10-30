import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import "./Layout.css";
import Menus from "../Menus/Menus";

const Layout = () => {
  const [toggle] = useState(true);


  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            
          </div>
          <Menus toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
