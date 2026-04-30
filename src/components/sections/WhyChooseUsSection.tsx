import { Shield, Clock, Map, Route } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function WhyChooseUsSection() {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: <Shield size={40} />,
      title: t('why_us.r1_title'),
      description: t('why_us.r1_desc')
    },
    {
      icon: <Route size={40} />,
      title: t('why_us.r2_title'),
      description: t('why_us.r2_desc')
    },
    {
      icon: <Map size={40} />,
      title: t('why_us.r3_title'),
      description: t('why_us.r3_desc')
    },
    {
      icon: <Clock size={40} />,
      title: t('why_us.r4_title'),
      description: t('why_us.r4_desc')
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy leading-tight mb-6 uppercase">
            {t('why_us.title')}
          </h2>
          <div className="w-24 h-1 bg-ocean mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            {t('why_us.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-off-white text-ocean rounded-full flex items-center justify-center mb-6 group-hover:bg-ocean group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg">
                {reason.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-navy mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
