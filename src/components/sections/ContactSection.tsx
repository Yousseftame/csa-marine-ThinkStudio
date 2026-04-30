import { motion } from 'framer-motion';
import { Send, Anchor, Activity, Package, Clock, Settings, Headphones } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 md:py-32 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Text Info */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-ocean" />
                <span className="text-navy font-bold uppercase tracking-widest text-sm">{t('contact.eyebrow')}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-black text-navy leading-[1.1] mb-8 uppercase">
                {t('contact.title')}
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                {t('contact.desc')}
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="bg-off-white p-4 rounded-xl text-ocean shadow-sm border border-gray-100">
                    <Headphones size={24} />
                  </div>
                  <div>
                    <p className="text-navy font-bold text-sm uppercase tracking-wide mb-1">{t('contact.support_title')}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t('contact.support_desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="bg-off-white p-4 rounded-xl text-ocean shadow-sm border border-gray-100">
                    <Activity size={24} />
                  </div>
                  <div>
                    <p className="text-navy font-bold text-sm uppercase tracking-wide mb-1">{t('contact.response_title')}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t('contact.response_desc')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="bg-off-white p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] border border-gray-100"
            >
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                {/* Vessel Name / IMO */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-navy uppercase tracking-widest flex items-center gap-2 ml-1">
                    <Anchor size={14} className="text-ocean" />
                    {t('contact.form.vessel')}
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Ever Given / 9817212"
                    className="w-full bg-white border border-gray-200 rounded-xl py-4 px-5 focus:border-ocean focus:ring-1 focus:ring-ocean outline-none transition-all duration-300 text-navy placeholder:text-gray-400"
                  />
                </div>

                {/* GRT/NRT/SCNT */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-navy uppercase tracking-widest flex items-center gap-2 ml-1">
                    <Activity size={14} className="text-ocean" />
                    {t('contact.form.tonnage')}
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. 219,079 / 199,489"
                    className="w-full bg-white border border-gray-200 rounded-xl py-4 px-5 focus:border-ocean focus:ring-1 focus:ring-ocean outline-none transition-all duration-300 text-navy placeholder:text-gray-400"
                  />
                </div>

                {/* Type of Cargo */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-navy uppercase tracking-widest flex items-center gap-2 ml-1">
                    <Package size={14} className="text-ocean" />
                    {t('contact.form.cargo')}
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Containers, Bulk, LNG"
                    className="w-full bg-white border border-gray-200 rounded-xl py-4 px-5 focus:border-ocean focus:ring-1 focus:ring-ocean outline-none transition-all duration-300 text-navy placeholder:text-gray-400"
                  />
                </div>

                {/* ETA */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-navy uppercase tracking-widest flex items-center gap-2 ml-1">
                    <Clock size={14} className="text-ocean" />
                    {t('contact.form.eta')}
                  </label>
                  <input 
                    type="datetime-local" 
                    className="w-full bg-white border border-gray-200 rounded-xl py-4 px-5 focus:border-ocean focus:ring-1 focus:ring-ocean outline-none transition-all duration-300 text-navy"
                  />
                </div>

                {/* Service Required */}
                <div className="md:col-span-2 space-y-3">
                  <label className="text-xs font-bold text-navy uppercase tracking-widest flex items-center gap-2 ml-1">
                    <Settings size={14} className="text-ocean" />
                    {t('contact.form.service')}
                  </label>
                  <div className="relative">
                    <select className="w-full bg-white border border-gray-200 rounded-xl py-4 px-5 focus:border-ocean focus:ring-1 focus:ring-ocean outline-none transition-all duration-300 text-navy appearance-none cursor-pointer">
                      <option value="">{t('nav.services')}...</option>
                      <option value="transit">Suez Canal Transit</option>
                      <option value="husbandry">Husbandry Services</option>
                      <option value="bunker">Bunker Supply</option>
                      <option value="stevedoring">Stevedoring</option>
                      <option value="other">Other Services</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="md:col-span-2 space-y-3">
                  <label className="text-xs font-bold text-navy uppercase tracking-widest ml-1">
                    {t('contact.form.additional')}
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us more about your requirements or specific port requests..."
                    className="w-full bg-white border border-gray-200 rounded-xl py-4 px-5 focus:border-ocean focus:ring-1 focus:ring-ocean outline-none transition-all duration-300 text-navy resize-none placeholder:text-gray-400"
                  />
                </div>

                <div className="md:col-span-2 pt-4">
                  <button className="group bg-navy text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm flex items-center gap-3 hover:bg-ocean transition-all duration-500 shadow-xl shadow-navy/10 hover:shadow-ocean/20">
                    {t('contact.form.submit')}
                    <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300 rtl:-translate-x-1" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
