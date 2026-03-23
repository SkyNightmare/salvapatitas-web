import React, { useState } from 'react';
import { Mail, Phone, Heart, Quote, HeartHandshake } from 'lucide-react';
import SheltersModal from './modal/SheltersModal';

export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Remember</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Quote className="h-5 w-5 mr-2 text-[#A7D9D7]" />
                <span>
"Every stray deserves a chance — save a life, give love, and make a difference."</span>
              </div>
             
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support Our Mission</h3>
            <button 
              onClick={() => setShowModal(true)}
              className="inline-flex items-center bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md"
            >
              <HeartHandshake className="h-5 w-5 mr-2" />
              Donate Now
            </button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} Salva Patitas PR. All rights reserved. Raisen ❤️</p>
        </div>
      </div>
      <SheltersModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </footer>
  );
}