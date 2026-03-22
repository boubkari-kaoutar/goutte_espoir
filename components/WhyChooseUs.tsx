'use client';

import { useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const whyItems = [
  { key: 'expertise',    color: '#26ab52', number: '01' },
  { key: 'transparency', color: '#0762d2', number: '02' },
  { key: 'custom',       color: '#a3d42a', number: '03' },
  { key: 'commitment',   color: '#74d1fa', number: '04' },
  { key: 'impact',       color: '#26ab52', number: '05' },
];

export default function WhyChooseUs() {
  const t = useTranslations('vision');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', duration: 1.4, ease: 'power4.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%' } }
      );
      gsap.fromTo(
        itemsRef.current ? Array.from(itemsRef.current.children) : [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: itemsRef.current, start: 'top 82%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-gray-50 overflow-hidden">

      {/* Section header */}
      <div className="border-b border-gray-100 px-8 sm:px-14 lg:px-20 py-6 flex items-center">
        <div className="flex items-center gap-4">
<span className="text-gray-400 text-xs tracking-[0.25em] uppercase font-medium">{t('whyTitle')}</span>
        </div>
      </div>

      {/* Title */}
      <div className="px-8 sm:px-14 lg:px-20 pt-16 pb-12 overflow-hidden">
        <div ref={titleRef} style={{ clipPath: 'inset(0 100% 0 0)' }}>
          <h2 className="font-display font-black text-gray-950 leading-[0.88] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)' }}>
            {t('whyTitle')}
          </h2>
        </div>
      </div>

      {/* Items */}
      <div ref={itemsRef} className="px-8 sm:px-14 lg:px-20 pb-20 flex flex-col">
        {whyItems.map(({ key, color, number }) => {
          const text: string = t(`why.${key}`);
          const dashIdx = text.indexOf('—');
          const bold = dashIdx >= 0 ? text.slice(0, dashIdx).trim() : text;
          const rest = dashIdx >= 0 ? text.slice(dashIdx + 1).trim() : '';
          return (
            <div key={key}
              className={`group border-t border-gray-100 py-8 flex items-start gap-8 lg:gap-16 hover:bg-white transition-colors duration-300 rounded-xl -mx-4 px-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
              <span className="font-black text-2xl number-badge flex-shrink-0 mt-0.5 transition-colors duration-300"
                style={{ color: 'rgba(0,0,0,0.1)' }}>
                {number}
              </span>
              <div>
                <div className="font-bold text-base mb-1.5" style={{ color }}>{bold}</div>
                {rest && <p className="text-gray-400 text-sm leading-relaxed font-light max-w-2xl">{rest}</p>}
              </div>
              <div className={`${isRTL ? 'mr-auto' : 'ml-auto'} w-1 h-8 rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                style={{ background: color }} />
            </div>
          );
        })}
        <div className="border-t border-gray-100" />
      </div>
    </section>
  );
}
