import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./bio.css";

const projects = [
  {
    projectName: "Just Accounting – WordPress Website for Financial Advisory",
    forWhat: "Fiverr Client Project",
    period: "Jul 2025",
    projectLink: "https://justaccounting.dk",
    responsibilities: [
      "Developed a responsive and professional WordPress website for a financial advisory business founded by Jes Just.",
      "Showcased services, mission, and founder’s story in a clear and engaging way.",
      "Applied manual QA practices, including confirmation testing to ensure all website features functioned correctly.",
      "Performed regression testing to verify that updates or changes did not introduce new issues.",
      "Tested navigation, form functionality, responsive design, and content accuracy.",
      "Delivered a reliable, user-friendly, and fully functional website optimized for client satisfaction.",
    ],
    technologies: [
      "WordPress",
      "Elementor",
      "Custom CSS",
      "Manual QA",
      "Responsive Design",
      "SEO Optimization",
    ],
  },
  {
    projectName: "Nanette’s 60th Celebration – Event Ticketing Website",
    forWhat: "Fiverr Client Project",
    period: "Jun 2025",
    projectLink: "https://nanette60thcelebration.com/",
    responsibilities: [
      "Developed a fully responsive and interactive event ticketing website for a U.S.-based client.",
      "Leveraged Next.js for performance and scalability.",
      "Integrated Stripe for secure online payments.",
      "Implemented a QR code ticketing system for smooth verification at event entrances.",
      "Built a custom admin dashboard for event management, ticket pricing, and content updates.",
      "Conducted manual QA testing including ticketing flow, QR code validation, and payment verification.",
      "Validated transactions using Stripe demo account, then configured live Stripe account securely.",
      "Ensured confirmation and regression testing for consistent functionality across updates.",
    ],
    technologies: [
      "Next.js",
      "React",
      "Firebase",
      "Tailwind CSS",
      "Stripe API",
      "QR Code System",
      "Manual QA",
    ],
  },
  {
    projectName: "AirBeeClean – Cleaning Services Website",
    forWhat: "Freelance Project",
    period: "2024",
    projectLink: "https://www.airbeeclean.com/",
    responsibilities: [
      "Built a modern and SEO-optimized website for a professional cleaning company in Cambridge, UK.",
      "Showcased deep cleaning and end-of-tenancy cleaning services with engaging visuals.",
      "Ensured the site was fully responsive and optimized for all devices.",
      "Implemented user-friendly navigation and fast-loading pages to improve client conversions.",
      "Worked with booking integrations (BookingKoala & custom forms) to streamline scheduling.",
      "Applied manual QA testing across browsers and devices for consistent performance.",
    ],
    technologies: [
      "React.js",
      "Firebase",
      "Custom CSS",
      "Responsive Design",
      "SEO Optimization",
      "Manual QA",
    ],
  },

  {
    projectName: "Alexa & Romell Wedding Website – RSVP & Guest Management",
    forWhat: "Personal/Freelance Project",
    period: "Aug 2025",
    projectLink: "https://www.alexandromell.com",
    responsibilities: [
      "Developed a fully responsive wedding website using React.js and Firebase for real-time data management.",
      "Implemented RSVP functionality allowing guests to confirm attendance online and provide additional details.",
      "Created dedicated sections for dress codes, venue details, wedding timeline, and easy-to-find guest information.",
      "Built a custom admin dashboard to view RSVPs, manage guest data, and download responses.",
      "Integrated PDF and Excel export features using react-pdf and excel libraries for convenient RSVP reporting.",
      "Ensured seamless user experience across mobile, tablet, and desktop devices.",
      "Applied QA testing to verify forms, dashboards, and download features functioned correctly.",
    ],
    technologies: [
      "React.js",
      "Firebase",
      "Framer Motion",
      "React-PDF",
      "ExcelJS",
      "Responsive Design",
      "Custom Admin Dashboard",
      "QA Testing",
    ],
  },
];

