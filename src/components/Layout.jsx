import React from "react";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Nav />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
