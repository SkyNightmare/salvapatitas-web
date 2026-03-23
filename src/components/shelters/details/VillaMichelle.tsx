import React, { useEffect } from 'react';
import BackToRegion from './BackToRegion';
import { Heart, PawPrint } from 'lucide-react';
import '../details/SecondChanceRescue.css';

import villaM_image1 from '../../../images/villaM_image1.jpg';
import villaM_image2 from '../../../images/villaM_image2.jpg';
import villaM_image3 from '../../../images/villaM_image3.jpg';

export default function VillaMichelle() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'mission', 'gallery'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <div>
      <BackToRegion />

        {/* Hero Section */}
        <section id="hero" className="parallax-section">
          <div
            className="parallax-bg"
            style={{
              backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/6266be9f79626642fe767056/2066a98e-604a-41a0-9f98-39c8b025fd05/jperro+y+gato.jpeg?format=1500w)`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
          <div className="relative flex items-center justify-center h-full">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Albergue Villa Michelle
              </h1>
              <p className="text-xl md:text-2xl">Do you want to add a new member to your family? Adoption is the best way to do it!</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="parallax-section">
          <div
            className="parallax-bg"
            style={{
              backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/6266be9f79626642fe767056/1662594572700-N0XZK3U39KNQ11RVQ1WD/unsplash-image-ppKcYi1CXcI.jpg?format=100w%20100w,%20https://images.squarespace-cdn.com/content/v1/6266be9f79626642fe767056/1662594572700-N0XZK3U39KNQ11RVQ1WD/unsplash-image-ppKcYi1CXcI.jpg?format=300w%20300w,%20https://images.squarespace-cdn.com/content/v1/6266be9f79626642fe767056/1662594572700-N0XZK3U39KNQ11RVQ1WD/unsplash-image-ppKcYi1CXcI.jpg?format=500w%20500w,%20https://images.squarespace-cdn.com/content/v1/6266be9f79626642fe767056/1662594572700-N0XZK3U39KNQ11RVQ1WD/unsplash-image-ppKcYi1CXcI.jpg?format=750w%20750w,%20https://images.squarespace-cdn.com/content/v1/6266be9f79626642fe767056/1662594572700-N0XZK3U39KNQ11RVQ1WD/unsplash-image-ppKcYi1CXcI.jpg?format=1000w%201000w,%20https://images.squarespace-cdn.com/content/v1/6266be9f79626642fe767056/1662594572700-N0XZK3U39KNQ11RVQ1WD/unsplash-image-ppKcYi1CXcI.jpg?format=1500w%201500w,%20https://images.squarespace-cdn.com/content/v1/6266be9f79626642fe767056/1662594572700-N0XZK3U39KNQ11RVQ1WD/unsplash-image-ppKcYi1CXcI.jpg?format=2500w%202500w)`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60" />
          </div>
          <div className="relative flex items-center justify-center h-full">
            <div className="max-w-4xl mx-auto px-4 text-white">
              <h2 className="text-3xl font-bold mb-8 text-center">
                About the shelter
              </h2>
              <div className="bg-black bg-opacity-40 p-8 rounded-lg backdrop-blur-sm">
                <p className="text-lg mb-4">
                  Founded in 1988, is a private, non-profit organization that dedicates its operations to the temporary care of animals, with the goal of finding them a permanent home. Additionally, we have a clinic and surgery room where we provide veterinary services and sterilizations at low cost to the community.
                </p>
                <p className="text-lg">
                  They use intermediaries such as PetSmart, Social Networks and Events to     establish                    communication with people interested in adopting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section with Parallax */}
        <section id="mission" className="parallax-section">
          <div
            className="parallax-bg"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1583511655857-d19b40a7a54e)',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
          <div className="relative flex items-center justify-center h-full">
            <div className="max-w-4xl mx-auto px-4 text-white">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Shelter Mission
              </h2>
              <div className="relative">
                <div className="absolute left-1/2 h-full w-px bg-[#A7D9D7]" />
                <div className="space-y-24">
                  <div className="relative">
                    <div className="flex items-center mb-4">
                      <div className="absolute left-1/2 -translate-x-1/2 bg-[#A7D9D7] rounded-full p-3">
                        <Heart className="h-6 w-6 text-black" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="text-right pr-12">
                        <h3 className="text-2xl font-bold mb-2">Rescue</h3>
                        <p>
                          They receive animals in need from our shelter, we make sure to administer                            their vaccines, comply with their sterilization and microchip           identification, so that they can later be adopted.
                        </p>
                      </div>
                      <div className="pl-12">
                        <h3 className="text-2xl font-bold mb-2">
                          Rehabilitate
                        </h3>
                        <p>
                          They have veterinary services explaining each step and details.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="flex items-center mb-4">
                      <div className="absolute left-1/2 -translate-x-1/2 bg-[#A7D9D7] rounded-full p-3">
                        <PawPrint className="h-6 w-6 text-black" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="text-right pr-12">
                        <h3 className="text-2xl font-bold mb-2">Support</h3>
                        <p>
                          Their team consists of Veterinary Assistant, Animal Caregiver, Veterinary Medicine Assistant and more. 
                        </p>
                      </div>
                      <div className="pl-12">
                        <h3 className="text-2xl font-bold mb-2">Educate</h3>
                        <p>Helping the community in many ways since 1988.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="parallax-section">
          <div
            className="parallax-bg"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1593134257782-e89567b7718a)`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60" />
          </div>
          <div className="relative flex flex-col items-center justify-center h-full">
            <div className="max-w-4xl mx-auto px-4 py-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">
                Happy Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div className="relative group">
                  <img
                    src={villaM_image1}
                    alt="Dog1"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-bold">Contact them to adopt</p>
                  </div>
                </div>
                <div className="relative group">
                  <img
                    src={villaM_image2}
                    alt="Team"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-bold">Give them another chance</p>
                  </div>
                </div>
                <div className="relative group">
                  <img
                    src={villaM_image3}
                    alt="Dog2"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-bold">Forever grateful</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

