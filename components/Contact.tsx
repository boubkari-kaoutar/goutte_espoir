'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const s = {
  fr: {
    headingMain: 'PARLONS',
    headingAccent: 'solaire',
    sub: "Décrivez votre projet — nous vous répondons sous 24h avec une étude personnalisée.",
    nameLabel: 'NOM COMPLET', namePh: 'Ex: Mohammed Alami',
    emailLabel: 'EMAIL', emailPh: 'votre@email.ma',
    phoneLabel: 'TÉLÉPHONE', phonePh: '+212 6...',
    subjectLabel: 'SUJET DU PROJET', subjectPh: 'Ex: Installation résidentielle 6 kWc',
    msgLabel: 'MESSAGE', msgPh: 'Décrivez votre besoin, votre localisation, votre consommation...',
    submit: 'ENVOYER LA DEMANDE',
    coordTitle: 'NOS',
    coordAccent: 'COORDONNÉES',
    col1Label: 'SIÈGE SOCIAL', col1Title: "Zone d'intervention", col1Value: 'Maroc — Disponible partout',
    col2Label: 'DISPONIBILITÉ IMMÉDIATE', col2Title: 'Ligne directe', col2Value: '+212 636 227 511',
    col3Label: 'RÉPONSE SOUS 24H', col3Title: 'WhatsApp direct', col3Value: 'Contacter maintenant',
    trust1: 'Étude gratuite', trust2: 'Sans engagement', trust3: 'Réponse sous 24h',
  },
  ar: {
    headingMain: 'نتحدث عن',
    headingAccent: 'الطاقة الشمسية.',
    sub: 'صِف مشروعك — نجيبك خلال 24 ساعة بدراسة مخصصة.',
    nameLabel: 'الاسم الكامل', namePh: 'مثال: محمد العلمي',
    emailLabel: 'البريد الإلكتروني', emailPh: 'بريدك@email.ma',
    phoneLabel: 'الهاتف', phonePh: '+212 6...',
    subjectLabel: 'موضوع المشروع', subjectPh: 'مثال: تركيب سكني 6 كيلوواط',
    msgLabel: 'الرسالة', msgPh: 'اشرح احتياجك، موقعك، استهلاكك...',
    submit: 'إرسال الطلب',
    coordTitle: 'معلوماتنا',
    coordAccent: 'الرسمية',
    col1Label: 'المقر الاجتماعي', col1Title: 'منطقة التدخل', col1Value: 'المغرب — متاح في كل مكان',
    col2Label: 'توفر فوري', col2Title: 'الخط المباشر', col2Value: '+212 636 227 511',
    col3Label: 'رد خلال 24 ساعة', col3Title: 'واتساب مباشر', col3Value: 'تواصل الآن',
    trust1: 'دراسة مجانية', trust2: 'بدون التزام', trust3: 'رد خلال 24 ساعة',
  },
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className ?? 'w-5 h-5'} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function Contact() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const c = isRTL ? s.ar : s.fr;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const coordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', duration: 1.4, ease: 'power4.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%' } }
      );
      gsap.fromTo(formRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: formRef.current, start: 'top 82%' } }
      );
      gsap.fromTo(
        coordRef.current ? Array.from(coordRef.current.children) : [],
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: coordRef.current, start: 'top 82%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const inputCls = `w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#26ab52] focus:ring-1 focus:ring-[#26ab52]/20 transition-colors ${isRTL ? 'text-right' : ''}`;

  return (
    <section id="contact" ref={sectionRef} className="relative bg-white overflow-hidden">


      {/* ── COORDONNÉES SECTION ── */}
      <div className="border-b border-gray-100 bg-gray-50/50">
        <div className={`px-8 sm:px-14 lg:px-20 pt-14 pb-6 ${isRTL ? 'text-right' : ''}`}>
          <div className="font-display font-black text-gray-950 leading-[0.9] tracking-tight uppercase"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            {c.coordTitle}
          </div>
          <div className="font-display font-black leading-[0.9] tracking-tight uppercase"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#26ab52' }}>
            {c.coordAccent}
          </div>
        </div>

        <div ref={coordRef} className={`px-8 sm:px-14 lg:px-20 py-12 grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200 ${isRTL ? 'text-right' : ''}`}>
          {/* Col 1 — Location */}
          <div className={`py-8 md:py-0 md:px-10 first:pl-0 last:pr-0 flex flex-col gap-3 ${isRTL ? 'items-end' : ''}`}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#26ab5212' }}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#26ab52" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{c.col1Label}</div>
            <div className="font-bold text-gray-900 text-[15px]">{c.col1Title}</div>
            <div className="text-gray-400 text-[13px] italic font-light">{c.col1Value}</div>
          </div>

          {/* Col 2 — Phone */}
          <div className={`py-8 md:py-0 md:px-10 flex flex-col gap-3 ${isRTL ? 'items-end' : ''}`}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#0762d212' }}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#0762d2" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{c.col2Label}</div>
            <div className="font-bold text-gray-900 text-[15px]">{c.col2Title}</div>
            <a href="https://wa.me/212636227511" dir="ltr"
              className="text-[#0762d2] text-[13px] font-mono font-semibold hover:opacity-70 transition-opacity">
              {c.col2Value}
            </a>
          </div>

          {/* Col 3 — WhatsApp */}
          <div className={`py-8 md:py-0 md:px-10 flex flex-col gap-3 ${isRTL ? 'items-end' : ''}`}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(37,211,102,0.1)' }}>
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
            </div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{c.col3Label}</div>
            <div className="font-bold text-gray-900 text-[15px]">{c.col3Title}</div>
            <a href="https://wa.me/212636227511" target="_blank" rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-[13px] font-semibold text-[#25D366] hover:opacity-70 transition-opacity ${isRTL ? 'flex-row-reverse' : ''}`}>
              {c.col3Value}
              <svg className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── FORM SECTION ── */}
      <div className={`px-8 sm:px-14 lg:px-20 pt-16 pb-20 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start ${isRTL ? 'text-right' : ''}`}>

        {/* Left — heading + info */}
        <div className={isRTL ? 'lg:order-2' : 'lg:order-1'}>
          <div className="overflow-hidden mb-2">
            <div ref={titleRef} style={{ clipPath: 'inset(0 100% 0 0)' }}>
              <div className="font-display font-black text-gray-950 leading-[0.9] tracking-tight uppercase"
                style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)' }}>
                {c.headingMain}
              </div>
              <div className="font-display font-black leading-[0.9] tracking-tight italic"
                style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)', color: '#26ab52' }}>
                {c.headingAccent}
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-[15px] font-light leading-relaxed mt-6 mb-10 max-w-sm">{c.sub}</p>

          {/* Trust badges */}
          <div className={`flex flex-wrap gap-3 mb-10 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {[
              { label: c.trust1, color: '#26ab52' },
              { label: c.trust2, color: '#0762d2' },
              { label: c.trust3, color: '#a3d42a' },
            ].map(({ label, color }) => (
              <span key={label}
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full border uppercase tracking-wider"
                style={{ borderColor: `${color}30`, color }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
                {label}
              </span>
            ))}
          </div>

          {/* Info rows */}
          <div className="flex flex-col gap-0 border-t border-gray-100">
            {[
              { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', text: t('info.location' as Parameters<typeof t>[0]), color: '#26ab52' },
              { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', text: t('info.availability' as Parameters<typeof t>[0]), color: '#0762d2' },
              { icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', text: t('info.response' as Parameters<typeof t>[0]), color: '#a3d42a' },
            ].map(({ icon, text, color }) => (
              <div key={text} className={`flex items-center gap-4 py-4 border-b border-gray-100 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}12` }}>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} style={{ color }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
                </div>
                <span className="text-gray-600 text-sm font-light">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div ref={formRef} className={isRTL ? 'lg:order-1' : 'lg:order-2'}>
          <div className="relative rounded-2xl border border-gray-100 bg-white overflow-hidden p-8"
            style={{ boxShadow: '0 4px 40px rgba(0,0,0,0.05)' }}>
            <div className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: 'linear-gradient(90deg, #26ab52, #0762d2, #a3d42a)' }} />

            <div className={`text-[10px] font-bold text-gray-300 uppercase tracking-[0.28em] mb-6 ${isRTL ? 'text-right' : ''}`}>
              {t('badge')}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const text = isRTL
                  ? `الاسم: ${name}\nالهاتف: ${phone}\nالبريد: ${email}\nالموضوع: ${subject}\nالرسالة: ${message}`
                  : `Nom: ${name}\nTél: ${phone}\nEmail: ${email}\nSujet: ${subject}\nMessage: ${message}`;
                window.open(`https://wa.me/212636227511?text=${encodeURIComponent(text)}`, '_blank');
              }}
              className="flex flex-col gap-5">

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{c.nameLabel}</label>
                  <input type="text" placeholder={c.namePh} className={inputCls} value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{c.emailLabel}</label>
                  <input type="email" placeholder={c.emailPh} className={inputCls} value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{c.phoneLabel}</label>
                  <input type="tel" placeholder={c.phonePh} className={inputCls} dir="ltr" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{c.subjectLabel}</label>
                  <input type="text" placeholder={c.subjectPh} className={inputCls} value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{c.msgLabel}</label>
                <textarea rows={4} placeholder={c.msgPh} className={`${inputCls} resize-none`} value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>

              <button type="submit"
                className={`group w-full flex items-center justify-center gap-3 rounded-xl font-bold text-white text-[13px] tracking-widest uppercase py-4 transition-opacity hover:opacity-90 ${isRTL ? 'flex-row-reverse' : ''}`}
                style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
                {c.submit}
                <svg className={`w-4 h-4 transition-transform duration-200 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

            </form>
          </div>
        </div>
      </div>


    </section>
  );
}
