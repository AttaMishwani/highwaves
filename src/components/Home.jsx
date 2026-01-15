import React from "react";
import Threads from "../animation/Threads";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section
      className="
        w-full 
        min-h-[89vh] 
        relative 
        flex 
        justify-center 
        items-center 
        overflow-hidden 
        
        px-4 
        sm:px-6 
        md:px-8
      "
    >
      {/* 🌀 Background Threads Animation */}
      <div ref={ref} className="absolute inset-0 z-0">
        {inView && (
          <Threads
            amplitude={1.2}
            distance={0.3}
            enableMouseInteraction={false}
            color={[0, 0.682, 1]}
          />
        )}
      </div>

      {/* 💡 Hero Content */}
      <div
        className="
          relative 
          w-full 
          max-w-[1200px] 
          mx-auto 
          flex 
          flex-col 
          justify-center 
          items-center 
          text-center 
          sm:py-20
          md:py-24
        "
      >
        {/* Responsive Heading */}
        <h1
          className="
            font-bold 
            leading-tight 
            text-text-primary
            mb-6 
            text-[clamp(1.8rem,4vw,3.7rem)]
          "
        >
          Ride the Digital Wave with Us
        </h1>

        {/* Subheading */}
        <p
          className="
            text-text-secondary 
            max-w-2xl 
            text-[clamp(0.9rem,2.2vw,1.2rem)]
            px-2
          "
        >
          At High Waves Software Solutions, we build intelligent websites, apps,
          and AI solutions that help businesses grow and automate their digital
          presence.
        </p>

        {/* CTA Buttons */}
        <div
          className="
            flex 
            flex-col 
            sm:flex-row 
            gap-4 
            mt-6
            w-full
            sm:w-auto
            items-center
          "
        >
          {/* Primary Button */}
          <button
            className="
              bg-blue-main 
              text-white 
              px-6 
              py-3 
              rounded-xl 
              font-medium 
              shadow-[0_0_15px_#007BFF] 
              hover:bg-gradient-to-r 
              hover:from-[#007BFF] 
              hover:to-[#00c6ff] 
              hover:shadow-[0_0_25px_#00C6FF] 
              transition-all 
              duration-300
              w-full
              cursor-pointer
              sm:w-auto
              text-[clamp(0.9rem,1.8vw,1rem)]
            "
          >
            Get a Free Consultation
          </button>

          {/* Secondary Button */}
          <button
            className="
              border 
              border-white 
              text-white 
              px-6 
              py-3 
              rounded-xl 
              font-medium 
              hover:text-[#00AEEF] 
              hover:border-[#00AEEF] 
              transition-all 
              duration-300
              w-full
              cursor-pointer
              sm:w-auto
              text-[clamp(0.9rem,1.8vw,1rem)]
            "
          >
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
