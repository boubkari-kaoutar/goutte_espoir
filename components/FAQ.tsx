'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function FAQ() {
  const t = useTranslations('faq');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const [open, setOpen] = useState<number | null>(0);

  const questions = ['q1', 'q2', 'q3'];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(38,171,82,0.07) 1px, transparent 1px)', backgroundSize: '36px 36px' }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 ${isRTL ? 'text-right' : ''}`}>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-gray-900 tracking-tight">
            {t('title')}
          </h2>
          <p className="mt-4 text-gray-500 text-lg font-light">{t('subtitle')}</p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {questions.map((key, i) => (
            <div
              key={key}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300"
              style={{ boxShadow: open === i ? '0 4px 24px rgba(38,171,82,0.08)' : undefined, borderColor: open === i ? 'rgba(38,171,82,0.25)' : undefined }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 ${isRTL ? 'flex-row-reverse text-right' : ''}`}
              >
                <span className={`font-semibold text-gray-900 text-base leading-snug ${isRTL ? 'text-right' : ''}`}>
                  {t(`${key}.question`)}
                </span>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                  style={{ background: open === i ? '#26ab52' : 'rgba(38,171,82,0.1)' }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 transition-transform duration-300"
                    style={{ color: open === i ? 'white' : '#26ab52', transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    fill="none" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-400 ${open === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className={`px-6 pb-6 text-gray-500 text-sm leading-relaxed font-light ${isRTL ? 'text-right' : ''}`}>
                  {t(`${key}.answer`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
