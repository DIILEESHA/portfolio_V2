import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homes from "./pages/Home/Homes";
import PageLayout from "./components/PageLayout";
import Undefined from "./pages/four/Undefined";
import ProjectLayout from "./components/ProjectLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/about" element={<PageLayout />} />
        <Route path="/projects" element={<ProjectLayout />} />
        <Route path="*" element={<Undefined />} />
      </Routes>
    </Router>
  );
};

export default App;
