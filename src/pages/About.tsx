import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

export function About() {
  const practiceList = [
    'Intellectual Property Rights',
    'IP Litigation & Enforcement',
    'Corporate & Commercial Law',
    'Environmental Compliance',
    'Business Registrations',
    'Commercial Advisory',
  ];

  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8">About JurySolve</h1>
              <div className="w-24 h-1 bg-gold mb-10"></div>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p className="font-medium text-gold text-xl">
                  Our team comprises of seasoned attorneys and technical experts who bring a wealth of experience 
                  and deep understanding of various technological domains.
                </p>
                <p>
                  At JURYSOLVE IPR Services, we believe in a client-centric approach. We work closely with our 
                  clients to understand their needs and provide tailored solutions that align with their 
                  business objectives. Our commitment to delivering high-quality services has helped us 
                  build long-lasting relationships with our clients.
                </p>
                <p>
                  We are proud of our track record in successfully representing clients ranging from startups 
                  to multinational corporations across various industries. Our expertise extends to handling 
                  complex IPR litigations, Managing IPR portfolios and providing IPR consultation services and others.
                </p>
              </div>

              <div className="mt-12 p-8 bg-navy text-white rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <h3 className="text-2xl font-serif font-bold mb-4 relative z-10">Our Philosophy</h3>
                <p className="text-xl italic font-serif relative z-10">
                  “At JURYSOLVE IPR Services, we are not just your legal advisors, but your partners in innovation.”
                </p>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
            >
              <h3 className="text-xl font-serif font-bold text-navy mb-6 pb-2 border-b border-gold/30">Practice Areas</h3>
              <ul className="space-y-4">
                {practiceList.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle2 size={18} className="text-gold shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/practice-areas" className="mt-8 block text-center py-3 bg-off-white text-navy font-bold rounded-lg hover:bg-gold hover:text-white transition-all">
                View All Details
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gold p-8 rounded-2xl text-navy shadow-xl"
            >
              <h3 className="text-xl font-serif font-bold mb-6">Contact Details</h3>
              <div className="space-y-4 text-sm">
                <p className="flex items-start gap-3">
                  <MapPin size={18} className="shrink-0 mt-1" />
                  DS/5, Ward No.7, Mehrauli, New Delhi - 110030, India
                </p>
                <p className="flex items-center gap-3">
                  <Mail size={18} className="shrink-0" />
                  info@jurysolve.com
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0" />
                  +91-8851355892
                </p>
              </div>
              <Link to="/contact" className="mt-8 block text-center py-3 bg-navy text-white font-bold rounded-lg hover:bg-navy/90 transition-all">
                Get Directions
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
