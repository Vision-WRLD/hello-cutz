import BookingCalendar from '../components/BookingCalendar';

export default function Booking() {
  return (
    <div className="pt-16">
      <div className="bg-warm-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">Reserve Your Time</span>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal mt-4">
            Book Your Cut
          </h1>
          <p className="text-charcoal/60 mt-4 text-lg max-w-md mx-auto">
            Select a date, pick your barber, and lock in the perfect time.
          </p>
        </div>
      </div>
      <BookingCalendar />
    </div>
  );
}
