import React, { useEffect, useRef } from "react";
import {
  Rocket,
  BarChart3,
  ShieldCheck,
  Users,
  HeartHandshake,
  Globe2,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".why-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const points = [
    {
      icon: <Rocket className="w-8 h-8 text-[#00C6FF]" />,
      title: "Innovation at Core",
      desc: "We bring creativity and innovation to every project, turning your ideas into impactful digital solutions.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#00C6FF]" />,
      title: "Data-Driven Results",
      desc: "Our strategies are backed by insights, analytics, and measurable outcomes to help you scale effectively.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#00C6FF]" />,
      title: "Reliability & Trust",
      desc: "We deliver on our promises — consistently, securely, and transparently.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#00C6FF]" />,
      title: "Experienced Team",
      desc: "Our team of developers, designers, and strategists work collaboratively to craft excellence.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-[#00C6FF]" />,
      title: "Client-First Approach",
      desc: "Your success is our priority — we focus on long-term relationships, not one-time projects.",
    },
    {
      icon: <Globe2 className="w-8 h-8 text-[#00C6FF]" />,
      title: "Global Reach",
      desc: "We work with clients across 10+ countries, empowering businesses worldwide.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative w-full py-24 bg-primary-bg text-white"
    >
      {/* Decorative glowing backgrounds */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#00AEEF]/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[#00C6FF]/20 blur-[100px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00AEEF] to-[#00C6FF] bg-clip-text text-transparent">
          Why Choose Us
        </h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-16">
          Partner with High Waves Software Solutions and experience innovation,
          reliability, and growth — all in one place.
        </p>

        {/* Feature Cards */}
        <div className="grid gap-6 sm:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((item, index) => (
            <div
              key={index}
              className="why-card bg-[#0B1220]/80 backdrop-blur-md border border-[#00C6FF]/10 rounded-2xl p-6 sm:p-8 text-center shadow-[0_0_25px_-8px_#00C6FF]/10 hover:shadow-[0_0_40px_-8px_#00C6FF]/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#00AEEF]/10 to-[#00C6FF]/10">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
