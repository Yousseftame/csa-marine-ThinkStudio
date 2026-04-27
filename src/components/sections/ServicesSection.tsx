import { Anchor, RadioReceiver, Users, FileText, PackagePlus, ShieldCheck } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: <Anchor size={32} strokeWidth={1.5} />,
      title: "Vessel Coordination",
      description: "Full coordination of vessel arrival and departure operations at ports."
    },
    {
      icon: <RadioReceiver size={32} strokeWidth={1.5} />,
      title: "Port Communication",
      description: "Direct communication with port authorities and relevant regulatory bodies."
    },
    {
      icon: <Users size={32} strokeWidth={1.5} />,
      title: "Crew Services",
      description: "Arrangement of crew services including crew change transfer and accommodation."
    },
    {
      icon: <FileText size={32} strokeWidth={1.5} />,
      title: "Documentation",
      description: "Preparation and processing of all required shipping documentation."
    },
    {
      icon: <PackagePlus size={32} strokeWidth={1.5} />,
      title: "Provisions & Supply",
      description: "Organization of vessel provisions and supply services (ship chandling)."
    },
    {
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
      title: "Full Representation",
      description: "Full agency representation for vessels across Egyptian ports and territorial waters."
    }
  ];

  return (
    <section id="services" className="py-24 bg-off-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-white px-4 py-2 rounded-sm mb-6 border-b-4 border-ocean shadow-sm">
            <span className="text-navy font-bold uppercase tracking-wider text-sm">Our Operations</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy leading-tight mb-6">
            FULL SERVICE AGENCY
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide comprehensive ship agency services, ensuring every aspect of your vessel's port call is managed with precision and expertise.
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
              <h3 className="text-xl font-heading font-bold text-navy mb-4 group-hover:text-ocean transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
