import { motion } from 'framer-motion';
import { Anchor, Globe2, BadgePercent } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 md:py-32 bg-off-white overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Image Side with Parallax/Overlap Effects */}
          <div className="lg:w-1/2 relative w-full pb-12 lg:pb-0">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
              className="relative w-full aspect-[3/2] sm:aspect-[4/3] lg:aspect-[3/4] rounded-sm overflow-hidden shadow-2xl z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1696287146802-af8ccce45601?auto=format&fit=crop&w=1200&q=90" 
                alt="CSA Marine - Container Ship at Sea" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-navy/10 mix-blend-multiply" />
            </motion.div>

            {/* Overlapping Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="absolute bottom-0 right-0 md:-bottom-4 md:-right-8 bg-white p-6 shadow-xl border-l-4 border-ocean z-20 flex flex-col items-center justify-center max-w-[160px]"
            >
              <Anchor className="text-ocean mb-3" size={32} strokeWidth={1.5} />
              <span className="text-3xl font-heading font-black text-navy leading-none mb-1">2016</span>
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest text-center">
                {t('about.stat_guarantee')}
              </span>
            </motion.div>

            {/* Decorative Graphic */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-gray-200/50 rounded-full blur-3xl -z-10" />
          </div>

          {/* Text Content Side */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-ocean" />
                <span className="text-navy font-bold uppercase tracking-widest text-sm">{t('about.eyebrow')}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-navy leading-[1.1] mb-8 uppercase">
                {t('about.title')}
              </h2>
            </motion.div>

            <motion.div 
              className="space-y-6 text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <p>
                <strong className="text-navy font-semibold">CSA Marine</strong> {t('about.p1')}
              </p>
              <p>
                {t('about.p2')}
              </p>
            </motion.div>
            
            {/* Suez Canal Rebates Feature Box */}
            <Link to="/suez-canal-transit" className="block mt-8 group/link">
              <motion.div 
                className="bg-white p-6 border-l-4 border-ocean rounded-r-sm shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <div className="flex items-start gap-5">
                  <div className="bg-ocean/10 p-3 rounded-sm text-ocean shrink-0 group-hover/link:bg-ocean group-hover/link:text-white transition-colors duration-300">
                    <BadgePercent size={28} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-navy mb-1.5 uppercase tracking-wide group-hover/link:text-ocean transition-colors">
                      {t('about.rebates_title')}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t('about.rebates_desc')}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
            
            <motion.div 
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-10 border-t border-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="flex items-start gap-4 p-4 md:p-0 bg-white md:bg-transparent rounded-sm shadow-sm md:shadow-none border border-gray-100 md:border-none">
                <div className="bg-off-white md:bg-white p-3 rounded-sm shadow-sm text-ocean shrink-0">
                  <Globe2 size={24} />
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-heading font-black text-navy mb-1 leading-none">100%</p>
                  <p className="text-[11px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider mt-1">{t('about.stat_ports')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 md:p-0 bg-white md:bg-transparent rounded-sm shadow-sm md:shadow-none border border-gray-100 md:border-none">
                <div className="bg-off-white md:bg-white p-3 rounded-sm shadow-sm text-ocean shrink-0">
                  <Anchor size={24} />
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-heading font-black text-navy mb-1 leading-none">End-to-End</p>
                  <p className="text-[11px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider mt-1">{t('about.stat_guarantee')}</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
