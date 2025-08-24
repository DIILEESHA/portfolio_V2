import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./bio.css";

const skills = [
  {
    title: "programmingLanguages",
    items: ["JavaScript (ES6+)", "Java", "C++"],
  },
  {
    title: "tools",
    items: [
      "Git & GitHub",
      "Visual Studio Code",
      "Figma",
      "Postman",
      "Selenium",
    ],
  },
  {
    title: "operatingSystems",
    items: ["Windows", "Linux (Ubuntu)", "macOS"],
  },
  {
    title: "mobileApp",
    items: ["React Native", "Android Studio", "Expo"],
  },
  {
    title: "headlessCMS",
    items: ["WordPress", "Sanity"],
  },
  {
    title: "buildTools",
    items: ["Vite", "Webpack", "Babel", "npm", "Yarn"],
  },
  {
    title: "otherSkills",
    items: [
      "Quality Assurance & Testing",
      "RESTful APIs",
      "Agile & Scrum Practices",
      "SEO Optimization",
      "Test Automation",
      "Performance Optimization",
    ],
  },
];

const Others = () => {
  const [expandedStates, setExpandedStates] = useState(
    skills.reduce((acc, _, idx) => ({ ...acc, [idx]: true }), {})
  );

  const toggleExpand = (idx) => {
    setExpandedStates((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  // numbering system
  const calcCounterStart = (index) => {
    let count = 2; // after title line
    for (let i = 0; i < index; i++) {
      count += 1 + skills[i].items.length + 1;
    }
    return count + 1;
  };

  return (
    <div>
      {/* ✅ Show Title Once */}
      <p className="description_para">
        <span style={{ color: "#6b7280" }} className="haverd">
          1.
        </span>{" "}
        <strong className="malisa">title:</strong> "Other Technical Abilities"
      </p>

      {skills.map((skill, idx) => {
        const expanded = expandedStates[idx];
        const baseCounter = calcCounterStart(idx);
        let counter = baseCounter;

        return (
          <div key={idx} className="tem" style={{ display: "flex" }}>
            <div>
              {/* Section Title */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <h2 className="bio_name">
                  <span style={{ color: "#6b7280" }} className="haverd">
                    {counter++}.
                  </span>{" "}
                  <strong className="malisas">{skill.title}</strong>
                  <span style={{ color: "#fff", margin: "0px 4px" }}>:</span>
                </h2>

                <div
                  className="arrow_section"
                  onClick={() => toggleExpand(idx)}
                  style={{ cursor: "pointer" }}
                >
                  {expanded ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <ChevronDown size={13} />
                      {"["}
                    </div>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <ChevronDown size={13} className="dmo" />
                      <span>[ . . . ]</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Expanded Items */}
              {expanded &&
                skill.items.map((item, idxItem) => (
                  <p className="description_para" key={idxItem}>
                    <span style={{ color: "#6b7280" }} className="haverd">
                      {counter + idxItem}.
                    </span>{" "}
                    "{item}"<span className="dx">,</span>
                  </p>
                ))}

              {expanded && (
                <p className="description_para">
                  <span style={{ color: "#6b7280" }} className="haverd">
                    {counter + skill.items.length}.
                  </span>{" "}
                  {"],"}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Others;
