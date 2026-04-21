import { Link } from '@/i18n/navigation';
import CTABanner from '@/components/CTABanner';

const COLOR = '#f97316';

const IMG = {
  hero:        '/Chauffe-eau%20Solaire.png',
  detail:      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&h=420&q=80',
  residential: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=600&h=360&q=80',
  collective:  'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=600&h=360&q=80',
  hotel:       'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&h=360&q=80',
};

const t = {
  fr: {
    back: 'Retour aux services',
    number: '05',
    tagline: "L'énergie du soleil pour chauffer votre eau.",
    title: 'Chauffe-eau Solaire',
    desc: "Systèmes de chauffe-eau solaires thermiques pour usage résidentiel et collectif. Réduisez votre facture d'électricité jusqu'à 80% sur la production d'eau chaude sanitaire, avec un retour sur investissement en 3 à 5 ans.",
    howLabel: 'Comment ça fonctionne',
    steps: [
      { n: '01', title: 'Étude du besoin', desc: "Évaluation de votre consommation d'eau chaude, orientation du toit et emplacement du ballon." },
      { n: '02', title: 'Choix du système', desc: "Sélection du capteur thermique, du ballon et du système d'appoint adaptés à votre usage." },
      { n: '03', title: 'Installation', desc: "Pose des capteurs solaires, du ballon de stockage et raccordement hydraulique en 1 journée." },
      { n: '04', title: 'Mise en service', desc: "Tests de pression, réglage du régulateur et vérification du rendement thermique." },
    ],
    detailTitle: "Jusqu'à 80% d'économies",
    detailHighlight: 'sur votre eau chaude',
    detailDesc: "Un chauffe-eau solaire thermique capte l'énergie infrarouge du soleil pour chauffer directement l'eau sanitaire. Contrairement au photovoltaïque, il convertit le rayonnement solaire en chaleur avec un rendement de 60 à 80%.",
    specs: [
      'Capteurs solaires plans ou sous vide (100–500 L/jour)',
      'Ballon de stockage inox ou émaillé avec isolation renforcée',
      "Résistance d'appoint électrique pour les jours nuageux",
      'Régulateur électronique de température différentielle',
      'Fluide caloporteur antigel pour les régions froides',
      'Garantie capteurs 5 ans + ballon 3 ans',
    ],
    stats: [
      { value: '−80%', label: 'sur eau chaude' },
      { value: '3–5 ans', label: 'retour invest.' },
      { value: '15 ans', label: 'durée de vie' },
    ],
    typesLabel: 'Applications',
    types: [
      { title: 'Résidentiel',  img: IMG.residential, desc: "Pour les maisons et appartements. Système 150–300L couvrant 70 à 80% des besoins en eau chaude d'une famille." },
      { title: 'Collectif',    img: IMG.collective,   desc: "Pour les immeubles, coopératives et résidences. Systèmes centralisés ou individuels selon configuration." },
      { title: 'Hôtellerie',   img: IMG.hotel,        desc: "Pour hôtels, riads et gîtes. Systèmes grande capacité (500L–5000L) avec appoint optimisé." },
    ],
  },
  ar: {
    back: 'العودة إلى الخدمات',
    number: '05',
    tagline: 'طاقة الشمس لتسخين مياهك.',
    title: 'سخان المياه الشمسي',
    desc: 'أنظمة سخانات المياه الشمسية الحرارية للاستخدام السكني والجماعي. خفّض فاتورة كهربائك حتى 80% في إنتاج المياه الساخنة، مع استرداد الاستثمار في 3 إلى 5 سنوات.',
    howLabel: 'كيف تسير العملية',
    steps: [
      { n: '01', title: 'دراسة الاحتياج', desc: 'تقييم استهلاكك من المياه الساخنة، توجيه السطح وموقع الخزان.' },
      { n: '02', title: 'اختيار النظام', desc: 'اختيار اللواقط الحرارية والخزان ونظام التدفئة الاحتياطي المناسب لاستخدامك.' },
      { n: '03', title: 'التركيب', desc: 'تركيب اللواقط الشمسية وخزان التخزين والتوصيل الهيدروليكي في يوم واحد.' },
      { n: '04', title: 'التشغيل', desc: 'اختبارات الضغط، ضبط المنظم والتحقق من المردودية الحرارية.' },
    ],
    detailTitle: 'توفير حتى 80٪',
    detailHighlight: 'على مياهك الساخنة',
    detailDesc: 'يلتقط سخان الماء الشمسي الحراري الطاقة تحت الحمراء من الشمس لتسخين مياه الاستخدام اليومي مباشرة. على عكس الطاقة الكهروضوئية، يحوّل الإشعاع الشمسي إلى حرارة بمردودية من 60 إلى 80٪.',
    specs: [
      'لواقط شمسية مسطحة أو أنابيب مفرغة (100–500 لتر/يوم)',
      'خزان تخزين من الستانلس ستيل أو المينا مع عزل محكم',
      'مقاومة احتياطية كهربائية للأيام الغائمة',
      'منظم إلكتروني لفرق درجات الحرارة',
      'سائل ناقل للحرارة مضاد للتجمد للمناطق الباردة',
      'ضمان اللواقط 5 سنوات + الخزان 3 سنوات',
    ],
    stats: [
      { value: '−80٪', label: 'على المياه الساخنة' },
      { value: '3–5 سنوات', label: 'استرداد الاستثمار' },
      { value: '15 سنة', label: 'مدة الحياة' },
    ],
    typesLabel: 'تطبيقات',
    types: [
      { title: 'سكني',     img: IMG.residential, desc: 'للمنازل والشقق. نظام 150–300 لتر يغطي 70 إلى 80٪ من احتياجات الأسرة من المياه الساخنة.' },
      { title: 'جماعي',    img: IMG.collective,   desc: 'للعمارات والتعاونيات والإقامات. أنظمة مركزية أو فردية حسب التكوين.' },
      { title: 'فندقي',    img: IMG.hotel,        desc: 'للفنادق والرياضات والمنتجعات. أنظمة سعة كبيرة (500–5000 لتر) مع تحسين الاحتياطي.' },
    ],
  },
};