const Projects = () => {
  const [expandedStates, setExpandedStates] = useState(
    projects.reduce(
      (acc, _, idx) => ({
        ...acc,
        [`res_${idx}`]: idx === 0, // responsibilities
        [`tech_${idx}`]: idx === 0, // technologies
      }),
      {}
    )
  );

  const toggleExpand = (key) => {
    setExpandedStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const calcCounterStart = (index) => {
    let count = 0;
    for (let i = 0; i < index; i++) {
      count +=
        4 + // projectName, forWhat, period, projectLink
        1 +
        projects[i].responsibilities.length +
        1 + // responsibilities
        1 +
        projects[i].technologies.length +
        1; // technologies
    }
    return count + 1;
  };

  return (
    <div>
      {projects.map((proj, idx) => {
        const baseCounter = calcCounterStart(idx);
        let counter = baseCounter;

        return (
          <div key={idx} className="tem" style={{ display: "flex" }}>
            <div>
              {/* ✅ Project Name */}
              <p className="description_para">
                <span style={{ color: "#6b7280" }} className="haverd">
                  {counter++}.
                </span>{" "}
                <strong className="malisa">projectName:</strong>{" "}
                {proj.projectName}
              </p>

              {/* ✅ For What */}
              <p className="description_para">
                <span style={{ color: "#6b7280" }} className="haverd">
                  {counter++}.
                </span>{" "}
                <strong className="malisa">forWhat:</strong> {proj.forWhat}
              </p>

              {/* ✅ Period */}
              <p className="description_para">
                <span style={{ color: "#6b7280" }} className="haverd">
                  {counter++}.
                </span>{" "}
                <strong className="malisa">period:</strong> {proj.period}
              </p>

              {/* ✅ Project Link */}
              {proj.projectLink && (
                <p className="description_para">
                  <span style={{ color: "#6b7280" }} className="haverd">
                    {counter++}.
                  </span>{" "}
                  <strong className="malisa">projectLink:</strong>{" "}
                  <a
                    className="doy"
                    href={proj.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {proj.projectLink}
                  </a>
                </p>
              )}

              {/* ✅ Responsibilities (Expandable) */}
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
                  onClick={() => toggleExpand(`res_${idx}`)}
                  style={{ cursor: "pointer" }}
                >
                  {expandedStates[`res_${idx}`] ? (
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

              {expandedStates[`res_${idx}`] &&
                proj.responsibilities.map((res, idxRes) => (
                  <p className="description_para" key={idxRes}>
                    <span style={{ color: "#6b7280" }} className="haverd">
                      {counter + idxRes}.
                    </span>{" "}
                    "{res}"
                  </p>
                ))}

              {expandedStates[`res_${idx}`] && (
                <p className="description_para">
                  <span style={{ color: "#6b7280" }} className="haverd">
                    {counter + proj.responsibilities.length}.
                  </span>{" "}
                  {"],"}
                </p>
              )}

              {/* ✅ Technologies (Expandable) */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <h2 className="bio_name">
                  <span style={{ color: "#6b7280" }} className="haverd">
                    {counter + proj.responsibilities.length + 1}.
                  </span>{" "}
                  <strong className="malisa">technologies</strong>
                  <span style={{ color: "#fff", margin: "0px 4px" }}>:</span>
                </h2>

                <div
                  className="arrow_section"
                  onClick={() => toggleExpand(`tech_${idx}`)}
                  style={{ cursor: "pointer" }}
                >
                  {expandedStates[`tech_${idx}`] ? (
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

              {expandedStates[`tech_${idx}`] &&
                proj.technologies.map((tech, idxTech) => (
                  <p className="description_para" key={idxTech}>
                    <span style={{ color: "#6b7280" }} className="haverd">
                      {counter + proj.responsibilities.length + 1 + idxTech + 1}
                      .
                    </span>{" "}
                    "{tech}"
                  </p>
                ))}

              {expandedStates[`tech_${idx}`] && (
                <p className="description_para">
                  <span style={{ color: "#6b7280" }} className="haverd">
                    {counter +
                      proj.responsibilities.length +
                      proj.technologies.length +
                      1}
                    .
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

export default Projects;
