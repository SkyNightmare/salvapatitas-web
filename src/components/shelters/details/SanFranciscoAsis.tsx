import React, { useEffect } from 'react';
import BackToRegion from './BackToRegion';
import { Heart, PawPrint } from 'lucide-react';
import '../details/SecondChanceRescue.css';

import sanFranciscoHappy1 from '../../../images/san_francisco_image1.jpg';
import sanFranciscoHappy2 from '../../../images/san_francisco_image2.jpg';
import sanFranciscoHappy3 from '../../../images/san_francisco_image3.jpg';

export default function SanFranciscoAsis() {
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
              backgroundImage: `url(https://sasfapr.org/wp-content/uploads/2019/03/cropped-SASFAPR-29-1.jpg)`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
          <div className="relative flex items-center justify-center h-full">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Santuario de Animales San Francisco de AsÃ­s
              </h1>
              <p className="text-xl md:text-2xl">
                Working for and with them since 2008.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="parallax-section">
          <div
            className="parallax-bg"
            style={{
              backgroundImage: `url(https://sasfapr.org/wp-content/uploads/2019/07/59888798_10156415383592898_4699949443196125184_o-1-1.jpg)`,
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
                  The Santuario is located in Cabo Rojo, and it is the first animal sanctuary in                     western Puerto Rico. They are one of four shelters on the island where                            euthanasia is not applied due to lack of space or time awaiting adoption.
                </p>
                <p className="text-lg">
                  The Santuario is organized as a nonprofit corporation and headed by a Board of                     Directors which is fully engaged in its day to day affairs. The Santuario is                       qualified as a tax-exempt organization pursuant to Section 501(c)(3) of the                        United States Internal Revenue Code and Section 1101.01(a)(2) of the Puerto Rico                   Internal Revenue Code.  
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
                          All of their dogs and cats are looking for a permanent home where they can                           give and get the love and care they deserve.
                        </p>
                      </div>
                      <div className="pl-12">
                        <h3 className="text-2xl font-bold mb-2">
                          Rehabilitate
                        </h3>
                        <p>
                          Their residents are spayed/neutered, fully vaccinated, and on heartworm,                           flea, and tick preventive medications.
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
                          Please consider being a Pet Sponsor! Also known as Remote Adoption, you                            may help cover the animalâ€™s veterinary and food expenses by making a                               fixed donation each month.
                        </p>
                      </div>
                      <div className="pl-12">
                        <h3 className="text-2xl font-bold mb-2">Educate</h3>
                        <p>
                          They provide two programs to educate SASFA Educa and Alas de Amor. Visit                           their website for more details. 
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
                    src={sanFranciscoHappy1}
                    alt="Team"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-bold">Team</p>
                  </div>
                </div>
                <div className="relative group">
                  <img
                    src={sanFranciscoHappy2}
                    alt="SASFAPR"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-bold">SASFAPR</p>
                  </div>
                </div>
                <div className="relative group">
                  <img
                    src={sanFranciscoHappy3}
                    alt="Impact Story 3"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-bold">Dog</p>
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
