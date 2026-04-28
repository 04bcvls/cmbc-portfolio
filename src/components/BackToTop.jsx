import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // show button when scrolled down
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#7c3aed] hover:bg-[#6d28d9]
                   flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.4)]
                   hover:shadow-[0_0_30px_rgba(124,58,237,0.6)]
                   transition-all duration-300 hover:-translate-y-1
                   text-white
                   ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      aria-label="Back to top"
    >
      <img
        src="./assets/logo/direction-top-white.svg"
        alt="Back to top"
        className="w-5 h-5"
      />
    </button>
  );
}
