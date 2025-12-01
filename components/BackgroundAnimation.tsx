import React, { useRef, useEffect } from 'react';

interface BackgroundProps {
  mousePosition: { x: number; y: number };
}

const BackgroundAnimation: React.FC<BackgroundProps> = ({ mousePosition }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate gradient position based on mouse
  const bgX = mousePosition.x;
  const bgY = mousePosition.y;

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none">
      {/* Base Grid */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
        }}
      />

      {/* Mouse Spotlight / Torch effect */}
      <div 
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${bgX}px ${bgY}px, rgba(74, 222, 128, 0.06), transparent 40%)`
        }}
      />

      {/* Grid Highlight under mouse */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(74, 222, 128, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(74, 222, 128, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: `radial-gradient(300px circle at ${bgX}px ${bgY}px, black, transparent)`
        }}
      />

      {/* Ambient Glows */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-fx-green/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[20%] w-[600px] h-[600px] bg-green-900/10 rounded-full blur-[120px] mix-blend-screen" />
      
      {/* Particles/Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full opacity-20 animate-pulse"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 3 + 2 + 's'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundAnimation;