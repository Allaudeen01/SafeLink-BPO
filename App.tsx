import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Operations from './components/Operations';
import Services from './components/Services';
import SampleReport from './components/SampleReport';
import HowItWorks from './components/HowItWorks';
import TargetAudience from './components/TargetAudience';
import WhySafeLink from './components/WhySafeLink';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MonitoringShowcase from './components/MonitoringShowcase';
import LoginModal from './components/LoginModal';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-200 selection:text-cyan-900">
      <Header
        isLoggedIn={isLoggedIn}
        onLoginClick={() => setIsLoginModalOpen(true)}
        onLogoutClick={handleLogout}
      />
      <main>
        <Hero />
        <HowItWorks />
        <Operations />
        <Services />
        <SampleReport />
        <TargetAudience />
        <MonitoringShowcase />
        <WhySafeLink />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default App;