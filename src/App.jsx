import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homes from "./pages/Home/Homes";
import PageLayout from "./components/PageLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/about" element={<PageLayout />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
};

export default App;
