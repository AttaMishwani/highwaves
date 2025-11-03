import React from "react";
import {
  Globe,
  Bot,
  Settings,
  Code2,
  Lightbulb,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: <Globe className=" w-8 text-[#00C6FF] h-8" />,
    title: "Website Design & Development",
    description:
      "We build dynamic, responsive websites tailored to your goals — from corporate portals to e-commerce and custom-coded web apps.",
    tech: "Technologies: HTML, CSS, React, Node.js, WordPress, Wix, Shopify, Laravel",
  },
  {
    icon: <Bot className=" w-8 text-[#00C6FF] h-8" />,
    title: "Chatbot & AI Assistant Development",
    description:
      "We specialize in conversational AI systems, integrating OpenAI, GPT-based chatbots, and voice assistants into websites and CRM platforms.",
    tech: "Use Cases: Customer Support, Lead Generation, Automation",
  },
  {
    icon: <Settings className=" w-8 text-[#00C6FF] h-8" />,
    title: "Business Automation & Data Entry Systems",
    description:
      "We streamline manual workflows through bots, scripts, and AI-powered automation that save time and reduce errors.",
    tech: "Examples: Auto report generation, CRM integration, Excel automation",
  },
  {
    icon: <Code2 className="w-8 text-[#00C6FF] h-8" />,
    title: "Python Scripting & Web Scraping",
    description:
      "Our Python experts create efficient scripts for data extraction, analytics, and web automation — powering real-time business intelligence.",
  },
  {
    icon: <Lightbulb className="w-8 text-[#00C6FF] h-8" />,
    title: "Creative Branding & Visual Design",
    description:
      "We design brand identities that stand out — logos, brochures, presentations, and digital creatives that reflect your brand’s personality.",
  },
  {
    icon: <Smartphone className="w-8 text-[#00C6FF] h-8" />,
    title: "Mobile App & Software Development",
    description:
      "We develop high-performance mobile and desktop apps that deliver smooth experiences for end-users.",
    tech: "Platforms: Android, iOS, Flutter, React Native",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="w-full py-20 bg-primary-bg text-white flex flex-col items-center"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glowBlue">
          Our Services
        </h2>
        <p className="text-text-secondary text-lg">
          We offer a full suite of digital services designed to power business
          transformation and drive measurable growth.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] max-w-6xl">
        {services.map((service, index) => (
          <div key={index} className="universal-card">
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#00AEEF]/10 to-[#00C6FF]/10  mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-text-secondary mb-2">{service.description}</p>
            {service.tech && (
              <p className="text-sm text-glowBlue/80 italic">{service.tech}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
