import { motion } from 'framer-motion';
import { Calendar, FileText, Anchor, ArrowRight, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function NewsSection() {
  const { t, i18n } = useTranslation();

  const circulars = [
    {
      title: t('news_items.c1_title'),
      date: "January 15, 2026",
      description: t('news_items.c1_desc'),
      icon: FileText
    },
    {
      title: t('news_items.c2_title'),
      date: "February 05, 2026",
      description: t('news_items.c2_desc'),
      icon: Info
    },
    {
      title: t('news_items.c3_title'),
      date: "March 02, 2026",
      description: t('news_items.c3_desc'),
      icon: Anchor
    }
  ];

  const holidays = [
    {
      name: t('holidays_list.h1_name'),
      date: t('holidays_list.h1_date'),
      status: t('holidays_list.h1_status')
    },
    {
      name: t('holidays_list.h2_name'),
      date: t('holidays_list.h2_date'),
      status: t('holidays_list.h2_status')
    },
    {
      name: t('holidays_list.h3_name'),
      date: t('holidays_list.h3_date'),
      status: t('holidays_list.h3_status')
    },
    {
      name: t('holidays_list.h4_name'),
      date: t('holidays_list.h4_date'),
      status: t('holidays_list.h4_status')
    },
    {
      name: t('holidays_list.h5_name'),
      date: t('holidays_list.h5_date'),
      status: t('holidays_list.h5_status')
    }
  ];

  const ports = [
    "Port Said (East/West)",
    "Suez",
    "Alexandria",
    "Dekheila",
    "Damietta",
    "Sokhna",
    "Safaga"
  ];

  return (
    <section id="news" className="py-24 md:py-32 bg-off-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Updates Area: Suez Canal Circulars Only */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-ocean" />
                <span className="text-navy font-bold uppercase tracking-widest text-sm">{t('news.eyebrow')}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-navy uppercase leading-tight mb-6">
                {i18n.language === 'ar' ? 'الذكاء' : 'Maritime'} <span className="text-ocean">{i18n.language === 'ar' ? 'البحري' : 'Intelligence'}</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                {t('news.desc')}
              </p>
            </motion.div>

            <div className="grid gap-6">
              {circulars.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white p-6 md:p-8 rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-6 items-start"
                >
                  <div className="bg-off-white p-4 rounded-sm text-ocean group-hover:bg-ocean group-hover:text-white transition-colors duration-300">
                    <item.icon size={24} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-ocean bg-ocean/5 px-2 py-1 rounded-sm">
                        {i18n.language === 'ar' ? 'منشور' : 'Circular'}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-ocean transition-colors text-start">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-start">
                      {item.description}
                    </p>
                    <button className="text-xs font-bold text-navy uppercase tracking-widest flex items-center gap-2 group/btn">
                      {t('news.read_more')}
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform rtl:rotate-180" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar Area: Port List & Holidays */}
          <div className="lg:w-1/3 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Port List Card */}
              <div className="bg-navy p-8 rounded-sm text-white relative overflow-hidden mb-8 shadow-xl">
                <Anchor className="absolute -right-8 -bottom-8 text-white/5" size={200} />
                <div className="relative z-10">
                  <h3 className="text-xl font-heading font-bold uppercase tracking-wide mb-6 flex items-center gap-3">
                    <Anchor size={20} className="text-ocean" />
                    {t('news.port_list_title')}
                  </h3>
                  <div className="space-y-4">
                    {ports.map((port, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                        <span className="text-sm font-medium text-white/80">{port}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                          <span className="text-[10px] font-bold uppercase tracking-tighter text-white/40">{t('news.status_operational')}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Port Holidays Card */}
              <div className="bg-white p-8 rounded-sm border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-ocean/10 p-2 rounded-sm text-ocean">
                    <Calendar size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-navy uppercase tracking-wide">{t('news.holidays_title')}</h3>
                </div>
                
                <div className="space-y-5">
                  {holidays.map((holiday, index) => (
                    <div key={index} className="group cursor-default">
                      <div className="flex justify-between items-start mb-1 gap-4">
                        <h4 className="text-sm font-bold text-navy group-hover:text-ocean transition-colors text-start">{holiday.name}</h4>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase whitespace-nowrap">{holiday.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${holiday.status.includes('Limited') || holiday.status.includes('محدودة') ? 'bg-amber-500' : 'bg-green-500'}`} />
                        <p className="text-xs text-muted-foreground italic">{holiday.status}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-[10px] text-muted-foreground leading-relaxed italic text-start">
                    {t('news.desc_note', { defaultValue: "* Note: Vessel transits and port operations generally continue 24/7. Holidays primarily affect administrative and customs offices." })}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
