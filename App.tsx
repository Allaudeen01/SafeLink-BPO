import React from 'react';
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

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-200 selection:text-cyan-900">
      <Header />
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
    </div>
  );
};

export default App;