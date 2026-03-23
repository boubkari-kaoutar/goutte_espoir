'use client';

import { useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stepKeys = ['s1', 's2', 's3', 's4'] as const;
const stepColors = ['#26ab52', '#0762d2', '#a3d42a', '#74d1fa'];
const stepNumbers = ['01', '02', '03', '04'];

export default function Process() {
  const t = useTranslations('process');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%' } }
      );

      // Center line draw
      gsap.fromTo(lineRef.current,
        { scaleY: 0, transformOrigin: 'top center' },
        { scaleY: 1, duration: 1.6, ease: 'power2.out',
          scrollTrigger: { trigger: lineRef.current, start: 'top 80%' } }
      );

      // Steps + dots
      stepsRef.current.forEach((el, i) => {
        if (!el) return;
        const isRight = i % 2 === 1;
        gsap.fromTo(el,
          { opacity: 0, x: isRight ? 40 : -40 },
          { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 82%' } }
        );
      });
      dotsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)',
            scrollTrigger: { trigger: el, start: 'top 85%' } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white overflow-hidden">

      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(7,98,210,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(7,98,210,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(7,98,210,0.03) 0%, transparent 70%)' }} />

      {/* Section header */}
      <div className={`relative border-b border-gray-100 px-6 sm:px-12 lg:px-20 py-5 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
        <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
<span className="text-gray-400 text-[11px] tracking-[0.2em] uppercase font-medium">{t('sectionBadge')}</span>
        </div>
        <span className="text-gray-300 text-[11px] tracking-[0.15em] uppercase hidden sm:block">{t('sectionStep')}</span>
      </div>

      {/* Title */}
      <div className={`relative px-6 sm:px-12 lg:px-20 pt-16 pb-4 ${isRTL ? 'text-right' : ''}`}>
        <div ref={titleRef}>
          <h2 className="font-display font-black text-gray-950 leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(2rem, 3.8vw, 3.6rem)' }}>
            {t('title1')}<br />
            <span style={{ color: '#26ab52' }}>{t('title2')}</span>
          </h2>
          <p className="text-gray-400 text-[15px] font-light max-w-md mt-5">{t('subtitle')}</p>
        </div>
      </div>

      {/* Steps with center line */}
      <div className="relative px-6 sm:px-12 lg:px-20 py-16">

        {/* Vertical center line */}
        <div ref={lineRef} className="absolute top-16 bottom-16 left-1/2 -translate-x-px w-px hidden lg:block"
          style={{ background: 'linear-gradient(to bottom, #26ab52, #0762d2, #a3d42a, #74d1fa)' }} />

        <div className="flex flex-col">
          {stepKeys.map((key, i) => {
            const isRight = i % 2 === 1;
            const color = stepColors[i];
            const num = stepNumbers[i];

            /* In RTL the grid columns visually reverse, so flip isRight */
            const effectiveRight = isRTL ? !isRight : isRight;

            return (
              <div key={key} className="relative lg:grid lg:grid-cols-2 min-h-[200px] mb-2 last:mb-0" dir="ltr">

                {/* Dot on the center line */}
                <div
                  ref={(el) => { dotsRef.current[i] = el; }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center w-10 h-10 rounded-full border-4 border-white"
                  style={{ background: color, boxShadow: `0 0 0 4px ${color}30` }}>
                  <span className="text-white font-black text-[10px] leading-none">{num}</span>
                </div>

                {/* Ghost number */}
                <div
                  className="absolute select-none pointer-events-none font-black leading-none hidden lg:block"
                  style={{
                    fontSize: 'clamp(6rem, 10vw, 9rem)',
                    color,
                    opacity: 0.055,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    ...(effectiveRight ? { right: '5%' } : { left: '5%' }),
                  }}>
                  {num}
                </div>

                {/* Left cell */}
                <div className={`flex items-center ${effectiveRight ? 'lg:justify-end' : 'lg:justify-start lg:pe-16'}`}>
                  {!effectiveRight && (
                    <div
                      ref={(el) => { stepsRef.current[i] = el; }}
                      className={`relative z-10 py-10 max-w-md ${isRTL ? 'text-right' : ''}`}>
                      <div className={`flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <span className="font-black text-[12px] tracking-widest lg:hidden" style={{ color }}>{num}</span>
                        <div className="w-8 h-px lg:hidden" style={{ background: color }} />
                      </div>
                      <h3 className="font-display font-black leading-tight tracking-tight mb-3"
                        style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)', color }}>
                        {t(`${key}.title`)}
                      </h3>
                      <p className="text-gray-400 text-[14px] leading-relaxed font-light">{t(`${key}.desc`)}</p>
                      <div className={`mt-5 w-10 h-0.5 rounded-full ${isRTL ? 'ml-auto' : ''}`} style={{ background: color }} />
                    </div>
                  )}
                </div>

                {/* Right cell */}
                <div className={`flex items-center ${effectiveRight ? 'lg:justify-start lg:ps-16' : ''}`}>
                  {effectiveRight && (
                    <div
                      ref={(el) => { stepsRef.current[i] = el; }}
                      className={`relative z-10 py-10 max-w-md ${isRTL ? 'text-right' : ''}`}>
                      <div className={`flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <span className="font-black text-[12px] tracking-widest lg:hidden" style={{ color }}>{num}</span>
                        <div className="w-8 h-px lg:hidden" style={{ background: color }} />
                      </div>
                      <h3 className="font-display font-black leading-tight tracking-tight mb-3"
                        style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)', color }}>
                        {t(`${key}.title`)}
                      </h3>
                      <p className="text-gray-400 text-[14px] leading-relaxed font-light">{t(`${key}.desc`)}</p>
                      <div className={`mt-5 w-10 h-0.5 rounded-full ${isRTL ? 'ml-auto' : ''}`} style={{ background: color }} />
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
