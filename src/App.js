import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/contact';
import './App.css';
import Adm4u from './pages/projets/adm4u';
import ATC from './pages/projets/atc';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Sports from './pages/projets/sports';
import IA from './pages/projets/ia';
import Footer from './components/Footer';
import Tournament from './pages/projets/tournament';
import FashionEcommerce from './pages/projets/fashion';
import Football from './pages/projets/football';
import Construction from './pages/Construction';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets/adm4u" element={<Adm4u />} />
        <Route path="/projets/atc" element={<ATC />} />
        <Route path='/projets/sports' element={<Sports />} />
        <Route path='/projets/ia' element={<IA />} />
        <Route path='/projets/football' element={<Football />} />
        <Route path='/projets/tournoi' element={<Tournament />} />
        <Route path='/projets/fashion' element={<FashionEcommerce />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Construction />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </Router>
  );
}

export default App;