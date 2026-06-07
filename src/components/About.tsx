import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ABOUT_IMAGE = 'https://images.pexels.com/photos/897251/pexels-photo-897251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

export default function About() {
  const title = useScrollAnimation();
  const image = useScrollAnimation(0.2);
  const text = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div
          ref={title.ref}
          className={`text-center mb-16 transition-all duration-800 ${
            title.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">Our Story</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mt-3">
            About <span className="italic text-soft-brown">Vision Wrld Cuts</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            ref={image.ref}
            className={`relative transition-all duration-1000 ${
              image.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={ABOUT_IMAGE}
                alt="Barber providing a premium shave"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-off-black/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-charcoal text-warm-white px-6 py-4 rounded-xl shadow-xl">
              <p className="font-serif text-3xl font-bold text-gold">7+</p>
              <p className="text-xs tracking-wider uppercase text-warm-beige/70">Years of Excellence</p>
            </div>
          </div>

          {/* Text */}
          <div
            ref={text.ref}
            className={`transition-all duration-1000 delay-200 ${
              text.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-6 leading-snug">
              A sanctuary for the modern gentleman.
            </h3>
            <div className="space-y-5 text-charcoal/70 leading-relaxed">
              <p>
                At Vision Wrld Cuts, we believe grooming is more than just a haircut — it's a moment of
                calm in a busy world. Our barbershop is designed to offer a relaxing atmosphere where
                every detail matters, from the first greeting to the final touch.
              </p>
              <p>
                Our experienced barbers blend classic technique with modern style, using premium
                products and tools to deliver results that look and feel exceptional. Whether it's
                a sharp fade, a sculpted beard, or a complete grooming package, we take our time
                to get it right.
              </p>
              <p>
                Step inside, settle in, and let us take care of the rest. Because you deserve more
                than just a cut — you deserve the calm.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-warm-beige/30">
              {[
                { value: '5,000+', label: 'Happy Clients' },
                { value: '6', label: 'Expert Barbers' },
                { value: '4.9★', label: 'Average Rating' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-2xl md:text-3xl font-bold text-charcoal">{stat.value}</p>
                  <p className="text-xs tracking-wider uppercase text-soft-brown mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
