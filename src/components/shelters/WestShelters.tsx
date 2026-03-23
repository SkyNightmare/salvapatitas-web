import React from 'react';
import { MapPin, Mail, Globe } from 'lucide-react';

import villaMichelleImage from '../../images/villa_michelle.jpg';
import DefensaAnimal from '../../images/Defensa_animal.jpg';
import barksOfHopeImage from '../../images/barks_of_hope.jpg';

const westShelters  = [
  {
    id: 'villa-michelle',
    name: 'Albergue Villa Michelle',
    address: 'Calle las Marias 110, Barrio la Quinta Carretera 106 km 1.0 interior Mayagüez',
    email: 'villamichelle@live.com',
    image: villaMichelleImage,
    website: 'https://www.villamichelle.net/',
    description:
      'Villa Michelle is a private, non-profit organization that dedicates its operations to the temporary care of animals, with the goal of finding them a permanent home.',
  },
  {
    id: 'defensa-animal-pr',
    name: 'Defensa Animal Puerto Rico',
    address: 'HC1 Buzon 4749 - Rincon, PR 00677',
    email: 'DefensaRincon@gmail.com',
    image: DefensaAnimal,
    website: 'https://defensaanimaldepuertorico.org/',
    description:
      ' Founded in 2013 their work was concentrated in Rincon, as we have grown we have re-branded         to match our work being Island Wide. We are Defensa Animal de Rincon AKA Defensa Animal de         Puerto Rico',
  },
  {
    id: 'barks-of-hope',
    name: 'Barks of Hope',
    address: 'P.O. Box 1884 Rincon, Puerto Rico 00677',
    email: 'boh@barksofhope.org',
    image: barksOfHopeImage,
    website: 'https://www.barksofhope.org/',
    description:
      'Barks of Hope is a 501c3 located in Rincón, Puerto Rico dedicated to rescuing, rehabilitating, and finding forever homes ​for abandoned doggies.',
  },
];


export default function WestShelters() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            West Region Shelters
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Discover our partner shelters in western Puerto Rico
          </p>
        </div>

        <div className="space-y-12">
          {westShelters.map((shelter) => (
            <div
              key={shelter.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0 bg-gray-100 flex items-center justify-center">
                  <img
                    className="h-48 w-full object-contain object-center p-3 md:h-full md:w-48 md:p-2"
                    src={shelter.image}
                    alt={shelter.name}
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-[#A7D9D7] font-semibold">
                    {shelter.name}
                  </div>
                  <p className="mt-2 text-gray-600">{shelter.description}</p>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                      {shelter.address}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-5 w-5 mr-2 text-gray-400" />
                      {shelter.email}
                    </div>
                  </div>

                  <div className="mt-6 flex space-x-4">
                    <a
                      href={`/shelter/${shelter.id}`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-black bg-[#A7D9D7] hover:bg-[#628a88]"
                    >
                      View Details
                    </a>
                    <a
                      href={shelter.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray bg-[#A7D9D7] 600 hover:bg-[#628a88] 700"
                    >
                      <Globe className="h-4 w-4 mr-2" />
                      Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}