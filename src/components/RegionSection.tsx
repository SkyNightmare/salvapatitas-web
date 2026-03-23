import React from 'react';
import { Compass, MapPin, Dog } from 'lucide-react';
import ShelterStats from './stats/ShelterStats';

const regions = [
  {
    name: 'North',
    shelters: [
      'Rabito Kontento',
      'More Shelters soon',
      'Click to find more shelters!',
    ],
    image:
      'https://i0.wp.com/bcc-newspack.s3.amazonaws.com/uploads/2024/10/pexels-katlovessteve-551628-scaled.jpg?resize=1536%2C1025&ssl=1',
    link: '/north-shelters',
  },
  {
    name: 'South',
    shelters: [
      'Second Chance Animal Rescue of Puerto Rico',
      'Santuario de Animales San Francisco de Asís',
      'Click to find more shelters!',
    ],
    image: 'https://images.unsplash.com/photo-1615266508040-7c47f7339963',
    link: '/south-shelters',
  },
  {
    name: 'East',
    shelters: [
      'Save a Sato',
      'El Faro de los Animales',
      'Click to find more shelters!',
    ],
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzX1txXb0PXdkN4n-UAIMYITXLGzkj9bpNEg&s',
    link: '/east-shelters',
  },
  {
    name: 'West',
    shelters: [
      'Albergue Villa Michelle',
      'Defensa Animal Puerto Rico',
      'Click to find more shelters!',
    ],
    image: 'https://i.ibb.co/Lvg06mW/raisen.jpg',
    link: '/west-shelters',
  },
];

export default function RegionSection() {
  return (
    <div className="py-16 bg-gray-100" id="shelters">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Find Shelters by Region
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover dog shelters across Puerto Rico
          </p>
          <ShelterStats />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {regions.map((region) => (
            <div
              key={region.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={region.image}
                alt={`${region.name} region`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Compass className="h-6 w-6 text-[#A7D9D7]" />
                  <h3 className="ml-2 text-xl font-semibold text-gray-900">
                    {region.name}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {region.shelters.map((shelter, index) => (
                    <li key={shelter} className="flex items-center">
                      {index < 2 ? (
                        <MapPin className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Dog className="h-4 w-4 text-gray-400" />
                      )}
                      <a
                        href={region.link}
                        className="ml-2 text-gray-600 hover:text-[#A7D9D7]"
                      >
                        {shelter}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <a
                    href={region.link}
                    className="inline-block w-full text-center bg-[#A7D9D7] text-black px-4 py-2 rounded-md hover:bg-[#628a88]"
                  >
                    View All {region.name} Shelters
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
