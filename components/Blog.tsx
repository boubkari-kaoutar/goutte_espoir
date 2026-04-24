'use client';

import { useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { blogArticles } from '@/lib/blogData';

gsap.registerPlugin(ScrollTrigger);

const articles = [
  { key: 'a1', color: '#327700', slug: blogArticles[0].slug },
  { key: 'a2', color: '#1c0b64', slug: blogArticles[1].slug },
  { key: 'a3', color: '#16390d', slug: blogArticles[2].slug },
  { key: 'a4', color: '#31b6e7', slug: blogArticles[3].slug },
  { key: 'a5', color: '#327700', slug: blogArticles[4].slug },
  { key: 'a6', color: '#f97316', slug: blogArticles[5].slug },
];

export default function Blog() {
  const t = useTranslations('blog');
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
    <section ref={sectionRef} className={`bg-white py-20 px-6 sm:px-12 lg:px-20 ${isRTL ? 'text-right' : ''}`}>

      {/* Header */}
      <div className="mb-14">
        <span className="text-[11px] font-bold tracking-[0.25em] text-gray-400 uppercase">{t('badge')}</span>
        <div className="mt-3">
          <h1 className="font-display font-black text-gray-950 leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            {t('title')} <span style={{ color: '#327700' }}>{t('title2')}</span>
          </h1>
        </div>
        <p className="text-gray-400 text-[15px] font-light mt-3 max-w-lg">{t('subtitle')}</p>
      </div>

      {/* Grid */}
      <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map(({ key, color, slug }, index) => {
          const articleData = blogArticles[index];
          return (
          <Link key={key} href={`/blog/${slug}`}>
          <article
            className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer h-full flex flex-col border border-gray-100/50 relative"
            style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>

            {/* Media Header (Image) */}
            <div className="relative w-full h-56 overflow-hidden bg-gray-100">
              <img 
                src={articleData.image} 
                alt="" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay gradient for aesthetics */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80" />
              
              {/* Tag floating on media */}
              <div className={`absolute bottom-4 ${isRTL ? 'right-4' : 'left-4'}`}>
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg"
                  style={{ background: `${color}dd`, color: '#fff' }}>
                  {t(`${key}.tag` as Parameters<typeof t>[0])}
                </span>
              </div>
            </div>

            <div className="p-7 flex flex-col gap-4 flex-1">
              {/* Date */}
              <div className={`flex items-center text-gray-400 text-[12px] font-medium ${isRTL ? 'flex-row-reverse' : ''}`}>
                <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {t(`${key}.date` as Parameters<typeof t>[0])}
              </div>

              {/* Title */}
              <h2 className="font-display font-black text-gray-900 leading-snug text-[18px] group-hover:text-[#327700] transition-colors duration-300">
                {t(`${key}.title` as Parameters<typeof t>[0])}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-500 text-[14px] leading-relaxed font-light flex-1">
                {t(`${key}.excerpt` as Parameters<typeof t>[0])}
              </p>

              {/* Footer */}
              <div className={`flex items-center justify-between pt-5 mt-2 border-t border-gray-100 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-gray-400 text-[12px] font-medium">
                  {t(`${key}.readTime` as Parameters<typeof t>[0])} {t('minRead')}
                </span>
                <span className={`inline-flex items-center gap-1.5 text-[13px] font-bold transition-all duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}
                  style={{ color }}>
                  {t('readMore')}
                  <svg className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 ${isRTL ? 'rotate-180 group-hover:!-translate-x-1.5' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </div>
          </article>
          </Link>
        )})}
      </div>
    </section>
  );
}
