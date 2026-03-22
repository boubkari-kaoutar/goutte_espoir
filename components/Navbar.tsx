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
    <nav ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/96 backdrop-blur-md border-b border-gray-100 py-3.5'
          : 'py-5'
      }`}
      style={{
        boxShadow: scrolled ? '0 1px 16px rgba(0,0,0,0.06)' : 'none',
        background: scrolled ? undefined : 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 100%)',
      }}>

      {/* dir="ltr" on this inner wrapper keeps the navbar layout
          independent of the page dir, then we manually re-mirror only
          what needs flipping — avoids double-reverse with html dir="rtl" */}
      <div className="px-6 sm:px-12 lg:px-20 flex items-center justify-between" dir="ltr">

        {/* Logo — always LTR (brand name is French) */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-9 h-9 flex-shrink-0">
            <Image src="/logo.png" alt="Goutte d'Espoir" fill className="object-contain" priority />
          </div>
          <div className="hidden sm:block">
            <div className={`font-display font-black text-[15px] leading-none transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Goutte <span style={{ color: '#26ab52' }}>d&apos;Espoir</span>
            </div>
            <div className={`text-[10px] font-medium tracking-[0.18em] uppercase mt-0.5 transition-colors duration-300 ${scrolled ? 'text-gray-400' : 'text-white/60'}`}>
              Énergie Solaire
            </div>
          </div>
        </Link>

        {/* Desktop links — reversed order for RTL so "home" is near logo */}
        <div className="hidden md:flex items-center gap-8">
          {(isRTL ? [...navLinks].reverse() : navLinks).map(({ key, href }) => (
            <Link key={key} href={href}
              className={`text-[13px] font-medium transition-colors duration-300 ${
                isActive(href)
                  ? 'text-[#26ab52]'
                  : scrolled
                    ? 'text-gray-500 hover:text-gray-900'
                    : 'text-white/80 hover:text-white'
              }`}>
              {t(key as Parameters<typeof t>[0])}
            </Link>
          ))}
        </div>

        {/* Right side — lang switcher + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className={`flex items-center gap-0.5 rounded-lg p-0.5 border transition-colors duration-300 ${scrolled ? 'border-gray-200' : 'border-white/25 bg-white/10 backdrop-blur-sm'}`}>
            {['fr', 'ar'].map((loc) => (
              <button key={loc} onClick={() => switchLocale(loc)}
                className={`px-3 py-1.5 rounded-md text-[11px] font-semibold tracking-wide transition-all duration-200 ${
                  locale === loc
                    ? scrolled ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
                    : scrolled ? 'text-gray-400 hover:text-gray-600' : 'text-white/70 hover:text-white'
                }`}>
                {loc.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1.5" aria-label="Menu">
          <div className={`w-5 h-0.5 bg-gray-700 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-5 h-0.5 bg-gray-700 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-gray-700 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className={`bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-0.5 ${isRTL ? 'items-end' : ''}`}>
          {navLinks.map(({ key, href }) => (
            <Link key={key} href={href} onClick={() => setMenuOpen(false)}
              className={`w-full py-2.5 text-[13px] font-medium border-b border-gray-50 last:border-0 transition-colors ${
                isRTL ? 'text-right' : ''
              } ${isActive(href) ? 'text-[#26ab52]' : 'text-gray-500'}`}>
              {t(key as Parameters<typeof t>[0])}
            </Link>
          ))}
          <div className="pt-3 w-full flex items-center gap-2">
            {['fr', 'ar'].map((loc) => (
              <button key={loc} onClick={() => switchLocale(loc)}
                className={`flex-1 py-2 rounded-lg text-[11px] font-semibold border transition-all ${
                  locale === loc ? 'bg-gray-900 border-gray-900 text-white' : 'border-gray-200 text-gray-400'
                }`}>
                {loc.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
