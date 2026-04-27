import { Ship, Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Our Services', id: 'services' },
    { name: 'Licenses & Accreditation', id: 'accreditation' },
    { name: 'Our Clients', id: 'clients' }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-navy text-white pt-20 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mb-12 md:mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, "hero")}
              className="inline-block mb-8 hover:opacity-80 transition-opacity"
            >
              <img
                src="/CSA Marine-02.png"
                alt="C.S.A Marine Logo"
                className="h-20 md:h-24 w-auto object-contain"
              />
            </a>
            <p className="text-off-white/80 text-sm leading-relaxed mb-6">
              Established in 2016, C.S.A Marine is a leading Egyptian ship
              agency providing full vessel operations across all Egyptian
              maritime ports.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 border-b border-white/10 pb-3">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className="text-off-white/80 hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-300 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-ocean rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>



          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 border-b border-white/10 pb-3">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-ocean shrink-0 mt-0.5" size={18} />
                <span className="text-off-white/80 text-sm leading-relaxed">
                  Address Street Name
                  <br />
                  City, Egypt
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-ocean shrink-0" size={18} />
                <span className="text-off-white/80 text-sm">+20 10000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="text-ocean shrink-0" size={18} />
                <span className="text-off-white/80 hover:text-white transition-colors text-sm cursor-default">
                  www.csamarine.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-ocean shrink-0" size={18} />
                <span className="text-off-white/80 hover:text-white transition-colors text-sm cursor-default">
                  Operation@CSAMarine.com
                </span>
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
            <span className="hover:text-white transition-colors cursor-default">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-default">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
