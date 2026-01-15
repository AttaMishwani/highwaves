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
import GlobalReach from "./components/GlobalReach";
import FloatingContact from "./components/FloatingContact";
import ServicePreview from "./components/Servicepreview";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

function App() {
   useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,        // scroll speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,   // keep false for mobile
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <main className="bg-site w-full h-full">
      <Navbar />
      <Home />
      <FounderSection />
      <VisionMission />
      <ServicePreview/>
      <Services />
      <Portfolio />
      <TechStack />
      <Testimonials />
      <WhyChooseUs />
      <GlobalReach />
      <Footer />
      <FloatingContact/>
    </main>
  );
}

export default App;
