import React from 'react';
import { MapPin, Mail, Globe } from 'lucide-react';
import scarImage from '../../images/scar_pr.jpg';
import south_coast_image from '../../images/south_coast_sato_rescue.webp';
import SanFranciscoAsis from '../../images/san_francisco_de_asis.png';

const southShelters = [
  {
    id: 'second-chance-animal',
    name: 'Second Chance Animal Rescue of Puerto Rico',
    address: 'HC 1 BOX 3547 VILLALBA PR 00766-9784',
    email: 'satoheart@yahoo.com',
    image: scarImage,
    website: 'https://www.scarpr.org/',
    description:
      'Is a 501(c)3 non-profit organization established in February 2000 by Bonnie Lukas in Villalba, Puerto Rico',
  },
  {
    id: 'southcoast-sato-rescue',
    name: 'South Coast Sato Rescue',
    address: 'Box 22, Guayama, Puerto Rico 00785',
    email: 'contact@guayamarescue.org',
    website: 'https://www.southcoastsatorescue.org/',
    image: south_coast_image,
    description:
      'Rescuing since 2020, our Mission is to help the Sato dogs of Puerto Rico through education in the communities.',
  },
  {
    id: 'san-francisco-asis',
    name: 'Santuario de Animales San Francisco de Asís',
    address: 'PO Box 538 Boquerón PR 00622-0538',
    email: 'info@sasfapr.org',
    website: 'https://sasfapr.org/es',
    image: SanFranciscoAsis,
    description:
      'For more than 10 years they have been working to advance animal welfare in Puerto Rico, one animal at a time. By rescuing, rehabilitating and finding homes for animals in need.',
  },
];

export default function SouthShelters() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            South Region Shelters
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Discover our partner shelters in southern Puerto Rico
          </p>
        </div>

        <div className="space-y-12">
          {southShelters.map((shelter) => (
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
