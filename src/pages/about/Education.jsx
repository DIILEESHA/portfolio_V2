import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./bio.css";

const education = [
  "🎓Higher Education",
  "degree: B.Sc. (Hons) in Information Technology",
  "institution: Sri Lanka Institute of Information Technology (SLIIT)",
  "specialization: Software Engineering & Frontend Development",
  "focusAreas: Web Development, QA Testing, Software Engineering Practices",
  "period: 2021 - Present",
];

const alEducation = [
  "📖A/L Education",
  "qualification: G.C.E. Advanced Level",
  "stream: Technology Stream",
  "institution: Central College, Welimada",
  "period: 2017 - 2019",
];

const Education = () => {
  const [expanded, setExpanded] = useState(true); // Open by default

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  // global counter starts at 2 (since 1. is used in the title)
  let counter = 2;

  return (
    <div>
      <div className="tem">
        <h2 className="bio_name">
          <span style={{ color: "#6b7280" }} className="haverd">
            1.
          </span>{" "}
          Education
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
          {/* Higher Education */}
          {education.map((study, index) => (
            <p className="description_para" key={index}>
              <span style={{ color: "#6b7280" }} className="haverd">
                {counter++}.
              </span>{" "}
              "{study}"
            </p>
          ))}
          <p className="description_para" key="empty">
            <span style={{ color: "#6b7280" }} className="haverd">
              {counter++}.
            </span>{" "}
            {/* empty content */}
          </p>
          {/* A/L Education */}
          {alEducation.map((study, index) => (
            <p className="description_para" key={index}>
              <span style={{ color: "#6b7280" }} className="haverd">
                {counter++}.
              </span>{" "}
              "{study}"
            </p>
          ))}
          <p className="description_para" key="empty">
            <span style={{ color: "#6b7280" }} className="haverd">
              {counter++}.
            </span>{" "}
         {"]"}
          </p>
        </>
      ) : null}
    </div>
  );
};

export default Education;
