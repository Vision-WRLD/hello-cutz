import GallerySection from '../components/Gallery';

export default function Gallery() {
  return (
    <div className="pt-16">
      <div className="bg-cream py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">Our Craft</span>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal mt-4">
            The Gallery
          </h1>
          <p className="text-charcoal/60 mt-4 text-lg max-w-md mx-auto">
            Clean lines. Sharp details. The work speaks for itself.
          </p>
        </div>
      </div>
      <GallerySection />
    </div>
  );
}
