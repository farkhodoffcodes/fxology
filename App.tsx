
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackgroundAnimation from './components/BackgroundAnimation';
import FooterUI from './components/FooterUI';
import CustomCursor from './components/CustomCursor';

// Pages
import HowItWorks from './components/pages/HowItWorks';
import Programs from './components/pages/Programs';
import Support from './components/pages/Support';
import Careers from './components/pages/Careers';
import Partner from './components/pages/Partner';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentPage, setCurrentPage] = useState('Home');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'How It Works':
        return <HowItWorks key="how-it-works" />;
      case 'Programs':
        return <Programs key="programs" onNavigate={setCurrentPage} />;
      case 'Support':
        return <Support key="support" />;
      case 'Careers':
        return <Careers key="careers" />;
      case 'Become a Partner':
        return <Partner key="partner" />;
      case 'Login':
      case 'Register':
        return <Login key="login" type={currentPage} onBack={() => setCurrentPage('Home')} />;
      case 'Dashboard':
        return <Dashboard key="dashboard" onNavigate={setCurrentPage} />;
      case 'Home':
      default:
        return <Hero key="home" mousePosition={mousePosition} onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-fx-dark overflow-hidden flex flex-col font-sans selection:bg-fx-green selection:text-black">
      <CustomCursor />
      
      {/* Dynamic Background Layer */}
      <BackgroundAnimation mousePosition={mousePosition} />
      
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col h-full min-h-screen">
        {currentPage !== 'Dashboard' && (
          <Navbar currentPage={currentPage} setPage={setCurrentPage} />
        )}
        
        <main className={`flex-grow flex flex-col w-full ${currentPage === 'Dashboard' ? '' : 'items-center justify-center max-w-[1920px] mx-auto px-4 md:px-8'}`}>
          <AnimatePresence mode="wait">
            {renderPage()}
          </AnimatePresence>
        </main>
        
        {currentPage !== 'Dashboard' && <FooterUI />}
      </div>
      
      {/* Vignette Overlay */}
      <div className="pointer-events-none fixed inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
};

export default App;
