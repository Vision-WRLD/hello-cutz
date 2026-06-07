import { useScrollAnimation } from '../hooks/useScrollAnimation';

const BG_IMAGE = 'https://images.pexels.com/photos/3998427/pexels-photo-3998427.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

export default function CTABanner() {
  const anim = useScrollAnimation(0.2);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={BG_IMAGE} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-off-black/80" />
      </div>

      <div
        ref={anim.ref}
        className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${
          anim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-warm-white leading-tight mb-6">
          Ready for the<br />Vision Wrld Cut?
        </h2>
        <p className="text-warm-beige/60 text-base md:text-lg max-w-md mx-auto mb-10 leading-relaxed">
          Book your appointment today and discover why our clients keep coming back.
        </p>
        <a
          href="#booking"
          className="inline-flex items-center px-10 py-4 bg-gold text-off-black font-semibold rounded-full text-sm tracking-wider uppercase hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/25 hover:-translate-y-0.5"
        >
          Book Now
        </a>
      </div>
    </section>
  );
}
