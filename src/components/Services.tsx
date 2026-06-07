import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import { Scissors, SprayCan, Sparkles, Baby, Flame, Crown } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    name: 'Classic Haircut',
    description: 'Precision cut tailored to your style, includes consultation, wash, and styling.',
    price: '$35',
    duration: '45 min',
  },
  {
    icon: SprayCan,
    name: 'Beard Trim',
    description: 'Expert shaping and trimming to keep your beard looking sharp and well-groomed.',
    price: '$25',
    duration: '30 min',
  },
  {
    icon: Sparkles,
    name: 'Line Up',
    description: 'Clean, crisp edges and defined lines for a polished, refined finish.',
    price: '$20',
    duration: '20 min',
  },
  {
    icon: Baby,
    name: 'Kids Cut',
    description: 'A gentle, fun experience for young gentlemen. Patient, friendly service always.',
    price: '$25',
    duration: '30 min',
  },
  {
    icon: Flame,
    name: 'Hot Towel Shave',
    description: 'Traditional straight razor shave with hot towels and premium aftercare products.',
    price: '$40',
    duration: '40 min',
  },
  {
    icon: Crown,
    name: 'Full Grooming Package',
    description: 'The complete experience — haircut, beard trim, hot towel, and styling. Our signature.',
    price: '$65',
    duration: '75 min',
  },
];

export default function Services() {
  const title = useScrollAnimation();
  const cards = useStaggeredAnimation(services.length, 120);

  return (
    <section id="services" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div
          ref={title.ref}
          className={`text-center mb-16 transition-all duration-800 ${
            title.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">What We Offer</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mt-3">
            Our <span className="italic text-soft-brown">Services</span>
          </h2>
          <p className="text-charcoal/60 mt-4 max-w-lg mx-auto leading-relaxed">
            Every service is delivered with care, precision, and a commitment to your comfort.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={cards.ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className={`group bg-warm-white rounded-2xl p-8 border border-warm-beige/20 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-warm-beige/20 hover:-translate-y-1 ${
                  cards.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={cards.getDelay(index)}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-cream rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-soft-brown group-hover:text-gold transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">{service.name}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed mb-6">{service.description}</p>

                {/* Price & Duration */}
                <div className="flex items-center justify-between pt-5 border-t border-warm-beige/20">
                  <span className="font-serif text-2xl font-bold text-charcoal">{service.price}</span>
                  <span className="text-xs tracking-wider uppercase text-soft-brown bg-cream px-3 py-1.5 rounded-full">
                    {service.duration}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
