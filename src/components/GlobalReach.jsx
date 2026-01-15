import React from "react";

const GlobalReach = () => {
  const countries = [
    { name: "Pakistan", image: "https://flagcdn.com/w320/pk.png" },
    { name: "United Kingdom", image: "https://flagcdn.com/w320/gb.png" },
    { name: "United States", image: "https://flagcdn.com/w320/us.png" },
    { name: "United Arab Emirates", image: "https://flagcdn.com/w320/ae.png" },
    { name: "Canada", image: "https://flagcdn.com/w320/ca.png" },
    { name: "Saudi Arabia", image: "https://flagcdn.com/w320/sa.png" },
  ];

  return (
    <section className="relative py-24 px-6 sm:px-12 lg:px-20 font-[Poppins] overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-[#00AEEF] to-[#00C6FF] bg-clip-text text-transparent">
            Global Reach
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Trusted by clients across key international markets.
          </p>
        </div>

        {/* Flags */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {countries.map((c, idx) => (
            <div
              key={idx}
              title={c.name}
              className="group relative flex items-center justify-center"
            >
              {/* Fixed-size flag container */}
              <div
                className="
                  w-[96px] h-[64px]
                  sm:w-[110px] sm:h-[72px]
                  md:w-[120px] md:h-[80px]
                  overflow-hidden rounded-md
                  transition-all duration-300 ease-out
                  group-hover:scale-110
                  group-hover:shadow-[0_12px_30px_rgba(0,198,255,0.25)]
                "
              >
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* underline accent */}
              <span
                className="
                  absolute left-1/2 -bottom-2 h-[2px] w-0
                  bg-[#00C6FF]
                  transition-all duration-300
                  group-hover:w-full
                  group-hover:left-0
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
