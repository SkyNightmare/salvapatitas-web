import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import SheltersModal from './modal/SheltersModal';

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  const scrollToShelters = () => {
    const element = document.getElementById('shelters');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[600px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
          alt="Dogs"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Finding Forever Homes in Puerto Rico
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-200">
            Connecting loving families with shelters across the island. Every
            dog deserves a chance at happiness.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button
              onClick={scrollToShelters}
              className="bg-[#A7D9D7] hover:bg-[#628a88] text-black px-6 py-3 rounded-md text-lg font-semibold"
            >
              Find a Shelter
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md text-lg font-semibold inline-flex items-center"
            >
              <Heart className="h-5 w-5 mr-2" />
              Donate
            </button>
          </div>
        </div>
      </div>
      <SheltersModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}