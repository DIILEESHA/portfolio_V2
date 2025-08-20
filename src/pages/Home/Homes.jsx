import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaPlus } from "react-icons/fa6";
import Layout from "../../components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import blu from "../../assets/blurs.png"
import "./home.css";
import { div } from "framer-motion/client";

const roles = [
  "QA Engineer",
  "WordPress Developer",
  "Front-end Developer",
  "Freelancer",
];

const commandsList = [
  "cd Developer/dileesha_portfolio",
  "npm i",
  "react@latest",
  "react-dom@latest",
  "vite@latest",
  "framer-motion@latest",
  "prettier@latest",
  "react-syntax-highlighter@latest",
  "✓ Packages successfully installed.",
  "code .",
];

// Splitting code function into lines for typing animation
const finalCodeLines = [
  "function createAwesomePortfolio(name: string): Portfolio {",
  "  return {",
  "    Developer: 'Dileesha Nawarathna',",
  "    techStack: [",
  "      'React', 'Next.js', 'WordPress', 'MongoDB',",
  "      'Git', 'JIRA'",
  "    ],",
  "    developingSkills: [",
  "      'Responsive Design', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript'",
  "    ],",
  "    qaSkills: [",
  "      'Manual Testing', 'Automation Testing', 'Regression Testing', 'Unit Testing',",
  "      'Selenium', 'Cypress', 'Jest'",
  "    ],",
  "    aim: '🚀 QA Engineer, Front-end Developer',",
  "    openToWork: true,",
  "  };",
  "}",
];

const TYPING_SPEED = 40;
const COMMAND_DELAY = 1000;
const LOADER_TIME = 2800;
const CODE_TYPING_DELAY = 50;

