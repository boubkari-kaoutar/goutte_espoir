'use client';

import { useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionBadge from './SectionBadge';

gsap.registerPlugin(ScrollTrigger);

const whyItems = [
  {
    key: 'expertise',
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
        <path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: '#26ab52',
    bg: 'rgba(38,171,82,0.08)',
    border: 'rgba(38,171,82,0.18)',
  },
  {
    key: 'transparency',
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
        <path d="M16 4L28 10v8c0 6-5 11-12 14C9 29 4 24 4 18v-8L16 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11 16l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: '#0762d2',
    bg: 'rgba(7,98,210,0.08)',
    border: 'rgba(7,98,210,0.18)',
  },
  {
    key: 'custom',
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
        <rect x="4" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="18" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="4" y="18" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="23" cy="23" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M23 21v2l1.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: '#a3d42a',
    bg: 'rgba(163,212,42,0.08)',
    border: 'rgba(163,212,42,0.2)',
  },
  {
    key: 'commitment',
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
        <path d="M16 6C10 6 6 10.5 6 15c0 5 4 9 10 11 6-2 10-6 10-11 0-4.5-4-9-10-9z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 10v6l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: '#74d1fa',
    bg: 'rgba(116,209,250,0.1)',
    border: 'rgba(116,209,250,0.22)',
  },
  {
    key: 'impact',
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
        <path d="M6 26L12 18l6 4 8-14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="26" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    color: '#26ab52',
    bg: 'rgba(38,171,82,0.08)',
    border: 'rgba(38,171,82,0.18)',
  },
];

export default function WhyChooseUs() {
  const t = useTranslations('vision');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 82%', toggleActions: 'play none none reverse' } }
      );
      gsap.fromTo(
        itemsRef.current ? Array.from(itemsRef.current.children) : [],
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.75, stagger: 0.1, ease: 'back.out(1.4)',
          scrollTrigger: { trigger: itemsRef.current, start: 'top 82%', toggleActions: 'play none none reverse' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(180deg, #f8fffe 0%, #ffffff 100%)' }}>
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #26ab52 30%, #a3d42a 70%, transparent)' }} />

      {/* Bg orb */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(38,171,82,0.05) 0%, transparent 70%)', filter: 'blur(60px)', transform: 'translate(30%, -50%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className={`text-center mb-14 ${isRTL ? 'text-right' : ''}`}>
          <SectionBadge>{t('whyTitle')}</SectionBadge>
          <h2 className="mt-5 font-display font-black text-4xl sm:text-5xl text-gray-900 tracking-tight">
            {t('whyTitle')}
          </h2>
          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, transparent, #26ab52)' }} />
            <div className="w-2 h-2 rounded-full bg-[#26ab52]" />
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, #26ab52, transparent)' }} />
          </div>
        </div>

        {/* Items grid */}
        <div ref={itemsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyItems.map(({ key, icon, color, bg, border }, i) => {
            const text: string = t(`why.${key}`);
            const [bold, ...rest] = text.split('—');
            return (
              <div
                key={key}
                className={`group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg cursor-default ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''} ${isRTL ? 'text-right' : ''}`}
                style={{ background: bg, borderColor: border }}
              >
                {/* Top accent */}
                <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${color}, ${color}55)` }} />

                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${color}15`, color }}>
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1" style={{ color }}>
                      {bold.trim()}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">
                      {rest.join('—').trim()}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
