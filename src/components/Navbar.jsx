import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo/logoo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full flex pt-4 pb-2 justify-center items-center">
      <nav className="w-[90%] max-w-[1200px] shadow-[0_5px_20px_-22px_#00AEEF] bg-secondary-bg rounded-4xl px-8 py-2 flex justify-between items-center relative">
        {/* Logo */}
        <div className="logo">
          <img src={logo} className="w-30" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-text-primary font-medium">
          {navLinks.map((link) => (
            <li key={link.name} className="">
              <a
                href={link.href}
                className="hover:border-b-blue-main py-4 hover:border-b-3 transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-secondary-bg flex flex-col items-center gap-6 py-6 text-text-primary font-medium md:hidden rounded-b-3xl shadow-[0_5px_20px_-22px_#00AEEF] z-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-glowBlue transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
