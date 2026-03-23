import React from 'react';
import { Heart, Shield, Users } from 'lucide-react';

export default function AboutSection() {
  return (
    <div className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">About the web</h2>
          <p className="mt-4 text-xl text-gray-600">My goal is to Find Forever Homes, using this web I want to make easier rescue stray dogs, provide them with proper care, and connect them with loving families.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-[#A7D9D7] 100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-[#FF0000] 600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Web Mission</h3>
            <p className="text-gray-600">
              Dedicated to rescuing, rehabilitating, and rehoming dogs across Puerto Rico, 
              creating lasting bonds between pets and families.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-[#A7D9D7] 100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Commitment</h3>
            <p className="text-gray-600">
              To stay updated with the info and the shelters here. If you want to add a shelter go contact and enter the information there.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-[#A7D9D7] 100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-[#FFFFFF] 600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">The Community</h3>
            <p className="text-gray-600">
              Massive respect for all the volunteers out there helping different shelters and being the difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}