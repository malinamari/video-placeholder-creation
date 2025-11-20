import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';
import { Helmet } from 'react-helmet';

const Index = () => {
  const [videoUrl] = useState('/FANCY_LXV_6_горизонт (1) (1).mp4');
  const [showBooking, setShowBooking] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+7 ');
  const [comment, setComment] = useState('');
  const [guests, setGuests] = useState('2');
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
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
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "NightClub",
              "name": "LXV Club",
              "alternateName": ["LXV", "ЛХВ", "lxv club", "лхв клуб"],
              "description": "Закрытый сигарный клуб и премиальный лаунж на 65 этаже башни Федерация в Москва-Сити. Панорамный вид, дегустации сигар и вина, авторская кухня, частные мероприятия",
              "image": "https://cdn.poehali.dev/intertnal/img/og.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Пресненская набережная, башня Федерация Восток, 65 этаж",
                "addressLocality": "Москва",
                "addressRegion": "Москва",
                "addressCountry": "RU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "55.7495",
                "longitude": "37.5384"
              },
              "url": "https://lxv-club.poehali.app",
              "telephone": "+7",
              "priceRange": "$$$$",
              "servesCuisine": ["International", "Fine Dining", "Авторская кухня"],
              "acceptsReservations": "True",
              "smokingAllowed": true,
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Панорамный вид на Москву",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "65 этаж башни Федерация",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Сигарный лаунж",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Премиальный хьюмидор",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Дегустационный зал",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "VIP-залы для мероприятий",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Закрытое членство",
                  "value": true
                }
              ],
              "hasMenu": {
                "@type": "Menu",
                "name": "Меню LXV Club",
                "description": "Авторская кухня, винная карта, сигарная карта, коктейльное меню"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "18:00",
                "closes": "06:00"
              }
            }
          `}
        </script>
      </Helmet>
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4">
          <div className="bg-gray-900 border border-white/30 shadow-2xl p-6 md:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto rounded-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-ony65 text-white text-xl md:text-2xl tracking-[0.2em] uppercase">Бронирование</h2>
              <button
                onClick={() => setShowBooking(false)}
                className="text-white hover:text-white/60 text-3xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-white/60 text-sm tracking-wider mb-2 uppercase">ФИО *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black/40 border border-white/20 text-white px-4 py-2 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="Иванов Иван Иванович"
                />
              </div>

              <div>
                <label className="block text-white/60 text-sm tracking-wider mb-2 uppercase">Телефон *</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.startsWith('+7 ')) {
                      setPhone(value);
                    } else if (value.length < phone.length) {
                      if (value === '+7') {
                        setPhone('+7 ');
                      } else {
                        setPhone(value);
                      }
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Backspace' && phone === '+7 ') {
                      e.preventDefault();
                    }
                  }}
                  className="w-full bg-black/40 border border-white/20 text-white px-4 py-2 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="+7 (999) 123-45-67"
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

              <div>
                <label className="block text-white/60 text-sm tracking-wider mb-2 uppercase">Комментарий</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full bg-black/40 border border-white/20 text-white px-4 py-2 focus:outline-none focus:border-white/40 transition-colors resize-none"
                  placeholder="Дополнительные пожелания или вопросы"
                  rows={3}
                />
              </div>

              <div className="flex items-start gap-3 mb-4">
                <input
                  type="checkbox"
                  id="privacy-checkbox"
                  checked={agreedToPrivacy}
                  onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                  className="mt-1 w-4 h-4 bg-black/40 border border-white/20 rounded cursor-pointer"
                />
                <label htmlFor="privacy-checkbox" className="text-white/60 text-xs leading-relaxed cursor-pointer">
                  Я согласен на обработку персональных данных в соответствии с политикой конфиденциальности
                </label>
              </div>

              <button
                onClick={async () => {
                  setErrorMessage('');
                  
                  if (!agreedToPrivacy) {
                    setErrorMessage('Пожалуйста, дайте согласие на обработку персональных данных');
                    return;
                  }
                  if (!name || !phone || phone === '+7 ') {
                    setErrorMessage('Пожалуйста, заполните все обязательные поля (ФИО и телефон)');
                    return;
                  }
                  
                  setIsSubmitting(true);
                  
                  try {
                    const response = await fetch('https://functions.poehali.dev/424e0d69-a571-4086-8e09-8fa63cd0a87d', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        name,
                        phone,
                        guests,
                        date: selectedDate ? format(selectedDate, 'dd MMMM yyyy', { locale: ru }) : 'не выбрана',
                        comment
                      })
                    });
                    
                    if (response.ok) {
                      setShowSuccessMessage(true);
                      setTimeout(() => {
                        setShowSuccessMessage(false);
                        setShowBooking(false);
                        setName('');
                        setPhone('+7 ');
                        setGuests('2');
                        setSelectedDate(undefined);
                        setComment('');
                        setAgreedToPrivacy(false);
                      }, 3000);
                    } else {
                      setErrorMessage('Произошла ошибка. Пожалуйста, попробуйте позже или позвоните нам: +7 925 650-65-65');
                    }
                  } catch (error) {
                    setErrorMessage('Произошла ошибка. Пожалуйста, попробуйте позже или позвоните нам: +7 925 650-65-65');
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
                disabled={!agreedToPrivacy || isSubmitting}
                className="w-full font-open-sans font-light text-white text-sm tracking-[0.3em] uppercase px-8 py-3 border border-white/40 hover:bg-white/10 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Отправка...' : 'Забронировать'}
              </button>

              {errorMessage && (
                <div className="mt-4 p-4 bg-red-900/30 border border-red-500/50 rounded">
                  <p className="text-red-200 text-center text-sm">
                    {errorMessage}
                  </p>
                </div>
              )}

              {showSuccessMessage && (
                <div className="mt-4 p-4 bg-green-900/30 border border-green-500/50 rounded">
                  <p className="text-white text-center text-sm">
                    Спасибо! Ваша заявка принята.<br />Мы свяжемся с вами в ближайшее время.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      </div>
      
      {/* SEO-текст для поисковых систем */}
      <div className="hidden">
        <h1>LXV Club — Закрытый сигарный клуб на 65 этаже Москва-Сити</h1>
        <h2>Премиальный лаунж в башне Федерация с панорамным видом</h2>
        <p>LXV (ЛХВ) — эксклюзивный закрытый клуб в Москва-Сити, расположенный на 65 этаже башни Федерация Восток. Премиальный сигарный лаунж с панорамным видом на исторический центр Москвы.</p>
        
        <h3>Сигарный клуб премиум-класса в Москве</h3>
        <p>Cigar lounge Moscow, cigar club Moscow. Дегустация кубинских сигар, limited edition cigars Moscow. Премиальный хьюмидор с редкими сигарами. Сигарные вечера и мастер-классы от сомелье.</p>
        
        <h3>Дегустации вина, виски и шампанского в Москва-Сити</h3>
        <p>Винная дегустация Москва-Сити, дегустация шампанского Москва, дегустация виски Москва, дегустация хереса. Авторские коктейли от лучших барменов. Коллекционный и редкий алкоголь.</p>
        
        <h3>Гастрономические ужины и авторская кухня</h3>
        <p>Fine dining Moscow City. Гастрономический ужин Москва, ужин с видом Москва-Сити, авторский ужин, дегустационный ужин. Ужины на 65 этаже с панорамным видом. Приватный ужин в закрытом клубе с шампанским.</p>
        
        <h3>Частные мероприятия и деловые встречи</h3>
        <p>Аренда зала Москва-Сити, VIP-зал Москва, камерное мероприятие, event Москва-Сити. Деловые мероприятия в закрытом клубе. Корпоратив премиум-класса, приватные вечеринки, аренда клубного пространства для мероприятий.</p>
        
        <h3>Членство в элитном клубе Москвы</h3>
        <p>Private members club Moscow. Закрытое комьюнити москва, членство в клубе LXV, клубная карта. Мужской клуб Москва для ценителей премиального сервиса и роскошного отдыха.</p>
        
        <h3>Локация: Москва-Сити, башня Федерация</h3>
        <p>Москва-Сити клуб, Федерация Восток клуб, Федерация небоскрёб, Пресненская набережная. Клуб на небоскрёбе Москва с захватывающим видом на город.</p>
        
        <p>Бронирование столиков и мероприятий в LXV Club. Элитный досуг в премиальной клубной атмосфере. Камерность, безопасность, индивидуальный подход. Лучший закрытый клуб Москвы для деловых встреч и отдыха.</p>
      </div>
    </>
  );
};

export default Index;