import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import BirdChatterHeader from './components/BirdChatterHeader';
import Footer from './components/Footer';
import BirdChatterFooter from './components/BirdChatterFooter';
import Home from './pages/Home';
import Features from './pages/Features';
import About from './pages/About';
import Download from './pages/Download';
import BirdChatter from './pages/BirdChatter';
import BirdChatterSupport from './pages/BirdChatterSupport';
import BirdChatterDownload from './pages/BirdChatterDownload';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';

function AppContent() {
  const location = useLocation();
  const isBirdChatterRoute = location.pathname.startsWith('/bird-chatter');

  return (
    <div className="min-h-screen bg-white">
      {isBirdChatterRoute ? <BirdChatterHeader /> : <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/download" element={<Download />} />
          <Route path="/bird-chatter" element={<BirdChatter />} />
          <Route path="/bird-chatter/support" element={<BirdChatterSupport />} />
          <Route path="/bird-chatter/download" element={<BirdChatterDownload />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      {isBirdChatterRoute ? <BirdChatterFooter /> : <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
