'use client';

import { useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import gsap from 'gsap';

export default function ServicesHero() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const titleRef = useRef<HTMLDivElement>(null);
  const subRef   = useRef<HTMLDivElement>(null);
  const ctaRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      tl.fromTo(titleRef.current,
          { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' })
        .fromTo(subRef.current,
          { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        .fromTo(ctaRef.current,
          { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3');
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-end overflow-hidden bg-gray-950">

      {/* Video background */}
      <div className="absolute inset-0 pointer-events-none">
        <video autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.6 }}>
          <source src="/video/Technicians_installing_solar_202603301313.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 100%)',
        }} />
      </div>

      {/* Content */}
      <div className={`relative z-10 px-6 sm:px-12 lg:px-20 pb-20 pt-44 ${isRTL ? 'text-right' : ''}`}>

        {/* Title */}
        <div ref={titleRef}>
          <h1 className="font-display font-black text-white leading-[1.0] tracking-tight mb-2"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)' }}>
            {isRTL ? 'حلول طاقوية' : 'Des solutions'}
          </h1>
          <h1 className="font-display font-black leading-[1.0] tracking-tight"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)', color: '#327700' }}>
            {isRTL ? 'لمستقبل أفضل' : 'pour demain.'}
          </h1>
        </div>

        {/* Description */}
        <div ref={subRef}>
          <p className="text-white/70 font-light leading-relaxed mt-6 mb-12 max-w-xl"
            style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)' }}>
            {isRTL
              ? 'من التركيب إلى الصيانة، نرافقك في كل خطوة من خطوات تحولك الطاقي — بخبرة محلية والتزام حقيقي.'
              : "De l'installation à la maintenance, nous vous accompagnons à chaque étape de votre transition énergétique — avec expertise locale et engagement réel."}
          </p>
        </div>

        {/* CTAs */}
        <div ref={ctaRef} className={`flex items-center gap-8 flex-wrap ${isRTL ? 'flex-row-reverse' : ''}`}>
          <Link href="/contact"
            className={`group relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 rounded-full text-white text-[11px] font-bold tracking-[0.18em] uppercase ${isRTL ? 'flex-row-reverse' : ''}`}
            style={{ background: '#327700' }}>
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
              style={{ background: '#0d5e2a' }} />
            <span className="relative z-10">
              {isRTL ? 'طلب عرض مجاني' : 'Devis gratuit'}
            </span>
            <svg className={`relative z-10 w-3.5 h-3.5 transition-transform duration-300 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <Link href="/about"
            className={`group inline-flex items-center gap-4 text-white text-[11px] font-semibold tracking-[0.18em] uppercase ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span className="relative w-12 h-12 rounded-full border border-white/25 flex items-center justify-center overflow-hidden transition-colors duration-300 group-hover:border-[#327700]">
              <span className="absolute inset-0 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 ease-out" style={{ background: '#327700' }} />
              <svg className={`relative z-10 w-4 h-4 transition-transform duration-300 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <span className="transition-colors duration-200 group-hover:text-[#327700]">
              {isRTL ? 'من نحن' : 'Qui sommes-nous'}
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