export default async function HeaterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = locale === 'ar' ? t.ar : t.fr;
  const isRTL = locale === 'ar';

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <section className="relative bg-white border-b border-gray-100">
        <div className="px-6 sm:px-12 lg:px-20 pt-40 pb-20">
          <Link href="/services"
            className={`inline-flex items-center gap-2 text-[12px] text-gray-400 hover:text-gray-700 font-medium transition-colors mb-10 group ${isRTL ? 'flex-row-reverse' : ''}`}>
            <svg className={`w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5 ${isRTL ? '' : 'rotate-180'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            {c.back}
          </Link>
          <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span className="font-black text-[11px] tracking-[0.3em] uppercase" style={{ color: COLOR }}>{c.number}</span>
            <div className="w-6 h-px bg-gray-200" />
            <span className="text-gray-400 text-[11px] tracking-[0.2em] uppercase font-medium">{c.tagline}</span>
          </div>
          <h1 className={`font-display font-black text-gray-950 leading-tight tracking-tight mb-6 ${isRTL ? 'text-right' : ''}`}
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', color: COLOR }}>
            {c.title}
          </h1>
          <p className={`text-gray-500 text-[1.05rem] leading-relaxed font-light max-w-2xl ${isRTL ? 'text-right' : ''}`}>
            {c.desc}
          </p>
        </div>
      </section>

      {/* Main image */}
      <section className="bg-gray-50/50">
        <div className="px-6 sm:px-12 lg:px-20 py-12">
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: `0 8px 40px ${COLOR}22` }}>
            <img src={IMG.hero} alt={c.title} className="w-full h-64 sm:h-96 object-cover" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white border-t border-gray-100">
        <div className="px-6 sm:px-12 lg:px-20 py-20">
          <div className={`text-[11px] font-semibold text-gray-300 uppercase tracking-[0.2em] mb-10 ${isRTL ? 'text-right' : ''}`}>{c.howLabel}</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100">
            {c.steps.map(({ n, title, desc }) => (
              <div key={n} className={`bg-white p-8 ${isRTL ? 'text-right' : ''}`}>
                <div className="font-semibold text-[11px] number-badge mb-5" style={{ color: COLOR }}>{n}</div>
                <h3 className="font-bold text-gray-900 text-[15px] mb-3">{title}</h3>
                <p className="text-gray-400 text-[13px] leading-relaxed font-light">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="bg-gray-50/50 border-t border-gray-100">
        <div className="px-6 sm:px-12 lg:px-20 py-20 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className={isRTL ? 'text-right' : ''}>
            <h2 className="font-display font-black text-gray-950 leading-tight tracking-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
              {c.detailTitle}<br /><span style={{ color: COLOR }}>{c.detailHighlight}</span>
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed font-light mb-8">{c.detailDesc}</p>
            <div className="space-y-4">
              {c.specs.map((item) => (
                <div key={item} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill={COLOR}>
                    <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" />
                  </svg>
                  <span className="text-gray-600 text-[14px] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <img src={IMG.detail} alt={c.title} className="rounded-2xl w-full h-56 object-cover" style={{ boxShadow: `0 4px 24px ${COLOR}22` }} />
            <div className="grid grid-cols-3 gap-4">
              {c.stats.map(({ value, label }) => (
                <div key={label} className="bg-white rounded-xl p-4 border border-gray-100 text-center">
                  <div className="font-black text-xl number-badge" style={{ color: COLOR }} dir="ltr">{value}</div>
                  <div className="text-gray-400 text-[11px] font-medium mt-1 uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="bg-white border-t border-gray-100">
        <div className="px-6 sm:px-12 lg:px-20 py-20">
          <div className={`text-[11px] font-semibold text-gray-300 uppercase tracking-[0.2em] mb-10 ${isRTL ? 'text-right' : ''}`}>{c.typesLabel}</div>
          <div className="grid md:grid-cols-3 gap-5">
            {c.types.map(({ title, img, desc }) => (
              <div key={title} className="rounded-xl border border-gray-100 overflow-hidden hover:shadow-sm transition-shadow">
                <img src={img} alt={title} className="w-full h-44 object-cover" />
                <div className={`p-6 ${isRTL ? 'text-right' : ''}`}>
                  <h3 className="font-bold text-gray-900 text-[15px] mb-2">{title}</h3>
                  <p className="text-gray-400 text-[13px] leading-relaxed font-light">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
