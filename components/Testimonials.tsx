'use client';

import { useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { key: 't1', color: '#327700', num: '01' },
  { key: 't2', color: '#1c0b64', num: '02' },
  { key: 't3', color: '#16390d', num: '03' },
];

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current ? Array.from(cardsRef.current.children) : [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 82%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white overflow-hidden py-24">

      {/* Watermark — top-left, 2 lines */}
      <div
        className={`absolute top-0 pointer-events-none select-none leading-[0.85] font-display font-black uppercase ${isRTL ? 'right-0' : 'left-0'}`}
        aria-hidden="true"
        style={{ color: 'rgba(0,0,0,0.04)', fontSize: 'clamp(5rem, 13vw, 11rem)', letterSpacing: '-0.02em', lineHeight: 0.85 }}>
        <div>{isRTL ? 'آراء' : 'Avis'}</div>
        <div>{isRTL ? 'العملاء' : 'clients'}</div>
      </div>

      {/* Header */}
      <div className={`relative z-10 px-6 sm:px-12 lg:px-20 mb-14 ${isRTL ? 'text-right' : ''}`}>
        <h2 className="font-display font-black text-gray-950 leading-tight tracking-tight"
          style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
          {t('title')}
        </h2>
        <p className="text-gray-400 text-[14px] font-light mt-2">{t('subtitle')}</p>
      </div>

      {/* Cards */}
      <div ref={cardsRef} className={`relative z-10 px-6 sm:px-12 lg:px-20 grid md:grid-cols-3 gap-5 ${isRTL ? 'text-right' : ''}`}>
        {testimonials.map(({ key, color, num }) => (
          <div key={key}
            className="bg-white rounded-2xl p-7 border border-gray-100 flex flex-col gap-5"
            style={{ boxShadow: '0 2px 24px rgba(0,0,0,0.05)' }}>

            {/* Number + stars row */}
            <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="text-[11px] font-bold text-gray-300 tracking-widest">({num})</span>
              <div className={`flex gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="#f59e0b">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Quote */}
            <p className="text-gray-600 text-[14px] leading-relaxed font-light italic flex-1">
              &ldquo;{t(`${key}.text`)}&rdquo;
            </p>

            {/* Divider */}
            <div className="h-px bg-gray-100" />

            {/* Author */}
            <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[12px] font-bold flex-shrink-0"
                style={{ background: color }}>
                {t(`${key}.name`).charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-[13px]">{t(`${key}.name`)}</div>
                <div className="text-gray-400 text-[12px]">{t(`${key}.role`)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
