import { motion } from 'motion/react';
import { BookOpen, FileText, AlertCircle, Scale } from 'lucide-react';

export function Acts() {
  const acts = [
    {
      title: 'THE TRADE MARKS ACT, 1999',
      desc: 'Governs the registration and protection of trademarks in India, ensuring brand identity and preventing unauthorized use.',
      icon: BookOpen,
    },
    {
      title: 'The Trademarks Rules 2017',
      desc: 'Procedural rules for trademark registration, opposition, and renewal in India.',
      icon: FileText,
    },
    {
      title: 'THE COPYRIGHT ACT, 1957',
      desc: 'Protects original literary, dramatic, musical, and artistic works, including software and cinematograph films.',
      icon: FileText,
    },
    {
      title: 'THE PATENTS ACT, 1970',
      desc: 'Provides the legal framework for patenting inventions, encouraging innovation while balancing public interest.',
    },
    {
      title: 'THE GEOGRAPHICAL INDICATIONS ACT, 1999',
      desc: 'Protection and registration of geographical indications of goods in India.',
    },
    {
      title: 'DOMESTIC VIOLENCE ACT',
      desc: 'Legal protection and remedies for victims of domestic violence.',
    },
    {
      title: 'THE BHARATIYA NYAYA SANHITA',
      desc: 'The new criminal code of India, replacing the Indian Penal Code, with modernized provisions for the digital age.',
      icon: Scale,
    },
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Disclaimer Section */}
        <section className="mb-24">
          <div className="bg-white p-12 rounded-3xl shadow-2xl border-l-8 border-gold">
            <div className="flex items-center gap-4 mb-8">
              <AlertCircle size={40} className="text-gold" />
              <h1 className="text-4xl font-serif font-bold text-navy">Legal Disclaimer</h1>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                The content provided on this website is for informational purposes only and should not be construed as legal advice on any subject matter. The information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
              </p>
              <p>
                While every effort has been made to ensure the accuracy of the information, we do not guarantee its correctness, completeness, or its applicability to your circumstances. We strongly recommend consulting with a qualified legal professional before taking any action based on the information provided on this website.
              </p>
              <p>
                Please note that any prior results we have obtained do not guarantee a similar outcome in future cases. Each case is unique and must be evaluated individually.
              </p>
              <p>
                The use of the website or communication with the firm or any individual member of the firm does not establish an attorney-client relationship. Confidential or time-sensitive information should not be sent through this website.
              </p>
              <p>
                This website may contain links to other third-party websites. Such links are only for the convenience of the reader, user or browser; the firm does not recommend or endorse the contents of the third-party sites.
              </p>
              <p className="italic text-sm text-gray-500 mt-8">
                This disclaimer applies to all pages and content present on this website.
              </p>
            </div>
          </div>
        </section>

        {/* Acts & Sections */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">Acts & Learning Hub</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {acts.map((act, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-navy/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-gold transition-all group"
              >
                <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-gold transition-colors">{act.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {act.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Blog/Case Studies Placeholder */}
          <div className="mt-16 bg-navy text-white p-12 rounded-3xl text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Learning Blog & Case Studies</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Deep dives into landmark judgments, legislative changes, and strategic legal insights. 
              New content added weekly.
            </p>
            <button className="gold-gradient text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
              Subscribe to Newsletter
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
