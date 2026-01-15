import React from "react";
import { Code2, Smartphone, Brain, PenTool } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Fast, responsive websites built with modern stacks. Clean UI, solid performance, and SEO-ready structure.",
    icon: Code2,
  },
  {
    title: "Mobile Apps",
    desc: "Android and iOS apps with smooth UX. Built for speed, stability, and scalable growth.",
    icon: Smartphone,
  },
  {
    title: "AI Solutions",
    desc: "Automation and AI features that save time. Chatbots, smart workflows, and data-driven decisions.",
    icon: Brain,
  },
  {
    title: "UI/UX Design",
    desc: "Interfaces that feel simple and clear. Strong layouts, consistent design systems, and user-first flows.",
    icon: PenTool,
  },
];

const ServicePreview = () => {
  return (
    <section className="relative py-24 px-6 sm:px-12 lg:px-20 font-[Poppins] text-white ">
      {/* soft glow */}
      {/* <div className="absolute -top-16 -left-16 w-80 h-80 bg-[#00AEEF]/15 blur-[130px] rounded-full" /> */}
      {/* <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-[#00C6FF]/10 blur-[130px] rounded-full" /> */}

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-[#00AEEF] to-[#00C6FF] bg-clip-text text-transparent">
            Services
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Four core services we deliver for startups, businesses, and growing teams.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 hover:border-white/20 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00C6FF]/15 border border-[#00C6FF]/25 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-[#00C6FF]" />
                </div>

                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicePreview;
