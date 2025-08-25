import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Homes from "./pages/Home/Homes";
import PageLayout from "./components/PageLayout";
import Undefined from "./pages/four/Undefined";
import ProjectLayout from "./components/ProjectLayout";
import Lenis from "@studio-freight/lenis";

const ScrollToTopAndLenis = () => {
  const lenis = useRef(null);
  const location = useLocation();

  useEffect(() => {
    lenis.current = new Lenis({
      duration: 1.5, // scroll duration, higher is slower
      easing: (t) => t, // linear easing, customize if needed
      smooth: true,
      direction: "vertical",
    });

    function raf(time) {
      lenis.current.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      if (lenis.current) lenis.current.destroy();
    };
  }, []);

  // Scroll to top on route change with smooth scroll
  useEffect(() => {
    if (lenis.current) {
      lenis.current.scrollTo(0, { immediate: false });
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTopAndLenis />
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
