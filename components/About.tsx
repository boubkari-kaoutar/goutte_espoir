'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionBadge from './SectionBadge';

gsap.registerPlugin(ScrollTrigger);

const logoSymbols = [
  {
    key: 'drop',
    icon: (
      <svg viewBox="0 0 60 80" className="w-7 h-7" fill="none">
        <path d="M30 3C30 3,57 38,57 52C57 67,45 77,30 77C15 77,3 67,3 52C3 38,30 3,30 3Z" fill="url(#d1)" />
        <ellipse cx="20" cy="38" rx="6" ry="10" fill="white" opacity="0.3" transform="rotate(-20 20 38)" />
        <defs>
          <linearGradient id="d1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#74d1fa" />
            <stop offset="100%" stopColor="#0762d2" />
          </linearGradient>
        </defs>
      </svg>
    ),
    accentColor: '#0762d2',
    bg: 'rgba(7,98,210,0.06)',
    border: 'rgba(7,98,210,0.12)',
    iconBg: 'rgba(7,98,210,0.1)',
  },
  {
    key: 'hands',
    icon: (
      <svg viewBox="0 0 60 60" className="w-7 h-7" fill="none">
        <path d="M10 45 C10 35, 25 20, 30 15 C35 20, 50 35, 50 45 C50 52, 41 58, 30 58 C19 58, 10 52, 10 45Z" fill="url(#h1)" />
        <defs>
          <linearGradient id="h1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a3d42a" />
            <stop offset="100%" stopColor="#26ab52" />
          </linearGradient>
        </defs>
      </svg>
    ),
    accentColor: '#26ab52',
    bg: 'rgba(38,171,82,0.06)',
    border: 'rgba(38,171,82,0.12)',
    iconBg: 'rgba(38,171,82,0.1)',
  },
  {
    key: 'energy',
    icon: (
      <svg viewBox="0 0 60 60" className="w-7 h-7" fill="none">
        <rect x="5" y="15" width="50" height="32" rx="4" fill="url(#e1)" opacity="0.9" />
        <line x1="5" y1="25" x2="55" y2="25" stroke="white" strokeWidth="1.5" opacity="0.4" />
        <line x1="5" y1="35" x2="55" y2="35" stroke="white" strokeWidth="1.5" opacity="0.4" />
        <line x1="22" y1="15" x2="22" y2="47" stroke="white" strokeWidth="1.5" opacity="0.4" />
        <line x1="38" y1="15" x2="38" y2="47" stroke="white" strokeWidth="1.5" opacity="0.4" />
        <rect x="22" y="47" width="16" height="5" rx="2" fill="#94a3b8" />
        <defs>
          <linearGradient id="e1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a3d42a" />
            <stop offset="100%" stopColor="#26ab52" />
          </linearGradient>
        </defs>
      </svg>
    ),
    accentColor: '#a3d42a',
    bg: 'rgba(163,212,42,0.06)',
    border: 'rgba(163,212,42,0.14)',
    iconBg: 'rgba(163,212,42,0.1)',
  },
  {
    key: 'community',
    icon: (
      <svg viewBox="0 0 60 60" className="w-7 h-7" fill="none">
        <circle cx="20" cy="22" r="8" fill="url(#c1)" opacity="0.8" />
        <circle cx="40" cy="22" r="8" fill="url(#c1)" opacity="0.8" />
        <circle cx="30" cy="18" r="9" fill="url(#c1)" />
        <path d="M8 52 C8 40, 17 34, 30 34 C43 34, 52 40, 52 52" stroke="url(#c1)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <defs>
          <linearGradient id="c1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0762d2" />
            <stop offset="100%" stopColor="#74d1fa" />
          </linearGradient>
        </defs>
      </svg>
    ),
    accentColor: '#0762d2',
    bg: 'rgba(7,98,210,0.06)',
    border: 'rgba(7,98,210,0.12)',
    iconBg: 'rgba(7,98,210,0.1)',
  },
];

const stats = [
  { value: 50, suffix: '+', key: 'stat1' },
  { value: 300, suffix: '+', key: 'stat2' },
  { value: 120, suffix: 'T', key: 'stat3' },
];

