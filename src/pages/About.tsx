import AboutSection from '../components/About';

export default function About() {
  return (
    <div className="pt-16">
      <div className="bg-charcoal py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">Our Story</span>
          <h1 className="font-serif text-5xl md:text-6xl text-warm-white mt-4">
            The Vision Behind<br />Vision Wrld Cuts
          </h1>
          <p className="text-warm-beige/60 mt-4 text-lg max-w-md mx-auto">
            A modern barbershop built on precision, calm, and an uncompromising eye for detail.
          </p>
        </div>
      </div>
      <AboutSection />
    </div>
  );
}
