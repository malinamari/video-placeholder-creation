import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [videoUrl] = useState('/FANCY_LXV_6_горизонт (1) (1).mp4');
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

      <div className="relative z-20 flex flex-col items-center justify-end h-full px-6 pb-32 text-center">
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
          Посетить клуб
        </button>
      </div>
    </div>
  );
};

export default Index;