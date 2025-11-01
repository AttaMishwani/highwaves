import "./App.css";

import Footer from "./components/Footer";
import FounderSection from "./components/FounderSection";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import VisionMission from "./components/VisionMission";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <main className="bg-primary-bg w-full h-full">
      <Navbar />
      <Home />
      <FounderSection />
      <VisionMission />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default App;
