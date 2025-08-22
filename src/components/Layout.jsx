import React from "react";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="naving">
        <Nav />
      </div>
      <main className="main-content">{children}</main>

      <div className="footering">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
