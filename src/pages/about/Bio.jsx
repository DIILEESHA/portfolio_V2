import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./bio.css";

const interests = [
  "I am a Computer Engineer passionate about the software industry and dedicated to improving myself in frontend development and QA testing every day.",
  "I am a hardworking, detail-oriented developer who values writing clean code, building user-friendly interfaces, and ensuring high-quality standards in every project.",
  "I gained experience working with both local and foreign clients, which helped me understand different workflows, communication styles, and real-world project requirements.",
  "Throughout my education and career journey, I have continuously improved myself by learning from professors, online resources, and hands-on client projects.",
  "I constantly explore new technologies, asking why they were created and how they can solve real-world problems, especially in frontend and testing domains.",
  "I care about teamwork, sharing knowledge, and collaborating with teammates to produce impactful and high-quality products.",
  "My QA skills allow me to test, analyze, and improve applications systematically, ensuring they meet user expectations while my frontend expertise helps deliver visually appealing and responsive solutions.",
];

const Bio = () => {
  const [expanded, setExpanded] = useState(true); // Open by default

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div className="tem">
        <h2 className="bio_name">
          <span style={{ color: "#6b7280" }} className="haverd">
            1.
          </span>{" "}
          description
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

      {expanded ? (
        <>
          {interests.map((interest, index) => (
            <p className="description_para" key={index}>
              <span style={{ color: "#6b7280" }} className="haverd">
                {index + 2}.
              </span>{" "}
              "{interest}"
            </p>
          ))}
          <div className="dodo">{"]"}</div> {/* closing bracket only when expanded */}
        </>
      ) : null}
    </div>
  );
};

export default Bio;
