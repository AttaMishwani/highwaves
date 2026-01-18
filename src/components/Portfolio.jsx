import React, { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "Syeed & Sons",
    industry: "Textile Export & Manufacturing",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    link: "https://syeedandsons.com",
  },
  {
    name: "Pak Safety Academy",
    industry: "Occupational Safety & Industrial Training",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1",
    link: "https://paksafetyacademy.com",
  },
  {
    name: "Any Landscaping",
    industry: "Landscape Design & Maintenance",
    image: "https://images.unsplash.com/photo-1592928302636-c83cf1e1c887",
    link: "https://anylandscaping.com",
  },
  {
    name: "Digitora",
    industry: "Digital Marketing & Branding Agency",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    link: "https://digitora.site",
  },
  {
    name: "KC Premier Living",
    industry: "Real Estate & Property Management",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    link: "https://kcpremierliving.com",
  },
  {
    name: "Finance Centre",
    industry: "Financial Consultancy & Services",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    link: "https://financecentre.us",
  },
];

const Portfolio = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate header
      const header = sectionRef.current.querySelector(".portfolio-header");
      if (header) {
        gsap.fromTo(
          header.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: header,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      const cards = gsap.utils.toArray(".portfolio-card", sectionRef.current);

      if (!cards.length) return;

      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-20 text-text-primary"
    >
      {/* Header */}
      <div className="portfolio-header text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight bg-gradient-to-r from-[#00AEEF] to-[#00C6FF] bg-clip-text text-transparent">
          Portfolio Showcase
        </h2>
              <p className="text-text-secondary max-w-2xl mx-auto text-lg">
          Selected projects delivered with strategy, performance, and precision.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] w-full mx-auto">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="universal-card portfolio-card"
            style={{ willChange: 'transform, opacity' }}
          >
            {/* Image box */}
            <div className="h-52 w-full overflow-hidden ">
              <img
                src={proj.image}
                alt={proj.name}
                className="h-full w-full rounded-md"
                loading="lazy"
              />
            </div>

            {/* Text below */}
            <div className="mt-5">
              <h3 className="text-xl font-semibold mb-1">{proj.name}</h3>
              <p className="text-text-secondary text-sm mb-5">{proj.industry}</p>

              {/* Button */}
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#00C6FF] text-sm font-medium hover:bg-[#00C6FF]  transition"
              >
                Visit Website <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
