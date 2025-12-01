
import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  currentPage: string;
  setPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const navLinks = [
    { name: 'Home' },
    { name: 'How It Works' },
    { name: 'Programs' },
    { name: 'Support' },
    { name: 'Careers' },
    { name: 'Become a Partner' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 w-full max-w-[1920px] mx-auto pointer-events-none"
    >
      {/* Logo */}
      <div 
        className="flex items-center gap-2 cursor-pointer pointer-events-auto interactive"
        onClick={() => setPage('Home')}
      >
        <div className="bg-fx-green text-black font-bold p-1 rounded text-xs font-display">Fx</div>
        <span className="text-white font-display text-xl tracking-wide">ology</span>
      </div>

      {/* Center Navigation */}
      <div className="hidden xl:flex items-center gap-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-1.5 shadow-lg shadow-black/20 pointer-events-auto">
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => setPage(link.name)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden ${
              currentPage === link.name
                ? 'text-white' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {currentPage === link.name && (
              <motion.div 
                layoutId="nav-bg"
                className="absolute inset-0 bg-white/10 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{link.name}</span>
          </button>
        ))}
        <div className="h-4 w-[1px] bg-white/10 mx-1"></div>
        <button 
          onClick={() => setPage('Login')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            currentPage === 'Login' ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          Login / Register
        </button>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4 pointer-events-auto">
        <button className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/5 hover:border-white/20">
          <Globe size={16} />
          <span>English</span>
        </button>

        <button 
          onClick={() => setPage('Programs')}
          className="group relative flex items-center gap-2 bg-white text-black pl-5 pr-2 py-2 rounded-full font-semibold text-sm transition-transform hover:scale-105 active:scale-95"
        >
          <span>Start a challenge</span>
          <div className="bg-fx-green rounded-full p-1 transition-transform group-hover:rotate-[-45deg]">
            <ArrowRight size={16} />
          </div>
        </button>
        
        <button 
          onClick={() => setPage('Dashboard')}
          className="hidden sm:block px-5 py-2.5 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors"
        >
          Free trial
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
