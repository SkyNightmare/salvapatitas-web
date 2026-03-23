import React, { useEffect } from 'react';
import { Heart, PawPrint } from 'lucide-react';
import '../details/SecondChanceRescue.css';

import defensa_image1 from '../../../images/defensa_animal_image1.png';
import defensa_image2 from '../../../images/defensa_animal_image2.png';
import defensa_image3 from '../../../images/defensa_animal_image3.jpg';  

export default function DefensaAnimalpr() {
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

        {/* Hero Section */}
        <section id="hero" className="parallax-section">
          <div
            className="parallax-bg"
            style={{
              backgroundImage: `url(https://defensaanimaldepuertorico.org/wp-content/uploads/2020/09/33168571_1407826072695165_4613845296055582720_o-2000x1200.jpg)`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
          <div className="relative flex items-center justify-center h-full">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Defensa Animal de Puerto Rico
              </h1>
              <p className="text-xl md:text-2xl">
              Everything They Do is Animal Rescue Work

              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="parallax-section">
          <div
            className="parallax-bg"
            style={{
              backgroundImage: `url(https://defensaanimaldepuertorico.org/wp-content/uploads/2020/09/12633645_844534972357614_5175175936370625388_o.jpg)`,
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
                  Defensa has been helping rescuers and animals in Puerto Rico since 2013. They are a Federal 501c3 and a Puerto Rico Hacienda Accredited in Good Standing 1101.01(a)(2) Animal Rescue Organization.
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
                          They provide an extensive list of vet, and details to help stray animals.
                        </p>
                      </div>
                      <div className="pl-12">
                        <h3 className="text-2xl font-bold mb-2">
                          Rehabilitate
                        </h3>
                        <p>
                          They provide a nice guide to help animals in Puerto Rico.
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
                          Visit their page to join their facebook group to active help them.
                        </p>
                      </div>
                      <div className="pl-12">
                        <h3 className="text-2xl font-bold mb-2">Educate</h3>
                        <p>Founded in 2003 started in Rincon and now they help the entire island.</p>
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
                    src={defensa_image1}
                    alt="Dog1"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-bold">
                      Visit their web
                    </p>
                  </div>
                </div>
                <div className="relative group">
                  <img
                    src={defensa_image2}
                    alt="Dog2"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-bold">
                      Live better with them
                    </p>
                  </div>
                </div>
                <div className="relative group">
                  <img
                    src={defensa_image3}
                    alt="Dog3"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-bold">Make them happy</p>
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

