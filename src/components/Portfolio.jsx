import React, { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "Syeed & Sons",
    industry: "Textile Export & Manufacturing",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    name: "Pak Safety Academy",
    industry: "Occupational Safety & Industrial Training",
    image:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    link: "http://paksafetyacademy.com/",
  },
  {
    name: "Digitora",
    industry: "Digital Marketing & Branding",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    link: "https://digitora.site/",
  },
  {
    name: "KC Premier Living",
    industry: "Real Estate & Property Management",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    name: "Finance Centre",
    industry: "Financial Consultancy & Services",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    name: "Arkedia Consulting",
    industry: "Business Strategy & IT Solutions",
    image:
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=80",
    link: "http://arkedia.co.uk/",
  },
];

const Portfolio = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".portfolio-card");

    if (!cards.length) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
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
      id="portfolio"
      className="relative py-20 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-20 text-white"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00AEEF] to-[#00C6FF] bg-clip-text text-transparent mb-4">
          Portfolio Showcase
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Discover a selection of our latest projects — crafted with precision and innovation.
        </p>
      </div>

      {/* Custom Grid */}
      <div
        className="grid gap-4 sm:gap-5"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridAutoRows: "200px",
        }}
      >
        {projects.map((proj, index) => (
          <div
            key={index}
            className="portfolio-card relative overflow-hidden rounded-2xl group"
            style={{
              gridColumn: index === 0 || index === 3 || index === 5 ? "span 3" : "span 2",
              gridRow: index === 0 || index === 2 || index === 4 || index === 5 ? "span 2" : "span 3",
            }}
          >
            <img
              src={proj.image}
              alt={proj.name}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-all duration-500"></div>

            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-xl font-semibold">{proj.name}</h3>
              <p className="text-gray-400 text-sm mb-3">{proj.industry}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#00C6FF] hover:text-white"
              >
                Visit Site <ExternalLink size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive Fix */}
      <style>{`
        @media (max-width: 1024px) {
          #portfolio .portfolio-card {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
          #portfolio .grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 240px !important;
          }
        }

        @media (max-width: 640px) {
          #portfolio .grid {
            grid-template-columns: 1fr !important;
            grid-auto-rows: 220px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
