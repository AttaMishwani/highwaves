import React from "react";
import { Mail, Phone, MapPin, QrCode } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="relative text-white py-16 px-4 sm:px-12 lg:px-20 font-[Poppins] mt-30">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#00AEEF]/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Contact Info */}
        <div className="w-full">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-[#00AEEF] to-[#00C6FF] bg-clip-text text-transparent">
            Contact Us
          </h3>

          <ul className="space-y-4 text-gray-300 text-sm sm:text-base">
            <li className="flex items-start gap-3 break-words">
              <MapPin size={20} className="text-[#00C6FF] flex-shrink-0" />
              <span>Karachi, Pakistan</span>
            </li>

            <li className="flex items-start gap-3 break-words">
              <Mail size={20} className="text-[#00C6FF] flex-shrink-0" />
              <a
                href="mailto:highwavessoftwaresolutions@gmail.com"
                className="hover:text-[#00C6FF] transition-colors break-words"
              >
                highwavessoftwaresolutions@gmail.com
              </a>
            </li>

            <li className="flex items-start gap-3 break-words">
              <Phone size={20} className="text-[#00C6FF] flex-shrink-0" />
              <a
                href="https://wa.me/923112103355"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00C6FF] transition-colors break-words"
              >
                0311-2103355
              </a>
            </li>
          </ul>

          {/* QR Code */}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm sm:text-base">
            <QrCode size={42} className="text-[#00C6FF] flex-shrink-0" />
            <div className="min-w-0 break-words">
              <p className="text-gray-400">Scan to Connect</p>
              <a
                href="https://wa.me/923112103355"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00C6FF] hover:underline break-words"
              >
                WhatsApp QR Link
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
            Quick Message
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00C6FF]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00C6FF]"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm resize-none focus:outline-none focus:border-[#00C6FF]"
            ></textarea>

            <button
              type="submit"
              className="w-full px-4 py-3 rounded-lg bg-[#00C6FF] text-black text-sm font-medium hover:bg-white transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 border-t border-[#1a2438] mt-16 pt-6 text-center text-xs sm:text-sm text-gray-500 break-words">
        © 2025{" "}
        <span className="text-[#00C6FF]">
          High Waves Software Solutions
        </span>{" "}
        – All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
