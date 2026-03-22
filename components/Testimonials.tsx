'use client';

import { useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { key: 't1', color: '#26ab52' },
  { key: 't2', color: '#0762d2' },
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
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 82%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-gray-50/60 overflow-hidden">
      <div className="border-b border-gray-100 px-6 sm:px-12 lg:px-20 py-5 flex items-center">
        <div className="flex items-center gap-3">
<span className="text-gray-400 text-[11px] tracking-[0.2em] uppercase font-medium">{t('title')}</span>
        </div>
      </div>

      <div className="px-6 sm:px-12 lg:px-20 pt-14 pb-6">
        <h2 className="font-display font-black text-gray-950 leading-tight tracking-tight mb-2"
          style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
          {t('title')}
        </h2>
        <p className="text-gray-400 text-[14px] font-light">{t('subtitle')}</p>
      </div>

      <div ref={cardsRef} className={`px-6 sm:px-12 lg:px-20 pb-16 grid md:grid-cols-2 gap-4 ${isRTL ? 'text-right' : ''}`}>
        {testimonials.map(({ key, color }) => (
          <div key={key} className="bg-white rounded-xl p-7 border border-gray-100 hover:shadow-sm transition-shadow duration-200">
            {/* Stars */}
            <div className={`flex gap-1 mb-5 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="#f59e0b">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            <p className="text-gray-600 text-[14px] leading-relaxed font-light italic mb-6">
              &ldquo;{t(`${key}.text`)}&rdquo;
            </p>

            <div className={`flex items-center gap-3 pt-5 border-t border-gray-100 ${isRTL ? 'flex-row-reverse' : ''}`}>
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
