import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Visit Us',
    value: '247 West Oak Street\nBrooklyn, NY 11201',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '(718) 555-0142',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@thecalmcut.com',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon–Fri: 9 AM – 7 PM\nSat: 9 AM – 6 PM\nSun: Closed',
  },
];

export default function Contact() {
  const title = useScrollAnimation();
  const content = useScrollAnimation(0.1);
  const [formState, setFormState] = useState({
    name: '', email: '', phone: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div
          ref={title.ref}
          className={`text-center mb-16 transition-all duration-800 ${
            title.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">Get in Touch</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mt-3">
            Contact <span className="italic text-soft-brown">Us</span>
          </h2>
          <p className="text-charcoal/60 mt-4 max-w-lg mx-auto leading-relaxed">
            Have a question? Want to book by phone? We'd love to hear from you.
          </p>
        </div>

        <div
          ref={content.ref}
          className={`transition-all duration-1000 ${
            content.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} className="flex gap-4 group">
                    <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-soft-brown group-hover:text-gold transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-xs tracking-wider uppercase text-soft-brown font-medium mb-1">{info.label}</p>
                      <p className="text-charcoal whitespace-pre-line leading-relaxed text-sm">{info.value}</p>
                    </div>
                  </div>
                );
              })}

              {/* Map placeholder */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-warm-beige/20 h-48 bg-cream flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-warm-beige/40 mx-auto mb-2" />
                  <p className="text-xs text-charcoal/40 tracking-wider uppercase">Brooklyn, New York</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-cream rounded-2xl p-8 border border-warm-beige/20">
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-soft-brown font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 bg-warm-white border border-warm-beige/30 rounded-xl text-charcoal text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-200 placeholder:text-charcoal/25"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-soft-brown font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 bg-warm-white border border-warm-beige/30 rounded-xl text-charcoal text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-200 placeholder:text-charcoal/25"
                      placeholder="john@email.com"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-xs tracking-wider uppercase text-soft-brown font-medium mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-warm-white border border-warm-beige/30 rounded-xl text-charcoal text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-200 placeholder:text-charcoal/25"
                    placeholder="(718) 555-0000"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-xs tracking-wider uppercase text-soft-brown font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 bg-warm-white border border-warm-beige/30 rounded-xl text-charcoal text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-200 resize-none placeholder:text-charcoal/25"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2
                    ${submitted
                      ? 'bg-green-600 text-white'
                      : 'bg-charcoal text-warm-white hover:bg-off-black hover:shadow-lg hover:-translate-y-0.5'
                    }
                  `}
                >
                  {submitted ? (
                    <>
                      <Check className="w-4 h-4" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
