'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '25+',  label: 'stat1', color: '#26ab52' },
  { value: '150+', label: 'stat2', color: '#0762d2' },
  { value: '60T',  label: 'stat3', color: '#a3d42a' },
];

const symbols = [
  { key: 'drop',      number: '01', color: '#74d1fa' },
  { key: 'hands',     number: '02', color: '#26ab52' },
  { key: 'energy',    number: '03', color: '#a3d42a' },
  { key: 'community', number: '04', color: '#0762d2' },
];

export default function About() {
  const t = useTranslations('about');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out',
          scrollTrigger: { trigger: leftRef.current, start: 'top 82%' } }
      );
      gsap.fromTo(rightRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out', delay: 0.1,
          scrollTrigger: { trigger: rightRef.current, start: 'top 82%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative bg-white overflow-hidden">

      {/* Header */}
      <div className="border-b border-gray-100 px-6 sm:px-12 lg:px-20 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
<span className="text-gray-400 text-[11px] tracking-[0.2em] uppercase font-medium">{t('badge')}</span>
        </div>
        <span className="text-gray-200 text-[11px] tracking-[0.15em] uppercase hidden sm:block">Goutte d&apos;Espoir</span>
      </div>

      <div className={`px-6 sm:px-12 lg:px-20 py-20 grid lg:grid-cols-2 gap-16 lg:gap-28 ${isRTL ? 'text-right' : ''}`}>

        {/* Left */}
        <div ref={leftRef} className={isRTL ? 'lg:order-2' : 'lg:order-1'}>
          <h2 className="font-display font-black text-gray-950 leading-tight tracking-tight mb-8"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
            {t('title')}
          </h2>

          <p className="text-gray-500 text-[15px] leading-relaxed font-light mb-10">
            {t('whoWeAreDesc')}
          </p>

          {/* Mission / Vision */}
          <div className="space-y-4 mb-12">
            <div className="flex gap-4">
              <div className="w-0.5 bg-[#26ab52] flex-shrink-0 mt-1 rounded-full" style={{ minHeight: '100%' }} />
              <div>
                <div className="text-[11px] font-bold text-[#26ab52] uppercase tracking-[0.2em] mb-1.5">{t('mission')}</div>
                <p className="text-gray-500 text-[14px] leading-relaxed">{t('missionDesc')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-0.5 bg-[#0762d2] flex-shrink-0 mt-1 rounded-full" style={{ minHeight: '100%' }} />
              <div>
                <div className="text-[11px] font-bold text-[#0762d2] uppercase tracking-[0.2em] mb-1.5">{t('vision')}</div>
                <p className="text-gray-500 text-[14px] leading-relaxed">{t('visionDesc')}</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
            {stats.map(({ value, label, color }) => (
              <div key={label}>
                <div className="font-black text-2xl number-badge" style={{ color }}>{value}</div>
                <div className="text-gray-400 text-[12px] font-medium mt-1 leading-snug">{t(label)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div ref={rightRef} className={isRTL ? 'lg:order-1' : 'lg:order-2'}>

          {/* Logo */}
          <div className="flex justify-center lg:justify-start mb-12">
            <div className="relative w-52 h-52 rounded-2xl border border-gray-100 flex items-center justify-center p-10"
              style={{ background: 'linear-gradient(135deg, rgba(38,171,82,0.04) 0%, rgba(7,98,210,0.02) 100%)' }}>
              <Image src="/logo.png" alt="Goutte d'Espoir" fill className="object-contain p-8" />
            </div>
          </div>

          {/* Symbol cards */}
          <div className="text-[11px] font-semibold text-gray-300 uppercase tracking-[0.2em] mb-5">
            {t('logoTitle')}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {symbols.map(({ key, number, color }) => (
              <div key={key}
                className="group p-4 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200 cursor-default">
                <div className="text-[11px] font-bold mb-2.5" style={{ color }}>{number}</div>
                <div className="font-semibold text-gray-800 text-[13px] mb-1">{t(`${key}.title`)}</div>
                <div className="text-gray-400 text-[12px] leading-relaxed">{t(`${key}.desc`)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
