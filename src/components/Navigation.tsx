import React from 'react';
import { PawPrint, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  onSheltersClick: () => void;
  onContactClick: () => void;
}

export default function Navigation({ onSheltersClick, onContactClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSheltersClick = () => {
    onSheltersClick();
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    onContactClick();
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#A7D9D7] 600 text-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <PawPrint className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">Salva Patitas PR</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/" className="hover:bg-[#628a88] 700 px-3 py-2 rounded-md">Home</Link>
              <button 
                onClick={handleSheltersClick}
                className="hover:bg-[#628a88] 700 px-3 py-2 rounded-md"
              >
                Shelters
              </button>
              <button 
                onClick={handleContactClick}
                className="hover:bg-[#628a88] 700 px-3 py-2 rounded-md"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:bg-[#628a88] 700 px-3 py-2 rounded-md">Home</Link>
            <button 
              onClick={handleSheltersClick}
              className="block w-full text-left hover:bg-[#628a88] 700 px-3 py-2 rounded-md"
            >
              Shelters
            </button>
            <button 
              onClick={handleContactClick}
              className="block w-full text-left hover:bg-[#628a88] 700 px-3 py-2 rounded-md"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}