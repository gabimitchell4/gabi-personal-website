// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Othello from "./pages/Othello";
import NutriGuide from "./pages/NutriGuide";
import Felt from "./pages/Felt";
import DailyDuel from "./pages/DailyDuel";
import Klondike from "./pages/Klondike";
import Life from "./pages/Life";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const basename = window.location.pathname.startsWith("/gabi-personal-website")
    ? "/gabi-personal-website"
    : undefined;

  return (
    <div className="App">
      <Router basename={basename}>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/othello" element={<Othello />} />
          <Route path="/nutriguide" element={<NutriGuide />} />
          <Route path="/felt" element={<Felt />} />
          <Route path="/dailyduel" element={<DailyDuel />} />
          <Route path="/klondike" element={<Klondike />} />
          <Route path="/life" element={<Life />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
