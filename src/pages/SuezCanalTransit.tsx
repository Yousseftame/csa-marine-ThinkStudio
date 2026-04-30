import { motion } from 'framer-motion';
import { Ship, Anchor, Map, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SuezCanalTransit = () => {
  const { t } = useTranslation();

  const features = [
    { 
      icon: Ship, 
      title: t('suez_page.feat1_title'), 
      desc: t('suez_page.feat1_desc') 
    },
    { 
      icon: Map, 
      title: t('suez_page.feat2_title'), 
      desc: t('suez_page.feat2_desc') 
    },
    { 
      icon: Anchor, 
      title: t('suez_page.feat3_title'), 
      desc: t('suez_page.feat3_desc') 
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section for the Page */}
      <section className="relative py-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?auto=format&fit=crop&w=1920&q=80" 
            alt="Suez Canal" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-ocean" />
              <span className="text-white font-bold uppercase tracking-widest text-sm">{t('suez_page.eyebrow')}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white uppercase mb-6">
              {t('suez_page.title')}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              {t('suez_page.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-off-white rounded-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="bg-white w-14 h-14 flex items-center justify-center rounded-sm text-ocean mb-6 shadow-sm group-hover:bg-ocean group-hover:text-white transition-colors duration-500">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4 uppercase tracking-wide text-start">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-start">{item.desc}</p>
                <button className="flex items-center gap-2 text-xs font-bold text-navy uppercase tracking-widest group/btn">
                  {t('suez_page.learn_more')} 
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform rtl:rotate-180" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuezCanalTransit;
