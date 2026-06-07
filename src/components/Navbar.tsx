import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scissors } from 'lucide-react';

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-off-black/95 backdrop-blur-md shadow-lg py-3.5">

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Scissors className="w-6 h-6 text-gold transition-transform duration-300 group-hover:rotate-45" />
          <span className="font-serif text-2xl font-semibold text-warm-white tracking-wide">
            Vision Wrld Cuts
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`text-sm tracking-wider uppercase font-medium transition-colors duration-300 ${
                location.pathname === link.to
                  ? 'text-gold'
                  : 'text-warm-beige/80 hover:text-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/booking"
            className="ml-4 px-6 py-2.5 bg-gold text-off-black text-sm font-semibold rounded-full hover:bg-gold-light transition-all duration-300 tracking-wider uppercase hover:shadow-lg hover:shadow-gold/20"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-warm-white p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-off-black/98 backdrop-blur-md px-6 py-6 space-y-4 border-t border-white/5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`block tracking-wider uppercase text-sm font-medium py-2 transition-colors duration-300 ${
                location.pathname === link.to
                  ? 'text-gold'
                  : 'text-warm-beige/80 hover:text-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/booking"
            onClick={() => setIsOpen(false)}
            className="block text-center mt-4 px-6 py-3 bg-gold text-off-black text-sm font-semibold rounded-full hover:bg-gold-light transition-all duration-300 tracking-wider uppercase"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
