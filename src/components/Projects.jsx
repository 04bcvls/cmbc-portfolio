import useInView from '../hooks/useInView';

const projects = [
  {
    title: 'Ursal Rice Milling Services',
    type: 'Full-stack Web Application',
    tech: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    preview: '/assets/ursal-rice-preview.png',
    highlights: [
      'Automated inventory and sales order management system for a rice milling enterprise',
      'Built with Next.js full-stack framework, Tailwind CSS for styling, and MongoDB for database',
    ],
    access: 'https://ursal-rice-milling-services.vercel.app/',
    github: 'https://github.com/Blannck/Ursal-Rice-Milling-Services',
  },
  {
    title: 'Faculty Consultation Scheduler',
    type: 'Android Application',
    tech: ['Flutter', 'Firebase', 'Material Design'],
    preview: '/assets/facconsult-android-preview.png',
    highlights: [
      'Real-time appointment management system for consultation bookings between students and faculty with role-based access control',
      'Built with auto-synced notification system when booking status changes',
      'Utilized the Material Design for Flutter for Mobile UI',
    ],
    github: 'https://github.com/04bcvls/FacConsultAndroidMobile',
  },
];

// GitHub SVG Icon
function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57
               0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695
               -.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99
               .105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225
               -.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405
               c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225
               0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3
               0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

// External Link SVG Icon
function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-24 transition-all duration-700
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="w-full max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl border-l-4 border-[#7c3aed] pl-4">
            Projects
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#1a1740] border border-[#2e2a5e] rounded-2xl overflow-hidden
                         hover:-translate-y-1 transition-all duration-300
                         card-glow group"
            >
              {/* Preview Image */}
              {project.preview && (
                <div className="relative w-full h-48 overflow-hidden bg-[#0f0e2e]">
                  <img
                    src={project.preview}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Purple Accent */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#7c3aed]/30 to-transparent" />
                </div>
              )}

              {/* Card Content */}
              <div className="p-6">
                {/* Card Headers */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg text-white leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-[#a0aec0] font-dmSans text-xs mt-1">
                      {project.type}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0 mt-1">
                    {project.access && (
                      <a
                        href={project.access}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#a0aec0] hover:text-[#7c3aed] transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLinkIcon />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a0aec0] hover:text-[#7c3aed] transition-colors"
                      aria-label="View repository on GitHub"
                    >
                      <GitHubIcon />
                    </a>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-dmSans
                               border border-[#2e2a5e] text-[#7c3aed]
                               rounded-full bg-[#7c3aed]/5
                               group-hover:border-[#7c3aed]/50 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[#2e2a5e] mb-5" />

                {/* Highlights */}
                <ul className="space-y-2">
                  {project.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#7c3aed] flex-shrink-0" />
                      <span className="font-dmSans text-sm text-[#a0aec0] leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
