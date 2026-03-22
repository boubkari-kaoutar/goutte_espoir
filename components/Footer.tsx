'use client';

import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const services = [
    { label: isRTL ? 'تركيب الألواح الشمسية' : 'Installation Solaire',       href: '/services/solar' },
    { label: isRTL ? 'الاستشارة والمرافقة'    : 'Conseil & Accompagnement',   href: '/services/eco' },
    { label: isRTL ? 'الصيانة والمراقبة'       : 'Maintenance & Monitoring',   href: '/services/support' },
    { label: isRTL ? 'الزراعة الشمسية'         : 'Agrivoltaïque & Pompage',    href: '/services/solar' },
  ];

  const company = [
    { key: 'about',   href: '/about' },
    { key: 'vision',  href: '/vision' },
    { key: 'contact', href: '/contact' },
  ];

  return (
    <footer style={{ background: '#f8f9fb', borderTop: '1px solid #e8eaed' }}>

      {/* Main grid */}
      <div className={`px-6 sm:px-12 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b ${isRTL ? 'text-right' : ''}`}
        style={{ borderColor: '#e8eaed' }}>

        {/* Col 1 — Brand */}
        <div className="lg:col-span-1">
          <div className={`flex items-center gap-3 mb-5 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="relative w-9 h-9 flex-shrink-0">
              <Image src="/logo.png" alt="Goutte d'Espoir" fill className="object-contain" />
            </div>
            <div>
              <div className="font-display font-black text-[15px] text-gray-900 leading-none">
                Goutte <span style={{ color: '#26ab52' }}>d&apos;Espoir</span>
              </div>
              <div className="text-gray-400 text-[10px] font-medium tracking-[0.18em] uppercase mt-0.5">
                Énergie Solaire
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-[13px] leading-relaxed font-light mb-7">{t('tagline')}</p>

          {/* Social icons */}
          <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {[
              { label: 'WhatsApp', href: 'https://wa.me/212636227511',
                icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z',
                fill: true },
              { label: 'Facebook', href: '#',
                icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
                fill: false },
              { label: 'Instagram', href: '#',
                icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z',
                fill: false },
            ].map(({ label, href, icon, fill }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ border: '1px solid #e0e3e8', background: '#fff' }}>
                <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24"
                  fill={fill ? 'currentColor' : 'none'}
                  stroke={fill ? 'none' : 'currentColor'} strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Services */}
        <div>
          <div className={`flex items-center gap-2 mb-5 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#26ab52' }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#26ab52' }}>
              {isRTL ? 'خدماتنا' : 'Nos Services'}
            </span>
          </div>
          <ul className="flex flex-col gap-3">
            {services.map(({ label, href }) => (
              <li key={label}>
                <Link href={href}
                  className="text-gray-500 text-[13px] font-medium hover:text-gray-900 transition-colors duration-150">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Entreprise */}
        <div>
          <div className={`flex items-center gap-2 mb-5 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#0762d2' }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#0762d2' }}>
              {isRTL ? 'المؤسسة' : 'Entreprise'}
            </span>
          </div>
          <ul className="flex flex-col gap-3">
            {company.map(({ key, href }) => (
              <li key={key}>
                <Link href={href}
                  className="text-gray-500 text-[13px] font-medium hover:text-gray-900 transition-colors duration-150">
                  {tNav(key as Parameters<typeof tNav>[0])}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contact */}
        <div>
          <div className={`flex items-center gap-2 mb-5 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#a3d42a' }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#a3d42a' }}>
              {isRTL ? 'التواصل' : 'Contact Direct'}
            </span>
          </div>
          <div className="flex flex-col gap-4">
            {/* Location */}
            <div className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none"
                stroke="#a3d42a" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-500 text-[13px] font-light">
                {isRTL ? 'المغرب — متاح في كل مكان' : 'Maroc — Disponible partout'}
              </span>
            </div>
            {/* Phone */}
            <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none"
                stroke="#26ab52" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="https://wa.me/212636227511" dir="ltr"
                className="text-gray-900 font-bold text-[14px] font-mono hover:text-[#26ab52] transition-colors">
                +212 636 227 511
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={`px-6 sm:px-12 lg:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 border-t ${isRTL ? 'sm:flex-row-reverse text-right' : ''}`}
        style={{ borderColor: '#e8eaed' }}>
        <span className="text-[12px] text-gray-400">
          © {new Date().getFullYear()} Goutte d&apos;Espoir. {t('rights')}
        </span>
        <span className="text-[12px] text-gray-400">{t('madeWith')}</span>
      </div>

    </footer>
  );
}
