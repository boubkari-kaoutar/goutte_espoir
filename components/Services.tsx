'use client';

import { useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function getServices(isRTL: boolean) {
  return [
    {
      key: 'solar',
      number: '01',
      color: '#327700',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&h=560&q=80',
      stats: [
        { value: '−70%', label: isRTL ? 'متوسط التوفير' : 'économies moy.' },
        { value: '10 ans', label: isRTL ? 'ضمان' : 'de garantie' },
        { value: '1–3j', label: isRTL ? 'للتركيب' : "d'installation" },
      ],
    },
    {
      key: 'eco',
      number: '02',
      color: '#1c0b64',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&h=560&q=80',
      stats: [
        { value: '100%', label: isRTL ? 'مجاني' : 'gratuit' },
        { value: '4–7 ans', label: isRTL ? 'استرداد الاستثمار' : 'retour invest.' },
        { value: '48h', label: isRTL ? 'وقت الرد' : 'délai de réponse' },
      ],
    },
    {
      key: 'support',
      number: '03',
      color: '#16390d',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=560&q=80',
      stats: [
        { value: '6j/7', label: isRTL ? 'التوفر' : 'disponibilité' },
        { value: '<24h', label: isRTL ? 'وقت التدخل' : "délai d'intervention" },
        { value: '100%', label: isRTL ? 'مراقبة إلكترونية' : 'suivi en ligne' },
      ],
    },
    {
      key: 'water',
      number: '04',
      color: '#31b6e7',
      image: '/Traitement%20de%20l%27eau.png',
      stats: [
        { value: '100%', label: isRTL ? 'مستقل' : 'autonome' },
        { value: '0 DH', label: isRTL ? 'تكاليف التشغيل' : 'coût énergie' },
        { value: '24h', label: isRTL ? 'مياه نظيفة' : 'eau propre' },
      ],
    },
    {
      key: 'heater',
      number: '05',
      color: '#f97316',
      image: '/Chauffe-eau%20Solaire.png',
      stats: [
        { value: '−80%', label: isRTL ? 'توفير الكهرباء' : 'économies élec.' },
        { value: '15 ans', label: isRTL ? 'عمر المنتج' : 'de durée de vie' },
        { value: '1 jour', label: isRTL ? 'التركيب' : "d'installation" },
      ],
    },
  ];
}

function CheckIcon({ color }: { color: string }) {
  return (
    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill={color}>
      <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" />
    </svg>
  );
}

export default function Services() {
  const t = useTranslations('services');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const services = getServices(isRTL);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(el,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 82%' } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative bg-white overflow-hidden">

      {/* Header */}
      <div className="border-b border-gray-100 px-6 sm:px-12 lg:px-20 pt-24 pb-5 flex items-center">
        <div className="flex items-center gap-3">
<span className="text-gray-400 text-[11px] tracking-[0.2em] uppercase font-medium">{t('badge')}</span>
        </div>
      </div>

      {/* Intro */}
      <div className={`px-6 sm:px-12 lg:px-20 pt-16 pb-4 ${isRTL ? 'text-right' : ''}`}>
        <h2 className="font-display font-black text-gray-950 leading-tight tracking-tight mb-4"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
          {t('title')}
        </h2>
        <p className="text-gray-400 text-[15px] font-light max-w-lg">{t('subtitle')}</p>
      </div>

      {/* Service cards */}
      <div className="pb-20">
        {services.map(({ key, number, color, image, stats }, i) => {
          const imageRight = i % 2 === 0;
          return (
            <div
              key={key}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`px-6 sm:px-12 lg:px-20 py-16 border-t border-gray-100 ${i % 2 === 1 ? 'bg-gray-50/50' : ''}`}
            >
              <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                isRTL
                  ? (imageRight ? 'lg:flex-row' : 'lg:flex-row-reverse')
                  : (imageRight ? 'lg:flex-row' : 'lg:flex-row-reverse')
              }`}>

                {/* Text side */}
                <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
                  <div className="flex items-center gap-3 mb-6" style={{ justifyContent: isRTL ? 'flex-end' : 'flex-start' }}>
                    <span className="font-black text-[11px] tracking-[0.3em] uppercase" style={{ color }}>{number}</span>
                    <div className="w-6 h-px bg-gray-200" />
                    <span className="text-gray-400 text-[11px] tracking-[0.2em] uppercase font-medium">{t(`${key}.tagline` as Parameters<typeof t>[0])}</span>
                  </div>

                  <h3 className="font-display font-black text-gray-950 leading-tight tracking-tight mb-5"
                    style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', color }}>
                    {t(`${key}.title` as Parameters<typeof t>[0])}
                  </h3>

                  <p className="text-gray-500 text-[15px] leading-relaxed font-light mb-8">
                    {t(`${key}.desc` as Parameters<typeof t>[0])}
                  </p>

                  {/* Features */}
                  <div className="flex flex-col gap-3 mb-8">
                    {[0, 1, 2].map((fi) => (
                      <div key={fi} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <CheckIcon color={color} />
                        <span className="text-gray-600 text-[14px] font-medium">
                          {t(`${key}.features.${fi}` as Parameters<typeof t>[0])}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Stats row */}
                  <div className={`grid grid-cols-3 gap-4 pt-8 border-t border-gray-100 mb-8`}>
                    {stats.map(({ value, label }) => (
                      <div key={label} className={isRTL ? 'text-right' : ''}>
                        <div className="font-black text-xl number-badge leading-none" style={{ color }} dir="ltr">{value}</div>
                        <div className="text-gray-400 text-[11px] font-medium mt-1 uppercase tracking-wider">{label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link href={`/services/${key}`}
                    className={`group inline-flex items-center gap-2.5 rounded-lg text-white text-[13px] font-semibold px-6 py-3 transition-opacity hover:opacity-85 ${isRTL ? 'flex-row-reverse' : ''}`}
                    style={{ background: color }}>
                    {t('learnMore')}
                    <svg className={`w-4 h-4 transition-transform duration-200 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Image side */}
                <div className="flex-shrink-0 w-full lg:w-[46%]">
                  <div className="relative rounded-2xl overflow-hidden"
                    style={{ boxShadow: `0 8px 40px ${color}18` }}>
                    {/* Accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 z-10" style={{ background: color }} />
                    <img
                      src={image}
                      alt={t(`${key}.title` as Parameters<typeof t>[0])}
                      className="w-full h-72 lg:h-96 object-cover"
                      loading="lazy"
                    />
                    {/* Number overlay */}
                    <div className="absolute bottom-4 right-4 font-black text-white/20 leading-none select-none"
                      style={{ fontSize: '7rem', lineHeight: 1 }}>
                      {number}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
