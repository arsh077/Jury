import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Database, Calendar, User, Mail, Phone, MessageSquare, Download } from 'lucide-react';
import { AuthSwitch } from '../components/ui/auth-switch';

interface Lead {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  timestamp: string;
}

export function Admin() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [adminKey, setAdminKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (key: string) => {
    setAdminKey(key);
    try {
      const response = await fetch('/api/leads', {
        headers: { 'x-admin-key': key },
      });
      if (response.ok) {
        const data = await response.json();
        setLeads(data);
        setIsAuthenticated(true);
        setError('');
      } else {
        setError('Invalid Admin Key');
      }
    } catch (err) {
      setError('Failed to fetch leads');
    }
  };

  const exportCSV = () => {
    const headers = ['Date', 'Name', 'Email', 'Phone', 'Message'];
    const rows = leads.map(l => [
      new Date(l.timestamp).toLocaleString(),
      `${l.firstName} ${l.lastName}`,
      l.email,
      l.phone,
      l.message.replace(/,/g, ';')
    ]);
    
    const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `jurysolve_leads_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAuthenticated) {
    return <AuthSwitch onLogin={handleLogin} />;
  }

  return (
    <div className="py-8 sm:py-12 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 sm:mb-12 gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">Lead Management</h1>
          <p className="text-gray-400 mt-1">Total Submissions: {leads.length}</p>
        </div>
        <button 
          onClick={exportCSV}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-navy text-white px-6 py-4 rounded-xl font-bold hover:bg-navy/90 transition-all shadow-lg border border-white/10"
        >
          <Download size={20} /> Export CSV
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {leads.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
            <p className="text-gray-400">No leads found in the database.</p>
          </div>
        ) : (
          leads.map((lead) => (
            <motion.div
              key={lead.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-navy/40 backdrop-blur-md p-6 rounded-2xl shadow-md border border-white/10 hover:shadow-lg transition-all"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-gold uppercase tracking-widest">Date</p>
                  <p className="flex items-center gap-2 text-white font-medium">
                    <Calendar size={14} className="text-gray-400" />
                    {new Date(lead.timestamp).toLocaleDateString()}
                  </p>
                  <p className="text-xs text-gray-400 ml-6">{new Date(lead.timestamp).toLocaleTimeString()}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-gold uppercase tracking-widest">Client</p>
                  <p className="flex items-center gap-2 text-white font-bold">
                    <User size={14} className="text-gray-400" />
                    {lead.firstName} {lead.lastName}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-gold uppercase tracking-widest">Contact</p>
                  <p className="flex items-center gap-2 text-sm text-gray-300">
                    <Mail size={14} className="text-gray-400" />
                    {lead.email}
                  </p>
                  <p className="flex items-center gap-2 text-sm text-gray-300 mt-1">
                    <Phone size={14} className="text-gray-400" />
                    {lead.phone}
                  </p>
                </div>
                <div className="space-y-1 md:col-span-1">
                  <p className="text-[10px] font-bold text-gold uppercase tracking-widest">Message</p>
                  <div className="flex gap-2">
                    <MessageSquare size={14} className="text-gray-400 shrink-0 mt-1" />
                    <p className="text-sm text-gray-300 line-clamp-3">{lead.message}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
