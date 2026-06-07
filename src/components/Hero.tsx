import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const HERO_IMAGE = 'https://images.pexels.com/photos/13138476/pexels-photo-13138476.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = HERO_IMAGE;
    img.onload = () => setLoaded(true);
    // fallback
    const timer = setTimeout(() => setLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Modern barbershop interior"
          className={`w-full h-full object-cover transition-all duration-[2s] ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-off-black/80 via-off-black/50 to-off-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-off-black/70 via-transparent to-off-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          {/* Accent line */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-1000 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Est. 2018
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`font-serif text-warm-white leading-[0.88] tracking-[-0.015em] mb-8 transition-all duration-1000 delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="block text-gold text-3xl sm:text-4xl md:text-4xl lg:text-5xl tracking-[0.1em] mb-2">VISION WRLD.</span>
            <span className="block text-6xl sm:text-7xl md:text-7xl lg:text-8xl">Cuts That Speak</span>
            <span className="block text-6xl sm:text-7xl md:text-7xl lg:text-8xl">Before <span className="italic text-gold">You Do.</span></span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-warm-beige/60 text-base sm:text-lg max-w-md tracking-[0.05em] leading-tight mb-6 transition-all duration-1000 delay-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Sharp fades. Clean lines.<br />
            Serious presence.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mt-12 transition-all duration-1000 delay-900 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link
              to="/booking"
              className="group inline-flex items-center justify-center px-9 py-4 bg-gold text-off-black font-semibold rounded-full text-sm tracking-wider uppercase hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/25 hover:-translate-y-0.5"
            >
              Book an Appointment
              <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-9 py-4 border border-warm-beige/30 text-warm-beige text-sm font-medium rounded-full tracking-wider uppercase hover:border-gold hover:text-gold transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-[1200ms] ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-warm-beige/40 text-xs tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-warm-beige/40 animate-bounce" />
      </div>
    </section>
  );
}
