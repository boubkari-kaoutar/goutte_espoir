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
      gsap.fromTo(
        navRef.current,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.1 }
      );
    });

    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, []);

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="relative w-11 h-11 transition-transform duration-300 group-hover:scale-110"
            >
              <Image src="/logo.png" alt="Goutte d'Espoir Logo" fill className="object-contain" priority />
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-black text-lg text-gray-900 leading-none block">
                Goutte <span className="gradient-text-green">d&apos;Espoir</span>
              </span>
              <div
                className="h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-full mt-0.5"
                style={{ background: 'linear-gradient(90deg, #26ab52, #a3d42a)' }}
              />
            </div>
          </Link>

          {/* Desktop links */}
          <div className={`hidden md:flex items-center gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`nav-link text-sm font-semibold transition-colors duration-200 ${
                  isActive(link.href) ? 'text-[#26ab52] active' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className={`hidden md:flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Language switcher */}
            <div className="flex items-center gap-1 bg-gray-100/80 backdrop-blur-sm rounded-full p-1">
              <button
                onClick={() => switchLocale('fr')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  locale === 'fr' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => switchLocale('ar')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  locale === 'ar' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                AR
              </button>
            </div>

          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className={`w-5 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-5 h-0.5 bg-gray-800 my-1.5 transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <div className={`w-5 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="glass mt-2 mx-4 rounded-2xl p-6 flex flex-col gap-3 shadow-glass">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`py-2.5 border-b border-gray-100/80 last:border-0 font-semibold text-sm transition-colors ${
                isActive(link.href) ? 'text-[#26ab52]' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t(link.key)}
            </Link>
          ))}

          {/* Mobile language switcher */}
          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={() => switchLocale('fr')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                locale === 'fr' ? 'bg-[#26ab52] text-white' : 'bg-gray-100 text-gray-500'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => switchLocale('ar')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                locale === 'ar' ? 'bg-[#26ab52] text-white' : 'bg-gray-100 text-gray-500'
              }`}
            >
              AR
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
