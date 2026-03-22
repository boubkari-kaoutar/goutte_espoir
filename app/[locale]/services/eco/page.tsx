import { Link } from '@/i18n/navigation';
import CTABanner from '@/components/CTABanner';

const IMG = {
  hero:    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=500&q=80',
  audit:   'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=360&q=80',
  sim:     'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=360&q=80',
  admin:   'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&h=360&q=80',
  consult: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=700&h=500&q=80',
};

const t = {
  fr: {
    back: 'Retour aux services',
    tagline: "Éclairez vos décisions avant d'éclairer votre maison.",
    title: 'Conseil & Accompagnement',
    desc: "Audit énergétique complet, simulation de rentabilité, accompagnement administratif et aide aux démarches de subvention. Nous vous guidons de A à Z, sans jargon technique.",
    servicesLabel: "Ce que comprend l'accompagnement",
    services: [
      {
        n: '01', title: 'Audit énergétique', img: IMG.audit,
        desc: "Analyse complète de votre consommation actuelle, relevé de vos factures sur 12 mois, identification des pics de consommation et des leviers d'optimisation.",
      },
      {
        n: '02', title: 'Simulation de rentabilité', img: IMG.sim,
        desc: "Modélisation financière personnalisée : coût total, économies annuelles projetées, délai de retour sur investissement et valeur nette actualisée sur 25 ans.",
      },
      {
        n: '03', title: 'Aide aux subventions', img: IMG.admin,
        desc: "Accompagnement dans les démarches auprès de l'AMEE, MASEN et des organismes de financement. Constitution du dossier et suivi jusqu'à l'obtention.",
      },
    ],
    whyTitle: 'Pourquoi se faire',
    whyHighlight: "conseiller avant d'acheter ?",
    whyDesc: "Un mauvais dimensionnement peut coûter jusqu'à 30% de rentabilité en moins. Notre audit vous évite les erreurs courantes et optimise chaque dirham investi.",
    features: [
      'Étude gratuite et sans engagement',
      'Rapport détaillé remis sous 48h',
      "Comparatif de 3 scénarios d'installation",
      'Orientation vers les meilleures offres de financement',
      "Accompagnement jusqu'à la signature du contrat d'installation",
    ],
    stats: [
      { value: '100%', label: 'audit gratuit' },
      { value: '48h',  label: 'délai rapport' },
      { value: '4–7 ans', label: 'retour invest.' },
    ],
  },
  ar: {
    back: 'العودة إلى الخدمات',
    tagline: 'استنِر في قراراتك قبل إضاءة منزلك.',
    title: 'الاستشارة والمرافقة',
    desc: 'تدقيق طاقوي شامل، محاكاة للمردودية، مرافقة إدارية ودعم في إجراءات الدعم الحكومي. نرشدك خطوة بخطوة، بدون مصطلحات تقنية معقدة.',
    servicesLabel: 'ما تشمله خدمة المرافقة',
    services: [
      {
        n: '01', title: 'التدقيق الطاقوي', img: IMG.audit,
        desc: 'تحليل شامل لاستهلاكك الحالي، رصد فواتيرك على مدى 12 شهرًا، تحديد ذرى الاستهلاك ورافعات التحسين.',
      },
      {
        n: '02', title: 'محاكاة المردودية', img: IMG.sim,
        desc: 'نمذجة مالية مخصصة: التكلفة الإجمالية، الاقتصاديات السنوية المتوقعة، مدة استرداد الاستثمار والقيمة الصافية الحالية على 25 سنة.',
      },
      {
        n: '03', title: 'المساعدة في الإعانات', img: IMG.admin,
        desc: 'مرافقة في الإجراءات لدى الوكالة المغربية للكفاءة الطاقية وماسن وجهات التمويل. تجميع الملف ومتابعته حتى الحصول على الدعم.',
      },
    ],
    whyTitle: 'لماذا تستشير',
    whyHighlight: 'قبل الشراء؟',
    whyDesc: 'التحجيم الخاطئ قد يكلفك حتى 30% من المردودية. تدقيقنا يجنّبك الأخطاء الشائعة ويُحسّن استثمار كل درهم.',
    features: [
      'دراسة مجانية وبدون التزام',
      'تقرير مفصّل يُسلَّم خلال 48 ساعة',
      'مقارنة 3 سيناريوهات للتركيب',
      'توجيه نحو أفضل عروض التمويل',
      'مرافقة حتى توقيع عقد التركيب',
    ],
    stats: [
      { value: '100%', label: 'تدقيق مجاني' },
      { value: '48h',  label: 'مدة التقرير' },
      { value: '4–7 سنوات', label: 'عائد الاستثمار' },
    ],
  },
};

