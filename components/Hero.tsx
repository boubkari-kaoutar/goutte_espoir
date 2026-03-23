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
  const headlineRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(headlineRef.current,
          { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' })
        .fromTo(subRef.current,
          { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }, '-=0.3')
        .fromTo(ctaRef.current,
          { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
        .fromTo(trustRef.current,
          { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.2')
        .fromTo(panelRef.current,
          { opacity: 0, x: isRTL ? -24 : 24 }, { opacity: 1, x: 0, duration: 0.65, ease: 'power2.out' }, '-=0.5');

      gsap.to(marqueeRef.current, { xPercent: isRTL ? 50 : -50, duration: 25, repeat: -1, ease: 'none' });
    }, containerRef);

    return () => ctx.revert();
  }, [isRTL]);

  const metrics = [
    { label: t('m1Label'), value: '−70%',  sub: t('m1Sub'), color: '#26ab52' },
    { label: t('m2Label'), value: '50+',   sub: t('m2Sub'), color: '#0762d2' },
    { label: t('m3Label'), value: '120 T', sub: t('m3Sub'), color: '#a3d42a' },
    { label: t('m4Label'), value: '300+',  sub: t('m4Sub'), color: '#74d1fa' },
  ];

  const trustItems = [t('trust1'), t('trust2'), t('trust3'), t('trust4')];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col bg-white overflow-hidden"
    >
      {/* Video background */}
      <div className="absolute inset-0 pointer-events-none">
        <video autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.55 }}>
          <source src="/video/hero_energie.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay — dark left for text, clear right for panel */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(105deg, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.32) 50%, rgba(0,0,0,0.08) 100%)' }} />
      </div>

      {/* Main content */}
      <div className={`relative z-10 flex-1 flex items-center px-6 sm:px-12 lg:px-20 py-36 lg:pt-28 lg:pb-0`}>
        <div className={`w-full flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-24 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>

          {/* Left — text */}
          <div className={`flex-1 max-w-xl ${isRTL ? 'text-right' : ''}`}>
            {/* Badge */}
            <div className={`inline-flex items-center gap-2.5 mb-8 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-1.5 h-1.5 rounded-full bg-[#26ab52]" />
              <span className="text-white/80 text-[11px] font-semibold tracking-[0.2em] uppercase">{t('badge')}</span>
            </div>

            {/* Headline */}
            <div ref={headlineRef}>
              <h1 className="font-display font-black text-white leading-[1.05] tracking-tight"
                style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)' }}>
                {t('headline1')}{' '}
                <span style={{ color: '#26ab52' }}>{t('headline2')}</span>
              </h1>
            </div>

            <div ref={subRef} className="mt-6">
              <p className="text-white/75 text-[1.05rem] leading-relaxed font-light max-w-md">
                {t('subheadline')}
              </p>
            </div>

            <div ref={ctaRef} className={`mt-9 flex items-center gap-4 flex-wrap ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Link href="/services"
                className="group relative overflow-hidden inline-flex items-center rounded-lg text-white text-sm font-semibold px-6 py-3"
                style={{ background: '#26ab52' }}>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" style={{ background: '#0d5e2a' }} />
                <span className="relative z-10">{t('cta')}</span>
              </Link>
              <Link href="/about"
                className="group inline-flex items-center gap-1.5 text-white/70 text-sm font-medium hover:text-white transition-colors duration-200">
                {t('ctaSecondary')}
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Trust row */}
            <div ref={trustRef} className={`mt-10 pt-8 border-t border-white/15 flex flex-wrap gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {trustItems.map((label) => (
                <div key={label} className={`flex items-center gap-2 text-[13px] text-white/70 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 16 16" fill="#26ab52">
                    <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" />
                  </svg>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — expertise cards */}
          <div ref={panelRef} className="hidden lg:block flex-shrink-0 w-72">
            <div className={`text-[10px] font-bold uppercase tracking-[0.28em] mb-4 text-white/50 ${isRTL ? 'text-right' : ''}`}>
              {isRTL ? 'مجالات خبرتنا' : 'Domaines d\'expertise'}
            </div>
            <div className="flex flex-col gap-3">
              {[
                {
                  color: '#26ab52',
                  icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.707-.707M6.343 6.343l-.707-.707m12.728 0-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
                  title: isRTL ? 'تركيب الألواح الشمسية' : 'Installation Solaire',
                  desc:  isRTL ? 'أنظمة فوتوفولطية مخصصة للمنازل والشركات' : 'Systèmes photovoltaïques résidentiels & commerciaux',
                  tag:   isRTL ? '01' : '01',
                },
                {
                  color: '#0762d2',
                  icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
                  title: isRTL ? 'الاستشارة والمرافقة' : 'Conseil & Accompagnement',
                  desc:  isRTL ? 'تدقيق طاقوي ومحاكاة المردودية' : 'Audit énergétique & simulation de rentabilité',
                  tag:   '02',
                },
                {
                  color: '#a3d42a',
                  icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                  title: isRTL ? 'الصيانة والمراقبة' : 'Maintenance & Monitoring',
                  desc:  isRTL ? 'متابعة فورية وتدخلات سريعة' : 'Suivi en temps réel & interventions rapides',
                  tag:   '03',
                },
                {
                  color: '#74d1fa',
                  icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
                  title: isRTL ? 'الزراعة الشمسية' : 'Agrivoltaïque & Pompage',
                  desc:  isRTL ? 'طاقة شمسية للري والمعدات الفلاحية' : 'Énergie solaire pour irrigation & agriculture',
                  tag:   '04',
                },
              ].map(({ color, icon, title, desc, tag }) => (
                <div key={tag}
                  className={`flex items-center gap-3.5 rounded-xl px-4 py-3.5 ${isRTL ? 'flex-row-reverse' : ''}`}
                  style={{
                    background: 'rgba(255,255,255,0.10)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}>
                  {/* Icon */}
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}22` }}>
                    <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} style={{ width: 18, height: 18 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                    </svg>
                  </div>
                  {/* Text */}
                  <div className={`flex-1 min-w-0 ${isRTL ? 'text-right' : ''}`}>
                    <div className="text-white text-[13px] font-semibold leading-snug">{title}</div>
                  </div>
                  {/* Tag */}
                  <span className="text-[10px] font-black flex-shrink-0" style={{ color }}>{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-10 border-t border-white/15 overflow-hidden py-3" style={{ background: 'rgba(0,0,0,0.25)', backdropFilter: 'blur(4px)' }}>
        <div ref={marqueeRef} className={`flex items-center whitespace-nowrap ${isRTL ? 'flex-row-reverse' : ''}`} style={{ width: '200%' }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className={`flex items-center gap-6 px-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="text-white/70 text-[11px] font-medium tracking-[0.25em] uppercase">{isRTL ? 'الطاقة الشمسية' : 'Énergie Solaire'}</span>
              <span className="w-1 h-1 rounded-full bg-[#26ab52]" />
              <span className="text-white/70 text-[11px] font-medium tracking-[0.25em] uppercase">{isRTL ? 'تركيب معتمد' : 'Installation certifiée'}</span>
              <span className="w-1 h-1 rounded-full bg-[#0762d2]" />
              <span className="text-white/70 text-[11px] font-medium tracking-[0.25em] uppercase">{isRTL ? 'قطرة أمل · المغرب' : "Goutte d'Espoir · Maroc"}</span>
              <span className="w-1 h-1 rounded-full bg-[#a3d42a]" />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="relative z-10 border-t border-white/10 px-6 sm:px-12 lg:px-20 py-4" style={{ background: 'rgba(0,0,0,0.2)' }}>
        <span className="hidden lg:block text-white/40 text-[11px] tracking-widest uppercase">
          {t('scrollHint')}
        </span>
      </div>
    </section>
  );
}
