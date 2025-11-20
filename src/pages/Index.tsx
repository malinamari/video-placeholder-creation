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

      <div className="absolute inset-0 border border-white/30 z-30 pointer-events-none m-4 md:m-8" />

      <div className="relative z-20 flex flex-col items-center justify-between h-full px-6 py-8 md:py-12 text-center">
        <h1 className="font-montserrat font-extralight text-white/40 text-4xl md:text-5xl lg:text-6xl animate-fade-in tracking-[0.3em] uppercase">
          LXV
        </h1>
        <button
          className="relative font-open-sans font-light text-white text-sm md:text-base tracking-[0.4em] uppercase px-8 pb-3 transition-all duration-500 group"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="relative z-10">ВОЙТИ</span>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/80 group-hover:bg-white group-hover:shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300" />
        </button>
      </div>
    </div>
  );
};

export default Index;