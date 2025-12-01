import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowUpRight, MapPin } from 'lucide-react';

const jobs = [
  { role: "Senior Frontend Engineer", type: "Full-time", location: "Remote", dept: "Engineering" },
  { role: "Product Designer", type: "Full-time", location: "London, UK", dept: "Design" },
  { role: "Community Manager", type: "Contract", location: "Remote", dept: "Marketing" },
  { role: "Risk Analyst", type: "Full-time", location: "New York, USA", dept: "Finance" },
];

const Careers: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto py-20"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-fx-green to-blue-500">Revolution</span></h2>
        <p className="text-gray-400 max-w-xl mx-auto">We are building the future of proprietary trading. If you are passionate about finance and technology, we want to hear from you.</p>
      </div>

      <div className="space-y-4">
        {jobs.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group glass-card p-6 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-white/[0.08] transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-fx-green/20 transition-colors">
                <Briefcase size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg group-hover:text-fx-green transition-colors">{job.role}</h3>
                <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                  <span className="flex items-center gap-1"><MapPin size={10} /> {job.location}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  <span>{job.dept}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="hidden md:block text-xs font-medium border border-white/10 px-3 py-1 rounded-full">{job.type}</span>
              <ArrowUpRight className="text-gray-500 group-hover:text-white transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Careers;