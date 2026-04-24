'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function AboutHero() {
  const t = useTranslations('aboutHero');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-gray-950">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/about.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.6 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 100%)' }}
        />
      </div>

      {/* Main content */}
      <div className={`relative z-10 px-6 sm:px-12 lg:px-20 pb-20 pt-44 ${isRTL ? 'text-right' : ''}`}>

        {/* Headline block */}
        <h1
          className="font-display font-black leading-[1.0] tracking-tight mb-6"
          style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)' }}>
          <span className="text-white block">{t('discover')}</span>
          <span className="block" style={{ color: '#327700' }}>{t('brand')}</span>
        </h1>

        {/* Description */}
        <p className="text-white/70 font-light leading-relaxed mb-14 max-w-xl"
          style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)' }}>
          {isRTL
            ? 'منظمة مغربية رائدة في مجال الطاقة الشمسية، نُرافق الأفراد والشركات نحو استقلالية طاقية مستدامة — بشفافية، خبرة، والتزام حقيقي.'
            : "Organisation marocaine pionnière dans le solaire, nous accompagnons particuliers et entreprises vers une autonomie énergétique durable — avec transparence, expertise et engagement réel."}
        </p>

        {/* CTAs */}
        <div className={`flex items-center gap-8 flex-wrap ${isRTL ? 'flex-row-reverse' : ''}`}>

          {/* NOS SERVICES — horizontal color sweep */}
          <Link
            href="/services"
            className={`group relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 rounded-full text-white text-[11px] font-bold tracking-[0.18em] uppercase ${isRTL ? 'flex-row-reverse' : ''}`}
            style={{ background: '#327700' }}>
            {/* sweep layer */}
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
              style={{ background: '#0d5e2a' }}
            />
            <span className="relative z-10">{t('services')}</span>
            <svg
              className={`relative z-10 w-3.5 h-3.5 transition-transform duration-300 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          {/* NOUS CONTACTER — arrow slides + circle fills */}
          <Link
            href="/contact"
            className={`group inline-flex items-center gap-4 text-white text-[11px] font-semibold tracking-[0.18em] uppercase ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span className="relative w-12 h-12 rounded-full border border-white/25 flex items-center justify-center overflow-hidden transition-colors duration-300 group-hover:border-[#327700]">
              <span className="absolute inset-0 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 ease-out" style={{ background: '#327700' }} />
              <svg
                className={`relative z-10 w-4 h-4 transition-transform duration-300 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <span className="transition-colors duration-200 group-hover:text-[#327700]">
              {t('contact')}
            </span>
          </Link>

        </div>
      </div>

    </section>
  );
}
