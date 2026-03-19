'use client';

import { useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionBadge from './SectionBadge';

gsap.registerPlugin(ScrollTrigger);

const pillarsData = [
  {
    key: 'innovation',
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none">
        <path d="M24 6 L28 18 L40 18 L31 26 L34 38 L24 31 L14 38 L17 26 L8 18 L20 18Z"
          fill="url(#star1)" />
        <defs>
          <linearGradient id="star1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a3d42a" />
            <stop offset="100%" stopColor="#26ab52" />
          </linearGradient>
        </defs>
      </svg>
    ),
    accentColor: '#26ab52',
    lightColor: '#a3d42a',
    gradient: 'linear-gradient(135deg, rgba(38,171,82,0.12) 0%, rgba(163,212,42,0.06) 100%)',
    border: 'rgba(38,171,82,0.25)',
    barColor: '#26ab52',
  },
  {
    key: 'community',
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none">
        <circle cx="16" cy="18" r="7" fill="url(#grp1)" opacity="0.8" />
        <circle cx="32" cy="18" r="7" fill="url(#grp1)" opacity="0.8" />
        <circle cx="24" cy="14" r="8" fill="url(#grp1)" />
        <path d="M8 40 C8 32, 15 28, 24 28 C33 28, 40 32, 40 40" fill="url(#grp1)" opacity="0.7" />
        <defs>
          <linearGradient id="grp1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0762d2" />
            <stop offset="100%" stopColor="#74d1fa" />
          </linearGradient>
        </defs>
      </svg>
    ),
    accentColor: '#0762d2',
    lightColor: '#74d1fa',
    gradient: 'linear-gradient(135deg, rgba(7,98,210,0.12) 0%, rgba(116,209,250,0.06) 100%)',
    border: 'rgba(7,98,210,0.25)',
    barColor: '#0762d2',
  },
  {
    key: 'sustainability',
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none">
        <path
          d="M24 4 C36 4, 44 12, 42 24 C40 34, 32 42, 24 42 C16 42, 8 34, 6 24 C4 12, 12 4, 24 4Z"
          fill="url(#sus1)" opacity="0.15"
        />
        <circle cx="24" cy="24" r="12" fill="url(#sus1)" />
        <path
          d="M20 24 C20 20, 22 17, 24 16 C26 17, 28 20, 28 24 C28 28, 26 31, 24 32 C22 31, 20 28, 20 24Z"
          fill="white" opacity="0.8"
        />
        <defs>
          <linearGradient id="sus1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#26ab52" />
            <stop offset="100%" stopColor="#a3d42a" />
          </linearGradient>
        </defs>
      </svg>
    ),
    accentColor: '#a3d42a',
    lightColor: '#26ab52',
    gradient: 'linear-gradient(135deg, rgba(163,212,42,0.12) 0%, rgba(38,171,82,0.06) 100%)',
    border: 'rgba(163,212,42,0.28)',
    barColor: '#a3d42a',
  },
];

const impactData = [
  { value: 50, suffix: '+', key: 'impact1Label' },
  { value: 300, suffix: '+', key: 'impact2Label' },
  { value: 120, suffix: 'T', key: 'impact3Label' },
];

