'use client';

import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const navLinks = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/about' },
    { key: 'services', href: '/services' },
    { key: 'vision', href: '/vision' },
    { key: 'contact', href: '/contact' },
  ];

  const paletteColors = [
    { color: '#26ab52', label: 'Vert Espoir' },
    { color: '#a3d42a', label: 'Vert Clair' },
    { color: '#0762d2', label: 'Bleu Action' },
    { color: '#74d1fa', label: 'Bleu Ciel' },
  ];

  return (
    <footer className="relative overflow-hidden bg-gray-50 border-t border-gray-100">

      {/* Top gradient border */}
      <div className="h-0.5" style={{ background: 'linear-gradient(90deg, #26ab52 0%, #a3d42a 25%, #74d1fa 75%, #0762d2 100%)' }} />

      {/* Background orbs */}
      <div className="absolute pointer-events-none"
        style={{ top: '-20%', left: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(38,171,82,0.06) 0%, transparent 70%)', filter: 'blur(60px)', borderRadius: '50%' }}
      />
      <div className="absolute pointer-events-none"
        style={{ bottom: '-20%', right: '10%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(7,98,210,0.05) 0%, transparent 70%)', filter: 'blur(60px)', borderRadius: '50%' }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(38,171,82,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">

        {/* Main grid */}
        <div className={`grid md:grid-cols-12 gap-12 mb-14 ${isRTL ? 'text-right' : ''}`}>

          {/* Brand — 5 cols */}
          <div className={`md:col-span-5 ${isRTL ? 'md:col-start-8' : ''}`}>
            <div className={`flex items-center gap-3 mb-5 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="relative w-11 h-11 flex-shrink-0">
                <Image src="/logo.png" alt="Goutte d'Espoir" fill className="object-contain" />
              </div>
              <div>
                <span className="font-display font-black text-xl text-gray-900 tracking-tight">
                  Goutte <span className="gradient-text-green">d&apos;Espoir</span>
                </span>
                <div className="h-0.5 mt-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, #26ab52, #a3d42a)', width: '80%' }} />
              </div>
            </div>

            <p className={`text-gray-500 text-sm leading-relaxed max-w-xs font-light ${isRTL ? 'mr-0 ml-auto' : ''}`}>
              {t('tagline')}
            </p>

            {/* Color palette */}
            <div className={`mt-7 flex flex-wrap gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {paletteColors.map(({ color, label }) => (
                <div key={color} className="group flex items-center gap-2" title={label}>
                  <div
                    className="w-7 h-7 rounded-full transition-transform duration-200 group-hover:scale-110"
                    style={{ background: color, boxShadow: `0 0 12px ${color}50` }}
                  />
                </div>
              ))}
            </div>

            {/* WhatsApp social */}
            <div className={`mt-7 flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <a
                href="https://wa.me/212636227511"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 py-2.5 px-4 rounded-xl text-sm font-semibold text-gray-600 border border-gray-200 bg-white hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Navigation — 3 cols */}
          <div className={`md:col-span-3 ${isRTL ? 'md:col-start-5' : ''}`}>
            <h4 className="text-gray-400 text-xs font-bold uppercase tracking-[0.18em] mb-6">
              {t('links')}
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className={`group flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <span
                      className="w-4 h-px transition-all duration-300 group-hover:w-6 flex-shrink-0"
                      style={{ background: 'linear-gradient(90deg, #26ab52, #a3d42a)' }}
                    />
                    {tNav(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — 4 cols */}
          <div className={`md:col-span-4 ${isRTL ? 'md:col-start-1 md:row-start-1' : ''}`}>
            <h4 className="text-gray-400 text-xs font-bold uppercase tracking-[0.18em] mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-4 text-sm">
              <a
                href="https://wa.me/212636227511"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-gray-500 hover:text-[#25D366] transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0" style={{ color: '#25D366' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="font-mono">+212 636 227 511</span>
              </a>

              <div className="flex flex-col gap-1.5 text-sm text-gray-500">
                <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 flex-shrink-0 text-[#26ab52]" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="font-medium">Oussama AGDID</span>
                </div>
                <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 flex-shrink-0 text-[#0762d2]" fill="none" stroke="currentColor" strokeWidth={2}>
                    <circle cx="12" cy="12" r="10" /><path strokeLinecap="round" d="M12 8v4l3 3" />
                  </svg>
                  <span className="text-gray-400">Énergie Solaire · 🇲🇦 Maroc</span>
                </div>
              </div>
            </div>

            {/* Mini stats */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { value: '50+', label: 'Projets' },
                { value: '300+', label: 'Familles' },
                { value: '120T', label: 'CO₂' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <div className="text-base font-black gradient-text-green leading-none">{value}</div>
                  <div className="text-[10px] text-gray-400 mt-1 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <span>© {new Date().getFullYear()} Goutte d&apos;Espoir. {t('rights')}</span>
            <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span>{t('madeWith')} 🌿</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="text-gray-300">Maroc 🇲🇦</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
