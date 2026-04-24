import { Link } from '@/i18n/navigation';
import CTABanner from '@/components/CTABanner';

const IMG = {
  hero:        'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&h=500&q=80',
  detail:      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=700&h=420&q=80',
  residential: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=600&h=360&q=80',
  commercial:  'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=600&h=360&q=80',
  agricultural:'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=600&h=360&q=80',
};

const t = {
  fr: {
    back: 'Retour aux services',
    tagline: 'Votre toit, notre expertise.',
    title: 'Installation Solaire',
    desc: "De l'étude technique à la mise en service, nous concevons et installons des systèmes photovoltaïques sur mesure, adaptés à votre consommation et à votre budget. Chaque installation est pensée pour durer.",
    howLabel: 'Comment ça fonctionne',
    steps: [
      { n: '01', title: 'Visite technique', desc: "Inspection de votre toiture, évaluation de l'ensoleillement et analyse de vos factures." },
      { n: '02', title: 'Dimensionnement', desc: 'Calcul de la puissance idéale selon votre consommation réelle et votre budget.' },
      { n: '03', title: 'Installation', desc: 'Pose des panneaux par notre équipe certifiée en 1 à 3 jours selon la taille.' },
      { n: '04', title: 'Mise en service', desc: 'Tests complets, raccordement, et remise des documents de garantie.' },
    ],
    detailTitle: 'Une installation pensée',
    detailHighlight: 'pour durer 25 ans',
    detailDesc: "Nos panneaux photovoltaïques sont sélectionnés parmi les meilleures marques du marché. Avec un rendement garanti supérieur à 80% après 25 ans, votre investissement est protégé sur le long terme.",
    specs: [
      'Panneaux monocristallins haute performance (380–550 Wc)',
      'Onduleurs certifiés avec monitoring en temps réel',
      "Structure d'ancrage anti-tempête certifiée",
      'Câblage DC/AC avec protections conformes aux normes',
      'Garantie produit 12 ans + garantie performance 25 ans',
      'Assistance technique dédiée pendant toute la durée de vie',
    ],
    stats: [
      { value: '−70%', label: 'sur la facture' },
      { value: '25 ans', label: 'garantie perf.' },
      { value: '50+', label: 'projets réalisés' },
    ],
    typesLabel: "Types d'installations",
    types: [
      { title: 'Résidentielle', img: IMG.residential, desc: 'Pour les particuliers et maisons individuelles. Systèmes de 3 à 10 kWc adaptés à votre consommation familiale.' },
      { title: 'Commerciale',   img: IMG.commercial,  desc: 'Pour les commerces, bureaux et PME. Installations de 10 à 100 kWc pour réduire significativement vos charges.' },
      { title: 'Agricole',      img: IMG.agricultural,desc: "Pour les exploitations agricoles. Pompage solaire, irrigation et alimentation des équipements ruraux." },
    ],
  },
  ar: {
    back: 'العودة إلى الخدمات',
    tagline: 'سطحك، خبرتنا.',
    title: 'تركيب الألواح الشمسية',
    desc: 'من الدراسة التقنية إلى التشغيل الكامل، نصمم وننفذ أنظمة الطاقة الشمسية المخصصة، المكيّفة مع استهلاكك وميزانيتك. كل تركيب مُعدّ ليدوم.',
    howLabel: 'كيف تسير العملية',
    steps: [
      { n: '01', title: 'زيارة تقنية', desc: 'فحص سطحك، تقييم الإشعاع الشمسي وتحليل فواتيرك.' },
      { n: '02', title: 'التحجيم', desc: 'حساب القدرة المثالية وفق استهلاكك الحقيقي وميزانيتك.' },
      { n: '03', title: 'التركيب', desc: 'تثبيت الألواح من طرف فريقنا المعتمد خلال 1 إلى 3 أيام.' },
      { n: '04', title: 'التشغيل الكامل', desc: 'اختبارات شاملة، توصيل بالشبكة وتسليم وثائق الضمان.' },
    ],
    detailTitle: 'تركيب مُصمَّم',
    detailHighlight: 'ليدوم 25 سنة',
    detailDesc: 'يتم اختيار ألواحنا الكهروضوئية من بين أفضل الماركات في السوق. مع ضمان مردودية تفوق 80% بعد 25 سنة، استثمارك محمي على المدى البعيد.',
    specs: [
      'ألواح أحادية البلورة عالية الأداء (380–550 Wc)',
      'عاكسات معتمدة مع مراقبة فورية',
      'هيكل تثبيت مضاد للعواصف معتمد',
      'أسلاك DC/AC مع حمايات وفق المعايير',
      'ضمان المنتج 12 سنة + ضمان الأداء 25 سنة',
      'دعم تقني مخصص طوال مدة الحياة',
    ],
    stats: [
      { value: '−70٪', label: 'على الفاتورة' },
      { value: '25 سنة', label: 'ضمان الأداء' },
      { value: '+50', label: 'مشاريع منجزة' },
    ],
    typesLabel: 'أنواع التركيبات',
    types: [
      { title: 'سكنية',    img: IMG.residential, desc: 'للأفراد والمنازل. أنظمة من 3 إلى 10 كيلوواط مكيّفة مع استهلاك العائلة.' },
      { title: 'تجارية',   img: IMG.commercial,  desc: 'للمحلات التجارية والمكاتب والمقاولات الصغيرة. تقليص ملحوظ للأعباء.' },
      { title: 'فلاحية',   img: IMG.agricultural,desc: 'للمزارع. ضخ شمسي، ري وتغذية المعدات الريفية.' },
    ],
  },
};

export default async function SolarPage({ params }: { params: Promise<{ locale: string }> }) {
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
            <span className="font-black text-[11px] tracking-[0.3em] uppercase" style={{ color: '#327700' }}>01</span>
            <div className="w-6 h-px bg-gray-200" />
            <span className="text-gray-400 text-[11px] tracking-[0.2em] uppercase font-medium">{c.tagline}</span>
          </div>
          <h1 className={`font-display font-black text-gray-950 leading-tight tracking-tight mb-6 ${isRTL ? 'text-right' : ''}`}
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', color: '#327700' }}>
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
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 8px 40px rgba(38,171,82,0.1)' }}>
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
                <div className="font-semibold text-[11px] number-badge mb-5" style={{ color: '#327700' }}>{n}</div>
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
              {c.detailTitle}<br /><span style={{ color: '#327700' }}>{c.detailHighlight}</span>
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed font-light mb-8">{c.detailDesc}</p>
            <div className="space-y-4">
              {c.specs.map((item) => (
                <div key={item} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="#327700">
                    <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" />
                  </svg>
                  <span className="text-gray-600 text-[14px] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <img src={IMG.detail} alt={c.title} className="rounded-2xl w-full h-56 object-cover" style={{ boxShadow: '0 4px 24px rgba(38,171,82,0.1)' }} />
            <div className="grid grid-cols-3 gap-4">
              {c.stats.map(({ value, label }) => (
                <div key={label} className={`bg-white rounded-xl p-4 border border-gray-100 text-center`}>
                  <div className="font-black text-xl number-badge" style={{ color: '#327700' }} dir="ltr">{value}</div>
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
