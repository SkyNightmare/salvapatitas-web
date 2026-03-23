import React from 'react';
import { X } from 'lucide-react';

interface SheltersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const sheltersList = [
  { name: 'Barks of Hope', url: 'https://www.barksofhope.org/donate.html' },
  { name: 'Defensa Animal de PR', url: 'https://defensaanimaldepuertorico.org/donate/' },
  { name: 'El Faro de Los Animales', url: 'https://www.elfaropr.org/donate' },
  { name: 'Humane Society of PR', url: 'https://www.hspr.org/donacion-en-linea' },
  { name: 'Rabito Kontento', url: 'https://rabitokontento.org/donar/' },
  { name: 'San Francisco de Asis', url: 'https://sasfapr.org/es/donativos/' },
  { name: 'Save a Sato', url: 'https://www.saveasato.org/donate-for-the-satos' },
  { name: 'South Coast Sato Rescue', url: 'https://www.southcoastsatorescue.org/' },
  { name: 'Albergue Villa Michelle', url: 'https://www.villamichelle.net/donate' }
  
];

// Split shelters into two columns
const leftColumnShelters = sheltersList.filter((_, index) => index % 2 === 0);
const rightColumnShelters = sheltersList.filter((_, index) => index % 2 === 1);

export default function SheltersModal({ isOpen, onClose }: SheltersModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4 relative text-black">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">Our Shelters</h2>

        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Left Column - White Background */}
          <div className="space-y-4">
            {leftColumnShelters.map((shelter) => (
              <a
                key={shelter.name}
                href={shelter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white hover:bg-gray-50 rounded-lg transition-colors border border-gray-200"
              >
                {shelter.name}
              </a>
            ))}
          </div>

          {/* Right Column - Light Blue Background */}
          <div className="space-y-4">
            {rightColumnShelters.map((shelter) => (
              <a
                key={shelter.name}
                href={shelter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-[#e0f4f3] hover:bg-[#A7D9D7] rounded-lg transition-colors"
              >
                {shelter.name}
              </a>
            ))}
          </div>
        </div>

        {/* Close Button */}
        <div className="text-center">
          <button
            onClick={onClose}
            className="bg-[#A7D9D7] hover:bg-[#628a88] text-black px-6 py-2 rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}