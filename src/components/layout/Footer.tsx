import { Ship, Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-navy text-white pt-20 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-6 bg-white p-4 rounded-sm">
              <img 
                src="/logo.png" 
                alt="C.S.A Marine Logo" 
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="text-off-white/80 text-sm leading-relaxed mb-6">
              Established in 2016, C.S.A Marine is a leading Egyptian ship agency providing full vessel operations across all Egyptian maritime ports.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 border-b border-white/10 pb-3">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Our Services', 'Licenses & Accreditation', 'Our Clients'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-off-white/80 hover:text-white transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-ocean rounded-full"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 border-b border-white/10 pb-3">Core Services</h3>
            <ul className="space-y-3">
              {['Vessel Coordination', 'Port Authority Communication', 'Crew Services', 'Shipping Documentation', 'Ship Chandling'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-off-white/80 hover:text-white transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-ocean rounded-full"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 border-b border-white/10 pb-3">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-ocean shrink-0 mt-0.5" size={18} />
                <span className="text-off-white/80 text-sm leading-relaxed">
                  Address Street Name<br />City, Egypt
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-ocean shrink-0" size={18} />
                <span className="text-off-white/80 text-sm">+20 10000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="text-ocean shrink-0" size={18} />
                <a href="#" className="text-off-white/80 hover:text-white transition-colors text-sm">www.csamarine.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-ocean shrink-0" size={18} />
                <a href="mailto:info@csamarine.com" className="text-off-white/80 hover:text-white transition-colors text-sm">info@csamarine.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-off-white/60 text-sm">
            &copy; {currentYear} C.S.A Marine. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-off-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
