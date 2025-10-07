import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhatIsTsneSection from './components/WhatIsTsneSection';
import HowItWorksSection from './components/HowItWorksSection';
import MathBehindTsneSection from './components/MathBehindTsneSection';
import ComparisonSection from './components/ComparisonSection';
import ApplicationsSection from './components/ApplicationsSection';
import LimitationsSection from './components/LimitationsSection';
import GlossarySection from './components/GlossarySection';
import LearnMoreSection from './components/LearnMoreSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackToTopButton from './components/BackToTopButton';

function App() {
  return (
    <>
      <CustomCursor />
      <div className="min-h-screen selection:bg-neon-turquoise/30">
        <Header />
        <HeroSection />
        <main className="px-6 md:px-20 lg:px-40 xl:px-60 mx-auto max-w-[1600px]">
          <WhatIsTsneSection />
          <HowItWorksSection />
          <MathBehindTsneSection />
          <ComparisonSection />
          <ApplicationsSection />
          <LimitationsSection />
          <GlossarySection />
          <LearnMoreSection />
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </>
  );
}

export default App;
