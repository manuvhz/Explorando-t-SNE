import React, { useState, useEffect } from 'react';
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
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('theme') === 'dark' || 
         (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        return 'dark';
      }
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen selection:bg-neon-turquoise/30">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="px-6 md:px-20 lg:px-40 xl:px-60 mx-auto max-w-[1600px]">
          <HeroSection />
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