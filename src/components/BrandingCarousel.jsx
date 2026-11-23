import { useCallback, useEffect, useRef, useState } from 'react';

export default function BrandingCarousel({ title, images }) {
  const trackRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const pendingTargetRef = useRef(null);
  const lastSettledRef = useRef(0);
  const rafRef = useRef(0);
  const settleTimerRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [statusMessage, setStatusMessage] = useState('');

  const total = images.length;

  const getNearestIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track || total <= 1) return 0;
    const width = track.clientWidth || 1;
    return Math.min(total - 1, Math.max(0, Math.round(track.scrollLeft / width)));
  }, [total]);

  const scrollToSlide = useCallback(
    (targetIndex) => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = Math.min(total - 1, Math.max(0, targetIndex));
      const targetSlide = track.children[clamped];
      if (!targetSlide) return;

      pendingTargetRef.current = clamped;
      setActiveIndex(clamped);

      const prefersReducedMotion =
        window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

      track.scrollTo({
        left: targetSlide.offsetLeft,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    },
    [total]
  );

  const handlePrev = () => {
    const base = pendingTargetRef.current ?? getNearestIndex();
    if (base > 0) {
      scrollToSlide(base - 1);
    }
  };

  const handleNext = () => {
    const base = pendingTargetRef.current ?? getNearestIndex();
    if (base < total - 1) {
      scrollToSlide(base + 1);
    }
  };

  // Redirect focus to the opposite button if the active button becomes disabled
  useEffect(() => {
    if (activeIndex === 0 && document.activeElement === prevBtnRef.current) {
      nextBtnRef.current?.focus();
    } else if (activeIndex === total - 1 && document.activeElement === nextBtnRef.current) {
      prevBtnRef.current?.focus();
    }
  }, [activeIndex, total]);

  // Reset scroll when switching to a different branding project
  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      track.scrollTo({ left: 0, behavior: 'auto' });
    }
    pendingTargetRef.current = null;
    lastSettledRef.current = 0;
    setActiveIndex(0);
    setStatusMessage('');
  }, [title]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const handleSettled = () => {
      const settled = getNearestIndex();
      pendingTargetRef.current = null;
      setActiveIndex(settled);
      if (settled !== lastSettledRef.current) {
        lastSettledRef.current = settled;
        setStatusMessage(`Slide ${settled + 1} of ${total}`);
      }
    };

    const supportsScrollEnd = 'onscrollend' in window;

    const onScroll = () => {
      if (pendingTargetRef.current === null && !rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = 0;
          const nearest = getNearestIndex();
          setActiveIndex((prev) => (prev === nearest ? prev : nearest));
        });
      }

      if (!supportsScrollEnd) {
        clearTimeout(settleTimerRef.current);
        settleTimerRef.current = setTimeout(handleSettled, 120);
      }
    };

    track.addEventListener('scroll', onScroll, { passive: true });
    if (supportsScrollEnd) {
      track.addEventListener('scrollend', handleSettled);
    }

    return () => {
      track.removeEventListener('scroll', onScroll);
      if (supportsScrollEnd) {
        track.removeEventListener('scrollend', handleSettled);
      }
      cancelAnimationFrame(rafRef.current);
      clearTimeout(settleTimerRef.current);
    };
  }, [getNearestIndex, total]);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={`${title} design gallery`}
      className="relative w-full bg-[#0f0e2e] border-b border-[#2e2a5e]"
    >
      {/* Previous / Next Controls (before track in DOM order) */}
      {total > 1 && (
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-between px-3">
          <button
            ref={prevBtnRef}
            type="button"
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous design slide"
            className="pointer-events-auto touch-manipulation w-10 h-10 rounded-full
                       bg-[#0d0b2b]/85 border border-[#2e2a5e] text-white
                       flex items-center justify-center backdrop-blur-sm
                       hover:bg-[#7c3aed] hover:border-[#7c3aed]
                       disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:bg-[#0d0b2b]/85 disabled:hover:border-[#2e2a5e]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0e2e]
                       transition-colors duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            ref={nextBtnRef}
            type="button"
            onClick={handleNext}
            disabled={activeIndex === total - 1}
            aria-label="Next design slide"
            className="pointer-events-auto touch-manipulation w-10 h-10 rounded-full
                       bg-[#0d0b2b]/85 border border-[#2e2a5e] text-white
                       flex items-center justify-center backdrop-blur-sm
                       hover:bg-[#7c3aed] hover:border-[#7c3aed]
                       disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:bg-[#0d0b2b]/85 disabled:hover:border-[#2e2a5e]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0e2e]
                       transition-colors duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      )}

      {/* Slide Counter Pill */}
      {total > 1 && (
        <div className="pointer-events-none absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-[#0d0b2b]/80 border border-[#2e2a5e] backdrop-blur-sm text-xs font-dmSans text-[#E1FFFF]">
          {activeIndex + 1} / {total}
        </div>
      )}

      {/* Scrollable Snap Track */}
      <div
        ref={trackRef}
        tabIndex={0}
        role="group"
        aria-label="Design slides"
        className="branding-carousel-track focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed] focus-visible:ring-inset"
      >
        {images.map((img, idx) => (
          <div
            key={img.src}
            role="group"
            aria-roledescription="slide"
            aria-label={`${idx + 1} of ${total}`}
            className="branding-carousel-slide relative h-64 sm:h-80 md:h-[420px] flex items-center justify-center bg-[#0b0924] p-2 sm:p-4"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg select-none"
            />
          </div>
        ))}
      </div>

      {/* Visually Hidden Status Region */}
      <p className="sr-only" role="status" aria-live="polite">
        {statusMessage}
      </p>

      {/* Slide Caption + Marker Dots */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-5 py-3 bg-[#141136] border-t border-[#2e2a5e]/70">
        <p className="font-dmSans text-xs text-[#a0aec0] truncate max-w-full">
          {images[activeIndex]?.caption}
        </p>

        {total > 1 && (
          <nav aria-label="Choose a design slide" className="flex items-center gap-1.5 flex-shrink-0">
            {images.map((img, idx) => {
              const isCurrent = idx === activeIndex;
              return (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => scrollToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}: ${img.caption}`}
                  aria-current={isCurrent ? 'true' : undefined}
                  className="touch-manipulation min-w-[24px] min-h-[24px] flex items-center justify-center rounded-full
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed] cursor-pointer"
                >
                  <span
                    className={`block h-2 rounded-full transition-all duration-200 ${
                      isCurrent
                        ? 'w-6 bg-[#7c3aed] ring-1 ring-[#b193e4]'
                        : 'w-2 bg-[#a0aec0]/50 hover:bg-white/80'
                    }`}
                  />
                </button>
              );
            })}
          </nav>
        )}
      </div>
    </div>
  );
}
