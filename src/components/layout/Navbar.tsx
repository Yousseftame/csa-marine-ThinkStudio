import { useState, useEffect } from 'react';
import { Menu, X, Ship } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "licenses", href: "#accreditation" },
    { name: "Clients", href: "#clients" },
  ];

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
        <a href="#" className="flex items-center group h-full py-2">
          <img 
            src="/logo.png" 
            alt="C.S.A Marine Logo" 
            className={`h-full w-auto object-contain transition-all duration-500 ${
              isScrolled ? 'opacity-100' : 'brightness-0 invert opacity-90'
            }`}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 h-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(link.href);
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`font-semibold text-xs lg:text-sm uppercase tracking-widest transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-300 hover:after:w-full ${
                isScrolled ? 'text-navy hover:text-ocean' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector('#contact');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={`px-6 py-2 rounded-sm font-bold uppercase text-xs tracking-widest transition-all duration-300 ${
              isScrolled 
                ? 'bg-navy text-white hover:bg-ocean shadow-md' 
                : 'bg-white/10 text-white hover:bg-white hover:text-navy backdrop-blur-sm border border-white/20'
            }`}
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className={`md:hidden transition-colors ${
            isScrolled ? 'text-navy hover:text-ocean' : 'text-white'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col py-4 px-6 animate-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-3 border-b border-gray-100 text-navy font-semibold text-lg uppercase tracking-wider hover:text-ocean transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-6 bg-navy text-white text-center py-3 rounded-sm font-bold uppercase tracking-wider hover:bg-ocean transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
