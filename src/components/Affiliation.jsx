import useInView from '../hooks/useInView';

const affiliations = [
  {
    name: 'Source Code',
    org: 'Computer Studies Student Executive Council',
    school: 'Ateneo de Davao University',
    role: 'UI/UX Design · QA Member',
    period: 'Aug 2026 – Present',
    logo: './assets/addu-cssec-logo-2026.jpg',
    alt: 'Source Code CSSEC logo',
  },
  {
    name: 'Hon. Abrar J. Hataman',
    org: 'Bangsamoro Parliament',
    school: 'Bangsamoro Autonomous Region in Muslim Mindanao',
    role: 'Social Media Campaign Assistant',
    period: 'Nov 2025 – Present',
    logo: './assets/mp-ah.png',
    alt: 'Abrar J. Hataman logo',
  },
  {
    name: 'ADDAMS',
    org: 'Ateneo de Davao Mathematics Society',
    school: 'Ateneo de Davao University',
    role: 'Creatives Committee Member',
    period: 'Aug 2025 – Present',
    logo: './assets/addams-logo-2026.png',
    alt: 'ADDAMS logo',
  },
  {
    name: 'ACCESS',
    org: 'Ateneo Circle of Computer Enthusiasts for Study and Success',
    school: 'Ateneo de Davao University',
    role: 'Member',
    period: 'Jan 2024 – Present',
    logo: './assets/access-logo.jpg',
    alt: 'ACCESS logo',
  },
  {
    name: 'Tambuyok',
    org: 'Notre Dame of Cotabato School Publication - Filipino',
    school: 'Notre Dame of Cotabato',
    role: 'Opinion Writer',
    period: '2019 – 2023',
    logo: './assets/ndc-tambuyok.jpg',
    alt: 'Tambuyok logo',
  },
  {
    name: 'Clarion',
    org: 'Notre Dame of Cotabato School Publication - English',
    school: 'Notre Dame of Cotabato',
    role: 'Sports Writer',
    period: '2017 – 2019',
    logo: './assets/ndc-clarion.png',
    alt: 'Clarion logo',
  },
];

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

        {/* Affiliation Cards */}
        <div className="space-y-6">
          {affiliations.map((item) => (
            <div
              key={item.name}
              className="bg-[#1a1740] border border-[#2e2a5e] rounded-2xl overflow-hidden
                         hover:border-[#7c3aed]/50 transition-all duration-300 card-glow
                         flex flex-col sm:flex-row"
            >
              {/* Left Purple Accent Bar */}
              <div className="w-full sm:w-2 bg-[#7c3aed] flex-shrink-0 min-h-[8px] sm:min-h-0" />

              {/* Content */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 sm:p-8 flex-1">

                {/* Logo */}
                <div className="w-16 h-16 rounded-2xl bg-[#7c3aed]/15 border border-[#2e2a5e]
                                flex items-center justify-center flex-shrink-0 overflow-hidden shadow-[0_20px_40px_rgba(124,58,237,0.25)]">
                  <img
                    src={item.logo}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0 space-y-1">
                  <h3 className="font-montserrat font-bold text-xl text-white">
                    {item.name}
                  </h3>
                  <p className="font-dmSans text-md text-[#a0aec0]">
                    {item.org}
                  </p>
                  <p className="font-dmSans text-xs text-[#a0aec0] mt-1">
                    {item.school}
                  </p>
                </div>

                {/* Meta Info */}
                <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
                  <span className=" py-0.5 text-sm font-montserrat font-medium
                                   text-white">
                    {item.role}
                  </span>
                  <p className="font-dmSans text-xs text-[#a0aec0] whitespace-nowrap">
                    {item.period}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
