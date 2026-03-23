import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import RegionSection from './components/RegionSection';
import NorthShelters from './components/shelters/NorthShelters';
import SouthShelters from './components/shelters/SouthShelters';
import EastShelters from './components/shelters/EastShelters';
import WestShelters from './components/shelters/WestShelters';
import SecondChanceRescue from './components/shelters/details/SecondChanceRescue';
import SouthCoastSatoRescue from './components/shelters/details/SouthCoastSatoRescue';
import SanFranciscoAsis from './components/shelters/details/SanFranciscoAsis';
import VillaMichelle from './components/shelters/details/VillaMichelle';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PawLoading from './components/loading/PawLoading';
import ContactModal from './components/modal/ContactModal';
import StickyPaw from './components/modal/StickyPaw';
import ParallaxPaw from './components/ParallaxPaw';
import { useLoading } from './hooks/useLoading';
import DefensaAnimalpr from './components/shelters/details/DefensaAnimalpr';
import BarksOfHope from './components/shelters/details/BarksOfHope';
import RabitoKontento from './components/shelters/details/RabitoKontento';
import SaveASato from './components/shelters/details/SaveASato';
import ElFaroDeLosAnimales from './components/shelters/details/ElFaroDeLosAnimales';
import HumaneSociety from './components/shelters/details/HumaneSociety';

function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <RegionSection />
      <ContactSection />
    </>
  );
}

function ScrollHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <Navigation
        onSheltersClick={() => scrollToSection('shelters')}
        onContactClick={() => scrollToSection('contact')}
      />
      <ParallaxPaw />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/north-shelters" element={<NorthShelters />} />
          <Route path="/south-shelters" element={<SouthShelters />} />
          <Route path="/east-shelters" element={<EastShelters />} />
          <Route path="/west-shelters" element={<WestShelters />} />
          <Route
            path="/shelter/second-chance-animal"
            element={<SecondChanceRescue />}
          />
          <Route
            path="/shelter/southcoast-sato-rescue"
            element={<SouthCoastSatoRescue />}
          />
          <Route
            path="/shelter/san-francisco-asis"
            element={<SanFranciscoAsis />}
          />
          <Route path="/shelter/villa-michelle" element={<VillaMichelle />} />
          <Route
            path="/shelter/defensa-animal-pr"
            element={<DefensaAnimalpr />}
          />
          <Route path="/shelter/barks-of-hope" element={<BarksOfHope />} />
          <Route path="/shelter/rabito-kontento" element={<RabitoKontento />} />

          <Route path="/shelter/save-a-sato" element={<SaveASato />} />
          <Route path="/shelter/el-faro-pr" element={<ElFaroDeLosAnimales />} />
          <Route path="/shelter/humane-society" element={<HumaneSociety />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const isLoading = useLoading(2000);
  const [showModal, setShowModal] = useState(false);
  const [showStickyPaw, setShowStickyPaw] = useState(true);

  const handleModalClose = () => {
    setShowModal(false);
    setTimeout(() => {
      setShowStickyPaw(true);
    }, 300);
  };

  if (isLoading) {
    return <PawLoading />;
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ScrollHandler />
        <ContactModal isOpen={showModal} onClose={handleModalClose} />
        <StickyPaw onClick={() => setShowModal(true)} show={showStickyPaw} />
      </div>
    </Router>
  );
}
