'use client';

import { useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionBadge from './SectionBadge';

gsap.registerPlugin(ScrollTrigger);

const SolarIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
    <rect x="6" y="18" width="52" height="33" rx="5" fill="white" opacity="0.22" />
    <rect x="6" y="18" width="52" height="33" rx="5" stroke="white" strokeWidth="1.5" opacity="0.5" />
    <line x1="6" y1="29" x2="58" y2="29" stroke="white" strokeWidth="1.5" opacity="0.4" />
    <line x1="6" y1="40" x2="58" y2="40" stroke="white" strokeWidth="1.5" opacity="0.4" />
    <line x1="23" y1="18" x2="23" y2="51" stroke="white" strokeWidth="1.5" opacity="0.4" />
    <line x1="41" y1="18" x2="41" y2="51" stroke="white" strokeWidth="1.5" opacity="0.4" />
    <rect x="26" y="51" width="12" height="7" rx="3" fill="white" opacity="0.35" />
    <circle cx="51" cy="11" r="8" fill="white" opacity="0.9" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
      <line
        key={i}
        x1={51 + 10 * Math.cos((a * Math.PI) / 180)}
        y1={11 + 10 * Math.sin((a * Math.PI) / 180)}
        x2={51 + 15 * Math.cos((a * Math.PI) / 180)}
        y2={11 + 15 * Math.sin((a * Math.PI) / 180)}
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
    ))}
  </svg>
);

const EcoIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
    <circle cx="32" cy="32" r="26" stroke="white" strokeWidth="1.5" opacity="0.25" />
    <circle cx="32" cy="32" r="18" fill="white" opacity="0.15" />
    <path
      d="M32 12 C32 12, 50 22, 50 38 C50 50, 42 58, 32 58 C22 58, 14 50, 14 38 C14 22, 32 12, 32 12Z"
      stroke="white"
      strokeWidth="1.5"
      fill="none"
      opacity="0.5"
    />
    <path d="M32 12 L32 58" stroke="white" strokeWidth="1.5" opacity="0.35" />
    <path d="M14 38 L50 38" stroke="white" strokeWidth="1.5" opacity="0.35" />
    <circle cx="32" cy="32" r="5" fill="white" opacity="0.9" />
  </svg>
);

const SupportIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
    <circle cx="32" cy="20" r="13" fill="white" opacity="0.22" />
    <circle cx="32" cy="20" r="13" stroke="white" strokeWidth="1.5" opacity="0.5" />
    <path d="M20 16 L25 21 L34 12" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 54 C10 42, 20 36, 32 36 C44 36, 54 42, 54 54" fill="white" opacity="0.2" />
    <path d="M10 54 C10 42, 20 36, 32 36 C44 36, 54 42, 54 54" stroke="white" strokeWidth="1.5" fill="none" opacity="0.5" strokeLinecap="round" />
    <circle cx="50" cy="50" r="9" fill="white" opacity="0.3" />
    <circle cx="50" cy="50" r="9" stroke="white" strokeWidth="1.5" opacity="0.6" />
    <path d="M46 50 L49 53 L54 46" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const services = [
  {
    key: 'solar',
    number: '01',
    gradient: 'linear-gradient(135deg, #26ab52 0%, #a3d42a 100%)',
    glowColor: 'rgba(38,171,82,0.25)',
    cardBg: 'from-green-50/60 to-lime-50/40',
    border: 'border-green-100/80',
    accentColor: '#26ab52',
    tagBg: 'rgba(38,171,82,0.1)',
    Icon: SolarIcon,
  },
  {
    key: 'eco',
    number: '02',
    gradient: 'linear-gradient(135deg, #0762d2 0%, #74d1fa 100%)',
    glowColor: 'rgba(7,98,210,0.22)',
    cardBg: 'from-blue-50/60 to-sky-50/40',
    border: 'border-blue-100/80',
    accentColor: '#0762d2',
    tagBg: 'rgba(7,98,210,0.1)',
    Icon: EcoIcon,
  },
  {
    key: 'support',
    number: '03',
    gradient: 'linear-gradient(135deg, #a3d42a 0%, #26ab52 100%)',
    glowColor: 'rgba(163,212,42,0.22)',
    cardBg: 'from-lime-50/60 to-emerald-50/40',
    border: 'border-lime-100/80',
    accentColor: '#a3d42a',
    tagBg: 'rgba(163,212,42,0.12)',
    Icon: SupportIcon,
  },
];

