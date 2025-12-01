import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  "What is the profit split?",
  "How fast are payouts processed?",
  "Are there any hidden fees?",
  "Can I hold trades over the weekend?"
];

const Support: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-5xl mx-auto py-20 px-4"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-5xl font-display font-bold">We're here to <br /><span className="text-fx-green">Help You.</span></h2>
          <p className="text-gray-400 text-lg">Our team is available 24/7 to assist you with any questions about the evaluation process or trading platforms.</p>
          
          <div className="grid gap-4">
            <div className="glass-card p-4 rounded-xl flex items-center gap-4 cursor-pointer hover:bg-white/5 transition-colors">
              <div className="bg-blue-500/20 text-blue-400 p-3 rounded-lg">
                <MessageCircle size={24} />
              </div>
              <div>
                <h4 className="font-bold">Live Chat</h4>
                <p className="text-xs text-gray-400">Average response: 2 mins</p>
              </div>
            </div>
            
            <div className="glass-card p-4 rounded-xl flex items-center gap-4 cursor-pointer hover:bg-white/5 transition-colors">
              <div className="bg-purple-500/20 text-purple-400 p-3 rounded-lg">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold">Email Support</h4>
                <p className="text-xs text-gray-400">support@fxology.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <HelpCircle size={20} className="text-fx-green" /> Frequently Asked Questions
          </h3>
          
          {faqs.map((q, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="glass-card p-5 rounded-xl flex justify-between items-center cursor-pointer group"
            >
              <span className="font-medium text-sm md:text-base group-hover:text-fx-green transition-colors">{q}</span>
              <ChevronDown size={16} className="text-gray-500 group-hover:text-white transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Support;