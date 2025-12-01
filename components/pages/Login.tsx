import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Lock, Mail } from 'lucide-react';

interface LoginProps {
  type: string;
  onBack: () => void;
}

const Login: React.FC<LoginProps> = ({ type, onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ type: "spring", damping: 20 }}
      className="w-full max-w-md mx-auto"
    >
      <button 
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
      >
        <ArrowLeft size={16} /> Back to Home
      </button>

      <div className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-fx-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <h2 className="text-3xl font-display font-bold mb-2">{type === 'Login' ? 'Welcome Back' : 'Create Account'}</h2>
        <p className="text-gray-400 text-sm mb-8">Enter your details to access your dashboard.</p>

        <form className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-300 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="email" 
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-fx-green/50 transition-colors placeholder:text-gray-600"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-300 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="password" 
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-fx-green/50 transition-colors placeholder:text-gray-600"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="pt-4">
            <button className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors transform active:scale-[0.98]">
              {type === 'Login' ? 'Sign In' : 'Get Started'}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-xs text-gray-500">
          {type === 'Login' ? "Don't have an account?" : "Already have an account?"} <span className="text-white underline cursor-pointer hover:text-fx-green transition-colors">Click here</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;