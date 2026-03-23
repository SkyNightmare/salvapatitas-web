import React, { useEffect } from 'react';
import BackToRegion from './BackToRegion';
import { Heart, PawPrint } from 'lucide-react';
import '../details/SecondChanceRescue.css';

import ElFaroImage1 from '../../../images/el_faro_image1.webp';
import ElFaroImage2 from '../../../images/el_faro_image2.webp';
import ElFaroImage3 from '../../../images/el_faro_image3.webp';

export default function ElFaroDeLosAnimales() {
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
              backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/5cacdac4af4683355f2bbe9e/1563248112101-HFY3UMN4RYLMN4GX62FN/13511994_10209980049157068_779016711325878419_n.jpg?format=500w)`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
          <div className="relative flex items-center justify-center h-full">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                El Faro de los Animales
              </h1>
              <p className="text-xl md:text-2xl">
                With their resources, their run an educational program, teaching
                young and old about compassionate and responsible care of
                animals.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="parallax-section">
          <div
            className="parallax-bg"
            style={{
              backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/5cacdac4af4683355f2bbe9e/1562095759034-FW1Q2YGMC1BLANIUH96J/Screen%2BShot%2B2019-06-25%2Bat%2B2.15.38%2BPM.png?format=300w)`,
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
                  Their long term goal is to establish a low-cost spay-neuter
                  clinic in the southeastern coast of the island to assist
                  low-income families and communities, as well as to achieve a
                  substantial and permanent reduction in homeless and abandoned
                  animals.
                </p>
                <p className="text-lg">
                  Through conferences and presentations, their teach the public
                  the importance of providing compassionate and responsible care
                  to our animals - whether they are our pets or abandoned
                  animals in the street.
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
                          They rescue, rehabilitate and re-home dogs and cats
                          off of the streets and beaches of Puerto Rico
                        </p>
                      </div>
                      <div className="pl-12">
                        <h3 className="text-2xl font-bold mb-2">
                          Rehabilitate
                        </h3>
                        <p>
                          Through their veterinarians, their provide advice and
                          assistance regarding proper medical care.
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
                          Any donation for the organization is always good,
                          check their website.
                        </p>
                      </div>
                      <div className="pl-12">
                        <h3 className="text-2xl font-bold mb-2">Educate</h3>
                        <p>
                          A complete team of professionals that has the
                          knowledge to teach the community about abandoned dogs.
                        </p>
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
              backgroundImage: `url(https://images.unsplash.com/photo-1534361960057-19889db9621e)`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60" />
          </div>
          <div className="relative flex flex-col items-center justify-center h-full">
            <div className="max-w-4xl mx-auto px-4 py-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">
                Happy Faces
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div className="relative group">
                  <img
                    src={ElFaroImage1}
                    alt="Happiness"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-bold">
                      The smile of happiness
                    </p>
                  </div>
                </div>
                <div className="relative group">
                  <img
                    src={ElFaroImage2}
                    alt="Dog2"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-bold">Love</p>
                  </div>
                </div>
                <div className="relative group">
                  <img
                    src={ElFaroImage3}
                    alt="Impact Story 3"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-bold">Welcome home!</p>
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

