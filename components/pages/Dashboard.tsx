
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutGrid, 
  BarChart3, 
  Trophy, 
  Settings, 
  Bell, 
  ChevronDown, 
  TrendingUp, 
  TrendingDown,
  Clock,
  Target,
  ShieldAlert,
  LogOut,
  Wallet,
  Activity,
  Calendar,
  Download,
  FileText,
  CreditCard,
  CheckCircle,
  MoreHorizontal,
  Filter,
  Search,
  Award
} from 'lucide-react';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

type TabType = 'Overview' | 'Analysis' | 'Trading Journal' | 'Certificates' | 'Billing';

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<TabType>('Overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'Analysis':
        return <AnalysisView />;
      case 'Trading Journal':
        return <JournalView />;
      case 'Certificates':
        return <CertificatesView />;
      case 'Billing':
        return <BillingView />;
      case 'Overview':
      default:
        return <OverviewView />;
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-fx-dark text-white pt-20 md:pt-24 px-4 md:px-8 pb-8 gap-6 max-w-[1920px] mx-auto">
      
      {/* Sidebar Navigation */}
      <motion.aside 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-full md:w-64 flex flex-col gap-2 shrink-0"
      >
        <div className="glass-card p-4 rounded-2xl mb-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-fx-green to-blue-500 p-[2px]">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-sm truncate">Alex Trader</h3>
            <p className="text-xs text-green-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Online
            </p>
          </div>
          <Settings size={16} className="text-gray-400 cursor-pointer hover:text-white" />
        </div>

        <nav className="glass-card p-2 rounded-2xl flex flex-col gap-1 h-full">
          <NavItem 
            icon={<LayoutGrid size={18} />} 
            label="Overview" 
            active={activeTab === 'Overview'} 
            onClick={() => setActiveTab('Overview')} 
          />
          <NavItem 
            icon={<BarChart3 size={18} />} 
            label="Analysis" 
            active={activeTab === 'Analysis'} 
            onClick={() => setActiveTab('Analysis')}
          />
          <NavItem 
            icon={<Activity size={18} />} 
            label="Trading Journal" 
            active={activeTab === 'Trading Journal'} 
            onClick={() => setActiveTab('Trading Journal')}
          />
          <NavItem 
            icon={<Trophy size={18} />} 
            label="Certificates" 
            active={activeTab === 'Certificates'} 
            onClick={() => setActiveTab('Certificates')}
          />
          <NavItem 
            icon={<Wallet size={18} />} 
            label="Billing" 
            active={activeTab === 'Billing'} 
            onClick={() => setActiveTab('Billing')}
          />
          
          <div className="mt-auto pt-4 border-t border-white/5">
            <button 
              onClick={() => onNavigate('Home')}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 rounded-xl transition-colors"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </motion.aside>

      {/* Main Content Area */}
      <div className="flex-1 min-w-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="h-full flex flex-col gap-6"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

// --- Sub-Views ---

const OverviewView = () => (
  <>
    {/* Header Stats */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard 
        title="Account Balance" 
        value="$102,450.00" 
        subValue="+$2,450.00 (2.45%)" 
        trend="up"
        icon={<Wallet className="text-fx-green" />}
      />
      <StatCard 
        title="Equity" 
        value="$102,890.50" 
        subValue="Floating PL: +$440.50" 
        trend="neutral"
        icon={<Activity className="text-blue-400" />}
      />
      <StatCard 
        title="Days Remaining" 
        value="Unlimited" 
        subValue="No time limit active" 
        trend="neutral"
        icon={<Clock className="text-purple-400" />}
      />
    </div>

    {/* Chart Section */}
    <div className="glass-card p-6 rounded-3xl min-h-[400px] flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-xl font-display font-bold">Performance Curve</h2>
          <p className="text-xs text-gray-400">Account 1829302 • $100k Challenge</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded-lg bg-white/5 text-xs hover:bg-white/10 transition-colors">1W</button>
          <button className="px-3 py-1 rounded-lg bg-fx-green text-black text-xs font-bold">1M</button>
          <button className="px-3 py-1 rounded-lg bg-white/5 text-xs hover:bg-white/10 transition-colors">All</button>
        </div>
      </div>
      
      {/* Mock Chart SVG */}
      <div className="flex-1 w-full relative">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 800 300" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4ade80" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="225" x2="800" y2="225" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
          <line x1="0" y1="150" x2="800" y2="150" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
          <line x1="0" y1="75" x2="800" y2="75" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
          
          <motion.path 
            d="M0,225 C100,225 150,200 200,180 C250,160 300,190 350,150 C400,110 450,130 500,100 C550,70 600,90 650,50 C700,10 750,30 800,0" 
            fill="url(#chartGradient)"
            stroke="#4ade80"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <circle cx="800" cy="0" r="4" fill="#4ade80" className="animate-pulse" />
        </svg>
      </div>
    </div>

    {/* Bottom Objectives Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ObjectiveCard 
        title="Profit Target" 
        current={2450} 
        target={10000} 
        color="bg-fx-green"
        icon={<Target size={18} />}
      />
      <ObjectiveCard 
        title="Max Daily Loss" 
        current={0} 
        target={5000} 
        color="bg-red-400"
        reverse
        icon={<ShieldAlert size={18} />}
      />
      <ObjectiveCard 
        title="Max Total Loss" 
        current={0} 
        target={10000} 
        color="bg-red-500"
        reverse
        icon={<ShieldAlert size={18} />}
      />
    </div>
  </>
);

const AnalysisView = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-display font-bold">Advanced Analysis</h2>
      <button className="flex items-center gap-2 text-sm bg-white/5 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">
        <Calendar size={14} /> Last 30 Days <ChevronDown size={14} />
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <AnalysisCard title="Win Rate" value="68%" sub="High" color="text-fx-green" />
      <AnalysisCard title="Avg R:R" value="1 : 2.4" sub="Excellent" color="text-blue-400" />
      <AnalysisCard title="Profit Factor" value="2.15" sub="Good" color="text-purple-400" />
      <AnalysisCard title="Expectancy" value="$125.40" sub="Per Trade" color="text-white" />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Win/Loss Circle */}
      <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center">
        <h3 className="w-full text-left font-bold mb-6">Win / Loss Ratio</h3>
        <div className="relative w-64 h-64">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="#ef4444" strokeWidth="10" fill="none" className="opacity-20" />
            <circle cx="50" cy="50" r="40" stroke="#ef4444" strokeWidth="10" fill="none" strokeDasharray="251.2" strokeDashoffset="0" />
            <circle cx="50" cy="50" r="40" stroke="#4ade80" strokeWidth="10" fill="none" strokeDasharray="251.2" strokeDashoffset="80" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold">68%</span>
            <span className="text-xs text-gray-400">Wins</span>
          </div>
        </div>
        <div className="flex gap-8 mt-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-fx-green" />
            <span className="text-sm text-gray-400">Wins (34)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-sm text-gray-400">Losses (16)</span>
          </div>
        </div>
      </div>

      {/* Hourly Performance */}
      <div className="glass-card p-6 rounded-2xl">
        <h3 className="font-bold mb-6">Performance by Hour</h3>
        <div className="h-64 flex items-end gap-2">
          {[40, 65, 30, 80, 55, 20, 90, 45, 70, 35, 60, 25].map((h, i) => (
            <div key={i} className="flex-1 group relative">
              <div 
                className="w-full bg-blue-500/20 rounded-t-sm hover:bg-fx-green transition-colors"
                style={{ height: `${h}%` }}
              />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {h}%
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4 text-xs text-gray-500">
          <span>8:00</span>
          <span>12:00</span>
          <span>16:00</span>
          <span>20:00</span>
        </div>
      </div>
    </div>
  </div>
);

const JournalView = () => (
  <div className="space-y-6">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <h2 className="text-2xl font-display font-bold">Trading Journal</h2>
      <div className="flex gap-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
          <input 
            type="text" 
            placeholder="Search symbol..." 
            className="bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-fx-green/50"
          />
        </div>
        <button className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white">
          <Filter size={18} />
        </button>
      </div>
    </div>

    <div className="glass-card rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/5 text-xs text-gray-400 uppercase tracking-wider">
              <th className="p-4 font-medium">Time Open</th>
              <th className="p-4 font-medium">Symbol</th>
              <th className="p-4 font-medium">Type</th>
              <th className="p-4 font-medium">Volume</th>
              <th className="p-4 font-medium">Open Price</th>
              <th className="p-4 font-medium">Close Price</th>
              <th className="p-4 font-medium">Profit</th>
              <th className="p-4 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-white/5">
            {[
              { time: "2023-10-24 14:30", sym: "EURUSD", type: "Buy", vol: "1.00", open: "1.05420", close: "1.05620", pl: "+$200.00" },
              { time: "2023-10-24 10:15", sym: "XAUUSD", type: "Sell", vol: "0.50", open: "1980.50", close: "1975.20", pl: "+$265.00" },
              { time: "2023-10-23 16:45", sym: "GBPUSD", type: "Buy", vol: "1.00", open: "1.21500", close: "1.21300", pl: "-$200.00" },
              { time: "2023-10-23 09:00", sym: "US30", type: "Buy", vol: "0.10", open: "33100", close: "33250", pl: "+$150.00" },
              { time: "2023-10-22 15:20", sym: "NAS100", type: "Sell", vol: "0.20", open: "14500", close: "14550", pl: "-$100.00" },
            ].map((trade, i) => (
              <tr key={i} className="hover:bg-white/5 transition-colors group">
                <td className="p-4 text-gray-400">{trade.time}</td>
                <td className="p-4 font-bold">{trade.sym}</td>
                <td className={`p-4 font-medium ${trade.type === 'Buy' ? 'text-fx-green' : 'text-red-400'}`}>{trade.type}</td>
                <td className="p-4 text-gray-300">{trade.vol}</td>
                <td className="p-4 text-gray-300">{trade.open}</td>
                <td className="p-4 text-gray-300">{trade.close}</td>
                <td className={`p-4 font-bold ${trade.pl.startsWith('+') ? 'text-fx-green' : 'text-red-400'}`}>{trade.pl}</td>
                <td className="p-4">
                  <button className="text-gray-500 hover:text-white"><MoreHorizontal size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const CertificatesView = () => (
  <div className="space-y-8">
    <div className="text-center md:text-left">
      <h2 className="text-3xl font-display font-bold mb-2">Your Achievements</h2>
      <p className="text-gray-400">Download your verified certificates of achievement.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <CertificateCard 
        title="Phase 1 Passed" 
        date="Oct 12, 2023" 
        id="CERT-882910"
        image="bg-gradient-to-br from-fx-green/20 to-blue-500/20"
      />
      <div className="glass-card border border-dashed border-white/20 p-8 rounded-2xl flex flex-col items-center justify-center text-center opacity-50">
        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
          <Trophy size={24} className="text-gray-500" />
        </div>
        <h3 className="font-bold text-lg mb-1">Phase 2 Pending</h3>
        <p className="text-sm text-gray-400">Complete the next objective to unlock this certificate.</p>
      </div>
    </div>
  </div>
);

const BillingView = () => (
  <div className="space-y-6 max-w-4xl">
    <h2 className="text-2xl font-display font-bold">Billing & Subscription</h2>

    {/* Current Plan */}
    <div className="glass-card p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-fx-green/20 text-fx-green flex items-center justify-center">
          <Trophy size={24} />
        </div>
        <div>
          <h3 className="font-bold text-lg">$100k Challenge</h3>
          <p className="text-sm text-gray-400">Active • Started Oct 1, 2023</p>
        </div>
      </div>
      <button className="px-4 py-2 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
        Manage Subscription
      </button>
    </div>

    {/* Invoices */}
    <div className="glass-card rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-white/5">
        <h3 className="font-bold">Order History</h3>
      </div>
      <table className="w-full text-left">
        <thead className="bg-white/5 text-xs text-gray-400 uppercase">
          <tr>
            <th className="p-4">Date</th>
            <th className="p-4">Description</th>
            <th className="p-4">Amount</th>
            <th className="p-4">Status</th>
            <th className="p-4">Invoice</th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-white/5">
          <tr>
            <td className="p-4 text-gray-400">Oct 01, 2023</td>
            <td className="p-4 font-medium">$100k Evaluation</td>
            <td className="p-4">$499.00</td>
            <td className="p-4"><span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">Paid</span></td>
            <td className="p-4"><button className="text-gray-400 hover:text-white"><Download size={16} /></button></td>
          </tr>
          <tr>
            <td className="p-4 text-gray-400">Sep 15, 2023</td>
            <td className="p-4 font-medium">$50k Evaluation</td>
            <td className="p-4">$299.00</td>
            <td className="p-4"><span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">Paid</span></td>
            <td className="p-4"><button className="text-gray-400 hover:text-white"><Download size={16} /></button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="glass-card p-6 rounded-2xl">
      <h3 className="font-bold mb-4">Payment Methods</h3>
      <div className="flex items-center gap-4 p-4 border border-white/10 rounded-xl bg-white/5">
        <CreditCard className="text-gray-400" />
        <div className="flex-1">
          <div className="font-medium text-sm">Visa ending in 4242</div>
          <div className="text-xs text-gray-400">Expiry 12/24</div>
        </div>
        <button className="text-xs text-fx-green hover:underline">Edit</button>
      </div>
    </div>
  </div>
);

// --- Components ---

const NavItem = ({ icon, label, active = false, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
      active 
        ? 'bg-fx-green text-black font-semibold shadow-[0_0_15px_rgba(74,222,128,0.3)]' 
        : 'text-gray-400 hover:text-white hover:bg-white/5'
    }`}
  >
    {icon}
    <span className="text-sm">{label}</span>
  </button>
);

const StatCard = ({ title, value, subValue, trend, icon }: any) => (
  <div className="glass-card p-6 rounded-2xl flex items-start justify-between group hover:border-fx-green/30 transition-colors">
    <div>
      <h3 className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-2">{title}</h3>
      <div className="text-2xl font-display font-bold mb-1 group-hover:text-fx-green transition-colors">{value}</div>
      <div className={`text-xs flex items-center gap-1 ${trend === 'up' ? 'text-fx-green' : trend === 'down' ? 'text-red-400' : 'text-gray-400'}`}>
        {trend === 'up' && <TrendingUp size={12} />}
        {trend === 'down' && <TrendingDown size={12} />}
        {subValue}
      </div>
    </div>
    <div className="p-3 rounded-xl bg-white/5 text-gray-300 group-hover:text-white transition-colors">
      {icon}
    </div>
  </div>
);

const ObjectiveCard = ({ title, current, target, color, reverse, icon }: any) => {
  const percentage = Math.min((current / target) * 100, 100);
  
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="glass-card p-6 rounded-2xl"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-white/5 text-gray-300">
            {icon}
          </div>
          <span className="font-bold text-sm">{title}</span>
        </div>
        <span className="text-xs text-gray-400">${target.toLocaleString()} Limit</span>
      </div>
      
      <div className="flex justify-between items-end mb-2">
        <span className="text-2xl font-bold font-display">${current.toLocaleString()}</span>
        <span className="text-xs text-gray-400">{percentage.toFixed(1)}%</span>
      </div>
      
      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full rounded-full ${color}`} 
        />
      </div>
      {reverse && (
        <p className="text-[10px] text-gray-500 mt-2">Keep this bar empty to pass.</p>
      )}
    </motion.div>
  );
};

const AnalysisCard = ({ title, value, sub, color }: any) => (
  <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors">
    <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">{title}</div>
    <div className={`text-2xl font-bold font-display mb-1 ${color}`}>{value}</div>
    <div className="text-xs text-gray-500">{sub}</div>
  </div>
);

const CertificateCard = ({ title, date, id, image }: any) => (
  <div className="glass-card p-4 rounded-2xl group cursor-pointer hover:border-fx-green/50 transition-all">
    <div className={`aspect-video rounded-xl mb-4 relative overflow-hidden ${image}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <Award size={48} className="text-white opacity-20" />
      </div>
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <button className="bg-white text-black px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
          <Download size={14} /> Download PDF
        </button>
      </div>
    </div>
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-xs text-gray-400">Issued: {date}</p>
      </div>
      <span className="text-[10px] font-mono bg-white/10 px-2 py-1 rounded text-gray-300">{id}</span>
    </div>
  </div>
);

export default Dashboard;
