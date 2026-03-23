import React, { useEffect, useState } from 'react';
import { Dog, Heart, Users, Home } from 'lucide-react';
import './ShelterStats.css';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  duration: number;
}

function StatItem({ icon, value, label, duration }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(value * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return (
    <div className="stat-item">
      <div className="stat-icon">{icon}</div>
      <div className="stat-value">{count}+</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function ShelterStats() {
  return (
    <div className="shelter-stats">
      <StatItem
        icon={<Home className="h-8 w-8" />}
        value={10}
        label="Active Shelters"
        duration={2000}
      />
      <StatItem
        icon={<Dog className="h-8 w-8" />}
        value={100}
        label="Dogs Sheltered"
        duration={2000}
      />
      <StatItem
        icon={<Heart className="h-8 w-8" />}
        value={150}
        label="Successful Adoptions"
        duration={2000}
      />
      <StatItem
        icon={<Users className="h-8 w-8" />}
        value={50}
        label="Dedicated Volunteers"
        duration={2000}
      />
    </div>
  );
}