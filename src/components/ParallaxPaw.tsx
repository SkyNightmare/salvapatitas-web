import React, { useEffect, useState } from 'react';
import { PawPrint } from 'lucide-react';

export default function ParallaxPaw() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
      <PawPrint 
        className="text-[#A7D9D7] 600/20 absolute left-10"
        style={{
          transform: `translateY(${scrollY * 0.5}px) rotate(${scrollY * 0.1}deg)`,
          width: '100px',
          height: '100px',
          transition: 'transform 0.1s ease-out'
        }}
      />
      <PawPrint 
        className="text-[#A7D9D7] 600/20 absolute right-10"
        style={{
          transform: `translateY(${scrollY * 0.3}px) rotate(-${scrollY * 0.1}deg)`,
          width: '80px',
          height: '80px',
          transition: 'transform 0.1s ease-out'
        }}
      />
    </div>
  );
}