export default async function EcoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = locale === 'ar' ? t.ar : t.fr;
  const isRTL = locale === 'ar';

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <section className="relative bg-white border-b border-gray-100 overflow-hidden">
        <div className="px-6 sm:px-12 lg:px-20 pt-40 pb-20">
          <Link href="/services"
            className={`inline-flex items-center gap-2 text-[12px] text-gray-400 hover:text-gray-700 font-medium transition-colors mb-10 group ${isRTL ? 'flex-row-reverse' : ''}`}>
            <svg className={`w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5 ${isRTL ? '' : 'rotate-180'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            {c.back}
          </Link>
          <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span className="font-black text-[11px] tracking-[0.3em] uppercase" style={{ color: '#0762d2' }}>02</span>
            <div className="w-6 h-px bg-gray-200" />
            <span className="text-gray-400 text-[11px] tracking-[0.2em] uppercase font-medium">{c.tagline}</span>
          </div>
          <h1 className={`font-display font-black text-gray-950 leading-tight tracking-tight mb-6 ${isRTL ? 'text-right' : ''}`}
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', color: '#0762d2' }}>
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
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 8px 40px rgba(7,98,210,0.1)' }}>
            <img src={IMG.hero} alt={c.title} className="w-full h-64 sm:h-96 object-cover" />
          </div>
        </div>
      </section>

      {/* Services details */}
      <section className="bg-white border-t border-gray-100">
        <div className="px-6 sm:px-12 lg:px-20 py-20">
          <div className={`text-[11px] font-semibold text-gray-300 uppercase tracking-[0.2em] mb-10 ${isRTL ? 'text-right' : ''}`}>{c.servicesLabel}</div>
          <div className="grid md:grid-cols-3 gap-5">
            {c.services.map(({ n, title, desc, img }) => (
              <div key={n} className="rounded-xl border border-gray-100 overflow-hidden hover:shadow-sm transition-shadow">
                <img src={img} alt={title} className="w-full h-44 object-cover" />
                <div className={`p-6 ${isRTL ? 'text-right' : ''}`}>
                  <div className="font-semibold text-[11px] number-badge mb-3" style={{ color: '#0762d2' }}>{n}</div>
                  <h3 className="font-bold text-gray-900 text-[15px] mb-2">{title}</h3>
                  <p className="text-gray-400 text-[13px] leading-relaxed font-light">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why consult */}
      <section className="bg-gray-50/50 border-t border-gray-100">
        <div className="px-6 sm:px-12 lg:px-20 py-20 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <img src={IMG.consult} alt={c.title}
              className="rounded-2xl w-full h-72 object-cover" style={{ boxShadow: '0 4px 24px rgba(7,98,210,0.1)' }} />
          </div>
          <div className={isRTL ? 'text-right' : ''}>
            <h2 className="font-display font-black text-gray-950 leading-tight tracking-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
              {c.whyTitle}<br /><span style={{ color: '#0762d2' }}>{c.whyHighlight}</span>
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed font-light mb-8">{c.whyDesc}</p>
            <div className="space-y-4 mb-8">
              {c.features.map((item) => (
                <div key={item} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="#0762d2">
                    <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" />
                  </svg>
                  <span className="text-gray-600 text-[14px] font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100">
              {c.stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="font-black text-xl number-badge" style={{ color: '#0762d2' }} dir="ltr">{value}</div>
                  <div className="text-gray-400 text-[11px] font-medium mt-1 uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
