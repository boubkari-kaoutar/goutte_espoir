'use client';

import { useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  { key: 'p1', color: '#26ab52', stock: true,  image: '/images/shop/p1.png' },
  { key: 'p2', color: '#0762d2', stock: true,  image: '/images/shop/p2.png' },
  { key: 'p3', color: '#a3d42a', stock: false, image: '/images/shop/p3.png' },
  { key: 'p4', color: '#f97316', stock: true,  image: '/images/shop/p4.png' },
  { key: 'p5', color: '#74d1fa', stock: true,  image: '/images/shop/p5.png' },
  { key: 'p6', color: '#26ab52', stock: true,  image: '/images/shop/p6.png' },
];

export default function Boutique() {
  const t = useTranslations('boutique');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current ? Array.from(cardsRef.current.children) : [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 82%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={`bg-gray-50/50 py-20 px-6 sm:px-12 lg:px-20 ${isRTL ? 'text-right' : ''}`}>

      {/* Header */}
      <div className="mb-14">
        <span className="text-[11px] font-bold tracking-[0.25em] text-gray-400 uppercase">{t('badge')}</span>
        <div className="mt-3">
          <h1 className="font-display font-black text-gray-950 leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            {t('title')} <span style={{ color: '#26ab52' }}>{t('title2')}</span>
          </h1>
        </div>
        <p className="text-gray-400 text-[15px] font-light mt-3 max-w-lg">{t('subtitle')}</p>
      </div>

      {/* Grid */}
      <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(({ key, color, stock, image }) => (
          <div key={key}
            className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
            style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>

            {/* Image */}
            <div className="relative overflow-hidden h-48">
              <img src={image} alt={t(`${key}.name` as Parameters<typeof t>[0])}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              {/* Stock badge */}
              <div className={`absolute top-3 ${isRTL ? 'left-3' : 'right-3'}`}>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${stock ? 'bg-[#26ab52] text-white' : 'bg-gray-800 text-white'}`}>
                  {stock ? t('inStock') : t('outOfStock')}
                </span>
              </div>
              {/* Color accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: color }} />
            </div>

            <div className="p-6 flex flex-col gap-3">
              {/* Category */}
              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color }}>
                {t(`${key}.category` as Parameters<typeof t>[0])}
              </span>

              {/* Name */}
              <h2 className="font-display font-black text-gray-900 text-[16px] leading-snug">
                {t(`${key}.name` as Parameters<typeof t>[0])}
              </h2>

              {/* Desc */}
              <p className="text-gray-400 text-[13px] leading-relaxed font-light">
                {t(`${key}.desc` as Parameters<typeof t>[0])}
              </p>

              {/* Price + CTA */}
              <div className={`flex items-center justify-between gap-3 pt-4 border-t border-gray-100 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="font-black text-gray-900 text-[14px]">
                  {t(`${key}.price` as Parameters<typeof t>[0])}
                </span>
                <Link href="/contact"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-full text-white transition-opacity hover:opacity-85"
                  style={{ background: color }}>
                  {t('contact')}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
