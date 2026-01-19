import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Sparkles, Rocket, Code2, Globe, Zap, Star, TrendingUp, Award, Users } from "lucide-react";
import { scrollTo } from "../lenis";

const Home = () => {
  const heroContentRef = useRef(null);
  const floatingElementsRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    if (!heroContentRef.current) return;

    // Animate hero text on mount
    const ctx = gsap.context(() => {
      const heading = heroContentRef.current.querySelector(".hero-heading");
      const subheading = heroContentRef.current.querySelector(".hero-subheading");
      const buttons = heroContentRef.current.querySelector(".hero-buttons");

      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
          }
        );
      }

      if (subheading) {
        gsap.fromTo(
          subheading,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            delay: 0.3,
            ease: "power3.out",
          }
        );
      }

      if (buttons) {
        gsap.fromTo(
          buttons.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            delay: 0.6,
            ease: "power3.out",
          }
        );
      }

      // Animate floating icons
      if (floatingElementsRef.current) {
        const icons = gsap.utils.toArray(floatingElementsRef.current.children);
        if (icons.length > 0) {
          gsap.fromTo(
            icons,
            { opacity: 0, scale: 0, rotation: -180 },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.8,
              stagger: 0.1,
              delay: 0.9,
              ease: "back.out(1.7)",
            }
          );

          // Continuous floating animation
          icons.forEach((icon, i) => {
            if (icon) {
              gsap.to(icon, {
                y: Math.random() * 30 - 15,
                x: Math.random() * 20 - 10,
                rotation: Math.random() * 20 - 10,
                duration: 3 + Math.random() * 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: i * 0.2,
              });
            }
          });
        }
      }

      // Animate stats
      if (statsRef.current) {
        const stats = gsap.utils.toArray(statsRef.current.children);
        if (stats.length > 0) {
          gsap.fromTo(
            stats,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              delay: 1.2,
              ease: "power3.out",
            }
          );

          // Count up animation for numbers
          stats.forEach((stat) => {
            const numberEl = stat.querySelector(".stat-number");
            if (numberEl) {
              const textContent = numberEl.textContent.trim();
              const targetValue = parseInt(textContent.replace(/\D/g, ''));
              if (!isNaN(targetValue) && targetValue > 0) {
                const obj = { value: 0 };
                gsap.to(obj, {
                  value: targetValue,
                  duration: 2,
                  delay: 1.5,
                  ease: "power2.out",
                  onUpdate: function () {
                    if (numberEl) {
                      numberEl.textContent = Math.floor(obj.value) + "+";
                    }
                  },
                });
              }
            }
          });
        }
      }
    }, heroContentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="
        w-full 
        min-h-[89vh] 
        relative 
        flex 
        justify-center 
        items-center 
        overflow-hidden 
        px-4 
        sm:px-6 
        md:px-8
      "
      >
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

      {/* Animated Background Orbs with more variety */}
      <div className="absolute inset-0 overflow-visible pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00AEEF]/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00C6FF]/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00AEEF]/10 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Orbs that extend beyond section boundaries - using fixed positioning */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#00C6FF]/15 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00AEEF]/15 rounded-full blur-[110px] animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Animated Particles/Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#00C6FF]/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Floating Decorative Icons - More and larger */}
      <div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        <Sparkles className="absolute top-20 left-10 w-14 h-14 text-[#00C6FF]/40 animate-pulse" />
        <Rocket className="absolute top-40 right-20 w-12 h-12 text-[#00AEEF]/40" />
        <Code2 className="absolute bottom-40 left-20 w-14 h-14 text-[#00C6FF]/40" />
        <Globe className="absolute bottom-20 right-40 w-12 h-12 text-[#00AEEF]/40" />
        <Zap className="absolute top-1/2 left-5 w-10 h-10 text-[#00C6FF]/30" />
        <Sparkles className="absolute bottom-1/4 right-10 w-12 h-12 text-[#00AEEF]/30 animate-pulse" />
        <Star className="absolute top-1/3 right-1/4 w-10 h-10 text-[#00C6FF]/30" />
        <TrendingUp className="absolute bottom-1/3 left-1/3 w-10 h-10 text-[#00AEEF]/30" />
        <Award className="absolute top-2/3 right-1/3 w-10 h-10 text-[#00C6FF]/30" />
      </div>

      {/* 💡 Hero Content */}
      <div
        ref={heroContentRef}
        className="
          relative 
          z-10
          w-full 
          max-w-[1200px] 
          mx-auto 
          flex 
          flex-col 
          justify-center 
          items-center 
          text-center 
          sm:py-20
          md:py-24
        "
      >
        {/* Badge with glow effect */}
        <div className="mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-[#00AEEF]/30 to-[#00C6FF]/30 border border-[#00C6FF]/40 backdrop-blur-md shadow-[0_0_30px_rgba(0,198,255,0.3)] hover:shadow-[0_0_40px_rgba(0,198,255,0.5)] transition-all duration-300 hover:scale-105">
          <p className="text-sm md:text-base font-semibold bg-gradient-to-r from-[#00AEEF] to-[#00C6FF] bg-clip-text text-transparent flex items-center gap-2">
            <Sparkles className="w-4 h-4 inline-block animate-pulse" />
            Transforming Ideas Into Digital Excellence
            <Sparkles className="w-4 h-4 inline-block animate-pulse" />
          </p>
        </div>

        {/* Responsive Heading with Enhanced Gradient and Glow */}
        <h1
          className="hero-heading
            font-extrabold 
            leading-tight 
            mb-8 
            text-[clamp(2rem,5vw,4.5rem)]
            bg-gradient-to-r from-[#00AEEF] via-[#00C6FF] via-[#00AEEF] to-[#00C6FF] bg-clip-text text-transparent
            bg-[length:200%_auto]
            animate-gradient-shift
            drop-shadow-[0_0_30px_rgba(0,198,255,0.5)]
          "
        >
          <span className="block mb-2">Ride the Digital</span>
          <span className="block">Wave with Us</span>
        </h1>

        {/* Subheading with better styling */}
        <p
          className="hero-subheading
            text-text-secondary 
            max-w-3xl 
            text-[clamp(1rem,2.5vw,1.3rem)]
            px-2
            leading-relaxed
            font-medium
          "
        >
          At <span className="font-bold bg-gradient-to-r from-[#00AEEF] to-[#00C6FF] bg-clip-text text-transparent">High Waves Software Solutions</span>, we build intelligent websites, apps,
          and AI solutions that help businesses grow and automate their digital
          presence.
        </p>

        {/* CTA Buttons */}
        <div
          className="hero-buttons
            flex 
            flex-col 
            sm:flex-row 
            gap-4 
            mt-6
            w-full
            sm:w-auto
            items-center
          "
        >
        <button
         onClick={() =>{

    scrollTo("#contact")
 }}
  className="
    relative overflow-hidden
    bg-blue-main 
    text-text-primary 
    px-6 
    py-3 
    rounded-xl 
    font-medium 
    shadow-[0_0_15px_#007BFF] 
    transition-all 
    duration-300
    w-full
    sm:w-auto
    cursor-pointer
    text-[clamp(0.9rem,1.8vw,1rem)]
    hover:-translate-y-1
    hover:shadow-[0_12px_30px_rgba(0,198,255,0.55)]
  "
>
  {/* light sweep */}
  <span
    className="
      pointer-events-none
      absolute inset-0
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-white/30
      to-transparent
      hover:translate-x-full
      transition-transform
      duration-700
    "
  />
  Get a Free Consultation
</button>

<button

 onClick={() =>{
   
    scrollTo("#portfolio")
 }}

  className="
    relative
    border 
    border-white/60
    text-text-primary 
    px-6 
    py-3 
    rounded-xl 
    font-medium 
    transition-all 
    duration-300
    w-full
    sm:w-auto
    cursor-pointer
    text-[clamp(0.9rem,1.8vw,1rem)]
    hover:text-[#00AEEF]
    hover:border-[#00AEEF]
  "
>
  {/* underline animation */}
  <span  
    className="
      absolute left-1/2 -bottom-[2px]
      h-[2px] w-0
      bg-[#00AEEF]
      transition-all duration-300
      hover:w-full
      hover:left-0
    "
  />
  View Portfolio
</button>


        </div>

        {/* Stats/Features Section with Icons */}
        <div ref={statsRef} className="mt-20 w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="group relative bg-[#0B1220]/70 dark:bg-[#0B1220]/70 backdrop-blur-md border border-[#00C6FF]/30 rounded-2xl p-5 md:p-7 text-center hover:border-[#00C6FF]/60 hover:shadow-[0_0_30px_rgba(0,198,255,0.3)] transition-all duration-300 hover:-translate-y-2 hover:scale-105">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00C6FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <Rocket className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 text-[#00C6FF] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
              <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#00AEEF] to-[#00C6FF] bg-clip-text text-transparent stat-number">50</div>
              <div className="text-xs md:text-sm text-text-secondary mt-2 font-medium">Projects Delivered</div>
            </div>
          </div>
          <div className="group relative bg-[#0B1220]/70 dark:bg-[#0B1220]/70 backdrop-blur-md border border-[#00C6FF]/30 rounded-2xl p-5 md:p-7 text-center hover:border-[#00C6FF]/60 hover:shadow-[0_0_30px_rgba(0,198,255,0.3)] transition-all duration-300 hover:-translate-y-2 hover:scale-105">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00C6FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <Users className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 text-[#00AEEF] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
              <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#00AEEF] to-[#00C6FF] bg-clip-text text-transparent stat-number">30</div>
              <div className="text-xs md:text-sm text-text-secondary mt-2 font-medium">Happy Clients</div>
            </div>
          </div>
          <div className="group relative bg-[#0B1220]/70 dark:bg-[#0B1220]/70 backdrop-blur-md border border-[#00C6FF]/30 rounded-2xl p-5 md:p-7 text-center hover:border-[#00C6FF]/60 hover:shadow-[0_0_30px_rgba(0,198,255,0.3)] transition-all duration-300 hover:-translate-y-2 hover:scale-105">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00C6FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <Globe className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 text-[#00C6FF] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
              <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#00AEEF] to-[#00C6FF] bg-clip-text text-transparent stat-number">10</div>
              <div className="text-xs md:text-sm text-text-secondary mt-2 font-medium">Countries Served</div>
            </div>
          </div>
          <div className="group relative bg-[#0B1220]/70 dark:bg-[#0B1220]/70 backdrop-blur-md border border-[#00C6FF]/30 rounded-2xl p-5 md:p-7 text-center hover:border-[#00C6FF]/60 hover:shadow-[0_0_30px_rgba(0,198,255,0.3)] transition-all duration-300 hover:-translate-y-2 hover:scale-105">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00C6FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <Award className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 text-[#00AEEF] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
              <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#00AEEF] to-[#00C6FF] bg-clip-text text-transparent stat-number">5</div>
              <div className="text-xs md:text-sm text-text-secondary mt-2 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
