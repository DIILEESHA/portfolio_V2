import React from "react";
import "./nav.css";
const Nav = () => {
  return (
    <div className="nav">
      <div className="nav_left">
        <ul className="nav_ul">
          <li className="nav_li a">Dileesha LN</li>
          <li className="nav_li b">_about me</li>
          <li className="nav_li c">_my projects</li>
          <li className="nav_li d">_my technologies</li>
          <li className="nav_li e">_my blogs</li>
        </ul>
      </div>
      <div className="nav_right">
        <ul className="nav_ul">
          <li className="nav_li f">_contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
