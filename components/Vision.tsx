'use client';

import { useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  { key: 'innovation',     color: '#26ab52', href: '/pillars/innovation' },
  { key: 'community',      color: '#0762d2', href: '/pillars/community' },
  { key: 'sustainability', color: '#a3d42a', href: '/pillars/sustainability' },
];

const counters = [
  { value: 50,  suffix: '+', key: 'impact1Label', color: '#26ab52' },
  { value: 300, suffix: '+', key: 'impact2Label', color: '#0762d2' },
  { value: 120, suffix: 'T', key: 'impact3Label', color: '#a3d42a' },
];

const goalKeys = ['goal1', 'goal2', 'goal3', 'goal4'] as const;
const goalPcts  = [68, 54, 80, 42];
const goalColors = ['#26ab52', '#0762d2', '#a3d42a', '#74d1fa'];

export default function Vision() {
  const t = useTranslations('vision');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const goalsRef = useRef<HTMLDivElement>(null);
  const counterEls = useRef<(HTMLSpanElement | null)[]>([]);
  const barEls = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%' } }
      );
      gsap.fromTo(quoteRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: quoteRef.current, start: 'top 82%' } }
      );
      gsap.fromTo(
        pillarsRef.current ? Array.from(pillarsRef.current.children) : [],
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease: 'power2.out',
          scrollTrigger: { trigger: pillarsRef.current, start: 'top 82%' } }
      );

      // Counters
      ScrollTrigger.create({
        trigger: countersRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          counters.forEach(({ value }, i) => {
            const el = counterEls.current[i];
            if (!el) return;
            const obj = { val: 0 };
            gsap.to(obj, {
              val: value, duration: 2, ease: 'power2.out',
              onUpdate: () => { el.textContent = Math.round(obj.val).toString(); },
            });
          });
        },
      });

      // Progress bars
      ScrollTrigger.create({
        trigger: goalsRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          barEls.current.forEach((el, i) => {
            if (!el) return;
            gsap.fromTo(el,
              { width: '0%' },
              { width: `${goalPcts[i]}%`, duration: 1.2, ease: 'power2.out', delay: i * 0.1 }
            );
          });
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="vision" ref={sectionRef} className="relative bg-white overflow-hidden">

      <div className={`border-b border-gray-100 px-6 sm:px-12 lg:px-20 pt-24 pb-5 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
        <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
<span className="text-gray-400 text-[11px] tracking-[0.2em] uppercase font-medium">{t('badge')}</span>
        </div>
      </div>

      {/* Title + counters */}
      <div className={`px-6 sm:px-12 lg:px-20 pt-16 pb-16 grid lg:grid-cols-2 gap-16 lg:gap-24 ${isRTL ? 'text-right' : ''}`}>
        <div ref={titleRef}>
          <h2 className="font-display font-black text-gray-950 leading-tight tracking-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
            {t('title')}
          </h2>
          <p className="text-gray-400 text-[15px] font-light leading-relaxed">{t('description')}</p>
        </div>

        <div ref={countersRef} className={`grid grid-cols-3 gap-4 ${isRTL ? 'text-right' : ''}`}>
          {counters.map(({ suffix, key, color }, i) => (
            <div key={key} className={`pl-5 first:pl-0 ${isRTL ? 'border-r border-gray-100 pr-5 first:pr-0 border-l-0 pl-0' : 'border-l border-gray-100'}`}>
              <div className="font-black text-3xl number-badge leading-none" style={{ color }} dir="ltr">
                <span ref={(el) => { counterEls.current[i] = el; }}>0</span>
                <span>{suffix}</span>
              </div>
              <div className="text-gray-400 text-[12px] font-medium mt-1.5 leading-snug">{t(key as Parameters<typeof t>[0])}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div ref={quoteRef} className={`px-6 sm:px-12 lg:px-20 py-14 border-t border-b border-gray-100 bg-gray-50/40 ${isRTL ? 'text-right' : ''}`}>
        <div className="max-w-3xl">
          <div className="text-4xl font-serif text-[#26ab52]/20 leading-none mb-3">&ldquo;</div>
          <blockquote className="font-display font-bold text-gray-700 leading-snug"
            style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.8rem)' }}>
            {t('quote')}
          </blockquote>
        </div>
      </div>

      {/* Pillars — full-bleed image with glass cards */}
      <div className="relative border-b border-gray-100 overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&h=700&q=80"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gray-950/60" />

        <div className={`relative z-10 px-6 sm:px-12 lg:px-20 py-20 ${isRTL ? 'text-right' : ''}`}>
          <div className="text-[11px] font-semibold text-white/40 uppercase tracking-[0.2em] mb-10">{t('pillarsLabel')}</div>
          <div ref={pillarsRef} className="grid md:grid-cols-3 gap-5">
            {pillars.map(({ key, color, href }, i) => (
              <div key={key}
                className="rounded-2xl p-7 flex flex-col gap-5"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}>
                {/* Top label */}
                <div className={`flex items-center gap-2 text-white/40 text-[11px] font-medium tracking-widest uppercase ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>{isRTL ? 'ركيزة' : 'Pilier'}</span>
                  <span>|</span>
                  <span>0{i + 1}</span>
                </div>

                {/* Divider accent */}
                <div className="w-8 h-px" style={{ background: color }} />

                {/* Title — big + uppercase */}
                <div>
                  <h3 className="font-display font-black text-white uppercase leading-tight tracking-tight"
                    style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2rem)' }}>
                    {t(`pillars.${key}.title` as Parameters<typeof t>[0])}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-white/60 text-[13px] leading-relaxed font-light flex-1">
                  {t(`pillars.${key}.desc` as Parameters<typeof t>[0])}
                </p>

                {/* Bottom tag */}
                <div className="inline-flex self-start">
                  <Link href={href}
                    className="group inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider transition-opacity hover:opacity-85"
                    style={{ background: color, color: '#fff' }}>
                    {isRTL ? 'اكتشف' : 'Découvrir'}
                    <svg className={`w-3 h-3 transition-transform duration-200 ${isRTL ? 'rotate-180 group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Goals progress */}
      <div ref={goalsRef} className="px-6 sm:px-12 lg:px-20 py-16 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className={`text-[11px] font-semibold text-gray-300 uppercase tracking-[0.2em] mb-8 ${isRTL ? 'text-right' : ''}`}>{t('goalsLabel')}</div>
          {goalKeys.map((key, i) => (
            <div key={key} className="mb-6 last:mb-0">
              <div className={`flex items-center justify-between mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-gray-600 text-[13px] font-medium">{t(key)}</span>
                <span className="font-bold text-[13px] number-badge" style={{ color: goalColors[i] }}>{goalPcts[i]}%</span>
              </div>
              <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                <div ref={(el) => { barEls.current[i] = el; }}
                  className="h-full rounded-full"
                  style={{ width: '0%', background: goalColors[i] }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emotional line */}
      <div className="px-6 sm:px-12 lg:px-20 py-16 text-center">
        <p className="font-display font-bold text-gray-500 leading-snug max-w-2xl mx-auto italic"
          style={{ fontSize: 'clamp(1rem, 1.8vw, 1.4rem)' }}>
          &ldquo;{t('emotionalLine')}&rdquo;
        </p>
      </div>
    </section>
  );
}
