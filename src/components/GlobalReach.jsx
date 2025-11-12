import React from "react";
import FlowingMenu from "../animation/FlowingMenu";

const GlobalReach = () => {
  const countries = [
    { text: "Pakistan", link: "#", image: "https://flagcdn.com/w320/pk.png" },
    { text: "United Kingdom", link: "#", image: "https://flagcdn.com/w320/gb.png" },
    { text: "United States", link: "#", image: "https://flagcdn.com/w320/us.png" },
    { text: "United Arab Emirates", link: "#", image: "https://flagcdn.com/w320/ae.png" },
    { text: "Canada", link: "#", image: "https://flagcdn.com/w320/ca.png" },
    { text: "Saudi Arabia", link: "#", image: "https://flagcdn.com/w320/sa.png" },
  ];

  return (
    <section className="relative text-white py-24 px-6 md:px-12 lg:px-20 font-[Poppins] overflow-hidden">
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00AEEF] to-[#00C6FF] bg-clip-text text-transparent">
          Global Reach
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          We are proud to serve clients across the globe — delivering excellence, innovation, and round-the-clock support.
        </p>
      </div>

      <div
        style={{
          height: "600px",
          position: "relative",
          borderRadius: "1rem",
          overflow: "hidden",
        }}
        className="relative z-10"
      >
        <FlowingMenu items={countries} />
      </div>
    </section>
  );
};

export default GlobalReach;
