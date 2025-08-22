import React from "react";
import Layout from "../../components/Layout";
import four from "../../assets/404.png";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./u.css";
import blu from "../../assets/blurs.png";

const codeString = `const page = findPage('you-were-looking-for');

if (!page) {
    console.log("Oops! Looks like you took a wrong turn in the codebase.");
    console.log("But hey, since you're here...");
    console.log("🔍 Go back to the homepage and explore more cool stuff!");
    throw new Error("404: PageNotFoundError 😢");   
}

/* Suggestions:
    * - Check the URL for typos
  * - Use the site navigation
 * - Or hit CMD+Z in real life 😅
 */

redirect('home');`;

const Undefined = () => {
  return (
    <Layout>
      <div className="undefined_grid">
        <div className="terminal_imgx">
          <img className="oxp" src={blu} alt="" />
        </div>
        <div className="undefined_sub kl">
          <img src={four} alt="404 error" className="four_png" />
        </div>
        <div className="undefined_sub lo">
          <SyntaxHighlighter
            language="javascript"
            className="ddd"
            style={dracula}
            showLineNumbers
            wrapLines
            customStyle={{
              background: "transparent",
              // border: "1px solid #1c2538",

              fontSize: "14px",
              fontFamily: "Fira Code, Menlo, Monaco, Consolas, monospace",
              fontWeight: "400",
              // padding: "20px",
            }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </Layout>
  );
};

export default Undefined;
