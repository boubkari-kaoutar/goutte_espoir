'use client';

import { useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const items = [
  { value: 50,  suffix: '+', key: 'impact1Label', color: '#26ab52', lightColor: 'rgba(38,171,82,0.15)',   staticLabel: null },
  { value: 300, suffix: '+', key: 'impact2Label', color: '#0762d2', lightColor: 'rgba(7,98,210,0.15)',    staticLabel: null },
  { value: 120, suffix: 'T', key: 'impact3Label', color: '#a3d42a', lightColor: 'rgba(163,212,42,0.15)',  staticLabel: null },
  { value: 100, suffix: '%', key: null,            color: '#74d1fa', lightColor: 'rgba(116,209,250,0.15)', staticLabel: 'Projets avec formation' },
];

export default function ImpactBanner() {
  const t = useTranslations('vision');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const sectionRef = useRef<HTMLElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate items in
      gsap.fromTo(
        itemRefs.current.filter(Boolean),
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'back.out(1.4)',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%', toggleActions: 'play none none reverse' },
        }
      );

      // Count up
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          items.forEach(({ value }, i) => {
            const el = counterRefs.current[i];
            if (!el) return;
            const obj = { val: 0 };
            gsap.to(obj, {
              val: value,
              duration: 2.2,
              ease: 'power2.out',
              onUpdate: () => { el.textContent = Math.round(obj.val).toString(); },
            });
          });
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0d2018 0%, #0a1628 50%, #0d1a10 100%)' }}
    >
      {/* Top/bottom gradient borders */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #26ab52 30%, #74d1fa 70%, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #0762d2 30%, #a3d42a 70%, transparent)' }} />

      {/* Bg orbs */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(38,171,82,0.2) 0%, transparent 70%)', filter: 'blur(50px)' }} />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(7,98,210,0.2) 0%, transparent 70%)', filter: 'blur(50px)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 ${isRTL ? 'text-right' : 'text-center'}`}>
          {items.map(({ suffix, key, color, lightColor, staticLabel }, i) => (
            <div
              key={key ?? staticLabel}
              ref={(el) => { itemRefs.current[i] = el; }}
              className="group relative p-6 rounded-2xl cursor-default transition-all duration-300 hover:-translate-y-1"
              style={{ background: lightColor, border: `1px solid ${color}30` }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-4 right-4 h-0.5 rounded-full" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />

              <div className="text-4xl sm:text-5xl font-black leading-none mb-2 number-badge" style={{ color }}>
                <span ref={(el) => { counterRefs.current[i] = el; }}>0</span>
                <span>{suffix}</span>
              </div>
              <div className="text-white/60 text-sm font-medium tracking-wide">
                {staticLabel ?? t(key!)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
