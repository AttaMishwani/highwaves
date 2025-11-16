import React from "react";
import { Mail, Phone, MapPin, QrCode } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative text-white py-16 px-6 sm:px-12 lg:px-20 font-[Poppins] mt-30">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#00AEEF]/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="w-full">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#00AEEF] to-[#00C6FF] bg-clip-text text-transparent">
            Contact Us
          </h3>

          <ul className="space-y-4 text-gray-300">
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
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QrCode size={42} className="text-[#00C6FF] flex-shrink-0" />
            <div className="min-w-0 break-words">
              <p className="text-sm text-gray-400">Scan to Connect</p>
              <a
                href="https://wa.me/923112103355"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00C6FF] text-sm hover:underline break-words"
              >
                WhatsApp QR Link
              </a>
            </div>
          </div>
        </div>

        {/* Thank You / Message */}
        <div className="md:text-right text-gray-300 flex flex-col justify-center mt-10 md:mt-0 break-words">
          <h3 className="text-2xl font-semibold mb-3 text-white break-words">
            Thank You
          </h3>
          <p className="text-gray-400 leading-relaxed break-words">
            Thank you for exploring our portfolio.
            <br />
            At <span className="text-[#00C6FF] font-medium break-words">
              High Waves Software Solutions
            </span>
            , we believe every partnership begins with trust — and grows with
            innovation.
          </p>
          <p className="mt-4 italic text-[#00C6FF] break-words">
            Let’s ride the digital wave together toward limitless possibilities.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 border-t border-[#1a2438] mt-16 pt-6 text-center text-sm text-gray-500 break-words">
        © 2025 <span className="text-[#00C6FF]">High Waves Software Solutions</span> – All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
