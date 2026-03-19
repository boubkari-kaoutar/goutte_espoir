'use client';

import { useTranslations, useLocale } from 'next-intl';

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const testimonials = [
    { key: 't1', stars: 5, color: '#26ab52' },
    { key: 't2', stars: 5, color: '#0762d2' },
  ];

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #26ab52, #a3d42a, transparent)' }} />

      {/* Bg orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(38,171,82,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-14 ${isRTL ? 'text-right' : ''}`}>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-gray-900 tracking-tight">
            {t('title')}
          </h2>
          <p className="mt-4 text-gray-500 text-lg font-light">{t('subtitle')}</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, transparent, #26ab52)' }} />
            <div className="w-2 h-2 rounded-full bg-[#26ab52]" />
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, #26ab52, transparent)' }} />
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map(({ key, stars, color }) => (
            <div
              key={key}
              className={`relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform duration-300 ${isRTL ? 'text-right' : ''}`}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-8 right-8 h-0.5 rounded-full"
                style={{ background: `linear-gradient(90deg, ${color}, ${color}55)` }}
              />

              {/* Quote mark */}
              <div className="text-6xl leading-none font-serif mb-4 -mt-2" style={{ color: `${color}30` }}>&ldquo;</div>

              {/* Stars */}
              <div className={`flex gap-1 mb-5 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                {Array.from({ length: stars }).map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 fill-current" style={{ color: '#f59e0b' }}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-base leading-relaxed font-light italic mb-7">
                &ldquo;{t(`${key}.text`)}&rdquo;
              </p>

              {/* Author */}
              <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${color}, ${color}aa)` }}
                >
                  {t(`${key}.name`).charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t(`${key}.name`)}</div>
                  <div className="text-gray-400 text-xs">{t(`${key}.role`)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
