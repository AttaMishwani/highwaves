import React, { useEffect, useRef } from "react";
import { Code2, Boxes, Layers, Database, Cloud, Brush, GitBranch, Brain } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  {
    category: "Languages",
    tools: "Python, JavaScript, HTML, CSS, PHP",
    icon: <Code2 className="w-8 h-8 text-[#00C6FF]" />,
  },
  {
    category: "Frameworks",
    tools: "React, Node.js, Express.js, Flask, Django",
    icon: <Layers className="w-8 h-8 text-[#00C6FF]" />,
  },
  {
    category: "Platforms",
    tools: "WordPress, Wix, Shopify, Squarespace",
    icon: <Boxes className="w-8 h-8 text-[#00C6FF]" />,
  },
  {
    category: "AI & NLP",
    tools: "OpenAI GPT Models, LangChain, Chatbot APIs",
    icon: <Brain className="w-8 h-8 text-[#00C6FF]" />,
  },
  {
    category: "Databases",
    tools: "MySQL, MongoDB, Firebase",
    icon: <Database className="w-8 h-8 text-[#00C6FF]" />,
  },
  {
    category: "Design Tools",
    tools: "Figma, Adobe XD, Illustrator",
    icon: <Brush className="w-8 h-8 text-[#00C6FF]" />,
  },
  {
    category: "Version Control",
    tools: "Git, GitHub",
    icon: <GitBranch className="w-8 h-8 text-[#00C6FF]" />,
  },
  {
    category: "Hosting & Cloud",
    tools: "AWS, DigitalOcean, Cloudflare",
    icon: <Cloud className="w-8 h-8 text-[#00C6FF]" />,
  },
];

const TechStack = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".tech-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="tech-stack"
      className="relative py-24 px-6 md:px-12 lg:px-20  text-white  font-[Poppins]"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#00AEEF]/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00C6FF]/20 blur-[150px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6  text-[#00C6FF]  ">
          Technology Stack
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Our versatile technology stack enables us to deliver powerful, scalable, and modern digital solutions.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto relative z-10">
        {techStack.map((item, index) => (
          <div
            key={index}
            className="universal-card text-center"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[#00C6FF]">{item.category}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{item.tools}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
