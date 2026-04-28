import { useState, useEffect } from 'react';
import logoImage from '../../assets/cmbc_clouddancelglass.png';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'tech-stacks', label: 'Skills' },
  { id: 'affiliation', label: 'Affiliation' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for navbar shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = navItems.map((n) => n.id);
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-[#2e2a5e]
        ${scrolled ? 'bg-[#201540]/95 backdrop-blur-md shadow-lg' : 'bg-[#201540]/80 backdrop-blur-sm'}`}
    >
      <div className="w-full max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo Image */}
        <a href="#hero" aria-label="Back to top" className="inline-flex items-center">
          <img
            src="/assets/cmbc_clouddancelglass.png"
            alt="CMBC logo"
            className="h-10 w-10"
          />
        </a>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-4 font-dmSans text-sm font-medium">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`nav-link transition-all duration-300
                  ${activeSection === id ? 'active text-[#7c3aed]' : 'text-gray-300 hover:text-white'}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#120f35] border-t border-[#2e2a5e]
          ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4 font-dmSans text-sm">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={`block py-1 transition-colors ${activeSection === id ? 'text-[#7c3aed]' : 'text-gray-300 hover:text-white'}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
