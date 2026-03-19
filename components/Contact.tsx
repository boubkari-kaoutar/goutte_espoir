'use client';

import { useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionBadge from './SectionBadge';

gsap.registerPlugin(ScrollTrigger);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className ?? 'w-6 h-6'} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const infoItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    key: 'location',
    color: '#26ab52',
    bg: 'rgba(38,171,82,0.08)',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" d="M12 6v6l4 2" />
      </svg>
    ),
    key: 'availability',
    color: '#0762d2',
    bg: 'rgba(7,98,210,0.08)',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    key: 'response',
    color: '#a3d42a',
    bg: 'rgba(163,212,42,0.1)',
  },
];

export default function Contact() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { x: isRTL ? 60 : -60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
        }
      );

      gsap.fromTo(
        cardRef.current,
        { x: isRTL ? -60 : 60, opacity: 0, scale: 0.94 },
        {
          x: 0, opacity: 1, scale: 1, duration: 1.1, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
        }
      );

      // Pulse on WhatsApp button
      gsap.to(btnRef.current, {
        boxShadow: '0 0 0 14px rgba(37,211,102,0)',
        repeat: -1,
        duration: 2.2,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isRTL]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fffe 50%, #ffffff 100%)' }}
    >
      {/* Background orbs */}
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(38,171,82,0.2) 50%, transparent 100%)' }}
      />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(38,171,82,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div className="absolute -bottom-40 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(7,98,210,0.07) 0%, transparent 70%)', filter: 'blur(50px)' }}
      />

      {/* Dot grid accent */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(38,171,82,0.12) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.25,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 lg:gap-20 items-center ${isRTL ? '' : ''}`}>

          {/* Left — Content */}
          <div ref={contentRef} className={isRTL ? 'text-right lg:order-2' : 'text-left lg:order-1'}>
            <SectionBadge>{t('badge')}</SectionBadge>

            <h2 className="mt-5 font-display font-black text-4xl sm:text-5xl text-gray-950 leading-tight tracking-tight">
              {t('title')}
            </h2>

            <div className={`mt-5 section-line ${isRTL ? 'mr-0 ml-auto' : ''}`} />

            <p className="mt-6 text-lg text-gray-500 leading-relaxed font-light max-w-md">
              {t('subtitle')}
            </p>

            {/* Info cards */}
            <div className="mt-10 flex flex-col gap-4">
              {infoItems.map(({ icon, key, color, bg }, i) => (
                <div
                  key={i}
                  className={`group flex items-center gap-4 p-4 rounded-2xl border border-transparent transition-all duration-300 hover:border-gray-100 hover:shadow-sm hover:-translate-y-0.5 ${isRTL ? 'flex-row-reverse' : ''}`}
                  style={{ background: bg }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${color}15`, color }}
                  >
                    {icon}
                  </div>
                  <span className="text-gray-700 font-medium leading-snug">{t(`info.${key}`)}</span>
                </div>
              ))}
            </div>

            {/* Organisation info card */}
            <div className="mt-8 rounded-2xl border border-gray-100 bg-gray-50 p-5 flex flex-col gap-3">
              {[
                { label: 'Responsable', value: 'Oussama AGDID', color: '#26ab52' },
                { label: 'Téléphone', value: '+212 636 227 511', color: '#0762d2', href: 'https://wa.me/212636227511' },
                { label: 'Organisation', value: "Goutte d'Espoir", color: '#26ab52' },
                { label: "Secteur d'activité", value: 'Énergie Solaire', color: '#a3d42a' },
              ].map(({ label, value, color, href }) => (
                <div key={label} className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                  <span className="text-xs text-gray-400 font-medium w-32 flex-shrink-0">{label}</span>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer"
                      className="text-sm font-semibold font-mono hover:opacity-80 transition-opacity"
                      style={{ color }}>
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-gray-800">{value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — WhatsApp card */}
          <div ref={cardRef} className={isRTL ? 'lg:order-1' : 'lg:order-2'}>
            <div
              className="relative rounded-3xl overflow-hidden p-10 shadow-xl border border-gray-100"
              style={{ background: 'linear-gradient(145deg, #f0fdf4 0%, #f8fffc 60%, #f0f9ff 100%)' }}
            >
              {/* Background decorations */}
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(37,211,102,0.12) 0%, transparent 70%)', filter: 'blur(30px)' }}
              />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(7,98,210,0.12) 0%, transparent 70%)', filter: 'blur(30px)' }}
              />
              {/* Dot grid */}
              <div className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(38,171,82,0.12) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              />

              <div className="relative">
                {/* WhatsApp icon area */}
                <div className="flex justify-center mb-9">
                  <div className="relative">
                    <div
                      className="w-28 h-28 rounded-3xl flex items-center justify-center text-white shadow-2xl"
                      style={{
                        background: 'linear-gradient(135deg, #25D366 0%, #1db954 100%)',
                        boxShadow: '0 12px 40px rgba(37,211,102,0.45)',
                      }}
                    >
                      <WhatsAppIcon className="w-14 h-14" />
                    </div>
                    {/* Pulse rings */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-[#25D366]/25 animate-ping" />
                    <div className="absolute -inset-3 rounded-[1.75rem] border border-[#25D366]/12 animate-pulse" />
                  </div>
                </div>

                {/* Heading */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">WhatsApp</h3>
                  <p className="text-gray-400 text-sm font-mono">+212 636 227 511</p>
                </div>

                {/* CTA Button */}
                <a
                  ref={btnRef}
                  href="https://wa.me/212636227511"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full flex items-center justify-center gap-3 py-4.5 px-6 rounded-2xl font-bold text-white text-lg transition-all duration-300 overflow-hidden hover:scale-[1.02] hover:-translate-y-0.5"
                  style={{
                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                    boxShadow: '0 6px 28px rgba(37,211,102,0.45)',
                    paddingTop: '1.125rem',
                    paddingBottom: '1.125rem',
                  }}
                >
                  <span className={`flex items-center gap-3 relative z-10 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <WhatsAppIcon className="w-6 h-6" />
                    {t('whatsapp')}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1db954] to-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>

                {/* Divider */}
                <div className="flex items-center gap-4 my-7">
                  <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(38,171,82,0.25))' }} />
                  <span className="text-gray-400 text-[11px] font-bold tracking-[0.2em] uppercase">Disponible</span>
                  <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(38,171,82,0.25), transparent)' }} />
                </div>

                {/* Status indicator */}
                <div className={`flex items-center justify-center gap-2.5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span
                    className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse"
                    style={{ boxShadow: '0 0 10px rgba(37,211,102,0.9)' }}
                  />
                  <span className="text-gray-500 text-sm font-light">En ligne · Réponse rapide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
