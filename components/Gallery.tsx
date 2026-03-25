'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { key: 'p1', image: '/gallery/Rabat.webp',       tag: 'residential'  },
  { key: 'p2', image: '/gallery/fes.webp',          tag: 'agricultural' },
  { key: 'p3', image: '/gallery/casa.webp',         tag: 'industrial'   },
  { key: 'p4', image: '/gallery/meknas.webp',       tag: 'community'    },
  { key: 'p5', image: '/gallery/Marrakech.webp',    tag: 'cooperative'  },
  { key: 'p6', image: '/gallery/Ouarzazate.webp',   tag: 'rural'        },
];

type Project = typeof projects[number];

function Modal({ project, onClose, isRTL }: { project: Project; onClose: () => void; isRTL: boolean }) {
  const t = useTranslations('gallery');
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'power2.out' });
    gsap.fromTo(panelRef.current, { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.38, ease: 'power2.out' });
    return () => { document.body.style.overflow = ''; };
  }, []);

  const close = () => {
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.2 });
    gsap.to(panelRef.current, { opacity: 0, x: 20, duration: 0.2, onComplete: onClose });
  };

  const features: string[] = t.raw(`${project.key}.features`) as string[];

  const stats = [
    { label: t('modalCapacity'), value: t(`${project.key}.capacity`) },
    { label: t('modalLocation'),  value: t(`${project.key}.location`)  },
    { label: t('modalYear'),      value: t(`${project.key}.year`)      },
    { label: t('modalSavings'),   value: t(`${project.key}.savings`)   },
  ];

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div
        ref={panelRef}
        className="relative bg-white rounded-3xl overflow-hidden w-full"
        style={{ maxWidth: '880px', maxHeight: '92vh', boxShadow: '0 32px 80px rgba(0,0,0,0.18)' }}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="flex flex-col sm:flex-row" style={{ maxHeight: '92vh' }}>

          {/* ── Left: image ── */}
          <div className="relative sm:w-[45%] flex-shrink-0" style={{ minHeight: '240px' }}>
            <Image
              src={project.image}
              alt={t(`${project.key}.title`)}
              fill
              className="object-cover"
              sizes="420px"
            />
            {/* Bottom gradient mobile only */}
            <div className="absolute inset-0 sm:hidden bg-gradient-to-t from-black/40 to-transparent" />

            {/* Year badge — bottom left */}
            <div className="absolute bottom-4 left-4 hidden sm:block">
              <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                {t(`${project.key}.year`)}
              </span>
            </div>
          </div>

          {/* ── Right: content ── */}
          <div className={`flex flex-col flex-1 overflow-y-auto ${isRTL ? 'text-right' : ''}`}>

            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-5 right-5 z-10 w-9 h-9 bg-white border border-gray-200 hover:border-gray-300 rounded-full flex items-center justify-center transition-all duration-150 text-gray-400 hover:text-gray-700 shadow-sm"
              style={{ fontSize: '20px', lineHeight: 1 }}
              aria-label="Fermer"
            >
              ×
            </button>

            {/* Scrollable inner */}
            <div className="px-8 pt-8 pb-8 flex flex-col gap-5 flex-1">

              {/* Tag */}
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#26ab52' }}>
                {t(`${project.tag}Tag`)}
              </span>

              {/* Title */}
              <h3 className="font-display font-black text-gray-950 leading-[1.05] tracking-tight -mt-2"
                style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)' }}>
                {t(`${project.key}.title`)}
              </h3>

              {/* Divider */}
              <div className="h-px bg-gray-100 -mx-1" />

              {/* Description */}
              <div>
                <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">
                  {t('modalDescLabel')}
                </p>
                <p className="text-gray-500 text-[13.5px] leading-[1.75] font-light">
                  {t(`${project.key}.desc`)}
                </p>
              </div>

              {/* Features */}
              <div>
                <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2.5">
                  {t('modalFeaturesLabel')}
                </p>
                <div className={`flex flex-wrap gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {features.map((f) => (
                    <span key={f} className="border border-gray-200 text-gray-600 text-[12px] font-medium px-3.5 py-1.5 rounded-full bg-white hover:border-gray-300 transition-colors">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-100 -mx-1" />

              {/* Stats — 4 cells inline */}
              <div className="grid grid-cols-4 gap-0 -mx-1">
                {stats.map(({ label, value }, i) => (
                  <div
                    key={label}
                    className={`px-1 ${i > 0 ? 'border-l border-gray-100' : ''} ${isRTL ? 'text-right' : ''}`}
                  >
                    <p className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-1">{label}</p>
                    <p className="font-black text-gray-900 text-[15px] leading-tight">{value}</p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-100 -mx-1" />

              {/* CTA */}
              <a
                href="https://wa.me/212636227511"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full py-3.5 rounded-2xl font-bold text-[14px] text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.01]"
                style={{ background: 'linear-gradient(135deg, #26ab52 0%, #1e8f43 100%)' }}
              >
                {t('modalCta')}
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const t = useTranslations('gallery');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const [selected, setSelected] = useState<Project | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%' } }
      );
      if (gridRef.current) {
        gsap.fromTo(
          Array.from(gridRef.current.children),
          { opacity: 0, y: 32, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.1, ease: 'power2.out',
            scrollTrigger: { trigger: gridRef.current, start: 'top 82%' } }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!selected) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelected(null); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selected]);

  return (
    <>
      <section ref={sectionRef} className="relative bg-white overflow-hidden">

        {/* Subtle dot background */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(38,171,82,0.07) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }} />

        {/* Section header */}
        <div className={`relative border-b border-gray-100 px-6 sm:px-12 lg:px-20 py-5 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
          <span className="text-gray-400 text-[11px] tracking-[0.2em] uppercase font-medium">
            {t('sectionBadge')}
          </span>
          <span className="text-gray-300 text-[11px] tracking-[0.15em] uppercase hidden sm:block">
            {t('sectionCount')}
          </span>
        </div>

        {/* Title */}
        <div ref={titleRef} className={`relative px-6 sm:px-12 lg:px-20 pt-16 pb-12 ${isRTL ? 'text-right' : ''}`}>
          <h2 className="font-display font-black text-gray-950 leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(2rem, 3.8vw, 3.6rem)' }}>
            {t('title1')}<br />
            <span style={{ color: '#26ab52' }}>{t('title2')}</span>
          </h2>
          <p className="text-gray-400 text-[15px] font-light max-w-md mt-5">{t('subtitle')}</p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="relative px-6 sm:px-12 lg:px-20 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.key}
              onClick={() => setSelected(project)}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              style={{ minHeight: '260px' }}
            >
              {/* Photo */}
              <Image
                src={project.image}
                alt={t(`${project.key}.title`)}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-300" />

              {/* Top tag */}
              <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'}`}>
                <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                  {t(`${project.tag}Tag`)}
                </span>
              </div>

              {/* Click hint */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white/20 backdrop-blur-sm text-white text-[11px] font-semibold px-4 py-2 rounded-full border border-white/30">
                  {t('clickToSee')}
                </span>
              </div>

              {/* Bottom info */}
              <div className={`absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ${isRTL ? 'text-right' : ''}`}>
                <h3 className="text-white font-bold text-[15px] leading-tight mb-1">
                  {t(`${project.key}.title`)}
                </h3>
                <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                  <svg viewBox="0 0 16 16" className="w-3 h-3 text-white/70 flex-shrink-0" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 0C5.24 0 3 2.24 3 5c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                  <span className="text-white/80 text-[12px] font-light">{t(`${project.key}.location`)}</span>
                  <span className="text-white/40 text-[11px] mx-1">·</span>
                  <span className="text-white/80 text-[12px] font-light">{t(`${project.key}.capacity`)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Modal */}
      {selected && (
        <Modal
          project={selected}
          onClose={() => setSelected(null)}
          isRTL={isRTL}
        />
      )}
    </>
  );
}
