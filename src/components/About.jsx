import { useState, useEffect } from 'react';
import useInView from '../hooks/useInView';

const stats = [
  {
    label: '3rd Year CS Student',
    sub: 'Ateneo de Davao University',
    icon: '🎓',
  },
  {
    label: 'Multi-Platform Projects',
    sub: 'Web & Mobile Applications',
    icon: '🌐',
  },
];

const portraits = [
  '/assets/car/portrait-car-1.jpg',
  '/assets/car/portrait-car-2.jpg',
  '/assets/car/portrait-car-3.jpg',
];

export default function About() {
  const [ref, inView] = useInView();
  const [portraitIndex, setPortraitIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPortraitIndex((prev) => (prev + 1) % portraits.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className={`py-24 bg-[#120f35] transition-all duration-700
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="w-full max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="font-montserrat font-extrabold block text-3xl md:text-4xl border-l-4 border-[#7c3aed] pl-4">
            Who am I
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          
          {/* Top Section: Paragraph + Carousel */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* Left Column: Paragraph + Stats */}
            <div className="space-y-6">
              {/* Paragraph */}
              <div className="space-y-4">
                <p className="font-dmSans text-[#a0aec0] text-base leading-relaxed">
                  Junior Computer Science student with experience in developing
                  web and mobile applications. Developed projects built with{' '}
                  <span className="text-white font-medium">Next.js, MongoDB, and Flutter</span>.
                </p>
                <p className="font-dmSans text-[#a0aec0] text-base leading-relaxed">
                  I am willing to contribute to various projects and collaborate with teams to
                  deliver a good user experience and also to broaden my skills.
                  Being <span className="text-white font-medium">Adaptive </span> 
                  is one of my strengths, and I am ready to adapt progress and embark challenges in the field of software development.
                </p>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stats.map(({ label, sub, icon }) => (
                  <div
                    key={label}
                    className="bg-[#1a1740] border border-[#2e2a5e] rounded-2xl p-5 flex items-start gap-4
                               hover:border-[#7c3aed]/50 transition-colors duration-200 card-glow"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#7c3aed]/15 border border-[#2e2a5e]
                                    flex items-center justify-center text-lg flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="font-montserrat font-bold text-sm text-white">{label}</p>
                      <p className="font-dmSans text-xs text-[#a0aec0] mt-[2px]">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Portrait Carousel */}
            <div className="relative w-90 h-80 rounded-2xl border border-[#2e2a5e] overflow-hidden"
                 style={{ boxShadow: '0 0 30px rgba(124, 58, 237, 0.4)' }}>
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <img
                  key={portraitIndex}
                  src={portraits[portraitIndex]}
                  alt={`Portrait ${portraitIndex + 1}`}
                  className="w-full h-full object-cover object-top"
                />
                {/* dots carousel */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {portraits.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setPortraitIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        idx === portraitIndex ? 'bg-[#7c3aed] w-6' : 'bg-white/60 hover:bg-white'
                      }`}
                      aria-label={`Go to portrait ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
