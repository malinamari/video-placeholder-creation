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

      <svg className="absolute inset-0 w-full h-full z-30 pointer-events-none">
        <defs>
          <mask id="frame-mask">
            <rect width="100%" height="100%" fill="white" />
            <text x="50%" y="32" dominantBaseline="middle" textAnchor="middle" fontSize="60" fontWeight="200" letterSpacing="12" fill="black" fontFamily="Montserrat">LXV</text>
            <text x="50%" y="calc(100% - 32px)" dominantBaseline="middle" textAnchor="middle" fontSize="16" fontWeight="300" letterSpacing="6" fill="black" fontFamily="Open Sans">ВОЙТИ</text>
          </mask>
        </defs>
        <rect 
          x="16" 
          y="16" 
          width="calc(100% - 32px)" 
          height="calc(100% - 32px)" 
          fill="none" 
          stroke="rgba(255,255,255,0.3)" 
          strokeWidth="1"
          mask="url(#frame-mask)"
        />
      </svg>

      <div className="relative z-40 flex flex-col items-center justify-between h-full" style={{ padding: '16px' }}>
        <h1 className="font-montserrat font-extralight text-white/40 text-4xl md:text-5xl lg:text-6xl animate-fade-in tracking-[0.3em] uppercase">
          LXV
        </h1>
        <button
          className="relative font-open-sans font-light text-white text-sm md:text-base tracking-[0.4em] uppercase px-8 transition-all duration-500 group"
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