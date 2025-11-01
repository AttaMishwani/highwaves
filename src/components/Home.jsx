import React, { useEffect, useRef } from "react";
import Threads from "../animation/Threads"; // make sure the path is correct
import { useInView } from "react-intersection-observer";


const Home = () => {
  // const refe = useRef()
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });


  // useEffect(() => {
  //   const handleVisibilityChange = () => {
  //     if (document.hidden) refe.current?.pause?.();
  //     else refe.current?.play?.();
  //   };

  //   document.addEventListener("visibilitychange", handleVisibilityChange);
  //   return () =>
  //     document.removeEventListener("visibilitychange", handleVisibilityChange);
  // }, []);



  return (
    <section className="w-full min-h-[89vh] relative flex justify-center items-center overflow-hidden bg-primary-bg">
      {/* 🌀 Background Threads Animation */}
      <div ref={ref} className="absolute inset-0 z-0">
      {inView &&     <Threads
          amplitude={1.2}
          // ref={refe}
          distance={0.3}
          enableMouseInteraction={false}
          color={[0, 0.682, 1]} // Blue shade in RGB (0–1 scale)
        />}
    
      </div>

      {/* 💡 Hero Content */}
      <div className="relative  w-full max-w-[1100px] mx-auto flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-text-primary mb-6">
          Ride the Digital Wave with Us
        </h1>

        {/* Subheading */}
        <p className="text-text-secondary text-lg md:text-xl max-w-2xl">
          At High Waves Software Solutions, we build intelligent websites, apps,
          and AI solutions that help businesses grow and automate their digital
          presence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          {/* Primary Button */}
          <button
            className="bg-blue-main text-white px-6 py-3 rounded-xl font-medium 
            shadow-[0_0_15px_#007BFF] hover:bg-gradient-to-r hover:from-[#007BFF] hover:to-[#00c6ff] 
            hover:shadow-[0_0_25px_#00C6FF] transition-all duration-300"
          >
            Get a Free Consultation
          </button>

          {/* Secondary Button */}
          <button
            className="border border-white text-white px-6 py-3 rounded-xl font-medium 
            hover:text-[#00AEEF] hover:border-[#00AEEF] transition-all duration-300"
          >
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
