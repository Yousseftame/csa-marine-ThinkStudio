import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.about'), href: "/#about" },
    { name: t('nav.services'), href: "/#services" },
    { name: t('nav.licenses'), href: "/#accreditation" },
    { name: t('nav.news'), href: "/#news" },
    { name: t('nav.suez_transit'), href: "/suez-canal-transit" },
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
    setMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b ${
        isScrolled 
          ? 'bg-white shadow-lg py-0 border-transparent' 
          : 'bg-transparent py-0 border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center h-14 md:h-16">
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center group h-full py-2">
          <img 
            src="/logo.png" 
            alt="C.S.A Marine Logo" 
            className={`h-full w-auto object-contain transition-all duration-500 ${
              isScrolled || location.pathname !== '/' ? 'opacity-100' : 'brightness-0 invert opacity-90'
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 h-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className={`font-semibold text-[10px] lg:text-xs uppercase tracking-widest transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-300 hover:after:w-full ${
                isScrolled || location.pathname !== '/' ? 'text-navy hover:text-ocean' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className={`flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest transition-colors duration-300 ${
              isScrolled || location.pathname !== '/' ? 'text-navy hover:text-ocean' : 'text-white/90 hover:text-white'
            }`}
          >
            <Globe size={14} />
            {i18n.language === 'en' ? 'AR' : 'EN'}
          </button>

          <a
            href="/#contact"
            onClick={(e) => handleNav(e, '/#contact')}
            className={`px-4 lg:px-6 py-2 rounded-sm font-bold uppercase text-[10px] tracking-widest transition-all duration-300 ${
              isScrolled || location.pathname !== '/'
                ? 'bg-navy text-white hover:bg-ocean shadow-md' 
                : 'bg-white/10 text-white hover:bg-white hover:text-navy backdrop-blur-sm border border-white/20'
            }`}
          >
            {t('nav.contact')}
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleLanguage}
            className={`font-bold text-xs uppercase tracking-widest ${
              isScrolled || location.pathname !== '/' ? 'text-navy' : 'text-white'
            }`}
          >
            {i18n.language === 'en' ? 'AR' : 'EN'}
          </button>
          <button
            className={`transition-colors ${
              isScrolled || location.pathname !== '/' ? 'text-navy hover:text-ocean' : 'text-white'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col py-4 px-6 animate-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-3 border-b border-gray-100 text-navy font-semibold text-sm uppercase tracking-wider hover:text-ocean transition-colors text-start"
              onClick={(e) => handleNav(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/#contact"
            className="mt-6 bg-navy text-white text-center py-3 rounded-sm font-bold uppercase text-xs tracking-wider hover:bg-ocean transition-colors"
            onClick={(e) => handleNav(e, '/#contact')}
          >
            {t('nav.contact')}
          </a>
        </div>
      )}
    </header>
  );
}
