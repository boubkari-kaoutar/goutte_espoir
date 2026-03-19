'use client';

import { useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(badgeRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.3);

      tl.fromTo(
        headlineRef.current ? Array.from(headlineRef.current.children) : [],
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.12 },
        0.5
      );

      tl.fromTo(subRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, 0.9);
      tl.fromTo(ctaRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 1.05);

      tl.fromTo(scrollHintRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, 1.5);

      gsap.to(scrollHintRef.current, {
        y: 9, repeat: -1, yoyo: true, duration: 1.3, ease: 'sine.inOut', delay: 2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isRTL]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* ── Video background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
          style={{ filter: 'blur(3px)' }}
        >
          <source src="/video/hero_energie.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── White overlay léger ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'rgba(255, 255, 255, 0.72)' }}
      />

      {/* ── Colored orbs (au-dessus de l'overlay pour conserver l'ambiance palette) ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-15%',
          right: '-10%',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(38,171,82,0.18) 0%, rgba(163,212,42,0.08) 40%, transparent 70%)',
          filter: 'blur(70px)',
          borderRadius: '50%',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-20%',
          left: '-12%',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(7,98,210,0.15) 0%, rgba(116,209,250,0.07) 40%, transparent 70%)',
          filter: 'blur(80px)',
          borderRadius: '50%',
        }}
      />

      {/* Fine dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(38,171,82,0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.3,
        }}
      />

      {/* Decorative accent dots */}
      <div className="absolute top-1/3 left-1/4 w-2.5 h-2.5 rounded-full bg-[#26ab52] opacity-45 animate-pulse pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-[#74d1fa] opacity-40 animate-pulse pointer-events-none" style={{ animationDelay: '1.2s' }} />
      <div className="absolute top-1/2 left-[17%] w-2 h-2 rounded-full bg-[#a3d42a] opacity-55 animate-pulse pointer-events-none" style={{ animationDelay: '2.1s' }} />
      <div className="absolute bottom-1/3 right-[18%] w-1.5 h-1.5 rounded-full bg-[#0762d2] opacity-35 animate-pulse pointer-events-none" style={{ animationDelay: '0.7s' }} />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full">
        <div className="max-w-3xl">

          {/* Left — Main content */}
          <div className={isRTL ? 'text-right' : 'text-left'}>

            {/* Badge */}
            <div ref={badgeRef} className={`inline-flex items-center gap-2 mb-10 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="flex items-center gap-2.5 bg-white/85 backdrop-blur-md border border-[#26ab52]/22 rounded-full px-5 py-2.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#26ab52] animate-pulse flex-shrink-0" />
                <span className="text-sm font-bold text-[#26ab52] tracking-wide">{t('badge')}</span>
              </div>
            </div>

            {/* Headline */}
            <h1 ref={headlineRef} className="overflow-hidden mb-8 -space-y-1">
              <span className="block font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] text-gray-950 leading-[0.92] tracking-tight">
                {t('headline1')}
              </span>
              <span className="block font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.92] tracking-tight gradient-text-green">
                {t('headline2')}
              </span>
            </h1>

            {/* Decorative line */}
            <div className={`section-line mb-8 ${isRTL ? 'mr-0 ml-auto' : ''}`} />

            {/* Subheadline */}
            <p
              ref={subRef}
              className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-lg mb-11 font-light"
            >
              {t('subheadline')}
            </p>

            {/* CTAs */}
            <div
              ref={ctaRef}
              className={`flex flex-wrap gap-4 ${isRTL ? 'justify-end' : ''}`}
            >
              <a
                href="https://wa.me/212636227511"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#26ab52] text-white font-bold text-base transition-all duration-300 hover:shadow-glow-green hover:scale-105 hover:-translate-y-0.5"
              >
                <span className="relative z-10">{t('cta')}</span>
                <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={isRTL ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-[#26ab52] via-[#35c466] to-[#a3d42a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl border-2 border-gray-200 bg-white/65 backdrop-blur-sm text-gray-700 font-semibold text-base transition-all duration-300 hover:border-[#26ab52]/35 hover:text-[#26ab52] hover:bg-[#26ab52]/5 hover:-translate-y-0.5"
              >
                {t('ctaSecondary')}
                <svg className="w-4 h-4 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Stats strip */}
      <div className="absolute bottom-24 left-0 right-0 z-10 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-wrap gap-3 ${isRTL ? 'justify-end' : 'justify-start'}`}>
            {[
              { value: '50+',  label: 'Projets réalisés', color: '#26ab52' },
              { value: '300+', label: 'Familles aidées',  color: '#0762d2' },
              { value: '120T', label: 'CO₂ économisé',    color: '#a3d42a' },
            ].map(({ value, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-white/60 shadow-sm"
              >
                <span className="font-black text-sm number-badge leading-none" style={{ color }}>{value}</span>
                <span className="text-gray-500 text-xs font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollHintRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 text-gray-400"
      >
        <span className="text-[10px] font-bold tracking-[0.25em] uppercase">{t('scrollHint')}</span>
        <div className="w-5 h-9 border-2 border-gray-300/70 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2.5 rounded-full bg-gradient-to-b from-[#26ab52] to-[#0762d2] animate-bounce" />
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 90" className="w-full" preserveAspectRatio="none">
          <path d="M0,45 C240,90 480,0 720,45 C960,90 1200,0 1440,45 L1440,90 L0,90 Z" fill="white" opacity="0.75" />
          <path d="M0,60 C360,20 1080,80 1440,60 L1440,90 L0,90 Z" fill="white" opacity="0.5" />
        </svg>
      </div>
    </section>
  );
}
