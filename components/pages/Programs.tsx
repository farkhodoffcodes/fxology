
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ProgramsProps {
  onNavigate: (page: string) => void;
}

const programs = [
  {
    name: "Evaluation",
    price: "$99",
    color: "from-blue-500 to-cyan-400",
    features: ["2-Step Verification", "1:100 Leverage", "News Trading Allowed", "Refundable Fee"],
    popular: false
  },
  {
    name: "Express",
    price: "$149",
    color: "from-fx-green to-emerald-400",
    features: ["1-Step Verification", "No Time Limits", "Bi-weekly Payouts", "100% Profit Split Add-on"],
    popular: true
  },
  {
    name: "Instant",
    price: "$499",
    color: "from-purple-500 to-pink-400",
    features: ["No Evaluation", "Start Earning Day 1", "Scale up to $2M", "Weekly Payouts"],
    popular: false
  }
];

const Programs: React.FC<ProgramsProps> = ({ onNavigate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-6xl mx-auto py-12 md:py-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Choose Your <span className="text-white">Program</span></h2>
        <div className="flex justify-center gap-4 mt-6">
          {['$10k', '$25k', '$50k', '$100k', '$200k'].map((amount, i) => (
            <button key={i} className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${i === 2 ? 'bg-fx-green text-black border-fx-green' : 'border-white/10 text-gray-400 hover:border-white/30'}`}>
              {amount}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {programs.map((prog, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`relative glass-card rounded-3xl p-8 flex flex-col ${prog.popular ? 'border-fx-green/30 bg-white/[0.04]' : ''}`}
          >
            {prog.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-fx-green text-black text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(74,222,128,0.4)]">
                MOST POPULAR
              </div>
            )}
            
            <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${prog.color} mb-6`} />
            
            <h3 className="text-2xl font-display font-bold mb-2">{prog.name}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold">{prog.price}</span>
              <span className="text-gray-500 text-sm">/ one-time</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {prog.features.map((feat, j) => (
                <li key={j} className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-fx-green">
                    <Check size={12} />
                  </div>
                  {feat}
                </li>
              ))}
            </ul>
            
            <button 
              onClick={() => onNavigate('Dashboard')}
              className={`w-full py-4 rounded-xl font-bold text-sm transition-all ${
                prog.popular 
                  ? 'bg-fx-green text-black hover:bg-white hover:scale-[1.02]' 
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              Start Challenge
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Programs;
