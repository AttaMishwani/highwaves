import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Tanveer Alam",
    title: "CEO – Syeed & Sons",
    location: "Pakistan",
    text: "High Waves Software Solutions delivered exactly what we envisioned, a modern, elegant, and performance-driven website that perfectly represents our textile export brand. Their professionalism and precision truly stand out.",
  },
  {
    name: "Fatima Noor",
    title: "Founder – BrandWave Studio",
    location: "United Kingdom",
    text: "Their expertise in AI chatbot integration gave our marketing agency an edge. The communication was seamless, deadlines were met, and the results exceeded our expectations.",
  },
  {
    name: "Ahmed Khan",
    title: "Director – Digitora",
    location: "UAE",
    text: "We partnered with High Waves for automation and data solutions, and the experience was incredible. Their tech understanding and creative input helped us streamline our operations.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="w-full py-20 px-6 md:px-20 text-white overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00AEEF] to-[#00C6FF] bg-clip-text text-transparent">
          Client Testimonials
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          What our clients say about working with High Waves Software Solutions.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="testimonial-card relative bg-[#0B1220]/80 backdrop-blur-md p-6 flex flex-col justify-between rounded-2xl shadow-[0_0_25px_-8px_#00C6FF]/10 hover:shadow-[0_0_40px_-8px_#00C6FF]/30 transition-all duration-500 border border-[#00C6FF]/10 max-w-md"
          >
            <p className="text-gray-300 mb-6 italic leading-relaxed">
              “{item.text}”
            </p>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-white">{item.name}</h4>
                <p className="text-sm text-gray-400">
                  {item.title} — {item.location}
                </p>
              </div>

              <div className="flex text-yellow-400">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
