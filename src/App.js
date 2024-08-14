import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Adm4u from './pages/projets/adm4u';
import ATC from './pages/projets/atc';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Sports from './pages/projets/sports';
import Footer from './components/Footer';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets/adm4u" element={<Adm4u />} />
        <Route path="/projets/atc" element={<ATC />} />
        <Route path='/projets/sports' element={<Sports />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <ScrollToTop />
      <Footer />
    </Router>
  );
}

export default App;
