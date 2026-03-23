import React, { useEffect } from 'react';
import BackToRegion from './BackToRegion';
import { Heart, PawPrint } from 'lucide-react';
import scarHero from '../../../images/scar_hero.webp';
import scarAbout from '../../../images/scar_about.webp';

import secondChanceImage1 from '../../../images/second_chance1.avif';
import secondChanceImage2 from '../../../images/second_chance2.avif';
import secondChanceImage3 from '../../../images/second_chance3.avif'; 

export default function SecondChanceRescue() {
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
      {/* Main Content */}
      <div>
        {/* Hero Section with Parallax */}
        <section id="hero" className="parallax-section">
          <div
            className="parallax-bg"
            style={{
              backgroundImage: `url(${scarHero})`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
          <div className="relative flex items-center justify-center h-full">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Second Chance Animal Rescue
              </h1>
              <p className="text-xl md:text-2xl">
                Giving Hope to Puerto Rico's Furry Friends
              </p>
            </div>
          </div>
        </section>

        {/* About Section with Parallax */}
        <section id="about" className="parallax-section">
          <div
            className="parallax-bg"
            style={{
              backgroundImage: `url(${scarAbout})`,
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
                  SCAR has been caring for many of these abandoned animals while
                  also trying to rebuild its shelter, which was destroyed by the
                  hurricane. Simply taking in these animals to the safety of
                  SCARâ€™s shelter has not been enough. SCAR is working to make a
                  real difference.
                </p>
                <p className="text-lg">
                  SCARâ€™s goal is to care for and transport animals stateside to
                  secure permanent homes. But to do so, we need your support to
                  continue our rescue efforts!
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
                          We constantly battle this never-ending abuse and
                          abandonment of dogs on the streets.
                        </p>
                      </div>
                      <div className="pl-12">
                        <h3 className="text-2xl font-bold mb-2">
                          Rehabilitate
                        </h3>
                        <p>
                          SCARâ€™s goal is to care for and transport animals
                          stateside to secure permanent homes
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
                          With the continued help from amazing volunteers,
                          partner rescue groups and continued support from the
                          donors, they will never give up our endless battle.
                        </p>
                      </div>
                      <div className="pl-12">
                        <h3 className="text-2xl font-bold mb-2">Educate</h3>
                        <p>
                          Promote responsible pet ownership and animal welfare
                          in our community.
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
              backgroundImage:
                'url(https://images.unsplash.com/photo-1615266508040-7c47f7339963)',
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
                    src={secondChanceImage1}
                    alt="Dog 1"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-bold">Josephina</p>
                  </div>
                </div>
                <div className="relative group">
                  <img
                    src={secondChanceImage2}
                    alt="Dog 2"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-bold">Coco</p>
                  </div>
                </div>
                <div className="relative group">
                  <img
                    src={secondChanceImage3}
                    alt="Dog 3"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-bold">Puppy</p>
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

