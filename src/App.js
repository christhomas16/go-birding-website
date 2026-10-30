import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GoBirdingAI from './pages/GoBirdingAI';
import GoBirdingAISupport from './pages/GoBirdingAISupport';
import GoBirdingAIPrivacy from './pages/GoBirdingAIPrivacy';
import About from './pages/About';
import Download from './pages/Download';
import BirdChatter from './pages/BirdChatter';
import BirdChatterSupport from './pages/BirdChatterSupport';
import BirdChatterPrivacy from './pages/BirdChatterPrivacy';
import NextLifer from './pages/NextLifer';
import NextLiferSupport from './pages/NextLiferSupport';
import NextLiferPrivacy from './pages/NextLiferPrivacy';
import TermsOfService from './pages/TermsOfService';

function AppContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/go-birding-ai" element={<GoBirdingAI />} />
          <Route path="/go-birding-ai/support" element={<GoBirdingAISupport />} />
          <Route path="/go-birding-ai/privacy" element={<GoBirdingAIPrivacy />} />
          <Route path="/features" element={<GoBirdingAI />} />
          <Route path="/about" element={<About />} />
          <Route path="/download" element={<Download />} />
          <Route path="/bird-chatter" element={<BirdChatter />} />
          <Route path="/bird-chatter/support" element={<BirdChatterSupport />} />
          <Route path="/bird-chatter/privacy" element={<BirdChatterPrivacy />} />
          <Route path="/next-lifer" element={<NextLifer />} />
          <Route path="/next-lifer/support" element={<NextLiferSupport />} />
          <Route path="/next-lifer/privacy" element={<NextLiferPrivacy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<GoBirdingAIPrivacy />} />
        </Routes>
      </main>
      <Footer />
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
