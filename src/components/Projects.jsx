import { useEffect, useId, useRef, useState } from 'react';
import useInView from '../hooks/useInView';
import BrandingCarousel from './BrandingCarousel';

const ITEMS_PER_PAGE = 4;

const buildFacebookEmbedUrl = (videoUrl) =>
  `https://www.facebook.com/plugins/video.php?height=314&href=${encodeURIComponent(videoUrl)}&show_text=false&width=560&t=0`;

const projectCategories = [
  {
    id: 'audio-visual',
    label: 'Audio-Visual',
    emptyMessage: 'Audio-Visual projects coming soon.',
    projects: [
      {
        id: '2354909978316728',
        title: 'IT WEEK 2026 HIGHLIGHTS',
        type: 'ADDU CSSEC',
        year: '2026',
        access: 'https://web.facebook.com/reel/2354909978316728',
      },
      {
        id: '1488473429300354',
        title: 'IT WEEK 2026 WELCOMING VIDEO',
        type: 'ADDU CSSEC',
        year: '2026',
        access: 'https://web.facebook.com/reel/1488473429300354',
      },
      {
        id: '1290798149196591',
        title: 'WHY DATA SCIENCE?',
        type: 'ADDU CSSEC PROMOTION VIDEO 2025',
        year: '2025',
        access: 'https://web.facebook.com/reel/1290798149196591',
      },
      {
        id: '1272035751598398',
        title: 'WHY COMPUTER SCIENCE?',
        type: 'ADDU CSSEC PROMOTION VIDEO 2025',
        year: '2025',
        access: 'https://web.facebook.com/reel/1272035751598398',
      },
      {
        id: '1151565683678719',
        title: 'WHY DATA SCIENCE?',
        type: 'ADDU CSSEC PROMOTION VIDEO 2025',
        year: '2025',
        access: 'https://web.facebook.com/reel/1151565683678719',
      },
      {
        id: '4157366377916829',
        title: 'WHY INFORMATION SYSTEMS?',
        type: 'ADDU CSSEC PROMOTION VIDEO 2025',
        year: '2025',
        access: 'https://web.facebook.com/reel/4157366377916829',
      },
      {
        id: '9398423373583063',
        title: 'IT WEEK 2025 HIGHLIGHTS',
        type: 'ADDU CSSEC',
        year: '2025',
        access: 'https://web.facebook.com/reel/9398423373583063',
      },
      {
        id: '1920848721817155',
        title: 'IT WEEK 2025 WELCOMING VIDEO',
        type: 'ADDU CSSEC',
        year: '2025',
        access: 'https://web.facebook.com/reel/1920848721817155',
      },
      {
        id: '2844158472410438',
        title: 'IT WEEK 2025 TRAILER',
        type: 'ADDU CSSEC',
        year: '2025',
        access: 'https://web.facebook.com/reel/2844158472410438',
      },
      {
        id: '8012975128794555',
        title: 'NDC RAYANA 2024 MUSIC VIDEO',
        type: 'NDC OPENING DAY 2024',
        year: '2024',
        access: 'https://web.facebook.com/reel/8012975128794555',
      },
      {
        id: '1606950986528597',
        title: 'NDC RAYANA 2024 NAME REVEAL',
        type: 'NDC OPENING DAY 2024',
        year: '2024',
        access: 'https://web.facebook.com/reel/1606950986528597',
      },
      {
        id: '7635949963179954',
        title: 'NDC RAYANA 2024 TEASER',
        type: 'NDC OPENING DAY 2024',
        year: '2024',
        access: 'https://web.facebook.com/reel/7635949963179954',
      },
      {
        id: '1432353797516626',
        title: 'NDC HIWAGA 2023 HIGHLIGHTS',
        type: 'NDC HIGH SCHOOL DAYS 2023',
        year: '2023',
        access: 'https://web.facebook.com/reel/1432353797516626',
      },
      {
        id: '494792776198486',
        title: 'NDC LUMTUVI 2023 FINAL TRAILER',
        type: 'NDC INTRAMURALS 2023',
        year: '2023',
        access: 'https://web.facebook.com/reel/494792776198486',
      },
      {
        id: '713073977187592',
        title: 'LUMTUVI 2023 TEASER',
        type: 'NDC INTRAMURALS 2023',
        year: '2023',
        access: 'https://web.facebook.com/reel/713073977187592',
      },
      {
        id: '525436829000454',
        title: 'KHAJINA 2022 TRAILER',
        type: 'LTS-W 2022',
        year: '2022',
        access: 'https://web.facebook.com/reel/525436829000454',
      },
      {
        id: '1415672805604747',
        title: 'QUERENCIA 2022 MUSIC VIDEO',
        type: 'NDC OPENING DAY 2022',
        year: '2022',
        access: 'https://web.facebook.com/reel/1415672805604747',
      },
      {
        id: '740697060370155',
        title: 'QUERENCIA 2022 TRAILER',
        type: 'NDC OPENING DAY 2022',
        year: '2022',
        access: 'https://web.facebook.com/reel/740697060370155',
      },
      {
        id: '187723100016266',
        title: 'MARISTAS GKNB?',
        type: 'NDC OPENING DAY 2021',
        year: '2021',
        access: 'https://web.facebook.com/reel/187723100016266',
      },
    ],
  },
  {
    id: 'brand-design',
    label: 'Brand Design',
    itemsPerPage: 1,
    itemLabel: 'brand designs',
    emptyMessage: 'Brand Design projects coming soon.',
    projects: [
      {
        id: 'msp-convention-2026',
        title: 'MSP Convention Website',
        type: 'Mathematical Society of the Philippines Research Convention 2026',
        year: '2026',
        tech: ['Web Design', 'Visual Branding', 'Publication Materials', 'Social Media'],
        access:
          'https://msp-convention-website.vercel.app/',
        images: [
          {
            src: '/assets/designs/msp/slice-1.png',
            alt: 'MSP Research Convention 2026 Website and Branding Overview',
            caption: 'Official Convention Website & Visual Identity Overview',
          },
          {
            src: '/assets/designs/msp/programs-and-speakers.png',
            alt: 'MSP Research Convention 2026 Programs and Speakers Layout',
            caption: 'Programs & Speakers Publication Material',
          },
        ],
        highlights: [
          'Designed and deployed the official Mathematical Society of the Philippines Research Convention 2026 website with responsive user interfaces and modular event sections.',
          'Spearheaded the convention’s visual branding direction, producing cohesive publication materials and promotional assets across social media channels.',
          'Structured program and speaker showcases to present convention schedules, sessions, and keynote details with visual clarity.',
        ],
      },
      {
        id: 'addams-branding-2026',
        title: 'Ateneo de Davao Mathematics Society 2026 Branding',
        type: 'Ateneo de Davao Mathematics Society (AdDAMS) 2026–2027',
        year: '2026–2027',
        tech: ['Brand Identity', 'Visual Direction', 'Social Media Kit'],
        access:
          'https://web.facebook.com/addamsmath/posts/pfbid02yXVJEN3HNMhFbNn2sK6iZ2eyfwnBqBbSbBT6wKGvos3w2F2D8HFqrcU9jX9vxuPZl',
        images: [
          {
            src: '/assets/designs/addams/slice-1.png',
            alt: 'AdDAMS 2026-2027 Refined Logic Branding Showcase 1',
            caption: 'Refined Logic: Molded Beyond Limits — Brand Identity Showcase I',
          },
          {
            src: '/assets/designs/addams/slice-2.png',
            alt: 'AdDAMS 2026-2027 Refined Logic Branding Showcase 2',
            caption: 'Refined Logic: Molded Beyond Limits — Brand Identity Showcase II',
          },
          {
            src: '/assets/designs/addams/presentation-of-projects.jpg',
            alt: 'AdDAMS 2026-2027 Presentation of Projects Visual',
            caption: 'Presentation of Projects — Organizational Event Visual',
          },
        ],
        highlights: [
          'Anchored on the theme “Refined Logic: Molded Beyond Limits”, creating meaningful impact through mathematics.',
          'Developed the 2026–2027 organizational visual identity for AdDAMS, spanning brand launch collaterals, project presentations, and social media announcements.',
          'Combined structured visual hierarchy and bold typography so every idea feels refined and every possibility goes beyond limits.',
        ],
      },
      {
        id: 'addu-psq-2026',
        title: 'ADDU Philippine Statistics Quiz 2026 Eliminations Branding',
        type: 'PSQ AdDU Eliminations 2026',
        year: '2026',
        tech: ['Event Branding', 'Cover Banner', 'Display Profile Assets'],
        access:
          'https://web.facebook.com/addamsmath/posts/1056322443822796:1690680598660144',
        images: [
          {
            src: '/assets/designs/addu-psq-2026/cover-photo-1.png',
            alt: 'PSQ AdDU Eliminations 2026 Official Cover Photo',
            caption: 'PSQ AdDU Eliminations 2026 — Official Event Cover Photo',
          },
          {
            src: '/assets/designs/addu-psq-2026/dp-01.png',
            alt: 'PSQ AdDU Eliminations 2026 Display Profile Design',
            caption: 'PSQ AdDU Eliminations 2026 — Official Display Profile',
          },
        ],
        highlights: [
          'Crafted the official event branding for the Philippine Statistics Quiz AdDU Eliminations 2026.',
          'Designed high-impact promotional collaterals including the official cover banner and display profile to capture the analytical rigor and competitive energy of the quiz.',
          'Built a cohesive visual identity supporting the university eliminations as top participants compete to represent Ateneo de Davao University on the provincial stage.',
        ],
      },
    ],
  },
  {
    id: 'app-development',
    label: 'App Development',
    emptyMessage: 'App Development projects will appear here.',
    projects: [
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
    ],
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
  const [activeCategory, setActiveCategory] = useState(projectCategories[0].id);
  const [pageByCategory, setPageByCategory] = useState({});
  const baseId = useId();
  const tablistRef = useRef(null);
  const tabRefs = useRef({});
  const panelRefs = useRef({});

  // Sync hidden="until-found" on inactive panels and handle find-in-page beforematch
  useEffect(() => {
    const cleanups = [];

    projectCategories.forEach((category) => {
      const panel = panelRefs.current[category.id];
      if (!panel) return;

      if (category.id === activeCategory) {
        panel.removeAttribute('hidden');
      } else {
        panel.setAttribute('hidden', 'until-found');
      }

      const handleBeforeMatch = () => {
        setActiveCategory(category.id);
      };

      panel.addEventListener('beforematch', handleBeforeMatch);
      cleanups.push(() => panel.removeEventListener('beforematch', handleBeforeMatch));
    });

    return () => cleanups.forEach((fn) => fn());
  }, [activeCategory]);

  // IntersectionObserver fallback for tablist edge fades when scroll-driven animations are unsupported
  useEffect(() => {
    const scroller = tablistRef.current;
    if (!scroller || CSS.supports('animation-timeline', 'scroll()')) return;

    const first = scroller.firstElementChild;
    const last = scroller.lastElementChild;
    if (!first || !last) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const { target, intersectionRatio } of entries) {
          scroller.classList.toggle(
            target === first ? 'more-start' : 'more-end',
            intersectionRatio < 1
          );
        }
      },
      { root: scroller, threshold: 1, rootMargin: '1px' }
    );

    observer.observe(first);
    observer.observe(last);

    return () => observer.disconnect();
  }, []);

  const selectCategory = (categoryId, moveFocus = false) => {
    setActiveCategory(categoryId);
    const tabEl = tabRefs.current[categoryId];
    if (tabEl) {
      tabEl.scrollIntoView({ block: 'nearest', inline: 'nearest', container: 'nearest' });
      if (moveFocus) {
        tabEl.focus();
      }
    }
  };

  const setCategoryPage = (categoryId, nextPage) => {
    setPageByCategory((prev) => ({ ...prev, [categoryId]: nextPage }));
    if (tablistRef.current) {
      tablistRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  const handleTabKeyDown = (event, currentIndex) => {
    const lastIndex = projectCategories.length - 1;
    let nextIndex = null;

    if (event.key === 'ArrowRight') {
      nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
    } else if (event.key === 'ArrowLeft') {
      nextIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = lastIndex;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      selectCategory(projectCategories[nextIndex].id, true);
    }
  };

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-24 transition-all duration-700
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="w-full max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl border-l-4 border-[#7c3aed] pl-4">
            Projects
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="border-b border-[#2e2a5e] mb-10">
          <div
            ref={tablistRef}
            role="tablist"
            aria-label="Project categories"
            className="project-tablist gap-1"
          >
            {projectCategories.map((category, index) => {
              const isSelected = activeCategory === category.id;
              const tabId = `${baseId}-tab-${category.id}`;

              return (
                <button
                  key={category.id}
                  ref={(el) => {
                    tabRefs.current[category.id] = el;
                  }}
                  type="button"
                  id={tabId}
                  role="tab"
                  aria-selected={isSelected}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => selectCategory(category.id)}
                  onKeyDown={(e) => handleTabKeyDown(e, index)}
                  className="project-tab inline-flex items-center gap-2.5 px-5 py-3.5
                             font-montserrat font-semibold text-sm tracking-wide whitespace-nowrap
                             text-[#a0aec0] hover:text-white rounded-t-lg
                             transition-colors duration-200
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed] focus-visible:ring-inset"
                >
                  <span>{category.label}</span>
                  {/* <span
                    className={`px-2 py-0.5 text-xs font-dmSans rounded-full border transition-colors duration-200
                      ${isSelected
                        ? 'bg-[#7c3aed]/20 border-[#7c3aed]/60 text-white'
                        : 'bg-[#1a1740] border-[#2e2a5e] text-[#b193e4]'}`}
                  >
                    {category.projects.length}
                  </span> */}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Panels (stacked in one grid cell so hidden="until-found" adds no gap) */}
        <div className="grid">
          {projectCategories.map((category) => {
            const isSelected = activeCategory === category.id;
            const tabId = `${baseId}-tab-${category.id}`;
            const isAudioVisual = category.id === 'audio-visual';
            const isBrandDesign = category.id === 'brand-design';
            const perPage = category.itemsPerPage || ITEMS_PER_PAGE;
            const itemLabel = category.itemLabel || (isAudioVisual ? 'videos' : 'projects');
            const totalItems = category.projects.length;
            const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
            const currentPage = Math.min(pageByCategory[category.id] || 1, totalPages);
            const startIndex = (currentPage - 1) * perPage;
            const visibleProjects = category.projects.slice(
              startIndex,
              startIndex + perPage
            );
            const hasFocusableItems =
              isBrandDesign ||
              visibleProjects.some((project) => project.access || project.github);

            return (
              <div
                key={category.id}
                ref={(el) => {
                  panelRefs.current[category.id] = el;
                }}
                role="tabpanel"
                aria-labelledby={tabId}
                hidden={!isSelected}
                tabIndex={isSelected && !hasFocusableItems ? 0 : undefined}
                className={`col-start-1 row-start-1 min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed] rounded-2xl ${
                  isSelected ? 'relative z-10' : 'pointer-events-none'
                }`}
              >
                <div className="min-w-0">
                  {totalItems > 0 ? (
                    <>
                      <div
                        className={`grid gap-6 ${
                          isBrandDesign ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
                        }`}
                      >
                        {visibleProjects.map((project) => (
                          <div
                            key={project.id || project.title}
                            className="bg-[#1a1740] border border-[#2e2a5e] rounded-2xl overflow-hidden
                                       hover:-translate-y-1 transition-all duration-300
                                       card-glow group flex flex-col"
                          >
                            {/* Brand Design Image Carousel */}
                            {isBrandDesign && project.images && project.images.length > 0 && (
                              <BrandingCarousel title={project.title} images={project.images} />
                            )}

                            {/* Embedded Facebook Video (Audio-Visual) */}
                            {isAudioVisual && project.access && (
                              <div className="relative w-full aspect-video bg-black overflow-hidden border-b border-[#2e2a5e] flex items-center justify-center">
                                {isSelected && (
                                  <iframe
                                    src={buildFacebookEmbedUrl(project.access)}
                                    title={project.title}
                                    className="w-full h-full border-0"
                                    scrolling="no"
                                    loading="lazy"
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    allowFullScreen
                                  />
                                )}
                              </div>
                            )}

                            {/* Preview Image (Non-video, non-carousel projects) */}
                            {!isAudioVisual && !isBrandDesign && project.preview && (
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
                            <div className="p-6 flex flex-col flex-1">
                              {/* Card Headers */}
                              <div className="flex items-start justify-between gap-4 mb-4">
                                <div>
                                  <h3 className="font-montserrat font-semibold text-base sm:text-lg text-white leading-snug">
                                    {project.title}
                                  </h3>
                                  <p className="text-[#a0aec0] font-dmSans text-xs mt-1">
                                    {project.type}
                                  </p>
                                </div>
                                {(project.access || project.github) && (
                                  <div className="flex gap-2 flex-shrink-0 mt-1">
                                    {project.access && (
                                      <a
                                        href={project.access}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#a0aec0] hover:text-[#7c3aed] transition-colors"
                                        aria-label={
                                          isAudioVisual
                                            ? `Watch ${project.title} on Facebook`
                                            : isBrandDesign
                                              ? `View ${project.title} Facebook post`
                                              : `View ${project.title} live project`
                                        }
                                        title={
                                          isAudioVisual
                                            ? 'Watch on Facebook'
                                            : isBrandDesign
                                              ? 'View external post'
                                              : 'View live project'
                                        }
                                      >
                                        <ExternalLinkIcon />
                                      </a>
                                    )}
                                    {project.github && (
                                      <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#a0aec0] hover:text-[#7c3aed] transition-colors"
                                        aria-label={`View ${project.title} repository on GitHub`}
                                        title="View repository on GitHub"
                                      >
                                        <GitHubIcon />
                                      </a>
                                    )}
                                  </div>
                                )}
                              </div>

                              {/* Audio-Visual Metadata Pills */}
                              {isAudioVisual && (
                                <div className="flex flex-wrap items-center gap-2 mt-auto pt-3 border-t border-[#2e2a5e]">
                                  {project.year && (
                                    <span
                                      className="px-3 py-1 text-xs font-dmSans
                                                 border border-[#2e2a5e] text-[#b193e4]
                                                 rounded-full bg-[#7c3aed]/5
                                                 group-hover:border-[#7c3aed]/50 transition-colors"
                                    >
                                      {project.year}
                                    </span>
                                  )}
                                  <span
                                    className="px-3 py-1 text-xs font-dmSans
                                               border border-[#2e2a5e] text-[#a0aec0]
                                               rounded-full bg-[#0f0e2e]/60"
                                  >
                                    Facebook Reel
                                  </span>
                                </div>
                              )}

                              {/* Tech / Tool Badges */}
                              {project.tech && project.tech.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-5">
                                  {project.tech.map((t) => (
                                    <span
                                      key={t}
                                      className="px-3 py-1 text-xs font-dmSans
                                               border border-[#2e2a5e] text-[#b193e4]
                                               rounded-full bg-[#7c3aed]/5
                                               group-hover:border-[#7c3aed]/50 transition-colors"
                                    >
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              )}

                              {/* Divider & Highlights */}
                              {project.highlights && project.highlights.length > 0 && (
                                <>
                                  <div className="w-full h-px bg-[#2e2a5e] mb-5" />
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
                                </>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Pagination Controls */}
                      {totalPages > 1 && (
                        <nav
                          aria-label={`${category.label} pagination`}
                          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#2e2a5e]"
                        >
                          <p className="font-dmSans text-xs text-[#a0aec0]">
                            Showing{' '}
                            <span className="text-white font-medium">
                              {perPage === 1
                                ? `${startIndex + 1}`
                                : `${startIndex + 1}–${Math.min(startIndex + perPage, totalItems)}`}
                            </span>{' '}
                            of <span className="text-white font-medium">{totalItems}</span>{' '}
                            {itemLabel}
                          </p>

                          <div className="flex items-center gap-2 flex-wrap justify-center">
                            <button
                              type="button"
                              onClick={() => setCategoryPage(category.id, currentPage - 1)}
                              disabled={currentPage === 1}
                              className="px-3.5 py-2 text-xs font-montserrat font-semibold rounded-lg
                                         bg-[#1a1740] border border-[#2e2a5e] text-[#a0aec0]
                                         hover:text-white hover:border-[#7c3aed]
                                         disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-[#2e2a5e] disabled:hover:text-[#a0aec0]
                                         transition-colors duration-200"
                            >
                              Prev
                            </button>

                            {Array.from({ length: totalPages }, (_, idx) => {
                              const pageNum = idx + 1;
                              const isCurrent = pageNum === currentPage;

                              return (
                                <button
                                  key={pageNum}
                                  type="button"
                                  onClick={() => setCategoryPage(category.id, pageNum)}
                                  aria-current={isCurrent ? 'page' : undefined}
                                  className={`w-9 h-9 text-xs font-montserrat font-semibold rounded-lg border transition-all duration-200
                                    ${isCurrent
                                      ? 'bg-[#7c3aed] border-[#7c3aed] text-white shadow-[0_0_16px_rgba(124,58,237,0.45)]'
                                      : 'bg-[#1a1740] border-[#2e2a5e] text-[#a0aec0] hover:text-white hover:border-[#7c3aed]'}`}
                                >
                                  {pageNum}
                                </button>
                              );
                            })}

                            <button
                              type="button"
                              onClick={() => setCategoryPage(category.id, currentPage + 1)}
                              disabled={currentPage === totalPages}
                              className="px-3.5 py-2 text-xs font-montserrat font-semibold rounded-lg
                                         bg-[#1a1740] border border-[#2e2a5e] text-[#a0aec0]
                                         hover:text-white hover:border-[#7c3aed]
                                         disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-[#2e2a5e] disabled:hover:text-[#a0aec0]
                                         transition-colors duration-200"
                            >
                              Next
                            </button>
                          </div>
                        </nav>
                      )}
                    </>
                  ) : (
                    <div className="bg-[#1a1740] border border-dashed border-[#2e2a5e] rounded-2xl p-10 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#7c3aed]/15 border border-[#2e2a5e] flex items-center justify-center text-[#b193e4] font-montserrat font-bold text-lg">
                        +
                      </div>
                      <h3 className="font-montserrat font-semibold text-base text-white mb-1">
                        {category.label}
                      </h3>
                      <p className="font-dmSans text-sm text-[#a0aec0]">
                        {category.emptyMessage}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
