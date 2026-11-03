import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// Shared motion for the site. Keyframes live in index.css, and everything here
// stands still for visitors who have Reduce Motion turned on.

export const usePrefersReducedMotion = () => {
  const query = '(prefers-reduced-motion: reduce)';
  const [reduced, setReduced] = useState(() => window.matchMedia?.(query).matches ?? false);
  useEffect(() => {
    const mq = window.matchMedia?.(query);
    if (!mq) return undefined;
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
};

/**
 * Phone-shaped screenshot carousel. Advances on its own every `interval` ms
 * (the active dot fills up as it goes), pauses while hovered or focused and
 * while the tab is hidden, and never auto-advances under Reduce Motion.
 */
export const ScreenshotCarousel = ({
  images,
  interval = 4000,
  frameClass = 'bg-gray-900',
  activeDot = 'bg-gb-orange',
  inactiveDot = 'bg-gray-400/70 hover:bg-gray-500/80',
  imageClass = 'object-cover object-top',
  float = true,
  floatDelay = 0,
  startAt = 0,
  controls = true,
}) => {
  const [current, setCurrent] = useState(startAt % images.length);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const autoplay = !reduced && !paused;

  useEffect(() => {
    if (!autoplay) return undefined;
    const timer = setTimeout(() => setCurrent((i) => (i + 1) % images.length), interval);
    return () => clearTimeout(timer);
  }, [autoplay, current, interval, images.length]);

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  const go = (i) => setCurrent((i + images.length) % images.length);

  return (
    <div
      className={float ? 'motion-float' : undefined}
      style={float ? { animationDelay: `${floatDelay}s` } : undefined}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className={`relative ${frameClass} rounded-3xl shadow-2xl overflow-hidden`}>
        <div className="relative aspect-[9/19.5]" aria-live="polite">
          {images.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              aria-hidden={index !== current}
              loading={index === startAt ? 'eager' : 'lazy'}
              className={`absolute inset-0 w-full h-full ${imageClass} transition-all duration-700 ease-out ${
                index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.04]'
              }`}
            />
          ))}
        </div>

        {controls && (
          <>
            <button
              onClick={() => go(current - 1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Previous screenshot"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
              onClick={() => go(current + 1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Next screenshot"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </>
        )}

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((image, index) => (
            <button
              key={image.src}
              onClick={() => go(index)}
              className={`relative h-2 rounded-full overflow-hidden transition-all duration-300 ${
                index === current ? 'w-8 bg-white/50' : `w-2 ${inactiveDot}`
              }`}
              aria-label={`Go to screenshot ${index + 1}`}
              aria-current={index === current}
            >
              {index === current && (
                <span
                  key={`${current}-${autoplay}`}
                  className={`absolute inset-y-0 left-0 ${activeDot} ${autoplay ? 'motion-progress' : 'w-full'}`}
                  style={autoplay ? { animationDuration: `${interval}ms` } : undefined}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Fades its children up into place the first time they scroll into view.
 * Renders as any element (`as`), so a whole <section> can be wrapped.
 */
export const Reveal = ({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || !('IntersectionObserver' in window)) {
      setShown(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`motion-reveal ${shown ? 'motion-reveal-in' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

/**
 * The homepage's audio waveform: 80 bars that breathe at different speeds.
 * `from` / `to` are RGB triples for the left-to-right color blend.
 */
export const Waveform = ({ from = [59, 130, 246], to = [34, 197, 94], opacity = 0.18 }) => (
  <div className="absolute inset-0 pointer-events-none flex items-center" aria-hidden="true">
    <div className="w-full flex items-center justify-center gap-[4px] sm:gap-[6px] px-4">
      {Array.from({ length: 80 }).map((_, i) => {
        const center = 40;
        const dist = Math.abs(i - center) / center;
        const baseHeight = Math.max(0.15, 1 - dist * dist);
        const variation = Math.sin(i * 0.7) * 0.3 + Math.sin(i * 1.3) * 0.2;
        const minScale = Math.max(0.08, (baseHeight + variation) * 0.25);
        const maxScale = Math.max(0.15, (baseHeight + variation) * 1.0);
        const duration = 1.5 + Math.sin(i * 0.5) * 0.8;
        const delay = (i * 0.06) % 2;
        const t = i / 79;
        const [r, g, b] = from.map((c, k) => Math.round(c + t * (to[k] - c)));
        return (
          <div
            key={i}
            className="rounded-full motion-wave"
            style={{
              width: '8px',
              height: '200px',
              backgroundColor: `rgba(${r}, ${g}, ${b}, ${opacity})`,
              '--wave-min': minScale,
              '--wave-max': maxScale,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  </div>
);

// Fixed positions (percent of the hero) so the layout is the same on every visit.
const PINS = [
  [8, 22], [18, 68], [27, 38], [36, 82], [44, 14], [52, 55],
  [61, 30], [69, 74], [77, 18], [84, 48], [91, 80], [95, 28],
];

/** Hotspot pins on a faint map, each sending out a slow "ping" ring. */
export const PinPings = ({ color = '#21452B', accent = '#F29430' }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
    {PINS.map(([x, y], i) => {
      const c = i % 4 === 1 ? accent : color;
      return (
        <span key={i} className="absolute" style={{ left: `${x}%`, top: `${y}%` }}>
          <span
            className="absolute -left-6 -top-6 h-12 w-12 rounded-full border-2 motion-ping"
            style={{ borderColor: c, animationDelay: `${(i * 0.7) % 4.2}s` }}
          />
          <span className="absolute -left-1.5 -top-1.5 h-3 w-3 rounded-full" style={{ backgroundColor: c, opacity: 0.35 }} />
        </span>
      );
    })}
  </div>
);

/** A field of softly twinkling stars, a few of them four-pointed sparkles. */
export const StarField = ({ color = '#D97706', count = 46 }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
    {Array.from({ length: count }).map((_, i) => {
      const x = (i * 37.3) % 100;
      const y = (i * 61.7 + (i % 3) * 13) % 100;
      const sparkle = i % 7 === 0;
      const size = sparkle ? 16 : 4 + (i % 3) * 2;
      return (
        <span
          key={i}
          className="absolute motion-twinkle"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: size,
            height: size,
            animationDuration: `${2.6 + (i % 5) * 0.7}s`,
            animationDelay: `${(i * 0.37) % 3}s`,
          }}
        >
          {sparkle ? (
            <svg viewBox="0 0 24 24" className="h-full w-full" fill={color}>
              <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
            </svg>
          ) : (
            <span className="block h-full w-full rounded-full" style={{ backgroundColor: color }} />
          )}
        </span>
      );
    })}
  </div>
);