const Homes = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Terminal states
  const [history, setHistory] = useState([]); // stores all output lines with prefix
  const [typingLine, setTypingLine] = useState("");
  const [typingIndex, setTypingIndex] = useState(0); // index for commandsList or finalCodeLines
  const [charIndex, setCharIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [typingFinalCode, setTypingFinalCode] = useState(false);
  const [finalCodeLinesTyped, setFinalCodeLinesTyped] = useState([]);

  // Cursor blinking
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((v) => !v);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Career roles animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Typing effect for commands and then portfolio code
  useEffect(() => {
    if (typingFinalCode) {
      // Typing portfolio code line by line
      if (typingIndex >= finalCodeLines.length) {
        setTypingLine("");
        setShowCursor(false);
        return;
      }

      // Typing a single line character-by-character
      if (!typingLine || charIndex < finalCodeLines[typingIndex].length) {
        const timeout = setTimeout(() => {
          setTypingLine(
            (line) => line + finalCodeLines[typingIndex].charAt(charIndex)
          );
          setCharIndex((i) => i + 1);
        }, CODE_TYPING_DELAY);
        return () => clearTimeout(timeout);
      } else {
        // Full line typed, add to output and go next line
        const delayTimeout = setTimeout(() => {
          setFinalCodeLinesTyped((prev) => [...prev, typingLine]);
          setTypingIndex((i) => i + 1);
          setTypingLine("");
          setCharIndex(0);
        }, COMMAND_DELAY);
        return () => clearTimeout(delayTimeout);
      }
    } else {
      // Typing terminal commands with loader and after commands start portfolio code
      if (typingIndex >= commandsList.length) {
        setTypingLine("");
        setIsLoading(true);
        // After loader delay, remove all previous commands & loader, then start typing portfolio code
        const loaderTimeout = setTimeout(() => {
          setIsLoading(false);
          setHistory([]);
          setTypingFinalCode(true);
          setTypingIndex(0);
          setCharIndex(0);
          setFinalCodeLinesTyped([]);
        }, LOADER_TIME);
        return () => clearTimeout(loaderTimeout);
      }

      if (charIndex < commandsList[typingIndex].length) {
        const timeout = setTimeout(() => {
          setTypingLine(
            (line) => line + commandsList[typingIndex].charAt(charIndex)
          );
          setCharIndex((i) => i + 1);
        }, TYPING_SPEED);
        return () => clearTimeout(timeout);
      } else {
        if (
          commandsList[typingIndex] === "npm i" ||
          [
            "react@latest",
            "react-dom@latest",
            "vite@latest",
            "framer-motion@latest",
            "prettier@latest",
            "react-syntax-highlighter@latest",
          ].includes(commandsList[typingIndex])
        ) {
          setIsLoading(true);
        } else {
          setIsLoading(false);
        }
        const delayTimeout = setTimeout(() => {
          const prefix = typingIndex <= 1 ? "$ " : "+ ";
          setHistory((prev) => [...prev, prefix + commandsList[typingIndex]]);
          setTypingIndex((i) => i + 1);
          setTypingLine("");
          setCharIndex(0);
        }, COMMAND_DELAY);
        return () => clearTimeout(delayTimeout);
      }
    }
  }, [charIndex, typingIndex, typingFinalCode, typingLine, isLoading]);

  return (
    <Layout>
      <div className="home">
        <div className="home_grid">
          <div className="ome_sub_grid">
            <h3 className="shorten_text">Hello, I am</h3>
            <h1 className="my_name">Dileesha Nawarathna</h1>

            <div
              className="career_roles"
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.5rem",
              }}
            >
              <span className="names" style={{ marginRight: 8 }}>
                {">"}
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  className="names"
                  key={roles[currentRoleIndex]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  style={{ display: "inline-block" }}
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="todo_text_section">
              <h4 className="todo_text">// Todo: Add more projects</h4>
              <h4 className="todo_text">// My Github account:</h4>
              <h2 className="git_link">
                <span className="purple-text">const</span>{" "}
                <span className="green">githubLink = </span>{" "}
                <span className="gold">
                  <a
                    href="https://github.com/DIILEESHA"
                    target="_blank"
                    className="cb"
                  >
                    "https://github.com/DIILEESHA"
                  </a>
                </span>
              </h2>
            </div>
          </div>

          <div className="ome_sub_grid">
              <div className="terminal_img">
                <img className="op" src={blu} alt="" />
              </div>
            <div className="terminal_box">

              <div className="terminal_top_content">
                <div className="color_set">
                  <div className="color_red"></div>
                  <div className="color_yellow"></div>
                  <div className="color_green"></div>
                </div>
                <h2 className="terminal_name">
                  Terminal __ Dileesha@portfolio
                </h2>
              </div>

              <div className="terminal_content">
                <ul
                  className="command_ul"
                  aria-live="polite"
                  aria-relevant="additions"
                >
                  {/* History of typed lines */}
                  {history.map((line, i) => {
                    if (line.startsWith("$")) {
                      return (
                        <li key={i} className="command_lis executed_command">
                          <span className="prompt_dollar">$</span>{" "}
                          <span>{line.slice(2)}</span>
                        </li>
                      );
                    } else if (line.startsWith("+")) {
                      return (
                        <li key={i} className="command_lis executed_command">
                          <FaPlus className="plus_icon" title="Added package" />
                          <span>{line.slice(2)}</span>
                        </li>
                      );
                    }
                    return (
                      <li key={i} className="command_lis">
                        <span>{line}</span>
                      </li>
                    );
                  })}
                  {/* Currently typing line */}
                  {typingLine && !typingFinalCode && (
                    <li className="command_lis typing_line">
                      {typingIndex <= 1 ? (
                        <>
                          <span className="prompt_dollar">$</span>{" "}
                          <span>{typingLine}</span>
                        </>
                      ) : (
                        <>
                          <FaPlus
                            className="plus_icon"
                            title="Typing package"
                          />{" "}
                          <span>{typingLine}</span>
                        </>
                      )}
                      {showCursor && (
                        <span className="blinking_cursor">&#9608;</span>
                      )}
                    </li>
                  )}
                  {/* Loader */}
                  {isLoading && !typingFinalCode && (
                    <li className="command_lis loading_line">
                      <span className="loader_dot"></span>
                      <span className="loader_dot"></span>
                      <span className="loader_dot"></span>
                      {/* <span style={{ marginLeft: 8 }}>Installing packages, please wait...</span> */}
                    </li>
                  )}
                  {/* Typing portfolio code lines with syntax highlight line by line */}
                  {typingFinalCode &&
                    finalCodeLinesTyped.map((line, i) => (
                      <li className="code_line" key={"code" + i}>
                          <SyntaxHighlighter
                            language="typescript"
                            style={oneDark}
                            customStyle={{
                              background: "transparent",
                              margin: 0,
                              padding: 0,
                              fontSize: 14,
                            }}
                            // showLineNumbers={true}
                            // wrapLines
                          >
                            {line}
                          </SyntaxHighlighter>
                        </li>
                    ))}
                  {/* Typing line while coding */}
                  {typingFinalCode && typingLine && (
                    <li className="command_lis typing_line">
                      <SyntaxHighlighter
                        language="typescript"
                        style={oneDark}
                        customStyle={{
                          background: "transparent",
                          margin: 0,
                          padding: 0,
                          fontSize: 14,
                        }}
                        showLineNumbers={false}
                        wrapLines
                      >
                        {typingLine}
                      </SyntaxHighlighter>
                      {showCursor && (
                        <span className="blinking_cursor">&#9608;</span>
                      )}
                    </li>
                  )}
                  {/* Final success message */}
                  {typingFinalCode &&
                    !typingLine &&
                    finalCodeLinesTyped.length === finalCodeLines.length && (
                      <li
                        className="command_lis info_line"
                        style={{ color: "#4caf50", marginTop: 8 }}
                      >
                        {/* VS Code opened successfully with your portfolio code! 🚀 */}
                      </li>
                    )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Homes;
