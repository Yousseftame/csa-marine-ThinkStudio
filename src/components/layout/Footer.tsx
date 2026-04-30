import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t('nav.about'), href: '/#about' },
    { name: t('nav.services'), href: '/#services' },
    { name: t('nav.licenses'), href: '/#accreditation' },
    { name: t('nav.news'), href: '/#news' }
  ];

  const handleNav = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer id="footer" className="bg-navy text-white pt-20 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mb-12 md:mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-block mb-8 hover:opacity-80 transition-opacity"
            >
              <img
                src="/CSA Marine-02.png"
                alt="C.S.A Marine Logo"
                className="h-20 md:h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-off-white/80 text-sm leading-relaxed mb-6 text-start">
              {t('footer.about')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 border-b border-white/10 pb-3 text-start">
              {t('footer.links_title')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name} className="flex justify-start">
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
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
            <h3 className="text-lg font-heading font-semibold mb-6 border-b border-white/10 pb-3 text-start">
              {t('footer.contact_title')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-ocean shrink-0 mt-0.5" size={18} />
                <span className="text-off-white/80 text-sm leading-relaxed text-start">
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
            &copy; {currentYear} C.S.A Marine. {t('footer.rights')}
          </p>
          <div className="flex gap-6 text-sm text-off-white/60">
            <span className="hover:text-white transition-colors cursor-default">
              {t('footer.privacy')}
            </span>
            <span className="hover:text-white transition-colors cursor-default">
              {t('footer.terms')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
