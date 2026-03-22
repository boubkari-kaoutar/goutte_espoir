import { Link } from '@/i18n/navigation';
import CTABanner from '@/components/CTABanner';

const IMG = {
  hero:  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&h=500&q=80',
  coop:  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=700&h=460&q=80',
  act1:  'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&h=360&q=80',
  act2:  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&h=360&q=80',
  act3:  'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=600&h=360&q=80',
};

const t = {
  fr: {
    back: 'Retour à notre vision',
    num: '02',
    tagline: 'Chaque projet, un lien de plus.',
    title: 'Communauté',
    desc: "Chaque projet renforce les liens sociaux et l'autonomie des familles et coopératives locales. Nous croyons que l'énergie solaire est un vecteur de développement humain, pas seulement un outil technique.",
    actionsLabel: 'Nos actions communautaires',
    actions: [
      {
        n: '01', title: 'Coopératives agricoles', img: IMG.act1,
        desc: "Nous équipons les coopératives agricoles de systèmes de pompage solaire, réduisant leurs charges et renforçant leur souveraineté énergétique.",
      },
      {
        n: '02', title: 'Emplois locaux', img: IMG.act2,
        desc: "Tous nos techniciens sont formés et recrutés localement. Chaque installation crée au moins un emploi pérenne dans la région d'intervention.",
      },
      {
        n: '03', title: 'Sensibilisation', img: IMG.act3,
        desc: "Ateliers d'éducation à l'énergie propre dans les écoles et associations. Nous formons la prochaine génération d'acteurs du solaire marocain.",
      },
    ],
    impactTitle: 'Un impact',
    impactHighlight: 'humain et durable',
    impactDesc: "Nos projets ne s'arrêtent pas à l'installation. Nous accompagnons les communautés sur le long terme : formation, suivi, réinvestissement des économies réalisées dans des projets collectifs.",
    features: [
      "Partenariats avec 15+ coopératives locales au Maroc",
      "Formation de techniciens locaux certifiés sur chaque projet",
      "Ateliers d'éducation à l'énergie dans les écoles rurales",
      "Programme de micro-financement pour les ménages modestes",
      "Réinvestissement de 5% des bénéfices dans des projets sociaux",
    ],
    stats: [
      { value: '300+', label: 'familles aidées' },
      { value: '15+',  label: 'coopératives' },
      { value: '40+',  label: 'emplois créés' },
    ],
  },
  ar: {
    back: 'العودة إلى رؤيتنا',
    num: '02',
    tagline: 'كل مشروع، رابط إضافي.',
    title: 'المجتمع',
    desc: 'كل مشروع يعزز الروابط الاجتماعية واستقلالية العائلات والتعاونيات المحلية. نؤمن بأن الطاقة الشمسية وسيلة للتنمية البشرية، وليست مجرد أداة تقنية.',
    actionsLabel: 'مبادراتنا المجتمعية',
    actions: [
      {
        n: '01', title: 'التعاونيات الفلاحية', img: IMG.act1,
        desc: 'نجهّز التعاونيات الفلاحية بأنظمة الضخ الشمسي، مما يخفف أعباءها ويعزز استقلاليتها الطاقية.',
      },
      {
        n: '02', title: 'فرص العمل المحلية', img: IMG.act2,
        desc: 'جميع تقنيينا مدرّبون ومُوظَّفون محلياً. كل تركيب يخلق على الأقل منصب شغل دائم في المنطقة.',
      },
      {
        n: '03', title: 'التوعية والتكوين', img: IMG.act3,
        desc: 'ورشات تثقيفية حول الطاقة النظيفة في المدارس والجمعيات. نؤهّل الجيل القادم من فاعلي الطاقة الشمسية المغربية.',
      },
    ],
    impactTitle: 'أثر',
    impactHighlight: 'إنساني ومستدام',
    impactDesc: 'مشاريعنا لا تتوقف عند التركيب. نرافق المجتمعات على المدى البعيد: التكوين، المتابعة، وإعادة استثمار المدخرات في مشاريع جماعية.',
    features: [
      'شراكات مع أكثر من 15 تعاونية محلية في المغرب',
      'تكوين تقنيين محليين معتمدين في كل مشروع',
      'ورشات تعليمية حول الطاقة في المدارس القروية',
      'برنامج تمويل صغير للأسر محدودة الدخل',
      'إعادة استثمار 5% من الأرباح في مشاريع اجتماعية',
    ],
    stats: [
      { value: '+300', label: 'عائلة مستفيدة' },
      { value: '+15',  label: 'تعاونية' },
      { value: '+40',  label: 'منصب شغل' },
    ],
  },
};