export default function About() {
  const t = useTranslations('about');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { x: isRTL ? 60 : -60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
        }
      );

      gsap.fromTo(
        rightRef.current,
        { x: isRTL ? -60 : 60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1.1, ease: 'power3.out', delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
        }
      );

      gsap.fromTo(
        cardsRef.current ? Array.from(cardsRef.current.children) : [],
        { y: 40, opacity: 0, scale: 0.94 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.1, ease: 'back.out(1.4)',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 82%', toggleActions: 'play none none reverse' },
        }
      );

      ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 87%',
        once: true,
        onEnter: () => {
          stats.forEach(({ value }, i) => {
            const el = counterRefs.current[i];
            if (!el) return;
            const obj = { val: 0 };
            gsap.to(obj, {
              val: value,
              duration: 2,
              ease: 'power2.out',
              onUpdate: () => { el.textContent = Math.round(obj.val).toString(); },
            });
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isRTL]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-36 bg-white overflow-hidden"
    >
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(38,171,82,0.06) 0%, transparent 70%)', filter: 'blur(60px)', transform: 'translate(30%, -30%)' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(7,98,210,0.06) 0%, transparent 70%)', filter: 'blur(60px)', transform: 'translate(-30%, 30%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center`}>

          {/* Left — Visual */}
          <div ref={leftRef} className={isRTL ? 'lg:order-2' : 'lg:order-1'}>
            <div className="relative flex justify-center">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                {/* Outer orbital ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#26ab52]/18 animate-spin-slow" />
                {/* Inner ring */}
                <div className="absolute inset-10 rounded-full border border-dashed border-[#0762d2]/14" />

                {/* Background gradient */}
                <div className="absolute inset-0 rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(38,171,82,0.07) 0%, rgba(163,212,42,0.03) 55%, transparent 80%)' }} />

                {/* Logo */}
                <div className="absolute inset-0 flex items-center justify-center p-10">
                  <div className="relative w-full h-full drop-shadow-xl">
                    <Image src="/logo.png" alt="Goutte d'Espoir" fill className="object-contain" />
                  </div>
                </div>

                {/* Orbit dots */}
                {[0, 90, 180, 270].map((angle, i) => {
                  const colors = ['#26ab52', '#0762d2', '#a3d42a', '#74d1fa'];
                  return (
                    <div
                      key={i}
                      className="absolute w-3.5 h-3.5 rounded-full"
                      style={{
                        top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * 46}% - 7px)`,
                        left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * 46}% - 7px)`,
                        background: colors[i],
                        boxShadow: `0 0 14px ${colors[i]}80`,
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="mt-12 grid grid-cols-3 gap-4">
              {stats.map(({ suffix, key }, i) => (
                <div
                  key={key}
                  className="text-center p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{
                    background: 'linear-gradient(135deg, #f8fffe 0%, #f0f9ff 100%)',
                    borderColor: i === 1 ? 'rgba(7,98,210,0.12)' : 'rgba(38,171,82,0.12)',
                  }}
                >
                  <div className={`text-3xl font-black number-badge leading-none mb-1 ${i === 1 ? 'gradient-text-blue' : 'gradient-text-green'}`}>
                    <span ref={(el) => { counterRefs.current[i] = el; }}>0</span>
                    <span>{suffix}</span>
                  </div>
                  <div className="text-xs text-gray-500 font-medium leading-tight mt-1">{t(key)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Content */}
          <div ref={rightRef} className={isRTL ? 'lg:order-1 text-right' : 'lg:order-2 text-left'}>
            <SectionBadge>{t('badge')}</SectionBadge>

            <h2 className="mt-5 font-display font-black text-4xl sm:text-5xl text-gray-950 leading-tight tracking-tight">
              {t('title')}
            </h2>

            <div className={`mt-5 section-line ${isRTL ? 'mr-0 ml-auto' : ''}`} />

            <p className="mt-6 text-lg text-gray-500 leading-relaxed font-light">
              {t('whoWeAreDesc')}
            </p>

            {/* Mission + Vision highlights */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl p-5 border" style={{ background: 'rgba(38,171,82,0.05)', borderColor: 'rgba(38,171,82,0.15)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#26ab52]" />
                  <span className="text-xs font-bold text-[#26ab52] uppercase tracking-widest">{t('mission')}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed font-light">{t('missionDesc')}</p>
              </div>
              <div className="rounded-2xl p-5 border" style={{ background: 'rgba(7,98,210,0.05)', borderColor: 'rgba(7,98,210,0.15)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#0762d2]" />
                  <span className="text-xs font-bold text-[#0762d2] uppercase tracking-widest">{t('vision')}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed font-light">{t('visionDesc')}</p>
              </div>
            </div>

            {/* Logo symbolism */}
            <div className="mt-10">
              <h3 className={`text-xs font-bold text-gray-400 uppercase tracking-[0.18em] mb-6 ${isRTL ? 'text-right' : ''}`}>
                {t('logoTitle')}
              </h3>

              <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {logoSymbols.map(({ key, icon, accentColor, bg, border, iconBg }) => (
                  <div
                    key={key}
                    className="group p-4 rounded-2xl transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-default"
                    style={{ background: bg, border: `1px solid ${border}` }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{ background: iconBg }}
                    >
                      {icon}
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1" style={{ color: accentColor }}>
                      {t(`${key}.title`)}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-light">
                      {t(`${key}.desc`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
