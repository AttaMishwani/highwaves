import React, { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Sun, Moon } from "lucide-react";
import logo from "../assets/logo/logoo.png";
import gsap from "gsap";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    if (!navRef.current) return;

    const ctx = gsap.context(() => {
      const logo = navRef.current.querySelector(".logo");
      const menuItems = navRef.current.querySelectorAll("ul li");

      if (logo) {
        gsap.fromTo(
          logo,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
          }
        );
      }

      if (menuItems.length) {
        gsap.fromTo(
          menuItems,
          { opacity: 0, y: -10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            delay: 0.2,
            ease: "power3.out",
          }
        );
      }
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <header className="w-full flex pt-4 pb-2 justify-center items-center relative">
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 198, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 198, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      <nav ref={navRef} className="w-[90%] max-w-[1200px] shadow-[0_5px_20px_-22px_#00AEEF] bg-secondary-bg rounded-4xl px-8 py-2 flex justify-between items-center relative z-10">
        {/* Logo */}
        <div className="logo">
          <img src={logo} className="w-30" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-text-primary font-medium items-center">
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
          {/* Theme Toggle Button */}
          <li>
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-lg hover:bg-white/10 transition-colors duration-300 text-text-primary"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600" />
              )}
            </button>
          </li>
        </ul>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-white/10 dark:hover:bg-white/10 transition-colors duration-300 text-text-primary"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-blue-600" />
            )}
          </button>
          <div
            className="text-text-primary text-3xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </div>
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
