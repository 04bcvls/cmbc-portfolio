import useInView from '../hooks/useInView';

export default function Affiliation() {
  const [ref, inView] = useInView();

  return (
    <section
      id="affiliation"
      ref={ref}
      className={`py-24 transition-all duration-700
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="w-full max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl border-l-4 border-[#7c3aed] pl-4">
            Affiliation
          </h2>
        </div>

        {/* ACCESS Card */}
        <div
          className="bg-[#1a1740] border border-[#2e2a5e] rounded-2xl overflow-hidden
                     hover:border-[#7c3aed]/50 transition-all duration-300 card-glow
                     flex flex-col sm:flex-row"
        >
          {/* Left Purple Accent Bar */}
          <div className="w-full sm:w-2 bg-[#7c3aed] flex-shrink-0 min-h-[8px] sm:min-h-0" />

          {/* Content */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 sm:p-8 flex-1">

            {/* Logo Placeholder */}
            <div className="w-16 h-16 rounded-2xl bg-[#7c3aed]/15 border border-[#2e2a5e]
                            flex items-center justify-center flex-shrink-0 overflow-hidden shadow-[0_20px_40px_rgba(124,58,237,0.25)]">
              <img
                src="./assets/access-logo.jpg"
                alt="ACCESS logo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex-1 space-y-1">
              <h3 className="font-montserrat font-bold text-xl text-white">
                ACCESS
              </h3>
              <p className="font-dmSans text-md text-[#a0aec0]">
                Ateneo Circle of Computer Enthusiasts for Study and Success
              </p>
              <p className="font-dmSans text-xs text-[#a0aec0] mt-1">
                Ateneo de Davao University
              </p>
            </div>

            {/* Meta Info */}
            <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
              <span className="px-3 py-1 text-xs font-dmSans font-medium
                               bg-[#7c3aed]/15 border border-[#7c3aed]/30
                               text-[#b193e4] rounded-full">
                Member
              </span>
              <p className="font-dmSans text-xs text-[#a0aec0] whitespace-nowrap">
                Jan 2024 – Present
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
