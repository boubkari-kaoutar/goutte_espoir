'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/navigation';
import gsap from 'gsap';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isRTL = locale === 'ar';

  /* Pages with dark hero — navbar transparent + white text */
  const darkHeroPages = ['/', '/about', '/services'];
  const isDarkPage = darkHeroPages.includes(pathname);
  const isTransparent = isDarkPage && !scrolled;

  const navLinks = [
    { key: 'home',     href: '/' },
    { key: 'about',    href: '/about' },
    { key: 'services', href: '/services' },
    { key: 'vision',   href: '/vision' },
    { key: 'contact',  href: '/contact' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(navRef.current,
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.1 }
      );
    });
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => { window.removeEventListener('scroll', handleScroll); ctx.revert(); };
  }, []);

  const switchLocale = (newLocale: string) => router.replace(pathname, { locale: newLocale });
  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? 'py-2 backdrop-blur-sm'
          : 'bg-white/97 backdrop-blur-md border-b border-gray-100/80 py-2'
      }`}
      style={{
        boxShadow: isTransparent ? 'none' : '0 1px 24px rgba(0,0,0,0.07)',
        background: isTransparent ? 'rgba(0,0,0,0.42)' : undefined,
      }}>

      <div className={`px-6 sm:px-12 lg:px-20 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`} dir="ltr">

        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <div className="relative w-12 h-12 flex-shrink-0" style={{ transform: 'scale(1.6)', transformOrigin: 'left center' }}>
            <Image src="/logo.png" alt="Goutte d'Espoir" fill className="object-contain" priority />
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {(isRTL ? [...navLinks].reverse() : navLinks).map(({ key, href }) => (
            <Link key={key} href={href}
              className={`relative text-[15px] font-semibold transition-colors duration-200 whitespace-nowrap ${
                isActive(href)
                  ? 'text-[#26ab52]'
                  : isTransparent
                    ? 'text-white hover:text-white/80'
                    : 'text-gray-500 hover:text-gray-900'
              }`}
>
              {t(key as Parameters<typeof t>[0])}
              {isActive(href) && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full" style={{ background: '#26ab52' }} />
              )}
            </Link>
          ))}
        </div>

        {/* Language switcher — pill toggle */}
        <div className="hidden md:flex items-center">
          <div className={`relative flex items-center rounded-full p-0.5 transition-all duration-300 ${
            isTransparent
              ? 'bg-white/12 border border-white/20 backdrop-blur-sm'
              : 'bg-gray-100 border border-gray-200'
          }`}>
            {/* sliding active pill */}
            <div
              className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full transition-all duration-300 ease-in-out"
              style={{
                background: '#26ab52',
                left: locale === 'fr' ? '2px' : 'calc(50%)',
              }}
            />
            {['fr', 'ar'].map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={`relative z-10 w-10 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase transition-colors duration-300 ${
                  locale === loc
                    ? 'text-white'
                    : isTransparent ? 'text-white/60 hover:text-white/90' : 'text-gray-400 hover:text-gray-700'
                }`}>
                {loc.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1.5" aria-label="Menu">
          <div className={`w-5 h-0.5 transition-all duration-200 ${
            isTransparent ? 'bg-white' : 'bg-gray-700'
          } ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-5 h-0.5 transition-all duration-200 ${
            isTransparent ? 'bg-white' : 'bg-gray-700'
          } ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 transition-all duration-200 ${
            isTransparent ? 'bg-white' : 'bg-gray-700'
          } ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className={`bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-0.5 ${isRTL ? 'items-end' : ''}`}>
          {navLinks.map(({ key, href }) => (
            <Link key={key} href={href} onClick={() => setMenuOpen(false)}
              className={`w-full py-2.5 text-[13px] font-medium border-b border-gray-50 last:border-0 transition-colors ${
                isRTL ? 'text-right' : ''
              } ${isActive(href) ? 'text-[#26ab52] font-semibold' : 'text-gray-500'}`}>
              {t(key as Parameters<typeof t>[0])}
            </Link>
          ))}
          {/* Mobile lang switcher */}
          <div className="pt-4 w-full flex items-center gap-2">
            {['fr', 'ar'].map((loc) => (
              <button key={loc} onClick={() => switchLocale(loc)}
                className={`flex-1 py-2.5 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all ${
                  locale === loc
                    ? 'text-white'
                    : 'text-gray-400 bg-gray-100'
                }`}
                style={locale === loc ? { background: '#26ab52' } : {}}>
                {loc.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
