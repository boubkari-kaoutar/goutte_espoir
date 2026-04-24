'use client';

import { useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const containerRef = useRef<HTMLElement>(null);
  const headlineRef  = useRef<HTMLDivElement>(null);
  const subRef       = useRef<HTMLDivElement>(null);
  const ctaRef       = useRef<HTMLDivElement>(null);
  const trustRef     = useRef<HTMLDivElement>(null);
  const marqueeRef   = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(headlineRef.current,
          { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }, '-=0.2')
        .fromTo(subRef.current,
          { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        .fromTo(ctaRef.current,
          { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
        .fromTo(trustRef.current,
          { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.2');

      gsap.to(marqueeRef.current, {
        xPercent: isRTL ? 50 : -50, duration: 28, repeat: -1, ease: 'none',
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isRTL]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: '#f8faf9' }}
    >
      {/* Video */}
      <div className="absolute inset-0 pointer-events-none">
        <video autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.6 }}>
          <source src="/video/Morocco_landscapes_sunrise_202603301243.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 100%)',
        }} />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 sm:px-12 lg:px-20 pt-24 pb-8">
        <div className={`w-full max-w-3xl flex flex-col ${isRTL ? 'items-end text-right' : 'items-center text-center'}`}>

          {/* Headline */}
          <div ref={headlineRef}>
            <h1 className="font-display font-black text-white leading-[1.0] tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)' }}>
              {t('headline1')}{' '}
              <br className="hidden sm:block" />
              <span style={{ color: '#327700' }}>
                {t('headline2')}
              </span>
            </h1>
          </div>

          {/* Sub */}
          <div ref={subRef} className="mt-7">
            <p className="text-white/75 leading-[1.85] font-light max-w-xl"
              style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.08rem)' }}>
              {t('subheadline')}
            </p>
          </div>

          {/* CTAs */}
          <div ref={ctaRef} className={`mt-10 flex items-center gap-4 flex-wrap ${isRTL ? 'flex-row-reverse justify-end' : 'justify-center'}`}>
            <Link href="/services"
              className="group relative overflow-hidden inline-flex items-center rounded-xl text-white font-semibold px-8 py-3.5"
              style={{ background: '#327700', fontSize: '14px' }}>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
                style={{ background: '#1a8a40' }} />
              <span className="relative z-10">{t('cta')}</span>
            </Link>

            <Link href="/contact"
              className="group relative overflow-hidden inline-flex items-center rounded-xl font-medium border border-white/30 hover:border-white/60 px-8 py-3.5 text-white/80 hover:text-white transition-all duration-300"
              style={{ fontSize: '14px' }}>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out rounded-xl"
                style={{ background: 'rgba(255,255,255,0.1)' }} />
              <span className="relative z-10">{t('ctaSecondary')}</span>
            </Link>
          </div>


        </div>
      </div>

      {/* ── Marquee ── */}
      <div className="relative z-10 overflow-hidden py-3.5"
        style={{ background: '#327700' }}>
        <div ref={marqueeRef}
          className={`flex items-center whitespace-nowrap ${isRTL ? 'flex-row-reverse' : ''}`}
          style={{ width: '200%' }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-8">
              <span className="text-white text-[10px] font-bold tracking-[0.3em] uppercase">
                {isRTL ? 'الطاقة الشمسية' : 'Énergie Solaire'}
              </span>
              <span className="w-1 h-1 rounded-full flex-shrink-0 bg-white/50" />
              <span className="text-white text-[10px] font-bold tracking-[0.3em] uppercase">
                {isRTL ? 'تركيب معتمد' : 'Installation certifiée'}
              </span>
              <span className="w-1 h-1 rounded-full flex-shrink-0 bg-white/50" />
              <span className="text-white text-[10px] font-bold tracking-[0.3em] uppercase">
                {isRTL ? 'قطرة أمل · المغرب' : "Goutte d'Espoir · Maroc"}
              </span>
              <span className="w-1 h-1 rounded-full flex-shrink-0 bg-white/50" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
