import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Send, Disc, Cookie, ArrowDown } from 'lucide-react';

const FooterUI: React.FC = () => {
  return (
    <>
      {/* Left: Social Icons */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="fixed bottom-8 left-8 md:left-12 z-40 hidden lg:flex items-center gap-4"
      >
        <span className="text-gray-400 text-xs font-medium mr-2">Follow Us</span>
        <SocialIcon icon={<Disc size={16} />} />
        <SocialIcon icon={<Facebook size={16} />} />
        <SocialIcon icon={<Twitter size={16} />} />
        <SocialIcon icon={<Instagram size={16} />} />
        <SocialIcon icon={<Send size={16} />} />
      </motion.div>

      {/* Center: Cookie Consent */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 100, damping: 20 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto max-w-2xl"
      >
        <div className="bg-[#111] border border-white/10 rounded-2xl p-3 md:p-4 flex flex-col md:flex-row items-center gap-4 shadow-2xl shadow-black/50">
          <div className="bg-white/5 p-2 rounded-xl text-gray-400">
            <Cookie size={20} />
          </div>
          <p className="text-[10px] md:text-xs text-gray-400 leading-relaxed md:max-w-md text-center md:text-left">
            We use cookies and other technology to provide you with our services and for functional, analytical and advertising purposes. Please, read our <span className="text-white hover:underline cursor-pointer">Privacy Policy</span> for more information.
          </p>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-4 py-2 rounded-full border border-white/10 text-xs text-white hover:bg-white/5 transition-colors">
              Decline
            </button>
            <button className="flex-1 md:flex-none px-4 py-2 rounded-full bg-white text-black text-xs font-bold hover:bg-gray-200 transition-colors">
              Accept
            </button>
          </div>
        </div>
      </motion.div>

      {/* Right: Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="fixed bottom-8 right-8 md:right-12 z-40 hidden lg:flex items-center gap-2 text-gray-400 cursor-pointer group"
      >
        <span className="text-xs font-medium group-hover:text-white transition-colors">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-fx-green" />
        </motion.div>
      </motion.div>
    </>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="bg-white/10 p-2 rounded-full text-white hover:bg-fx-green hover:text-black transition-all duration-300 hover:scale-110">
    {icon}
  </a>
);

export default FooterUI;