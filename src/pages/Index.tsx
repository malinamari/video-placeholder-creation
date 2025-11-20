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

      <div className="absolute left-4 right-4 top-[50px] bottom-[50px] z-30 pointer-events-none">
        <div className="absolute left-0 right-0 top-0 h-[1px] bg-white/30" />
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/30" />
        <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/30" />
        <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-white/30" />
      </div>

      <div className="relative z-40 flex flex-col items-center justify-between h-full px-6 py-12">
        <div className="relative">
          <h1 className="font-montserrat font-extralight text-white/40 text-6xl md:text-7xl lg:text-8xl animate-fade-in tracking-[0.3em] uppercase bg-gradient-to-br from-gray-900 via-gray-800 to-black px-8" style={{ lineHeight: '1.2' }}>
            LXV
          </h1>
        </div>
        <div className="relative">
          <button
            className="font-open-sans font-light text-white text-sm md:text-base tracking-[0.4em] uppercase px-8 py-2 transition-all duration-500 group bg-gradient-to-br from-gray-900 via-gray-800 to-black"
            style={{ animationDelay: '0.4s' }}
          >
            ВОЙТИ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;