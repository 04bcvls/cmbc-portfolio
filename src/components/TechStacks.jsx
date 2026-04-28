import useInView from '../hooks/useInView';

const skills = [
  {
    category: 'Languages',
    icon: '{ }',
    items: [
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
      { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'Dart', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg' },
    ],
  },
  {
    category: 'Frameworks',
    icon: '⚙',
    items: [
      { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
    ],
  },
  {
    category: 'Databases & Backend',
    icon: '🗄',
    items: [
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'Supabase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
      { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
    ],
  },
  {
    category: 'Tools & Design',
    icon: '🛠',
    items: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'GitHub', logo: './assets/logo/github-white-icon.svg' },
      { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
      { name: 'Canva', logo: './assets/logo/canva-icon.svg' },
      { name: 'Adobe Premiere Pro', logo: './assets/logo/adobe-premiere-pro-icon.svg' },
      { name: 'Adobe After Effects', logo: './assets/logo/adobe-after-effects-icon.svg' },
    ],
  },
];

export default function TechStacks() {
  const [ref, inView] = useInView();

  return (
    <section
      id="tech-stacks"
      ref={ref}
      className={`py-24 bg-[#120f35] transition-all duration-700
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="w-full max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl border-l-4 border-[#7c3aed] pl-4">
            Skills
          </h2>
        </div>

        {/* 2×2 Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map(({ category, icon, items }) => (
            <div
              key={category}
              className="bg-[#1a1740] border border-[#2e2a5e] rounded-2xl p-6
                         hover:border-[#7c3aed]/40 transition-all duration-300 card-glow"
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-[#7c3aed]/15 border border-[#2e2a5e]
                                flex items-center justify-center text-base font-syne font-bold text-[#E1FFFF]">
                  {icon}
                </div>
                <h3 className="font-montserrat font-semibold text-base text-white">
                  {category}
                </h3>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item.name}
                    className="px-3 py-1.5 text-xs font-dmSans
                               border border-[#2e2a5e] text-[#b193e4]
                               rounded-full
                               hover:bg-[#7c3aed] hover:text-white hover:border-[#7c3aed]
                               transition-colors duration-200 cursor-default
                               flex items-center gap-2"
                  >
                    {item.logo && (
                      <img
                        src={item.logo}
                        alt={`${item.name} logo`}
                        className="w-4 h-4 object-contain"
                      />
                    )}
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
