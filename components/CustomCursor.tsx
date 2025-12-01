import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.tagName === 'INPUT' ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.closest('.interactive') !== null;
        
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-fx-green rounded-full pointer-events-none z-[100] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />
      
      {/* Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 border border-fx-green/50 rounded-full pointer-events-none z-[99]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          width: isHovering ? 50 : 20,
          height: isHovering ? 50 : 20,
          backgroundColor: isHovering ? 'rgba(74, 222, 128, 0.1)' : 'transparent',
          borderWidth: isHovering ? '1px' : '1px',
          borderColor: isHovering ? 'rgba(74, 222, 128, 0.8)' : 'rgba(74, 222, 128, 0.3)'
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      />
    </>
  );
};

export default CustomCursor;