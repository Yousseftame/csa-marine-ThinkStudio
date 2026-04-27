import { Award, CheckCircle2 } from 'lucide-react';

export default function AccreditationSection() {
  const accreditations = [
    "Member of the Alexandria Chamber of Shipping",
    "Ship Agency License covering all Egyptian maritime ports granted by the Egyptian Maritime Transport Authority",
    "Open tonnage authorization for full shipping agency operations",
    "Authorization to perform ship agency activities at Port Said Port",
    "Registration on the Egyptian Maritime Transport Sector electronic platform"
  ];

  return (
    <section id="accreditation" className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-current">
          <polygon points="0,100 100,0 100,100" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-5/12">
            <div className="w-20 h-20 bg-ocean rounded-sm flex items-center justify-center mb-8">
              <Award size={40} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-6">
              LICENSES & ACCREDITATION
            </h2>
            <p className="text-off-white/80 text-lg leading-relaxed mb-8">
              The company possesses all necessary licenses and official approvals to function as a fully accredited ship agency in Egypt. We operate with complete transparency and adherence to international maritime standards.
            </p>
          </div>

          <div className="lg:w-7/12 w-full">
            <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-sm backdrop-blur-sm">
              <ul className="space-y-6">
                {accreditations.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <CheckCircle2 
                      className="text-ocean shrink-0 mt-1 group-hover:scale-110 transition-transform" 
                      size={24} 
                    />
                    <span className="text-lg text-off-white font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
