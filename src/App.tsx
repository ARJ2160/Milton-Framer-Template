import "./App.css";
import {
  AppImage,
  CTA,
  Features,
  Footer,
  Home,
  MoreFeatures,
} from "./components/index";

function App() {
  return (
    <div className="px-[40px] pb-0">
      <Home />
      <AppImage />
      <Features />
      <MoreFeatures />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
