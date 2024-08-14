// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Othello from './pages/Othello';
import Designs from './pages/Designs';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/designs" element={<Designs />} />
          <Route path="/othello" element={<Othello />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
