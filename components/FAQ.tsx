'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
  const t = useTranslations('faq');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const [open, setOpen] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const questions = ['q1', 'q2', 'q3'];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', duration: 1.4, ease: 'power4.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%' } }
      );
      gsap.fromTo(
        listRef.current ? Array.from(listRef.current.children) : [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: listRef.current, start: 'top 82%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white overflow-hidden">

      {/* Section header */}
      <div className="border-b border-gray-100 px-8 sm:px-14 lg:px-20 py-6 flex items-center">
        <div className="flex items-center gap-4">
<span className="text-gray-400 text-xs tracking-[0.25em] uppercase font-medium">{t('title')}</span>
        </div>
      </div>

      {/* Title */}
      <div className="px-8 sm:px-14 lg:px-20 pt-16 pb-12 overflow-hidden">
        <div ref={titleRef} style={{ clipPath: 'inset(0 100% 0 0)' }}>
          <h2 className="font-display font-black text-gray-950 leading-[0.85] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)' }}>
            {t('title')}
          </h2>
        </div>
        <p className="mt-5 text-gray-400 text-base font-light">{t('subtitle')}</p>
      </div>

      {/* Accordion */}
      <div ref={listRef} className="px-8 sm:px-14 lg:px-20 pb-20 flex flex-col max-w-4xl mx-auto">
        {questions.map((key, i) => (
          <div key={key} className="border-t border-gray-100 last:border-b">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className={`w-full flex items-center justify-between gap-6 py-7 text-left transition-colors duration-200 group ${isRTL ? 'flex-row-reverse text-right' : ''}`}
            >
              <div className="flex items-center gap-5">
                <span className="font-black text-xs number-badge" style={{ color: open === i ? '#26ab52' : 'rgba(0,0,0,0.15)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={`font-bold text-gray-900 text-base leading-snug transition-colors duration-200 ${open === i ? 'text-[#26ab52]' : 'group-hover:text-gray-700'}`}>
                  {t(`${key}.question`)}
                </span>
              </div>
              <div className="w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{
                  borderColor: open === i ? '#26ab52' : 'rgba(0,0,0,0.1)',
                  background: open === i ? '#26ab52' : 'transparent',
                }}>
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 transition-transform duration-300"
                  style={{ color: open === i ? 'white' : '#888', transform: open === i ? 'rotate(180deg)' : 'none' }}
                  fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ${open === i ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className={`pb-7 text-gray-500 text-sm leading-relaxed font-light pl-11 ${isRTL ? 'text-right pr-11 pl-0' : ''}`}>
                {t(`${key}.answer`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
