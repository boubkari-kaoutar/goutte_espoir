'use client';

import { useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ImpactBanner() {
  const t = useTranslations('vision');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const sectionRef = useRef<HTMLElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const items = [
    { value: 25,  suffix: '+',          label: t('impact1Label'), color: '#327700' },
    { value: 150, suffix: '+',          label: t('impact2Label'), color: '#1c0b64' },
    { value: 60,  suffix: 'T',          label: t('impact3Label'), color: '#16390d' },
    { value: 5,   suffix: t('impact4Suffix'), label: t('impact4Label'), color: '#31b6e7' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          items.forEach(({ value }, i) => {
            const el = counterRefs.current[i];
            if (!el) return;
            const obj = { val: 0 };
            gsap.to(obj, {
              val: value, duration: 1.8, ease: 'power2.out',
              onUpdate: () => { el.textContent = Math.round(obj.val).toString(); },
            });
          });
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section ref={sectionRef} className="border-t border-b border-gray-100 bg-gray-50/50">
      <div className={`px-6 sm:px-12 lg:px-20 py-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 ${isRTL ? 'text-right' : ''}`}>
        {items.map(({ suffix, label, color }, i) => (
          <div key={label} className="bg-white px-8 py-8">
            <div className="font-black text-3xl number-badge leading-none mb-1.5" style={{ color }} dir="ltr">
              <span ref={(el) => { counterRefs.current[i] = el; }}>0</span>
              <span>{suffix}</span>
            </div>
            <div className="text-gray-400 text-[12px] font-medium uppercase tracking-wider">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
