import { useState } from 'react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import { X } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/12339159/pexels-photo-12339159.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    alt: 'Vintage barber chair in stylish barbershop',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/36043163/pexels-photo-36043163.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    alt: 'Close-up of hair clipper during haircut',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/897271/pexels-photo-897271.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    alt: 'Barber tools on wooden counter',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3998414/pexels-photo-3998414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Bearded man receiving grooming',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1319459/pexels-photo-1319459.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    alt: 'Neatly arranged barber tools',
    span: 'col-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/4625630/pexels-photo-4625630.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    alt: 'Man getting a haircut in barbershop',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/18503633/pexels-photo-18503633.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    alt: 'Precise hair clipper work close-up',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/12464842/pexels-photo-12464842.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    alt: 'Barber using blade to style hair',
    span: '',
  },
];

export default function Gallery() {
  const title = useScrollAnimation();
  const grid = useStaggeredAnimation(galleryImages.length, 100);
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div
          ref={title.ref}
          className={`text-center mb-16 transition-all duration-800 ${
            title.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">Our Work</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mt-3">
            The <span className="italic text-soft-brown">Gallery</span>
          </h2>
          <p className="text-charcoal/60 mt-4 max-w-lg mx-auto leading-relaxed">
            A look at our craft — from clean fades to classic cuts, every detail matters.
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          ref={grid.ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className={`${img.span} relative group rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                grid.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={grid.getDelay(index)}
              onClick={() => setLightbox(index)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full min-h-[200px] object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-off-black/0 group-hover:bg-off-black/30 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-off-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-warm-white/60 hover:text-warm-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
