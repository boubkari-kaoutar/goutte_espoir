'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Entrance
      tl.fromTo(logoRef.current, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, ease: 'back.out(1.7)' }, 0.2)
        .fromTo(textRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, 0.6)
        .fromTo(progressRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.8)
        .to(progressBarRef.current, { width: '100%', duration: 1.4, ease: 'power1.inOut' }, 0.9);

      // Fade out
      tl.to(textRef.current, { y: -10, opacity: 0, duration: 0.4, ease: 'power2.in' }, 2.4)
        .to(logoRef.current, { scale: 1.15, opacity: 0, duration: 0.5, ease: 'power2.in' }, 2.5)
        .to(loaderRef.current, { opacity: 0, duration: 0.5, ease: 'power2.in',
          onComplete: () => setVisible(false),
        }, 2.7);
    });

    return () => ctx.revert();
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #f0fdf4 0%, #ffffff 40%, #eff6ff 100%)' }}
    >
      {/* Background dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(38,171,82,0.1) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Ambient orbs */}
      <div className="absolute pointer-events-none"
        style={{ top: '10%', right: '10%', width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(38,171,82,0.12) 0%, transparent 70%)',
          filter: 'blur(70px)', borderRadius: '50%' }}
      />
      <div className="absolute pointer-events-none"
        style={{ bottom: '10%', left: '10%', width: '350px', height: '350px',
          background: 'radial-gradient(circle, rgba(7,98,210,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)', borderRadius: '50%' }}
      />

      {/* Logo */}
      <div ref={logoRef} className="relative w-24 h-24 z-10" style={{ opacity: 0 }}>
        {/* Glow ring */}
        <div
          className="absolute -inset-4 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(38,171,82,0.2) 0%, transparent 70%)', filter: 'blur(10px)' }}
        />
        <div
          className="absolute inset-0 rounded-full border-2"
          style={{ borderColor: 'rgba(38,171,82,0.2)', animation: 'ping 2s cubic-bezier(0,0,0.2,1) infinite' }}
        />
        <div className="relative w-full h-full drop-shadow-lg">
          <Image src="/nvLogo/LOGO-GOUTTE-D'ESPOIR-.png" alt="Goutte d'Espoir" fill className="object-contain" priority />
        </div>
      </div>

      {/* Text */}
      <div ref={textRef} className="mt-8 text-center z-10" style={{ opacity: 0 }}>
        <div className="font-display font-black text-2xl text-gray-900 leading-none">
          Goutte{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #327700, #16390d)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            d&apos;Espoir
          </span>
        </div>
        <p className="mt-2 text-gray-400 text-xs font-medium tracking-[0.2em] uppercase">
          Énergie Solaire · Maroc
        </p>

        {/* Animated dots */}
        <div ref={dotsRef} className="mt-4 flex items-center justify-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: i === 0 ? '#327700' : i === 1 ? '#1c0b64' : '#16390d',
                animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div
        ref={progressRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-0.5 rounded-full overflow-hidden"
        style={{ background: 'rgba(0,0,0,0.06)', opacity: 0 }}
      >
        <div
          ref={progressBarRef}
          className="h-full rounded-full"
          style={{
            width: '0%',
            background: 'linear-gradient(90deg, #327700, #16390d, #1c0b64, #31b6e7)',
          }}
        />
      </div>
    </div>
  );
}