export default function Services() {
  const t = useTranslations('services');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 82%', toggleActions: 'play none none reverse' },
        }
      );

      gsap.fromTo(
        cardsRef.current ? Array.from(cardsRef.current.children) : [],
        { y: 90, opacity: 0, scale: 0.93 },
        {
          y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.18, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 82%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fffe 50%, #ffffff 100%)' }}
    >
      {/* Background orbs */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(38,171,82,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(7,98,210,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className={`max-w-2xl mb-16 ${isRTL ? 'mr-auto text-right' : 'mx-auto text-center'}`}>
          <SectionBadge>{t('badge')}</SectionBadge>
          <h2 className="mt-5 font-display font-black text-4xl sm:text-5xl text-gray-950 leading-tight tracking-tight">
            {t('title')}
          </h2>
          <div className={`mt-4 section-line ${isRTL ? 'mr-0 ml-auto' : 'mx-auto'}`} />
          <p className="mt-6 text-lg text-gray-500 leading-relaxed font-light">
            {t('subtitle')}
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-7">
          {services.map(({ key, number, gradient, glowColor, cardBg, border, accentColor, tagBg, Icon }) => {
            const features = [
              t(`${key}.features.0`),
              t(`${key}.features.1`),
              t(`${key}.features.2`),
            ];

            return (
              <div
                key={key}
                className={`service-card card-shine group relative rounded-3xl bg-gradient-to-br ${cardBg} border ${border} overflow-hidden flex flex-col`}
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}
              >
                {/* Gradient header with icon */}
                <div
                  className="relative h-44 flex items-center justify-center overflow-hidden"
                  style={{ background: gradient }}
                >
                  {/* Number badge */}
                  <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'}`}>
                    <span className="text-white/30 font-black text-4xl number-badge leading-none">{number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 relative z-10 drop-shadow-lg">
                    <Icon />
                  </div>

                  {/* Subtle pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />

                  {/* Bottom fade */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-12"
                    style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.08))' }}
                  />

                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15), transparent 70%)` }}
                  />
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-7">
                  {/* Tag */}
                  <div className={`inline-flex mb-4 ${isRTL ? 'justify-end' : ''}`}>
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ color: accentColor, background: tagBg }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accentColor }} />
                      {t(`${key}.title`)}
                    </span>
                  </div>

                  <h3 className={`font-display font-bold text-2xl text-gray-950 mb-1 leading-tight ${isRTL ? 'text-right' : ''}`}>
                    {t(`${key}.title`)}
                  </h3>
                  <p className={`text-xs italic mb-3 font-medium ${isRTL ? 'text-right' : ''}`} style={{ color: accentColor }}>
                    {t(`${key}.tagline`)}
                  </p>
                  <p className={`text-gray-500 text-sm leading-relaxed mb-6 font-light ${isRTL ? 'text-right' : ''}`}>
                    {t(`${key}.desc`)}
                  </p>

                  {/* Features */}
                  <ul className={`flex flex-col gap-2.5 mb-8 flex-1 ${isRTL ? 'items-end' : ''}`}>
                    {features.map((f, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2.5 text-sm text-gray-600 ${isRTL ? 'flex-row-reverse' : ''}`}
                      >
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: tagBg }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: accentColor }} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="https://wa.me/212636227511"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 ${isRTL ? 'flex-row-reverse self-end' : 'self-start'}`}
                    style={{ color: accentColor }}
                  >
                    <span className="border-b border-transparent group-hover/btn:border-current pb-0.5 transition-all">{t('learnMore')}</span>
                    <svg
                      className={`w-4 h-4 transition-transform group-hover/btn:translate-x-1 ${isRTL ? 'rotate-180 group-hover/btn:-translate-x-1 group-hover/btn:translate-x-0' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Bottom glow on hover */}
                <div
                  className="absolute inset-x-0 bottom-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: gradient }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
