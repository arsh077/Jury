import { motion } from 'motion/react';
import { Shield, Scale, Gavel, Building2, FileText, Briefcase, CheckCircle2 } from 'lucide-react';

export function PracticeAreas() {
  const areas = [
    {
      title: 'Intellectual Property',
      icon: Shield,
      details: [
        'Trademark Registration & Prosecution',
        'Copyright Protection & Licensing',
        'Patent Drafting & Filing',
        'Design Registration',
        'IP Portfolio Management',
      ],
      color: 'bg-navy',
    },
    {
      title: 'Litigation',
      icon: Scale,
      details: [
        'IP Litigation',
        'Litigation Support',
        'Environment Law Practice',
        'Commercial Litigation',
        'Civil & Criminal Litigation',
      ],
      color: 'bg-gold',
    },
    {
      title: 'Commercial Law',
      icon: Building2,
      details: [
        'Company Law Practice',
        'Contract/Agreement Drafting',
        'Labour Law Practice',
        'Commercial Advisory',
        'Corporate Governance',
      ],
      color: 'bg-navy',
    },
    {
      title: 'Start a Business',
      icon: FileText,
      details: [
        'MSME Registration',
        'GST Registration',
        'Fssai Licence',
        'Business Incorporation',
        'Compliance Management',
      ],
      color: 'bg-gold',
    },
    {
      title: 'Family Law',
      icon: Gavel,
      details: [
        'Matrimonial Disputes',
        'Domestic Violence Act',
        'Property Disputes',
        'Succession & Inheritance',
        'Mediation & Counselling',
      ],
      color: 'bg-navy',
    },
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-serif font-bold text-white mb-4">Our Practice Areas</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive legal solutions tailored to protect your interests and foster business growth.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-navy/40 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-white/10 group"
            >
              <div className={`${area.color} p-8 text-white flex items-center justify-between`}>
                <area.icon size={40} className={area.color === 'bg-gold' ? 'text-navy' : 'text-gold'} />
                <h3 className={`text-2xl font-serif font-bold ${area.color === 'bg-gold' ? 'text-navy' : 'text-white'}`}>{area.title}</h3>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {area.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 size={18} className="text-gold shrink-0 mt-1" />
                      <span className="font-medium">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
