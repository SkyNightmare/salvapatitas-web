import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const regionRouteMap: Record<string, string> = {
  '/shelter/second-chance-animal': '/south-shelters',
  '/shelter/southcoast-sato-rescue': '/south-shelters',
  '/shelter/san-francisco-asis': '/south-shelters',
  '/shelter/villa-michelle': '/west-shelters',
  '/shelter/defensa-animal-pr': '/west-shelters',
  '/shelter/barks-of-hope': '/west-shelters',
  '/shelter/rabito-kontento': '/north-shelters',
  '/shelter/save-a-sato': '/east-shelters',
  '/shelter/el-faro-pr': '/east-shelters',
  '/shelter/humane-society': '/east-shelters',
};

export default function BackToRegion() {
  const navigate = useNavigate();
  const location = useLocation();

  const regionPath = regionRouteMap[location.pathname] || '/';

  return (
    <div className="fixed top-4 left-4 z-50 sm:top-6 sm:left-6">
      <button
        type="button"
        onClick={() => navigate(regionPath)}
        className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-black bg-opacity-70 text-white text-sm md:text-base font-semibold shadow-2xl border border-white/30 hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-[#A7D9D7] transition"
      >
        <span role="img" aria-label="bone">
          🦴
        </span>
        Back to Region
      </button>
    </div>
  );
}

