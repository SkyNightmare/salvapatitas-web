import React, { useEffect } from 'react';
import { Heart, PawPrint, Home, Users } from 'lucide-react';
import '../details/SecondChanceRescue.css';


export default function SaveASato() {
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
              backgroundImage: `url(https://www.saveasato.org/images/images/video11.png)`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
          <div className="relative flex items-center justify-center h-full">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Save a Sato
              </h1>
              <p className="text-xl md:text-2xl">
                Save A Sato is a non-profit organization dedicated to easing the
                suffering of Puerto Rico's homeless and abused animals.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="parallax-section">
          <div
            className="parallax-bg"
            style={{
              backgroundImage: `url(https://scontent.fsig2-1.fna.fbcdn.net/v/t39.30808-6/473155315_1013742387455406_823172915527219497_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=op3kO37JJdcQ7kNvgH3a0iy&_nc_zt=23&_nc_ht=scontent.fsig2-1.fna&_nc_gid=AjsoQfKnn8H4PgpmVVClCkC&oh=00_AYDrdBmMh3vp9_SeGSm0CQfx8tvycHpRSSJ3vWEdNzz1iw&oe=6788FFAC)`,
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
                  "Sato" is slang for street dog. They rescue Satos from the
                  streets and beaches, give them medical care, food and shelter,
                  and plenty of love. When they are healthy, they send them to
                  one of their partner shelters for adoption into loving homes.
                </p>
                <p className="text-lg">
                  They are located in the heart of Puerto Rico, San Juan, where
                  they try to help our neighbors, friends, and people from all
                  around the island take good care of their pets, providing them
                  food, vaccines and medical care if possible. THey also help
                  tourists and visitors that want to take a rescue back to their
                  home in the mainland, to make it possible!
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
                          They help people, friends even tourist to rescue dogs
                          and take them to their home.
                        </p>
                      </div>
                      <div className="pl-12">
                        <h3 className="text-2xl font-bold mb-2">
                          Rehabilitate
                        </h3>
                        <p>
                          Save A Sato has been around for 26 years now! And
                          Gloria Marti has been keeping this organization alive
                          and working 365 days a year to run the shelter.
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
                          Save A Sato is a non profit registered 501c3
                          organization. They shelters are working 24/7 and are
                          maintained by the help received by volunteers, social
                          organizations and donations.
                        </p>
                      </div>
                      <div className="pl-12">
                        <h3 className="text-2xl font-bold mb-2">Educate</h3>
                        <p>
                          They are many ways you can colaborate with them, go to
                          their website and do your best to save them!
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
                    src="/images/SaS_image1.jpg"
                    alt="Mika"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-bold">Mika</p>
                  </div>
                </div>
                <div className="relative group">
                  <img
                    src="/images/SaS_image2.jpg"
                    alt="Olivia"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-bold">Olivia</p>
                  </div>
                </div>
                <div className="relative group">
                  <img
                    src="/images/SaS_image3.jpg"
                    alt="Dowel"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-bold">Dowel</p>
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

