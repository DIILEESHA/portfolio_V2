import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./bio.css";

const experiences = [
  {
    company: "Codetech LK Sri Lanka",
    position: "Frontend Developer",
    period: "2022 - 2023",
    responsibilities: [
      "Developed responsive and interactive frontend features using React.js and JavaScript.",
      "Collaborated closely with designers and backend engineers to deliver seamless UIs.",
      "Ensured code quality with unit tests, debugging, and version control (Git).",
      "Optimized website performance, improving load times by 20%.",
      "Worked in Agile/Scrum environment with daily stand-ups and sprint reviews.",
    ],
  },
  {
    company: "Fiverr",
    position: "Frontend Developer & QA Engineer",
    period: "2023 - Present",
    responsibilities: [
      "Delivered 30+ successful projects for international clients (USA, UK, Australia).",
      "Performed functional and regression QA testing to ensure bug-free deployments.",
      "Implemented responsive UIs with React.js, Next.js, and Tailwind CSS.",
      "Improved client satisfaction ratings by delivering projects ahead of deadlines.",
      "Maintained and optimized user interfaces for better UX and accessibility.",
      "Automated test cases using Selenium & Jest, reducing manual testing effort by 40%.",
      "Built reusable components and followed best practices for scalability.",
    ],
  },
];

const Experience = () => {
  // ✅ First one open (true), second one closed (false)
  const [expandedStates, setExpandedStates] = useState(
    experiences.reduce((acc, _, idx) => ({ ...acc, [idx]: idx === 0 }), {})
  );

  const toggleExpand = (idx) => {
    setExpandedStates((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const calcCounterStart = (index) => {
    let count = 0;
    for (let i = 0; i < index; i++) {
      count += 3 + 1 + experiences[i].responsibilities.length + 1;
    }
    return count + 1;
  };

  return (
    <div>
      {experiences.map((exp, idx) => {
        const expanded = expandedStates[idx];
        const baseCounter = calcCounterStart(idx);
        let counter = baseCounter;

        return (
          <div key={idx} className="tem" style={{ display: "flex" }}>
            <div>
              <p className="description_para">
                <span style={{ color: "#6b7280" }} className="haverd">
                  {counter++}.
                </span>{" "}
                <strong className="malisa">company:</strong> {exp.company}
              </p>
              <p className="description_para">
                <span style={{ color: "#6b7280" }} className="haverd">
                  {counter++}.
                </span>{" "}
                <strong className="malisa">position:</strong> {exp.position}
              </p>
              <p className="description_para">
                <span style={{ color: "#6b7280" }} className="haverd">
                  {counter++}.
                </span>{" "}
                <strong className="malisa">Period:</strong> {exp.period}
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h2 className="bio_name">
                  <span style={{ color: "#6b7280" }} className="haverd">
                    {counter++}.
                  </span>{" "}
                  <strong className="malisa">responsibilities</strong>
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

              {expanded &&
                exp.responsibilities.map((res, idxRes) => (
                  <p className="description_para" key={idxRes}>
                    <span style={{ color: "#6b7280" }} className="haverd">
                      {counter + idxRes}.
                    </span>{" "}
                    "{res}"
                  </p>
                ))}

              {expanded && (
                <p className="description_para">
                  <span style={{ color: "#6b7280" }} className="haverd">
                    {counter + exp.responsibilities.length}.
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

export default Experience;
