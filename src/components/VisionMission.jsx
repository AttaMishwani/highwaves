import React from "react";
import { Globe2, Rocket, Gem } from "lucide-react";

const VisionMission = () => {
  const coreValues = [
    {
      title: "Quality",
      text: "We never compromise on excellence; our results speak for themselves.",
    },
    {
      title: "Innovation",
      text: "We embrace change, new ideas, and next-gen technologies.",
    },
    {
      title: "Integrity",
      text: "We uphold honesty, transparency, and accountability in every project.",
    },
    { title: "Growth", text: "We grow by helping our clients grow." },
    {
      title: "Collaboration",
      text: "We build relationships, not just projects.",
    },
    {
      title: "Customer Focus",
      text: "Every solution begins with understanding our clients’ needs deeply.",
    },
  ];

  return (
    <section
      id="vision-mission"
      className="w-full max-w-[1200px] mx-auto  py-20 bg-primary-bg text-white flex flex-col items-center"
    >
      {/* Section Header */}
      <div className="text-center mb-14 max-w-3xl">
        <h2 className="text-4xl  md:text-5xl font-bold text-blue-main mb-3">
          Vision, Mission & Core Values
        </h2>
        <p className="text-text-secondary">
          Driving innovation with purpose — where technology meets integrity.
        </p>
      </div>

      {/* Vision & Mission Cards */}
      <div className="w-[100%]  max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* Vision */}
        <div className="universal-card">
          {/* <div className="absolute -top-10 -right-10 w-32 h-32 bg-glowBlue/20 rounded-full blur-3xl group-hover:blur-[60px] transition-all"></div> */}
          <Globe2 className="w-12 h-12 text-blue-main mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Vision</h3>
          <p className="text-text-secondary leading-relaxed">
            To become Pakistan’s most trusted digital innovation brand,
            empowering businesses worldwide to adopt future-ready technologies
            that drive performance, sustainability, and success.
          </p>
          <p className="text-text-secondary mt-3">
            We envision a global digital ecosystem where every organization —
            regardless of size — can access high-quality tech solutions that
            inspire growth and creativity.
          </p>
        </div>

        {/* Mission */}
        <div className="universal-card">
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-glowBlue/20 rounded-full blur-3xl group-hover:blur-[60px] transition-all"></div>
          <Rocket className="w-12 h-12 text-blue-main mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Mission</h3>
          <p className="text-text-secondary leading-relaxed">
            Our mission is to transform businesses through intelligent design,
            automation, and software innovation.
          </p>
          <p className="text-text-secondary mt-3">
            We strive to create meaningful digital experiences that help brands
            connect, scale, and compete globally — with passion, precision, and
            purpose.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="w-[100%] max-w-6xl universal-card relative">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-glowBlue/20 rounded-full blur-3xl"></div>
        <div className="text-center mb-8">
          <Gem className="w-12 h-12 text-blue-main mx-auto mb-4" />
          <h3 className="text-3xl font-semibold mb-2">Core Values</h3>
          <p className="text-text-secondary">
            The principles that define who we are and how we build lasting
            relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="universal-card"
            >
              <h4 className="text-xl font-semibold text-glowBlue mb-2">
                {value.title}
              </h4>
              <p className="text-text-secondary">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
