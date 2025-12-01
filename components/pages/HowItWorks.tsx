
import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, TrendingUp, Award, ArrowRight, CheckCircle2, ShieldCheck, Banknote } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="text-black" size={24} />,
    color: "bg-fx-green",
    title: "1. Join The Challenge",
    subtitle: "Start Your Journey",
    description: "Select your account size from $10k to $200k. No hidden rules, just pure trading performance. Gain immediate access to our institutional-grade trading platforms.",
    details: ["Instant Credentials", "MT4 & MT5 Support", "No Time Limits"]
  },
  {
    icon: <TrendingUp className="text-white" size={24} />,
    color: "bg-blue-500",
    title: "2. Verify Your Skills",
    subtitle: "Prove & Progress",
    description: "Hit the profit target without violating drawdown rules. Show us you can manage risk effectively in a simulated environment designed to mirror real market conditions.",
    details: ["Realistic Spreads", "News Trading Allowed", "Expert Advisors OK"]
  },
  {
    icon: <Award className="text-white" size={24} />,
    color: "bg-purple-500",
    title: "3. Get Funded",
    subtitle: "Scale & Earn",
    description: "Become an Fxology trader. Keep up to 90% of your profits. We cover the losses. Scale your capital up to $2M with our aggressive scaling plan.",
    details: ["Bi-weekly Payouts", "Scale to $2M", "Refundable Fee"]
  }
];

const HowItWorks: React.FC = () => {
  return (
    <div className="w-full relative min-h-screen py-20 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-fx-green/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-[500px] bg-blue-500/5 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-24 relative z-10"
      >
        <span className="text-fx-green font-bold text-sm tracking-widest uppercase mb-2 block">The Process</span>
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
          Your Path to <br /> Professional Capital
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          We've simplified the path to funding. Three steps stand between you and a $200,000 trading account.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto relative">
        {/* Central Line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2 hidden md:block" />
        <div className="absolute left-[20px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2 md:hidden" />

        <div className="space-y-24 md:space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-4 border-black bg-white/10 backdrop-blur-md flex items-center justify-center z-10 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <div className={`w-3 h-3 rounded-full ${step.color} shadow-[0_0_10px_currentColor]`} />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0">
                <div className={`glass-card p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-500 group relative overflow-hidden`}>
                  {/* Hover Gradient */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${step.color === 'bg-fx-green' ? 'from-green-400 to-transparent' : step.color === 'bg-blue-500' ? 'from-blue-400 to-transparent' : 'from-purple-400 to-transparent'}`} />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center shadow-lg`}>
                        {step.icon}
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">{step.subtitle}</div>
                        <h3 className="text-2xl font-display font-bold">{step.title}</h3>
                      </div>
                    </div>

                    <p className="text-gray-400 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    <ul className="space-y-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                          <CheckCircle2 size={16} className={step.color.replace('bg-', 'text-')} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Empty Side for layout balance */}
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-32 text-center"
      >
        <button className="group relative inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-fx-green transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
          <span>Start Your Challenge</span>
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </button>
      </motion.div>
    </div>
  );
};

export default HowItWorks;
