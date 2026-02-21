import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Shield, Scale, Gavel, Building2, Briefcase, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import HeroSection from '../components/ui/glassmorphism-trust-hero';
import { GlowingEffect } from '../components/ui/glowing-effect';
import ExpandOnHover from '../components/ui/expand-cards';
import Testimonials from '../components/ui/twitter-testimonial-cards';

export function Home() {
  const practiceAreas = [
    { title: 'Trademark', icon: Shield, desc: 'Comprehensive trademark registration, prosecution, and brand protection services.' },
    { title: 'Copyright', icon: FileText, desc: 'Protecting original literary, artistic, and musical works through registration and enforcement.' },
    { title: 'Patent', icon: Scale, desc: 'Expert patent drafting, filing, and prosecution across various technological domains.' },
    { title: 'IP Litigation', icon: Gavel, desc: 'Aggressive representation in IP disputes, infringement suits, and enforcement actions.' },
    { title: 'Company Law', icon: Building2, desc: 'Full-spectrum corporate legal support including incorporation and compliance.' },
    { title: 'Litigation Support', icon: Briefcase, desc: 'Strategic support for complex legal proceedings and dispute resolution.' },
  ];

  const acts = [
    { name: 'Trade Marks Act', year: '1999' },
    { name: 'Copyright Act', year: '1957' },
    { name: 'Patents Act', year: '1970' },
    { name: 'Geographical Indications', year: '1999' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Practice Areas Section */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Practice Areas</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <div key={index} className="relative h-full rounded-[1.25rem] border-[0.75px] border-white/10 p-2 md:rounded-[1.5rem] md:p-3 bg-white/5 backdrop-blur-sm">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-navy/40 p-6 shadow-sm md:p-6 border border-white/5">
                  <div className="relative flex flex-1 flex-col justify-between gap-3">
                    <div className="w-fit rounded-lg border-[0.75px] border-white/10 bg-white/5 p-3">
                      <area.icon className="text-gold" size={24} />
                    </div>
                    <div className="space-y-3">
                      <h3 className="pt-0.5 text-xl leading-[1.375rem] font-serif font-bold text-white">
                        {area.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {area.desc}
                      </p>
                    </div>
                    <Link to="/practice-areas" className="text-gold font-bold flex items-center gap-2 mt-4 hover:gap-4 transition-all text-sm">
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/5 backdrop-blur-md border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-5xl font-serif font-bold text-gold mb-2">10+</p>
            <p className="text-white font-bold uppercase tracking-widest text-sm">Years of Experience</p>
          </div>
          <div>
            <p className="text-5xl font-serif font-bold text-gold mb-2">500+</p>
            <p className="text-white font-bold uppercase tracking-widest text-sm">Satisfied Clients</p>
          </div>
          <div>
            <p className="text-5xl font-serif font-bold text-gold mb-2">3</p>
            <p className="text-white font-bold uppercase tracking-widest text-sm">Number of Branches</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Our Gallery</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
          <ExpandOnHover />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-navy/50 backdrop-blur-lg border-y border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="flex justify-center">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* Acts & Learning Hub */}
      <section className="py-24 bg-navy/80 text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Acts & Learning Hub</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Stay informed with the latest legal frameworks and educational resources. 
                We believe in empowering our clients through knowledge.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {acts.map((act, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/5 p-4 rounded-lg border border-white/10">
                    <CheckCircle2 className="text-gold" size={20} />
                    <div>
                      <p className="font-bold">{act.name}</p>
                      <p className="text-xs text-gold">{act.year}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/acts" className="inline-block mt-10 text-gold font-bold border-b-2 border-gold pb-1 hover:text-white hover:border-white transition-all">
                Explore All Acts & Blog
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-2xl text-navy shadow-2xl"
              >
                <span className="text-xs font-bold text-gold uppercase tracking-widest">Featured Article</span>
                <h3 className="text-2xl font-serif font-bold mt-2 mb-4">Navigating the New Bharatiya Nyaya Sanhita</h3>
                <p className="text-gray-600 mb-4">A comprehensive guide for businesses to understand the key changes in India's new criminal code.</p>
                <Link to="/acts" className="text-navy font-bold flex items-center gap-2">Read Case Study <ArrowRight size={18} /></Link>
              </motion.div>
              <div className="bg-gold p-8 rounded-2xl text-navy">
                <h3 className="text-2xl font-serif font-bold mb-2">Learning Blog</h3>
                <p className="font-medium opacity-80">Weekly insights into IPR, Corporate Law, and Litigation strategies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Strip */}
      <section className="py-12 bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400 italic">
            "The content on this website is for informational purposes only and does not constitute an attorney-client relationship."
          </p>
          <Link to="/acts" className="text-xs text-gold font-bold uppercase tracking-widest mt-2 inline-block hover:underline">Read Full Disclaimer</Link>
        </div>
      </section>
    </div>
  );
}
