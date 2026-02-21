import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Practice Areas', path: '/practice-areas' },
    { name: 'Acts & Sections', path: '/acts' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs">
          <div className="flex items-center gap-6">
            <a href="tel:+918851355892" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone size={14} /> +91 88513 55892
            </a>
            <a href="mailto:info@jurysolve.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail size={14} /> info@jurysolve.com
            </a>
          </div>
          <Link to="/contact" className="bg-gold hover:bg-gold-light text-navy px-4 py-1 rounded font-semibold transition-all">
            Get Quote
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-cinzel font-bold text-navy tracking-widest">JURY SOLVE</span>
            <span className="text-[10px] tracking-[0.3em] text-gold font-sans uppercase">Legal Services</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`nav-link ${location.pathname === link.path ? 'text-gold' : 'text-navy'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="gold-gradient text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-gold/20 hover:scale-105 transition-all"
            >
              Say Hello
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-navy"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-2">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path} 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className="flex justify-between items-center py-4 text-navy font-medium border-b border-gray-50 active:bg-gray-50 transition-colors"
                  >
                    {link.name}
                    <ChevronRight size={18} className="text-gold" />
                  </Link>
                ))}
                <Link 
                  to="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="gold-gradient text-white text-center py-4 rounded-xl font-bold shadow-lg mt-4 active:scale-95 transition-transform"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
