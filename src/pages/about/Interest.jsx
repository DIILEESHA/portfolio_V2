import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./bio.css";

const webDevInterests = [
  "💻Web Development",
  "Frontend Development (React, JavaScript, CSS)",
  "UI/UX Design & Responsive Interfaces",
  "Web Performance Optimization",
  "Building Interactive Web Applications",
  "No-Code Platforms (WordPress, Webflow, Wix)",
];

const qaInterests = [
  "🐞Quality Assurance",
  "Manual Testing",
  "Automation Testing (Selenium, Cypress)",
  "Test Case Design & Management",
  "Bug Tracking & Reporting (Jira, Trello)",
  "Collaborating with Foreign Clients on QA Tasks",
];

const mobileDevInterests = [
  "👨Mobile App Development",
  "Cross-Platform App Development(React Native)",
  "App Performance Optimization",
  "Responsive Design for Mobile Devices",
];

const Interest = () => {
  const [expanded, setExpanded] = useState(true); // Open by default

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  let counter = 2; // numbering starts at 2

  return (
    <div>
      <div className="tem">
        <h2 className="bio_name">
          <span style={{ color: "#6b7280" }} className="haverd">
            1.
          </span>{" "}
          My Interests
          <span style={{ color: "#fff", margin: "0px 4px" }}>:</span>
        </h2>

        <div
          className="arrow_section"
          onClick={toggleExpand}
          style={{ cursor: "pointer" }}
        >
          {expanded ? (
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <ChevronDown size={13} />
              {"["}
            </div>
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <ChevronDown size={13} className="dmo" />
              <span>[ . . . ]</span>
            </div>
          )}
        </div>
      </div>

      {expanded && (
        <>
          {/* Web Development Interests */}
          {webDevInterests.map((item, index) => (
            <p className="description_para" key={index}>
              <span style={{ color: "#6b7280" }} className="haverd">
                {counter++}.
              </span>{" "}
              "{item}"
            </p>
          ))}
          {/* Empty line between sections */}
          <p className="description_para" key="empty">
            <span style={{ color: "#6b7280" }} className="haverd">
              {counter++}.
            </span>{" "}
          </p>
          {/* QA Interests */}
          {qaInterests.map((item, index) => (
            <p className="description_para" key={index}>
              <span style={{ color: "#6b7280" }} className="haverd">
                {counter++}.
              </span>{" "}
              "{item}"
            </p>
          ))}

          {/* Empty line between sections */}
          <p className="description_para" key="empty">
            <span style={{ color: "#6b7280" }} className="haverd">
              {counter++}.
            </span>{" "}
          </p>

          {/* QA Interests */}
          {mobileDevInterests.map((item, index) => (
            <p className="description_para" key={index}>
              <span style={{ color: "#6b7280" }} className="haverd">
                {counter++}.
              </span>{" "}
              "{item}"
            </p>
          ))}

          <p className="description_para" key="empty">
            <span style={{ color: "#6b7280" }} className="haverd">
              {counter++}.
            </span>{" "}
            {"]"}
          </p>
        </>
      )}
    </div>
  );
};

export default Interest;
