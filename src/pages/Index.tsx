import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [videoUrl] = useState('https://downloader.disk.yandex.ru/disk/c26bd9b0e1ce78aad7c54e0aab6d2f1eefd21bbd0aee061ec1ff903ffbe9e69b/674d8d12/WMnLgJzE2LkN4P8Qaj4KPJ81bE_tDSYKOuT2nSQH4tl3xXWfFLkJzFoZbsAFKr7u1z3V2qKlj_NcWKB5u_Q4Qg%3D%3D?uid=0&filename=9mb.video-9fM-gG3Uw5S1%20%281%29.mp4&disposition=attachment&hash=&limit=0&content_type=video%2Fmp4&owner_uid=0&fsize=8948090&hid=e21a1ffdb3e77a97afb8a48adc05a94a&media_type=video&tknv=v2&etag=aa1af49f7bb5b3aae02c0db61bbdb879&ts=631a21d42ad00&s=2038a2c0f9b5d46ea2b5ff41daa1baaef5ca0b7d03ebd67c2c52af4607a4c82c&pb=U2FsdGVkX19LRJKYyIgY3-aMT1LxbjMH8RPSbG0NTU9lxHWK1IXtKUMrmP__-_Z48lxMJXZjh7kbxdPKWuLgU9zIkgXlDZdLhEGVJxVXW_g');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Autoplay prevented:', err);
      });
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
        onError={(e) => {
          console.error('Video failed to load');
          e.currentTarget.style.display = 'none';
        }}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/20 z-10" />

      <div className="absolute inset-0 border-[3px] border-white z-30 pointer-events-none m-4 md:m-8" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1 className="font-montserrat font-light text-white text-4xl md:text-5xl lg:text-6xl mb-4 animate-fade-in tracking-[0.2em] uppercase">
          LXV
        </h1>
        <p className="font-open-sans font-light text-white/80 text-sm md:text-base lg:text-lg mb-16 max-w-md animate-fade-in tracking-wide" style={{ animationDelay: '0.2s' }}>
          Эксклюзивная коллекция премиум-класса
        </p>
        <button
          className="font-open-sans font-normal text-white text-sm md:text-base tracking-[0.3em] uppercase px-12 py-4 border-2 border-white/60 hover:bg-white/10 hover:border-white transition-all duration-300 animate-scale-in backdrop-blur-sm"
          style={{ animationDelay: '0.4s' }}
        >
          Забронировать
        </button>
      </div>
    </div>
  );
};

export default Index;