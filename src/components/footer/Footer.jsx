import Darker from "../../assets/code.svg?react";
import Main from "../../assets/repo.svg?react";
import Teen from "../../assets/teen.svg?react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import "./footer.css";
import "react-tooltip/dist/react-tooltip.css";
import { MoveUp, MoveDown } from "lucide-react";
import { Tooltip } from "react-tooltip";

import { Box } from "@chakra-ui/react";

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
                <MoveDown size={11} className="podi" />
              </div>
              <div className="dot">
                0
                <MoveUp size={11} className="podi" />
              </div>
            </li>
            <li className="footer_li b">
              <Darker style={{ fill: "#94A3B8" }} className="dan" />
              Terminal
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
              <li
                data-tooltip-id="github-tooltip"
                data-tooltip-content="Add to library"
                className="nav_lim f dd hover"
              >
                <a href="http://localhost:5173/">@DIILEESHA</a>
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
