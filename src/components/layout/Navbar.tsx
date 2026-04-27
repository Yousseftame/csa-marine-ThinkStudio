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
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Accreditation', href: '#accreditation' },
    { name: 'Clients', href: '#clients' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <img 
            src="/logo.png" 
            alt="C.S.A Marine Logo" 
            className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-navy font-medium text-sm uppercase tracking-wider hover:text-ocean transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-ocean after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-navy hover:bg-ocean text-white px-6 py-2.5 rounded-sm font-semibold transition-all duration-300 uppercase text-sm tracking-wide shadow-lg shadow-navy/20"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-navy hover:text-ocean transition-colors"
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
