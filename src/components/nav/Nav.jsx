import React, { useRef } from "react";
import "./nav.css";
import clickSound from "../../assets/click.wav"; // Put your sound file in the same folder or adjust path
import { Link } from "react-router-dom";

const Nav = () => {
  const audioRef = useRef(new Audio(clickSound));

  const playClickSound = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return (
    <div className="nav">
      <div className="nav_left">
        <ul className="nav_ul">
          <li className="nav_li a" onClick={playClickSound}>
            <Link to="/">Dileesha LN</Link>
          </li>
          <li className="nav_li b" onClick={playClickSound}>
            <Link to="/about">_about me</Link>
          </li>
          <li className="nav_li c" onClick={playClickSound}>
            _my projects
          </li>
          <li className="nav_li d" onClick={playClickSound}>
            _my technologies
          </li>
          <li className="nav_li e" onClick={playClickSound}>
            _my blogs
          </li>
        </ul>
      </div>
      <div className="nav_right">
        <ul className="nav_ul">
          <li className="nav_li f" onClick={playClickSound}>
            _contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
