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
        <button
  className="
    relative overflow-hidden
    bg-blue-main 
    text-white 
    px-6 
    py-3 
    rounded-xl 
    font-medium 
    shadow-[0_0_15px_#007BFF] 
    transition-all 
    duration-300
    w-full
    sm:w-auto
    cursor-pointer
    text-[clamp(0.9rem,1.8vw,1rem)]
    hover:-translate-y-1
    hover:shadow-[0_12px_30px_rgba(0,198,255,0.55)]
  "
>
  {/* light sweep */}
  <span
    className="
      pointer-events-none
      absolute inset-0
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-white/30
      to-transparent
      hover:translate-x-full
      transition-transform
      duration-700
    "
  />
  Get a Free Consultation
</button>

<button
  className="
    relative
    border 
    border-white/60
    text-white 
    px-6 
    py-3 
    rounded-xl 
    font-medium 
    transition-all 
    duration-300
    w-full
    sm:w-auto
    cursor-pointer
    text-[clamp(0.9rem,1.8vw,1rem)]
    hover:text-[#00AEEF]
    hover:border-[#00AEEF]
  "
>
  {/* underline animation */}
  <span
    className="
      absolute left-1/2 -bottom-[2px]
      h-[2px] w-0
      bg-[#00AEEF]
      transition-all duration-300
      hover:w-full
      hover:left-0
    "
  />
  View Portfolio
</button>


        </div>
      </div>
    </section>
  );
};

export default Home;
