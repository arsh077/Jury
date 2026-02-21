import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: Brand & Contact */}
        <div className="space-y-6">
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-cinzel font-bold text-white tracking-widest">JURY SOLVE</span>
            <span className="text-[10px] tracking-[0.3em] text-gold font-sans uppercase">Legal Services</span>
          </Link>
          <div className="space-y-4 text-sm text-gray-300">
            <p className="flex items-start gap-3">
              <MapPin size={18} className="text-gold shrink-0 mt-1" />
              DS/5, Ward No.7, Mehrauli, New Delhi - 110030, India
            </p>
            <p className="flex items-center gap-3">
              <Mail size={18} className="text-gold shrink-0" />
              info@jurysolve.com
            </p>
            <p className="flex items-center gap-3">
              <Phone size={18} className="text-gold shrink-0" />
              +91-8851355892
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-gold hover:text-navy transition-all"><Facebook size={20} /></a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-gold hover:text-navy transition-all"><Twitter size={20} /></a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-gold hover:text-navy transition-all"><Youtube size={20} /></a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-gold hover:text-navy transition-all"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Column 2: Intellectual Property */}
        <div>
          <h4 className="text-lg font-serif font-bold mb-6 border-b border-gold/30 pb-2 inline-block">Intellectual Property</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link to="/practice-areas" className="hover:text-gold transition-colors">Trademark</Link></li>
            <li><Link to="/practice-areas" className="hover:text-gold transition-colors">Copyright</Link></li>
            <li><Link to="/practice-areas" className="hover:text-gold transition-colors">Patent</Link></li>
            <li><Link to="/practice-areas" className="hover:text-gold transition-colors">IP Litigation</Link></li>
            <li><Link to="/practice-areas" className="hover:text-gold transition-colors">Litigation Support</Link></li>
          </ul>
        </div>

        {/* Column 3: Start a Business */}
        <div>
          <h4 className="text-lg font-serif font-bold mb-6 border-b border-gold/30 pb-2 inline-block">Start a Business</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link to="/practice-areas" className="hover:text-gold transition-colors">MSME Registration</Link></li>
            <li><Link to="/practice-areas" className="hover:text-gold transition-colors">GST Registration</Link></li>
            <li><Link to="/practice-areas" className="hover:text-gold transition-colors">Fssai Licence</Link></li>
          </ul>
        </div>

        {/* Column 4: Important Links */}
        <div>
          <h4 className="text-lg font-serif font-bold mb-6 border-b border-gold/30 pb-2 inline-block">Important Links</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link to="/about" className="hover:text-gold transition-colors">About us</Link></li>
            <li><Link to="/acts" className="hover:text-gold transition-colors">Disclaimer</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            <li><Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-400">
        <p>Copyright @jurysolve.com, All Rights Reserved 2024 | design by arshed anwar</p>
      </div>
    </footer>
  );
}