export default async function CommunityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = locale === 'ar' ? t.ar : t.fr;
  const isRTL = locale === 'ar';

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <section className="relative bg-white border-b border-gray-100">
        <div className="px-6 sm:px-12 lg:px-20 pt-40 pb-20">
          <Link href="/about"
            className={`inline-flex items-center gap-2 text-[12px] text-gray-400 hover:text-gray-700 font-medium transition-colors mb-10 group ${isRTL ? 'flex-row-reverse' : ''}`}>
            <svg className={`w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5 ${isRTL ? '' : 'rotate-180'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            {c.back}
          </Link>
          <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span className="font-black text-[11px] tracking-[0.3em] uppercase" style={{ color: '#0762d2' }}>{c.num}</span>
            <div className="w-6 h-px bg-gray-200" />
            <span className="text-gray-400 text-[11px] tracking-[0.2em] uppercase font-medium">{c.tagline}</span>
          </div>
          <h1 className={`font-display font-black leading-tight tracking-tight mb-6 ${isRTL ? 'text-right' : ''}`}
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', color: '#0762d2' }}>
            {c.title}
          </h1>
          <p className={`text-gray-500 text-[1.05rem] leading-relaxed font-light max-w-2xl ${isRTL ? 'text-right' : ''}`}>
            {c.desc}
          </p>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-gray-50/50">
        <div className="px-6 sm:px-12 lg:px-20 py-12">
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 8px 40px rgba(7,98,210,0.12)' }}>
            <img src={IMG.hero} alt={c.title} className="w-full h-64 sm:h-96 object-cover" />
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="bg-white border-t border-gray-100">
        <div className="px-6 sm:px-12 lg:px-20 py-20">
          <div className={`text-[11px] font-semibold text-gray-300 uppercase tracking-[0.2em] mb-10 ${isRTL ? 'text-right' : ''}`}>{c.actionsLabel}</div>
          <div className="grid md:grid-cols-3 gap-5">
            {c.actions.map(({ n, title, img, desc }) => (
              <div key={n} className="rounded-xl border border-gray-100 overflow-hidden hover:shadow-sm transition-shadow">
                <img src={img} alt={title} className="w-full h-44 object-cover" />
                <div className={`p-6 ${isRTL ? 'text-right' : ''}`}>
                  <div className="font-semibold text-[11px] mb-3" style={{ color: '#0762d2' }}>{n}</div>
                  <h3 className="font-bold text-gray-900 text-[15px] mb-2">{title}</h3>
                  <p className="text-gray-400 text-[13px] leading-relaxed font-light">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-gray-50/50 border-t border-gray-100">
        <div className="px-6 sm:px-12 lg:px-20 py-20 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="flex flex-col gap-5">
            <img src={IMG.coop} alt={c.title} className="rounded-2xl w-full h-64 object-cover" style={{ boxShadow: '0 4px 24px rgba(7,98,210,0.1)' }} />
            <div className="grid grid-cols-3 gap-4">
              {c.stats.map(({ value, label }) => (
                <div key={label} className="bg-white rounded-xl p-4 border border-gray-100 text-center">
                  <div className="font-black text-xl" style={{ color: '#0762d2' }} dir="ltr">{value}</div>
                  <div className="text-gray-400 text-[11px] font-medium mt-1 uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={isRTL ? 'text-right' : ''}>
            <h2 className="font-display font-black text-gray-950 leading-tight tracking-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
              {c.impactTitle}<br /><span style={{ color: '#0762d2' }}>{c.impactHighlight}</span>
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed font-light mb-8">{c.impactDesc}</p>
            <div className="space-y-4">
              {c.features.map((item) => (
                <div key={item} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="#0762d2">
                    <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" />
                  </svg>
                  <span className="text-gray-600 text-[14px] font-medium">{item}</span>
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
