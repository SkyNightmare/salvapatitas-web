import React from 'react';
import { MapPin, Mail, Globe } from 'lucide-react';
import rabitoImage from '../../images/rabitokontento.png';

const northShelters = [
  {
    id: 'rabito-kontento',
    name: 'Rabito Kontento',
    address:
      'COMUNIDAD ARLENE ACEVEDO, CALLE LUIS MUÑOZ MARIN, #578 BO, Hatillo, 00659',
    email: 'info@rabitokontento.org',
    image: rabitoImage,
    website: 'https://rabitokontento.org/',
    description:
      'Founded in 2012 is a non-profit organization, registered with the State Department of Puerto Rico',
  },
];

export default function NorthShelters() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            North Region Shelters
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Discover our partner shelters in northern Puerto Rico
          </p>
        </div>

        <div className="space-y-12">
          {northShelters.map((shelter) => (
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