export default function Vision() {
  const t = useTranslations('vision');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 70, opacity: 0, scale: 0.96 },
        {
          y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 82%', toggleActions: 'play none none reverse' },
        }
      );

      gsap.fromTo(
        quoteRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.15,
          scrollTrigger: { trigger: quoteRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );

      gsap.fromTo(
        descRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: 'power2.out',
          scrollTrigger: { trigger: descRef.current, start: 'top 87%', toggleActions: 'play none none reverse' },
        }
      );

      ScrollTrigger.create({
        trigger: impactRef.current,
        start: 'top 82%',
        once: true,
        onEnter: () => {
          impactData.forEach(({ value }, i) => {
            const el = counterRefs.current[i];
            if (!el) return;
            const obj = { val: 0 };
            gsap.to(obj, {
              val: value,
              duration: 2.5,
              ease: 'power2.out',
              onUpdate: () => { el.textContent = Math.round(obj.val).toString(); },
            });
          });
        },
      });

      gsap.fromTo(
        impactRef.current ? Array.from(impactRef.current.children) : [],
        { y: 55, opacity: 0, scale: 0.88 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.85, stagger: 0.12, ease: 'back.out(1.5)',
          scrollTrigger: { trigger: impactRef.current, start: 'top 82%', toggleActions: 'play none none reverse' },
        }
      );

      gsap.fromTo(
        pillarsRef.current ? Array.from(pillarsRef.current.children) : [],
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.85, stagger: 0.14, ease: 'power3.out',
          scrollTrigger: { trigger: pillarsRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isRTL]);

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="relative py-24 lg:py-40 overflow-hidden"
      style={{ backgroundImage: 'url(/vision.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      {/* White overlay for readability */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(255,255,255,0.82)' }} />

      {/* Background glow orbs */}
      <div className="absolute pointer-events-none"
        style={{
          top: '0%', left: '5%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(38,171,82,0.22) 0%, transparent 65%)',
          filter: 'blur(80px)', borderRadius: '50%',
        }}
      />
      <div className="absolute pointer-events-none"
        style={{
          bottom: '0%', right: '5%',
          width: '450px', height: '450px',
          background: 'radial-gradient(circle, rgba(7,98,210,0.22) 0%, transparent 65%)',
          filter: 'blur(80px)', borderRadius: '50%',
        }}
      />
      <div className="absolute pointer-events-none"
        style={{
          top: '50%', left: '50%',
          width: '350px', height: '350px',
          background: 'radial-gradient(circle, rgba(116,209,250,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)', borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Top and bottom accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(38,171,82,0.6) 30%, rgba(116,209,250,0.6) 70%, transparent 100%)' }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(7,98,210,0.5) 30%, rgba(163,212,42,0.5) 70%, transparent 100%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-20 ${isRTL ? 'text-right' : ''}`}>
          <SectionBadge light>{t('badge')}</SectionBadge>

          <h2
            ref={titleRef}
            className="mt-7 font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-gray-900 leading-[0.9] tracking-tight"
          >
            {t('title')}
          </h2>

          {/* Divider line */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px flex-1 max-w-24"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(38,171,82,0.5))' }} />
            <div className="w-2.5 h-2.5 rounded-full bg-[#26ab52]" />
            <div className="h-px flex-1 max-w-24"
              style={{ background: 'linear-gradient(90deg, rgba(38,171,82,0.5), transparent)' }} />
          </div>

          <blockquote ref={quoteRef} className="mt-10 max-w-2xl mx-auto">
            <div className="relative inline-block">
              <span className="absolute -left-8 -top-5 text-7xl leading-none font-serif"
                style={{ color: 'rgba(38,171,82,0.25)' }}>"</span>
              <p className="text-xl sm:text-2xl text-gray-600 italic font-light leading-relaxed px-10">
                {t('quote')}
              </p>
              <span className="absolute -right-8 -bottom-5 text-7xl leading-none font-serif"
                style={{ color: 'rgba(38,171,82,0.25)' }}>"</span>
            </div>
          </blockquote>

          <p
            ref={descRef}
            className="mt-10 text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto font-light"
          >
            {t('description')}
          </p>
        </div>

        {/* Impact counters */}
        <div ref={impactRef} className="grid grid-cols-3 gap-5 mb-20 max-w-2xl mx-auto">
          {impactData.map(({ suffix, key }, i) => (
            <div
              key={key}
              className="relative text-center p-7 rounded-2xl group cursor-default transition-all duration-400 hover:-translate-y-1"
              style={{
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.07)',
                boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
              }}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full"
                style={{ background: i === 1 ? 'linear-gradient(90deg, #0762d2, #74d1fa)' : 'linear-gradient(90deg, #26ab52, #a3d42a)' }}
              />
              <div className="text-4xl sm:text-5xl font-black text-white leading-none mb-2">
                <span
                  className={i === 1 ? 'gradient-text-blue' : 'gradient-text-green'}
                  ref={(el) => { counterRefs.current[i] = el; }}
                >
                  0
                </span>
                <span className={i === 1 ? 'gradient-text-blue' : 'gradient-text-green'}>{suffix}</span>
              </div>
              <div className="text-sm text-gray-500 font-medium tracking-wide">{t(key)}</div>
            </div>
          ))}
        </div>

        {/* Pillar cards */}
        <div ref={pillarsRef} className="grid md:grid-cols-3 gap-6">
          {pillarsData.map(({ key, icon, border, accentColor, barColor }) => (
            <div
              key={key}
              className={`group relative rounded-2xl p-7 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-2xl ${isRTL ? 'text-right' : ''}`}
              style={{
                background: '#ffffff',
                border: `1px solid ${border}`,
                boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
              }}
            >
              {/* Left accent bar */}
              <div
                className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} bottom-0 w-0.5 rounded-full transition-all duration-300 group-hover:opacity-100 opacity-60`}
                style={{ background: `linear-gradient(to bottom, transparent, ${barColor}, transparent)`, borderRadius: '0 0 0 8px' }}
              />

              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ background: `${accentColor}18` }}
              >
                {icon}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-3 tracking-tight">{t(`pillars.${key}.title`)}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">{t(`pillars.${key}.desc`)}</p>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 30% 30%, ${accentColor}12, transparent 70%)` }}
              />
            </div>
          ))}
        </div>

        {/* Emotional quote banner */}
        <div className="mt-20 relative rounded-3xl overflow-hidden p-10 text-center"
          style={{ background: 'linear-gradient(135deg, rgba(38,171,82,0.08) 0%, rgba(7,98,210,0.08) 100%)', border: '1px solid rgba(38,171,82,0.15)' }}>
          <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, transparent, #26ab52 30%, #0762d2 70%, transparent)' }} />
          <div className="text-5xl leading-none font-serif mb-4" style={{ color: 'rgba(38,171,82,0.2)' }}>&ldquo;</div>
          <p className="text-xl sm:text-2xl font-display font-bold text-gray-800 leading-relaxed max-w-3xl mx-auto italic">
            {t('emotionalLine')}
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, transparent, #26ab52)' }} />
            <div className="w-2 h-2 rounded-full bg-[#26ab52]" />
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, #26ab52, transparent)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
