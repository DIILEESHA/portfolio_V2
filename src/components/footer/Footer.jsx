import Darker from "../../assets/code.svg?react";
import Main from "../../assets/main.svg?react";
import Teen from "../../assets/teen.svg?react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

import { SlSocialLinkedin } from "react-icons/sl";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="hober">
        <div className="footer_left">
          <ul className="footer_ul">
            <li className="footer_li a">
              <Main style={{ fill: "#94A3B8" }} className="dan" />
              main
            </li>

            <li className="footer_li a">
              <Teen style={{ fill: "#94A3B8" }} className="dan" />
              <div className="dot">
                0
                <FaArrowDown className="podi" />
              </div>
              <div className="dot">
                0
                <FaArrowUp className="podi" />
              </div>
            </li>
            <li className="footer_li b">
              <Darker style={{ fill: "#94A3B8" }} className="dan" />
              terminal
            </li>
          </ul>
        </div>{" "}
        <div className="footer_right">
          <ul className="footer_ul">
            <li className="footer_li a">TypeScript</li>
            <li className="footer_li a">UTF-8</li>
            <li className="footer_li">LF</li>
          </ul>
        </div>
      </div>
      <div className="hob">
        <div className="nav">
          <div className="nav_left">
            <ul className="nav_ul">
              <li className="nav_lim a ">Follow:</li>
              <li className="nav_lim d hover">
                <SlSocialLinkedin />
              </li>
            </ul>
          </div>
          <div className="nav_right">
            <ul className="nav_ul">
              <li className="nav_lim f dd  hover">
                @DIILEESHA
                <FiGithub />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
