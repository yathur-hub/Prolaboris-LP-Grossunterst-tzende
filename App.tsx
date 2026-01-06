
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CaseForSupport from './components/CaseForSupport';
import ImpactModel from './components/ImpactModel';
import PreventionSimulator from './components/PreventionSimulator';
import PartnershipModels from './components/PartnershipModels';
import TrustSection from './components/TrustSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-accent flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CaseForSupport />
        <ImpactModel />
        <PreventionSimulator />
        <PartnershipModels />
        <TrustSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
