import { Anchor, RadioReceiver, Users, FileText, PackagePlus, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Anchor size={32} strokeWidth={1.5} />,
      title: t('services.s1_title'),
      description: t('services.s1_desc')
    },
    {
      icon: <RadioReceiver size={32} strokeWidth={1.5} />,
      title: t('services.s2_title'),
      description: t('services.s2_desc')
    },
    {
      icon: <Users size={32} strokeWidth={1.5} />,
      title: t('services.s3_title'),
      description: t('services.s3_desc')
    },
    {
      icon: <FileText size={32} strokeWidth={1.5} />,
      title: t('services.s4_title'),
      description: t('services.s4_desc')
    },
    {
      icon: <PackagePlus size={32} strokeWidth={1.5} />,
      title: t('services.s5_title'),
      description: t('services.s5_desc')
    },
    {
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
      title: t('services.s6_title'),
      description: t('services.s6_desc')
    }
  ];

  return (
    <section id="services" className="py-24 bg-off-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-white px-4 py-2 rounded-sm mb-6 border-b-4 border-ocean shadow-sm">
            <span className="text-navy font-bold uppercase tracking-wider text-sm">{t('services.eyebrow')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy leading-tight mb-6">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('services.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-10 rounded-sm border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-off-white text-navy group-hover:bg-navy group-hover:text-white rounded-sm flex items-center justify-center mb-6 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-navy mb-4 group-hover:text-ocean transition-colors duration-300 text-start">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-start">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
