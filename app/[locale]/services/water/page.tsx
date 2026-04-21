import { Link } from '@/i18n/navigation';
import CTABanner from '@/components/CTABanner';

const COLOR = '#74d1fa';

const IMG = {
  hero:    '/Traitement%20de%20l%27eau.png',
  detail:  'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=700&h=420&q=80',
  rural:   'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=600&h=360&q=80',
  agri:    'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&h=360&q=80',
  village: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=600&h=360&q=80',
};

const t = {
  fr: {
    back: 'Retour aux services',
    number: '04',
    tagline: "L'eau propre, une ressource à protéger.",
    title: "Traitement de l'eau",
    desc: "Solutions solaires pour le pompage, la filtration et le traitement de l'eau potable. Des systèmes autonomes et durables adaptés aux zones rurales et aux besoins agricoles — sans facture d'électricité.",
    howLabel: 'Comment ça fonctionne',
    steps: [
      { n: '01', title: 'Analyse du besoin', desc: "Évaluation de votre source d'eau, débit nécessaire et niveau d'autonomie souhaité." },
      { n: '02', title: 'Dimensionnement', desc: "Calcul de la puissance solaire et du système de filtration adaptés à votre usage." },
      { n: '03', title: 'Installation', desc: "Mise en place de la pompe, des panneaux et du système de traitement par notre équipe." },
      { n: '04', title: 'Mise en service', desc: "Tests de qualité de l'eau, paramétrage du système et formation à l'utilisation." },
    ],
    detailTitle: "De l’énergie solaire",
    detailHighlight: 'pour une eau propre partout',
    detailDesc: "Nos systèmes de pompage et traitement solaire permettent d'accéder à une eau potable de qualité, même dans les zones les plus reculées du Maroc, sans dépendre du réseau électrique.",
    specs: [
      'Pompes solaires DC immergées ou de surface (0.37 à 7.5 kW)',
      'Filtration à sédiments, charbon actif et UV',
      'Système de chloration ou osmose inverse selon besoin',
      'Tableau de contrôle avec niveau de réservoir automatisé',
      'Compatible alimentation directe panneau ou via batterie',
      'Maintenance simplifiée, pièces disponibles au Maroc',
    ],
    stats: [
      { value: '0 DH', label: 'coût énergie' },
      { value: '100%', label: 'autonome' },
      { value: '20 ans', label: 'durée de vie' },
    ],
    typesLabel: "Applications",
    types: [
      { title: 'Zones rurales', img: IMG.rural,   desc: "Accès à l'eau potable pour les villages et douars non raccordés au réseau. Système complet clé en main." },
      { title: 'Agriculture',   img: IMG.agri,    desc: "Pompage solaire pour irrigation, abreuvage des troupeaux et alimentation des serres agricoles." },
      { title: 'Collectivités', img: IMG.village, desc: "Solutions pour les écoles, centres de santé et mosquées en zones éloignées." },
    ],
  },
  ar: {
    back: 'العودة إلى الخدمات',
    number: '04',
    tagline: 'الماء النظيف، ثروة يجب الحفاظ عليها.',
    title: 'معالجة المياه',
    desc: 'حلول شمسية لضخ وتصفية ومعالجة المياه الصالحة للشرب. أنظمة مستقلة ومستدامة مناسبة للمناطق القروية والاحتياجات الزراعية — بدون فاتورة كهرباء.',
    howLabel: 'كيف تسير العملية',
    steps: [
      { n: '01', title: 'تحليل الاحتياج', desc: 'تقييم مصدر المياه، التدفق المطلوب ومستوى الاستقلالية المرغوبة.' },
      { n: '02', title: 'التحجيم', desc: 'حساب القدرة الشمسية ونظام التصفية المناسب لاستخدامك.' },
      { n: '03', title: 'التركيب', desc: 'تركيب المضخة والألواح ونظام المعالجة من طرف فريقنا.' },
      { n: '04', title: 'التشغيل', desc: 'اختبارات جودة المياه، ضبط النظام والتكوين على الاستخدام.' },
    ],
    detailTitle: 'طاقة شمسية',
    detailHighlight: 'لمياه نظيفة في كل مكان',
    detailDesc: 'تتيح أنظمة الضخ والمعالجة الشمسية لدينا الوصول إلى مياه شرب ذات جودة، حتى في أنائي مناطق المغرب، دون الاعتماد على شبكة الكهرباء.',
    specs: [
      'مضخات شمسية DC غاطسة أو سطحية (0.37 إلى 7.5 كيلوواط)',
      'تصفية بالرواسب والفحم النشط والأشعة فوق البنفسجية',
      'نظام كلورة أو تناضح عكسي حسب الحاجة',
      'لوحة تحكم مع مستشعر مستوى الخزان آلياً',
      'متوافق مع التغذية المباشرة أو عبر البطارية',
      'صيانة مبسطة، قطع غيار متوفرة في المغرب',
    ],
    stats: [
      { value: '0 درهم', label: 'تكلفة الطاقة' },
      { value: '100٪', label: 'مستقل' },
      { value: '20 سنة', label: 'مدة الحياة' },
    ],
    typesLabel: 'تطبيقات',
    types: [
      { title: 'المناطق القروية', img: IMG.rural,   desc: 'الوصول إلى مياه الشرب للقرى والدواوير غير المرتبطة بالشبكة. نظام متكامل جاهز للتسليم.' },
      { title: 'الزراعة',         img: IMG.agri,    desc: 'ضخ شمسي للري وسقي الماشية وتغذية البيوت المحمية الزراعية.' },
      { title: 'الجماعات',        img: IMG.village, desc: 'حلول للمدارس والمراكز الصحية والمساجد في المناطق النائية.' },
    ],
  },
};

export default async function WaterPage({ params }: { params: Promise<{ locale: string }> }) {
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
