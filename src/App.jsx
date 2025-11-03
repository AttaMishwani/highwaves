import "./App.css";

import Footer from "./components/Footer";
import FounderSection from "./components/FounderSection";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import VisionMission from "./components/VisionMission";
import WhyChooseUs from "./components/WhyChooseUs";
import TechStack from "./components/TechStack";

function App() {
  return (
    <main className="bg-primary-bg w-full h-full">
      <Navbar />
      <Home />
      <FounderSection />
      <VisionMission />
      <Portfolio />
      <TechStack />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default App;
