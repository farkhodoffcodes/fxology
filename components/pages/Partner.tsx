import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Users, Globe2, PieChart } from 'lucide-react';

const Partner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, filter: 'blur(5px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(5px)' }}
      className="w-full max-w-5xl mx-auto py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      <div>
        <div className="inline-block bg-fx-green/10 text-fx-green text-xs font-bold px-3 py-1 rounded-full mb-6">
          AFFILIATE PROGRAM
        </div>
        <h2 className="text-5xl font-display font-bold mb-6">Grow with <br />Fxology</h2>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Earn industry-leading commissions by referring traders to Fxology. 
          Our partner program is designed for influencers, educators, and community leaders.
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="glass-card p-4 rounded-xl">
            <PieChart className="text-purple-400 mb-2" size={24} />
            <div className="text-2xl font-bold">15%</div>
            <div className="text-xs text-gray-400">Commission</div>
          </div>
          <div className="glass-card p-4 rounded-xl">
            <Users className="text-blue-400 mb-2" size={24} />
            <div className="text-2xl font-bold">30 Days</div>
            <div className="text-xs text-gray-400">Cookie Life</div>
          </div>
        </div>

        <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
          Become a Partner
        </button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-fx-green/20 blur-[100px] rounded-full" />
        <div className="relative glass-card p-8 rounded-3xl border border-white/10">
          <Globe2 className="w-full h-64 text-white/5 mx-auto" strokeWidth={0.5} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <Handshake size={48} className="mx-auto text-white mb-4" />
            <h3 className="text-xl font-bold">Global Network</h3>
            <p className="text-sm text-gray-400 mt-2">Join 1000+ partners worldwide</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Partner;