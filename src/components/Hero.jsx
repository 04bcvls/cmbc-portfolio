import { useState, useEffect } from 'react';
import useInView from '../hooks/useInView';

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentHour = new Date().getHours();
  const greeting =
    currentHour >= 12 && currentHour < 18
      ? 'Good afternoon'
      : currentHour >= 18
        ? 'Good evening'
        : 'Good morning';

  return (
    <section
      id="hero"
      ref={ref}
      className={`min-h-screen flex items-center pt-24 pb-16 transition-all duration-700 overflow-visible
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 md:gap-16 items-center w-full">

        {/* Profile Image */}
        <div 
          className="relative flex justify-center order-first md:order-last transition-all duration-300 overflow-visible"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Radial glow - reacts to hover and scroll */}
          <div className={`absolute inset-0 rounded-full bg-[#7c3aed]/20 blur-3xl scale-90 pointer-events-none transition-all duration-300 ${
            isHovered || scrollY > 100 ? 'animate-glow-intense' : 'animate-glow-pulse'
          }`} />

          {!imgError ? (
            <img
              src="./assets/Civiles_about.jpg"
              alt="Christian Mari Civiles"
              className={`relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-3xl
                         border-2 border-[#2e2a5e] transition-all duration-300
                         ${isHovered ? 'shadow-[0_0_60px_rgba(124,58,237,0.6)]' : 'shadow-[0_0_40px_rgba(124,58,237,0.3)]'}`}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className={`relative w-64 h-64 md:w-72 md:h-72 rounded-3xl
                            bg-[#1a1740] border-2 border-[#2e2a5e]
                            flex items-center justify-center transition-all duration-300
                            ${isHovered ? 'shadow-[0_0_60px_rgba(124,58,237,0.6)]' : 'shadow-[0_0_40px_rgba(124,58,237,0.3)]'}`}>
              <span className="text-5xl font-syne font-extrabold text-[#7c3aed]">CMBC</span>
            </div>
          )}

          {/* Floating decoration dots - static positions */}
          <div className="absolute -top-4 -right-4 w-3 h-3 rounded-full bg-[#7c3aed] opacity-60" />
          <div className="absolute -bottom-6 -left-2 w-2 h-2 rounded-full bg-[#7c3aed] opacity-40" />
        </div>

        {/* Text Content */}
        <div className="space-y-5">
          <p className="text-white font-dmSans text-lg mt-3">
            {greeting}! I am
          </p>

          <h1 className="text-4xl md:text-5xl leading-tight">
            <span className="font-montserrat font-extrabold inline-block whitespace-nowrap">Christian Mari Civiles,</span>
            <span className="text-[#a0aec0] font-normal text-2xl md:text-2xl mt-2 font-dmSans block">
              a Web and Mobile Developer, and I am pleased to explore something new.
            </span>
            
          </h1>

          <p className="text-[#a0aec0] font-dmSans text-sm leading-relaxed">
            Computer Science &nbsp;·&nbsp; Ateneo de Davao University
          </p>

          {/* Divider line */}
          <div className="w-12 h-[3px] bg-[#7c3aed] rounded-full" />

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="#projects"
              className="inline-block px-7 py-3 bg-[#7c3aed] hover:bg-[#6d28d9]
                         text-white text-xs font-montserrat font-bold uppercase tracking-widest
                         rounded-lg transition-all duration-200
                         shadow-[0_0_20px_rgba(124,58,237,0.4)]
                         hover:shadow-[0_0_30px_rgba(124,58,237,0.6)]
                         hover:-translate-y-[2px]"
            >
              See Activities
            </a>
            <a
              href="#about"
              className="inline-block px-7 py-3 border border-[#2e2a5e]
                         text-[#a0aec0] hover:text-white hover:border-[#7c3aed]
                         text-xs font-montserrat font-semibold uppercase tracking-widest
                         rounded-lg transition-all duration-200
                         hover:-translate-y-[2px]"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
