import { useState } from "react";
import { AppSidebar } from "./AppSidebar";
import Footer from "./footer/Footer";
import Nav from "./nav/Nav";
import "./other.css";
import Bio from "@/pages/about/Bio";
import Experience from "@/pages/about/Experience";

import { X, MessageCircleWarning } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion } from "framer-motion";
import Interest from "@/pages/about/Interest";
import Education from "@/pages/about/Education";
import Others from "@/pages/about/Others";
import Frontend from "@/pages/about/Frontend";
import { Braces } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const codeString = `// No tab currently open

console.log("⌨️ Start by clicking a file on the sidebar!");

// Suggestions:
//  - Click a tab to open
//  - Use the sidebar menu
//  - Close this message by opening a file
`;

// Map page keys to display names for breadcrumb
const pageNames = {
  bio: "Bio",
  experience: "Experience",
  interest: "Interest",
  education: "Education",
  others: "Others",
  frontend: "Frontend",
};

export default function PageLayout() {
  const [openedTabs, setOpenedTabs] = useState(["bio"]);
  const [selectedItem, setSelectedItem] = useState("bio");

  const contentMap = {
    bio: <Bio />,
    experience: <Experience />,
    interest: <Interest />,
    education: <Education />,
    others: <Others />,
    frontend: <Frontend />,
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    if (!openedTabs.includes(item)) {
      setOpenedTabs((prev) => [...prev, item]);
    }
  };

  const closeTab = (tab, e) => {
    e.stopPropagation();
    const filteredTabs = openedTabs.filter((t) => t !== tab);
    setOpenedTabs(filteredTabs);

    if (selectedItem === tab) {
      setSelectedItem(
        filteredTabs.length ? filteredTabs[filteredTabs.length - 1] : null
      );
    }
  };

  // Animation variants for framer-motion
  const iconAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.3, 1],
      transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <div className="layout">
      <div className="naving">
        <Nav />
      </div>

      <main className="main-contents">
        <div className="main_sub hhh">
          <div className="content_area">
            {openedTabs.map((tab) => (
              <div
                key={tab}
                className="bio_card_shown_top"
                onClick={() => setSelectedItem(tab)}
                style={{
                  cursor: "pointer",
                  backgroundColor:
                    selectedItem === tab ? "#020817" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  userSelect: "none",
                }}
              >
                <h2
                  className="name"
                  style={{
                    margin: 0,
                    color: selectedItem === tab ? "white" : "#ccc",
                  }}
                >
                  {tab}.json
                </h2>
                <div className="rop" onClick={(e) => closeTab(tab, e)}>
                  <X
                    size={10}
                    style={{
                      cursor: "pointer",
                      color: selectedItem === tab ? "white" : "#999",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <AppSidebar className="hhh" onSelectItem={handleSelectItem} />
        </div>

        <div className="ax" style={{ position: "relative" }}>
          <div className="bread">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink className="del" href="/">
                    portfolio_folder
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink className="del">src</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink className="del">pages</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />

                <BreadcrumbItem>
                  <BreadcrumbLink className="del" href="/about">
                    about
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="sasane del">
                    <Braces color="#fcd34d" size={14} />
                    {/* {pageNames[selectedItem] || "Page"} */}
                    {selectedItem + ".json"}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="linos"></div>
          </div>

          <div className="cxz">
            {selectedItem ? (
              contentMap[selectedItem]
            ) : (
              <div
                className="mali"
                style={{
                  position: "relative",
                  textAlign: "center",
                  paddingTop: "20px",
                  color: "#ccc",
                  zIndex: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={iconAnimation}
                  style={{
                    color: "orange",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  <div style={{ position: "absolute", right: "100px" }}>
                    <MessageCircleWarning size={38} />
                  </div>
                </motion.div>

                <SyntaxHighlighter
                  language="javascript"
                  style={dracula}
                  showLineNumbers
                  wrapLines
                  customStyle={{
                    background: "transparent",
                    borderRadius: "10px",
                    maxWidth: "600px",
                    margin: "70px auto",
                    fontSize: "14px",
                    userSelect: "text",
                  }}
                >
                  {codeString}
                </SyntaxHighlighter>
              </div>
            )}
          </div>
        </div>
      </main>

      <div className="footering">
        <Footer />
      </div>
    </div>
  );
}
