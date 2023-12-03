import './App.css';
import {
  AppImage,
  CTA,
  Features,
  Footer,
  Home,
  MoreFeatures,
  Navbar,
  Pricing
} from './components/index';

function App() {
  return (
    <>
      <Navbar />
      <div className='px-[40px] pt-10 pb-0'>
        <Home />
        <AppImage />
        <Features />
        <MoreFeatures />
        <Pricing />
        <CTA />
        <Footer />
      </div>
    </>
  );
}

export default App;
