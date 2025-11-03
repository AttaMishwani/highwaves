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
      className="relative py-24 px-6 md:px-12 lg:px-20  text-white overflow-hidden "
    > 
      {/* Background glow */}
      {/* <div className="absolute top-0 left-0 w-72 h-72 bg-[#00AEEF]/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00C6FF]/20 blur-[150px] rounded-full"></div> */}

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00AEEF] to-[#00C6FF] bg-clip-text text-transparent">
          Portfolio Showcase
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Discover a selection of our latest projects — crafted with precision,
          strategy, and innovation.
        </p>
      </div>

      {/* GRID */}
      <div className="grid-layout">
        {projects.map((proj, index) => (
          <div
            key={index}
            className={`portfolio-card relative overflow-hidden rounded-2xl group`}
          >
            <img
              src={proj.image}
              alt={proj.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#000000d8] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="text-xl font-semibold mb-1">{proj.name}</h3>
              <p className="text-gray-400 text-sm mb-3">{proj.industry}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#00C6FF] hover:text-white transition-all"
              >
                Visit Site <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Custom CSS grid */}
      <style jsx>{`
        .grid-layout {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-auto-rows: 200px;
          gap: 10px;
        }

        .portfolio-card:nth-child(1) {
          grid-column: span 3;
          grid-row: span 2;
        }
        .portfolio-card:nth-child(2) {
          grid-column: span 2;
          grid-row: span 3;
        }
        .portfolio-card:nth-child(3) {
          grid-column: span 2;
          grid-row: span 2;
        }
        .portfolio-card:nth-child(4) {
          grid-column: span 3;
          grid-row: span 3;
        }
        .portfolio-card:nth-child(5) {
          grid-column: span 2;
          grid-row: span 2;
        }
        .portfolio-card:nth-child(6) {
          grid-column: span 3;
          grid-row: span 2;
        }

        @media (max-width: 1024px) {
          .grid-layout {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 250px;
          }
          .portfolio-card {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
        }

        @media (max-width: 640px) {
          .grid-layout {
            grid-template-columns: 1fr;
            grid-auto-rows: 220px;
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
