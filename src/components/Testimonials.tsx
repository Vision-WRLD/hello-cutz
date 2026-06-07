import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'David Mitchell',
    role: 'Regular Client',
    text: 'Vision Wrld Cuts is my go-to spot. Every visit feels like a reset. The attention to detail and the relaxed atmosphere make it more than just a haircut — it\'s an experience.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'First-Time Client',
    text: 'I walked in not knowing what to expect, and left feeling incredible. The barber really listened to what I wanted and delivered beyond my expectations. Highly recommend.',
    rating: 5,
  },
  {
    name: 'Ryan Park',
    role: 'Monthly Member',
    text: 'Best barbershop in the city, hands down. Clean, calm, professional. I\'ve been coming here for over two years and the quality never drops. Worth every penny.',
    rating: 5,
  },
  {
    name: 'James Sullivan',
    role: 'Regular Client',
    text: 'My beard has never looked this good. The hot towel shave is absolutely incredible — it\'s pure luxury. The team here really knows their craft.',
    rating: 5,
  },
];

export default function Testimonials() {
  const title = useScrollAnimation();
  const cards = useStaggeredAnimation(testimonials.length, 150);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Title */}
        <div
          ref={title.ref}
          className={`text-center mb-16 transition-all duration-800 ${
            title.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-warm-white mt-3">
            What Our <span className="italic text-gold-light">Clients Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div ref={cards.ref} className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-charcoal-light/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-gold/20 transition-all duration-500 hover:-translate-y-1 ${
                cards.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={cards.getDelay(index)}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-gold/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-warm-beige/70 leading-relaxed mb-6 text-sm md:text-base">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-serif text-base font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-warm-white font-medium text-sm">{testimonial.name}</p>
                  <p className="text-warm-beige/40 text-xs tracking-wider uppercase">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
