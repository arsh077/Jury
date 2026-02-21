import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Twitter, Instagram, Youtube, Send, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const steps = [
    { title: 'Schedule a Time', desc: 'Book a consultation via our form or phone.' },
    { title: 'Plan with Success', desc: 'Our experts analyze your case and build a strategy.' },
    { title: 'Detailed Cost Estimate', desc: 'Transparent pricing with no hidden charges.' },
    { title: 'We Care About the Rest', desc: 'Focus on your business while we handle the legalities.' },
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-white mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl border border-gray-100"
          >
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy uppercase tracking-wider">First Name</label>
                  <input
                    required
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy uppercase tracking-wider">Last Name</label>
                  <input
                    required
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-navy uppercase tracking-wider">Your Email</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-navy uppercase tracking-wider">Your Number</label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  placeholder="+91 00000 00000"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-navy uppercase tracking-wider">Additional Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                disabled={status === 'loading'}
                type="submit"
                className="w-full gold-gradient text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {status === 'loading' ? 'Sending...' : (
                  <>Say Hello! <Send size={20} /></>
                )}
              </button>
              {status === 'success' && (
                <p className="text-green-600 font-bold text-center">Thank you! We will get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 font-bold text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>

          {/* Info Block */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-navy text-white p-10 rounded-3xl shadow-2xl"
            >
              <h2 className="text-3xl font-serif font-bold mb-8 border-b border-gold/30 pb-4">Enquiries</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-gold"><MapPin size={24} /></div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-gold mb-1">Office Address</p>
                    <p className="text-lg">DS/5, Ward No.7, Mehrauli, New Delhi - 110030, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-gold"><Mail size={24} /></div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-gold mb-1">Email Us</p>
                    <p className="text-lg">info@jurysolve.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-gold"><Phone size={24} /></div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-gold mb-1">Call Us</p>
                    <p className="text-lg">+91-8851355892</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-white/10 flex gap-6">
                <a href="#" className="flex items-center gap-2 hover:text-gold transition-colors"><Twitter size={20} /> Twitter</a>
                <a href="#" className="flex items-center gap-2 hover:text-gold transition-colors"><Instagram size={20} /> Instagram</a>
                <a href="#" className="flex items-center gap-2 hover:text-gold transition-colors"><Youtube size={20} /> Youtube</a>
              </div>
            </motion.div>

            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-white">Steps to connect with consultant</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {steps.map((step, i) => (
                  <div key={i} className="p-4 bg-navy/40 backdrop-blur-md rounded-xl border border-white/10 flex items-start gap-3">
                    <CheckCircle2 className="text-gold shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-bold text-white">{step.title}</p>
                      <p className="text-xs text-gray-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
