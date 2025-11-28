import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import Industries from './components/Industries';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import WhySafeLink from './components/WhySafeLink';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-200 selection:text-cyan-900">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Industries />
        <HowItWorks />
        <Pricing />
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