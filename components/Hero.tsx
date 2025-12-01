
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Clock, Trophy, Layers } from 'lucide-react';

interface HeroProps {
  mousePosition: { x: number; y: number };
  onNavigate?: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ mousePosition, onNavigate }) => {
  // Parallax calculations
  const calculateParallax = (factor: number) => {
    const x = (mousePosition.x - window.innerWidth / 2) * factor;
    const y = (mousePosition.y - window.innerHeight / 2) * factor;
    return { x, y };
  };

  const features = [
    { icon: <Layers size={14} />, text: "The Lab™ Native platform" },
    { icon: <Zap size={14} />, text: "Fast progress" },
    { icon: <Clock size={14} />, text: "No time Limit Prop firm" },
    { icon: <Trophy size={14} />, text: "Unique programs" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: "circOut" }}
      className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-5xl mx-auto mt-24 md:mt-0"
    >
      
      {/* Floating Math Elements (Parallax) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <FloatingElement initialX={-300} initialY={-150} delay={0} factor={0.02} mousePosition={mousePosition}>
          <div className="text-white/10 font-display text-4xl md:text-6xl font-bold tracking-widest blur-[2px]">(12+12)</div>
        </FloatingElement>
        <FloatingElement initialX={350} initialY={-100} delay={1} factor={0.03} mousePosition={mousePosition}>
          <div className="text-white/5 font-display text-5xl border border-white/10 p-2 rounded blur-[1px]">12</div>
        </FloatingElement>
        <FloatingElement initialX={-400} initialY={100} delay={2} factor={0.04} mousePosition={mousePosition}>
          <div className="text-white/10 font-display text-5xl md:text-7xl font-bold -rotate-12">-15+6</div>
        </FloatingElement>
        <FloatingElement initialX={400} initialY={150} delay={1.5} factor={0.02} mousePosition={mousePosition}>
          <div className="text-white/10 font-display text-4xl md:text-6xl font-bold rotate-6">17+6-4</div>
        </FloatingElement>
        <FloatingElement initialX={-200} initialY={250} delay={0.5} factor={0.05} mousePosition={mousePosition}>
          <div className="text-white/5 font-display text-5xl border border-white/10 p-4 rounded-lg -rotate-6">24</div>
        </FloatingElement>
        <FloatingElement initialX={500} initialY={300} delay={2.5} factor={0.03} mousePosition={mousePosition}>
          <div className="text-white/5 font-display text-4xl border-b border-white/10 pb-2">5x9</div>
          <div className="text-white/5 font-display text-4xl pt-2 flex justify-center">8</div>
        </FloatingElement>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default"
        >
          <span className="text-gray-400 text-xs uppercase tracking-wider font-medium">Our Capital, Your</span>
          <span className="bg-white/10 text-white text-xs px-2 py-0.5 rounded flex items-center gap-1 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-fx-green animate-pulse"></span> Success
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 drop-shadow-[0_0_35px_rgba(74,222,128,0.25)]"
        >
          No Time Limit Prop Firm <br />
          <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Conquer the market</span>
        </motion.h1>

        {/* Feature List */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8"
        >
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-400 text-xs md:text-sm font-medium hover:text-fx-green transition-colors cursor-default">
              <span className="text-fx-green">{feature.icon}</span>
              {feature.text}
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-4 mt-4"
        >
          <button 
            onClick={() => onNavigate?.('Programs')}
            className="group relative flex items-center gap-3 bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-full font-bold text-base transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(74,222,128,0.3)]"
          >
            <span>Start a challenge</span>
            <div className="bg-fx-green rounded-full p-1 transition-transform group-hover:rotate-[-45deg]">
              <ArrowRight size={18} />
            </div>
          </button>
          
          <button 
            onClick={() => onNavigate?.('Dashboard')}
            className="px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 hover:border-white/40 transition-all interactive"
          >
            Free trial
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Helper component for floating background elements
const FloatingElement = ({ children, initialX, initialY, delay, factor, mousePosition }: any) => {
  const [position, setPosition] = React.useState({ x: initialX, y: initialY });

  React.useEffect(() => {
    // Parallax logic
    const moveX = (mousePosition.x - window.innerWidth / 2) * factor;
    const moveY = (mousePosition.y - window.innerHeight / 2) * factor;
    setPosition({ x: initialX + moveX, y: initialY + moveY });
  }, [mousePosition, initialX, initialY, factor]);

  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      animate={{ 
        x: position.x, 
        y: position.y,
        translateY: [0, -15, 0] // Gentle float animation
      }}
      transition={{ 
        x: { type: "spring", stiffness: 50, damping: 20 },
        y: { type: "spring", stiffness: 50, damping: 20 },
        translateY: { duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: delay }
      }}
    >
      {children}
    </motion.div>
  );
};

export default Hero;
