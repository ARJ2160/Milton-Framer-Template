import { useEffect, useState } from 'react';
import './App.css';
import {
  AppImage,
  CTA,
  FAQ,
  Features,
  Footer,
  Home,
  MoreFeatures,
  Navbar,
  Pricing
} from './components/index';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', hideMenu);
    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} isOpen={isOpen} />
      <div className='sm:px-[40px] px-[20px] md:pt-10 pb-0'>
        <Home />
        <AppImage />
        <Features />
        <MoreFeatures />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </>
  );
}

export default App;
