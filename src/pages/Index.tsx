import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';

const Index = () => {
  const [videoUrl] = useState('/FANCY_LXV_6_горизонт (1) (1).mp4');
  const [showBooking, setShowBooking] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('2');
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (videoRef.current && !isMobile) {
      videoRef.current.play().catch(err => {
        console.log('Autoplay prevented:', err);
      });
    }
  }, [isMobile]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {!isMobile && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className={`absolute top-0 left-0 w-full h-full object-cover opacity-70 transition-opacity duration-700 ${videoLoaded ? 'opacity-70' : 'opacity-0'}`}
          onLoadedData={() => setVideoLoaded(true)}
          onError={(e) => {
            console.error('Video failed to load');
            e.currentTarget.style.display = 'none';
          }}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-black/20 z-10" />

      <div className="absolute left-4 right-4 top-[50px] bottom-[50px] z-30 pointer-events-none">
        <div className="absolute left-0 right-0 top-0 h-[1px] bg-white/30" />
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/30" />
        <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/30" />
        <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-white/30" />
      </div>

      <div className="relative z-40 flex flex-col items-center justify-between h-full px-6 py-12">
        <div className="relative">
          <h1 className="font-ony65 font-normal text-white/40 text-3xl md:text-4xl lg:text-4xl animate-fade-in tracking-[0.3em] uppercase px-8" style={{ lineHeight: '1.2' }}>
            LXV
          </h1>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowBooking(true)}
            className="font-open-sans font-light text-white text-sm md:text-base tracking-[0.4em] uppercase px-8 py-3 border border-white/40 hover:bg-white/10 transition-all duration-500 backdrop-blur-sm"
            style={{ animationDelay: '0.4s' }}
          >
            ПОСЕТИТЬ КЛУБ
          </button>
        </div>
      </div>

      {showBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-gray-900/95 border border-white/20 p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-ony65 text-white/80 text-2xl tracking-[0.2em] uppercase">Бронирование</h2>
              <button
                onClick={() => setShowBooking(false)}
                className="text-white/60 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-white/60 text-sm tracking-wider mb-2 uppercase">Имя</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black/40 border border-white/20 text-white px-4 py-2 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label className="block text-white/60 text-sm tracking-wider mb-2 uppercase">Телефон</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-black/40 border border-white/20 text-white px-4 py-2 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label className="block text-white/60 text-sm tracking-wider mb-2 uppercase">Количество гостей</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-black/40 border border-white/20 text-white px-4 py-2 focus:outline-none focus:border-white/40 transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white/60 text-sm tracking-wider mb-3 uppercase">Выберите дату</label>
                <div className="bg-black/40 border border-white/20 p-4">
                  <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    locale={ru}
                    disabled={{ before: new Date() }}
                    className="text-white"
                    styles={{
                      caption: { color: 'white' },
                      head_cell: { color: 'rgba(255,255,255,0.6)' },
                      cell: { color: 'white' },
                    }}
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  alert(`Бронирование создано!\nИмя: ${name}\nТелефон: ${phone}\nГостей: ${guests}\nДата: ${selectedDate ? format(selectedDate, 'dd MMMM yyyy', { locale: ru }) : 'не выбрана'}`);
                  setShowBooking(false);
                }}
                className="w-full font-open-sans font-light text-white text-sm tracking-[0.3em] uppercase px-8 py-3 border border-white/40 hover:bg-white/10 transition-all duration-500"
              >
                Забронировать
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;