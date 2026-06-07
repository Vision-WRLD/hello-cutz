import { useState, useMemo } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight, Clock, Check, CalendarDays } from 'lucide-react';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const TIME_SLOTS = [
  '9:00 AM', '10:00 AM', '10:30 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '4:30 PM',
];

const BARBERS = [
  { id: 1, name: 'James' },
  { id: 2, name: 'Marcus' },
  { id: 3, name: 'Leo' },
];

// Simulate some unavailable slots
function getUnavailableSlots(date: Date): Set<string> {
  const seed = date.getDate() + date.getMonth();
  const unavailable = new Set<string>();
  TIME_SLOTS.forEach((slot, i) => {
    if ((seed + i) % 4 === 0) unavailable.add(slot);
  });
  return unavailable;
}

export default function BookingCalendar() {
  const title = useScrollAnimation();
  const calendar = useScrollAnimation(0.1);

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<number | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const days: { date: Date; isCurrentMonth: boolean }[] = [];

    // Previous month padding
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, daysInPrevMonth - i),
        isCurrentMonth: false,
      });
    }

    // Current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: new Date(year, month, i),
        isCurrentMonth: true,
      });
    }

    // Next month padding
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
      });
    }

    return days;
  }, [currentMonth]);

  const unavailableSlots = useMemo(
    () => (selectedDate ? getUnavailableSlots(selectedDate) : new Set<string>()),
    [selectedDate]
  );

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const isToday = (date: Date) =>
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  const isSelected = (date: Date) =>
    selectedDate &&
    date.getDate() === selectedDate.getDate() &&
    date.getMonth() === selectedDate.getMonth() &&
    date.getFullYear() === selectedDate.getFullYear();

  const isPast = (date: Date) => date < today;

  const isSunday = (date: Date) => date.getDay() === 0;

  const handleDateClick = (date: Date) => {
    if (isPast(date) || !calendarDays.find((d) => d.date === date)?.isCurrentMonth || isSunday(date)) return;
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleBook = () => {
    if (selectedDate && selectedTime && selectedBarber) {
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 4000);
    }
  };

  const monthStr = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <section id="booking" className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div
          ref={title.ref}
          className={`text-center mb-16 transition-all duration-800 ${
            title.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">Reserve Your Spot</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mt-3">
            Book an <span className="italic text-soft-brown">Appointment</span>
          </h2>
          <p className="text-charcoal/60 mt-4 max-w-lg mx-auto leading-relaxed">
            Choose your preferred date, time, and barber. It only takes a moment.
          </p>
        </div>

        <div
          ref={calendar.ref}
          className={`transition-all duration-1000 ${
            calendar.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-5xl mx-auto bg-cream rounded-3xl border border-warm-beige/20 shadow-xl shadow-warm-beige/10 overflow-hidden">
            <div className="grid lg:grid-cols-5">
              {/* Calendar */}
              <div className="lg:col-span-3 p-6 md:p-8">
                {/* Month Navigation */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={prevMonth}
                    className="p-2 rounded-xl hover:bg-warm-beige/20 transition-colors duration-200"
                  >
                    <ChevronLeft className="w-5 h-5 text-charcoal" />
                  </button>
                  <h3 className="font-serif text-xl font-semibold text-charcoal">{monthStr}</h3>
                  <button
                    onClick={nextMonth}
                    className="p-2 rounded-xl hover:bg-warm-beige/20 transition-colors duration-200"
                  >
                    <ChevronRight className="w-5 h-5 text-charcoal" />
                  </button>
                </div>

                {/* Day headers */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {DAYS.map((day) => (
                    <div key={day} className="text-center text-xs font-medium text-soft-brown uppercase tracking-wider py-2">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day, idx) => {
                    const past = isPast(day.date);
                    const sunday = isSunday(day.date);
                    const disabled = past || !day.isCurrentMonth || sunday;
                    const selected = isSelected(day.date);
                    const todayMark = isToday(day.date);

                    return (
                      <button
                        key={idx}
                        onClick={() => handleDateClick(day.date)}
                        disabled={disabled}
                        className={`relative aspect-square flex items-center justify-center rounded-xl text-sm transition-all duration-200
                          ${disabled ? 'text-charcoal/20 cursor-not-allowed' : 'text-charcoal hover:bg-warm-beige/30 cursor-pointer'}
                          ${selected ? '!bg-charcoal !text-warm-white font-semibold shadow-lg' : ''}
                          ${todayMark && !selected ? 'font-bold text-gold' : ''}
                        `}
                      >
                        {day.date.getDate()}
                        {todayMark && (
                          <span className={`absolute bottom-1.5 w-1 h-1 rounded-full ${selected ? 'bg-gold' : 'bg-gold'}`} />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots & Barber Selection */}
              <div className="lg:col-span-2 bg-warm-white p-6 md:p-8 border-t lg:border-t-0 lg:border-l border-warm-beige/20">
                {selectedDate ? (
                  <div className="space-y-6">
                    {/* Selected Date Display */}
                    <div className="flex items-center gap-3">
                      <CalendarDays className="w-5 h-5 text-gold" />
                      <span className="font-serif text-lg text-charcoal font-medium">
                        {selectedDate.toLocaleDateString('en-US', {
                          weekday: 'long',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>

                    {/* Barber Selection */}
                    <div>
                      <p className="text-xs tracking-wider uppercase text-soft-brown mb-3 font-medium">Choose Barber</p>
                      <div className="flex gap-2">
                        {BARBERS.map((barber) => (
                          <button
                            key={barber.id}
                            onClick={() => setSelectedBarber(barber.id)}
                            className={`flex-1 flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all duration-200
                              ${selectedBarber === barber.id
                                ? 'border-gold bg-gold/5 shadow-sm'
                                : 'border-warm-beige/20 hover:border-warm-beige/50'
                              }
                            `}
                          >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                              selectedBarber === barber.id ? 'bg-gold/20' : 'bg-cream'
                            }`}>
                              <span className={`font-serif text-sm font-semibold transition-colors duration-200 ${
                                selectedBarber === barber.id ? 'text-gold' : 'text-soft-brown'
                              }`}>
                                {barber.name[0]}
                              </span>
                            </div>
                            <span className="text-xs font-medium text-charcoal">{barber.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Slots */}
                    <div>
                      <p className="text-xs tracking-wider uppercase text-soft-brown mb-3 font-medium flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5" />
                        Available Times
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {TIME_SLOTS.map((slot) => {
                          const unavail = unavailableSlots.has(slot);
                          const active = selectedTime === slot;
                          return (
                            <button
                              key={slot}
                              onClick={() => !unavail && setSelectedTime(slot)}
                              disabled={unavail}
                              className={`py-2.5 px-3 rounded-xl text-sm font-medium transition-all duration-200
                                ${unavail ? 'text-charcoal/20 bg-cream/50 cursor-not-allowed line-through' : ''}
                                ${active ? 'bg-charcoal text-warm-white shadow-md' : ''}
                                ${!unavail && !active ? 'bg-cream hover:bg-warm-beige/30 text-charcoal' : ''}
                              `}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Book Button */}
                    <button
                      onClick={handleBook}
                      disabled={!selectedTime || !selectedBarber}
                      className={`w-full py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300
                        ${selectedTime && selectedBarber
                          ? 'bg-gold text-off-black hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5'
                          : 'bg-warm-beige/30 text-charcoal/30 cursor-not-allowed'
                        }
                      `}
                    >
                      {showConfirmation ? (
                        <span className="flex items-center justify-center gap-2">
                          <Check className="w-4 h-4" /> Booked Successfully!
                        </span>
                      ) : (
                        'Confirm Booking'
                      )}
                    </button>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <CalendarDays className="w-12 h-12 text-warm-beige/40 mb-4" />
                    <p className="font-serif text-lg text-charcoal/40 mb-2">Select a Date</p>
                    <p className="text-sm text-charcoal/30">
                      Choose a day from the calendar to see available times
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
