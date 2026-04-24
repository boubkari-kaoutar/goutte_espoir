'use client';

import { useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import gsap from 'gsap';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const s = {
  fr: {
    badge: 'NOUS JOINDRE',
    title1: 'Un Projet Solaire\u00a0?',
    title2: 'Parlons-en.',
    sub: "Vous avez un projet ou une question\u00a0? Notre équipe est disponible pour vous accompagner.",
    cta1: 'Appel immédiat',
    cta2: 'WhatsApp',
  },
  ar: {
    badge: 'تواصل معنا',
    title1: 'مشروع طاقة شمسية؟',
    title2: 'تحدّث إلينا.',
    sub: 'لديك مشروع أو سؤال؟ فريقنا متاح لمرافقتك في كل خطوة.',
    cta1: 'اتصل الآن',
    cta2: 'واتساب',
  },
};

export default function ContactHero() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const c = isRTL ? s.ar : s.fr;

  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      tl.fromTo(badgeRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
        .fromTo(titleRef.current, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }, '-=0.3')
        .fromTo(subRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }, '-=0.4')
        .fromTo(ctaRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3');
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-gray-50 overflow-hidden pt-32 pb-24">

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />

      {/* Green glow top-right */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(38,171,82,0.10) 0%, transparent 70%)' }} />

      <div ref={containerRef} className={`relative z-10 px-6 sm:px-12 lg:px-20 flex flex-col items-center text-center ${isRTL ? 'text-right items-end' : ''}`}>

        {/* Badge */}
        <div ref={badgeRef} className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <span className="h-px w-8 bg-gray-300" />
          <span className="text-[11px] font-bold tracking-[0.3em] text-gray-400 uppercase">{c.badge}</span>
          <span className="h-px w-8 bg-gray-300" />
        </div>

        {/* Title */}
        <div ref={titleRef} className="mb-6">
          <h1 className="font-display font-black text-gray-950 leading-[1.0] tracking-tight"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 5.5rem)' }}>
            {c.title1}
          </h1>
          <h1 className="font-display font-black italic leading-[1.0] tracking-tight"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 5.5rem)', color: '#327700' }}>
            {c.title2}
          </h1>
        </div>

        {/* Subtitle */}
        <p ref={subRef} className="text-gray-400 font-light leading-relaxed max-w-lg mb-10"
          style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)' }}>
          {c.sub}
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className={`flex items-center gap-4 flex-wrap ${isRTL ? 'flex-row-reverse' : 'justify-center'}`}>
          {/* Phone */}
          <a href="tel:+212636227511"
            className={`group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-gray-900 text-gray-900 text-[12px] font-bold tracking-[0.15em] uppercase hover:bg-gray-900 hover:text-white transition-all duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12 group-hover:-translate-y-0.5"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {c.cta1}
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/212636227511" target="_blank" rel="noopener noreferrer"
            className={`group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white text-[12px] font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:opacity-90 ${isRTL ? 'flex-row-reverse' : ''}`}
            style={{ background: '#327700' }}>
            <span className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12 group-hover:translate-y-[-2px]">
              <WhatsAppIcon />
            </span>
            {c.cta2}
          </a>
        </div>

      </div>
    </section>
  );
}
