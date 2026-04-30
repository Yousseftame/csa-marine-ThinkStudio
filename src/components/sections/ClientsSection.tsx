import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Import logos from assets
import logoGASC from '../../assets/GAC.png';
import logoECFM from '../../assets/EMP.png';
import logoGTCS from '../../assets/GTC.png';
import logoINVICTUS from '../../assets/INIC.png';

export default function ClientsSection() {
  const { t } = useTranslation();

  const clients = [
    { 
      name: t('clients.c1'), 
      logo: logoGASC 
    },
    { 
      name: t('clients.c2'), 
      logo: logoECFM 
    },
    { 
      name: t('clients.c3'), 
      logo: logoGTCS 
    },
    { 
      name: t('clients.c4'), 
      logo: logoINVICTUS 
    }
  ];

  return (
    <section id="clients" className="py-24 md:py-32 bg-off-white border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-ocean mb-4 flex items-center justify-center gap-3">
              <span className="w-8 h-[2px] bg-ocean"></span>
              {t('clients.eyebrow')}
              <span className="w-8 h-[2px] bg-ocean"></span>
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-navy uppercase leading-tight">
              {t('clients.title')}
            </h2>
          </motion.div>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {clients.map((client, index) => (
            <motion.div 
              key={index}
              className="bg-white flex flex-col items-center justify-center p-8 md:p-12 shadow-sm hover:shadow-xl rounded-sm border border-gray-100 transition-all duration-500 group relative min-h-[260px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Logo Container */}
              <div className="w-full h-32 mb-8 flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                />
              </div>

              {/* Client Name Divider */}
              <div className="w-12 h-[2px] bg-gray-200 group-hover:bg-ocean transition-colors duration-500 mb-6" />

              {/* Client Name */}
              <h3 className="text-xs md:text-sm font-bold text-navy/70 group-hover:text-navy transition-colors duration-300 uppercase tracking-widest text-center leading-relaxed">
                {client.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
