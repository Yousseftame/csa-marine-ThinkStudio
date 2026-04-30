import { motion } from 'framer-motion';
import { ShieldCheck, Building2, Anchor, Weight, MapPin, Laptop, BadgeCheck, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function AccreditationSection() {
  const { t } = useTranslation();

  const accreditations = [
    {
      title: t('accreditation.a1_title'),
      desc: t('accreditation.a1_desc'),
      icon: Building2,
      span: "md:col-span-1",
    },
    {
      title: t('accreditation.a2_title'),
      desc: t('accreditation.a2_desc'),
      icon: Anchor,
      span: "md:col-span-1",
    },
    {
      title: t('accreditation.a3_title'),
      desc: t('accreditation.a3_desc'),
      icon: Weight,
      span: "md:col-span-2 lg:col-span-1",
    },
    {
      title: t('accreditation.a4_title'),
      desc: t('accreditation.a4_desc'),
      icon: MapPin,
      span: "md:col-span-1",
    },
    {
      title: t('accreditation.a5_title'),
      desc: t('accreditation.a5_desc'),
      icon: Laptop,
      span: "md:col-span-1",
    }
  ];

  return (
    <section id="accreditation" className="py-24 md:py-32 bg-navy relative overflow-hidden">
      
      {/* Abstract Corporate Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[800px] border-[1px] border-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="w-[1200px] h-[1200px] border-[1px] border-white/50 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Huge Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none w-full overflow-hidden flex justify-center">
        <span className="text-[12rem] md:text-[20rem] font-heading font-black text-white/[0.02] whitespace-nowrap leading-none">
          {t('accreditation.title2').toUpperCase()}
        </span>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-24">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-ocean" />
              <span className="text-ocean font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                <ShieldCheck size={16} /> {t('accreditation.eyebrow')}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase leading-[1.1]">
              {t('accreditation.title1')} <br className="hidden md:block" />
              <span className="text-white/50">{t('accreditation.title2')}</span>
            </h2>
          </motion.div>

          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-white/70 text-lg leading-relaxed border-l-2 border-white/20 pl-6">
              {t('accreditation.desc')}
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Main Hero Card */}
          <motion.div 
            className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-ocean/20 to-transparent border border-ocean/30 p-8 flex flex-col justify-between min-h-[280px] group relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110 group-hover:rotate-12 origin-center">
            </div>
            
            <div>
              <div className="w-14 h-14 bg-ocean text-white flex items-center justify-center rounded-sm mb-6 shadow-lg">
                <Award size={28} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-3 leading-tight relative z-10">
                {t('accreditation.hero_title')}
              </h3>
              <p className="text-white/70 font-medium relative z-10">
                {t('accreditation.hero_desc')}
              </p>
            </div>
          </motion.div>

          {/* Dynamic Grid Items */}
          {accreditations.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                className={`bg-white/[0.03] border border-white/10 p-8 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 group flex flex-col ${item.span}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              >
                <Icon size={32} strokeWidth={1.5} className="text-ocean mb-6 group-hover:text-white transition-colors duration-300" />
                <h3 className="text-xl font-heading font-bold text-white mb-3 text-start">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mt-auto text-start">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
