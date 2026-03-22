import { Link } from '@/i18n/navigation';
import CTABanner from '@/components/CTABanner';

const IMG = {
  hero:   'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&h=500&q=80',
  planet: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&h=460&q=80',
  eco1:   'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&h=360&q=80',
  eco2:   'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&h=360&q=80',
  eco3:   'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&h=360&q=80',
};

const t = {
  fr: {
    back: 'Retour à notre vision',
    num: '03',
    tagline: 'Construire pour les générations futures.',
    title: 'Durabilité',
    desc: "Des solutions conçues pour durer, respectueuses de l'environnement et des générations futures. Chaque installation que nous réalisons est un engagement concret en faveur du climat.",
    engLabel: 'Nos engagements environnementaux',
    engagements: [
      {
        n: '01', title: 'Matériaux durables', img: IMG.eco1,
        desc: "Nous sélectionnons exclusivement des équipements recyclables en fin de vie, avec un bilan carbone de fabrication certifié. Nos panneaux sont recyclables à 95%.",
      },
      {
        n: '02', title: 'Zéro déchet chantier', img: IMG.eco2,
        desc: "Chaque chantier est conduit selon un protocole zéro déchet. Les emballages, câbles et matériaux de montage sont triés et acheminés vers des filières de recyclage agréées.",
      },
      {
        n: '03', title: 'Bilan CO₂ positif', img: IMG.eco3,
        desc: "Une installation solaire de 6 kWc compense son empreinte carbone de fabrication en moins de 2 ans, puis produit une énergie 100% propre pendant 25 ans.",
      },
    ],
    commitTitle: 'Un engagement',
    commitHighlight: 'sur 25 ans',
    commitDesc: "La durabilité n'est pas un argument marketing chez nous — c'est une contrainte de conception. Chaque choix technique, chaque matériau, chaque procédure est évalué à l'aune de son impact environnemental sur toute la durée de vie de l'installation.",
    features: [
      'Panneaux recyclables à 95% en fin de vie',
      'Empreinte carbone compensée en moins de 2 ans',
      "Aucun produit chimique nocif dans nos procédés d'installation",
      'Câblage basse tension pour minimiser les pertes énergétiques',
      "Rapport d'impact environnemental annuel remis aux clients",
    ],
    stats: [
      { value: '120T', label: 'CO₂ évité/an' },
      { value: '95%',  label: 'recyclable' },
      { value: '<2 ans', label: 'retour carbone' },
    ],
  },
  ar: {
    back: 'العودة إلى رؤيتنا',
    num: '03',
    tagline: 'نبني من أجل الأجيال القادمة.',
    title: 'الاستدامة',
    desc: 'حلول مصممة لتدوم، محترِمة للبيئة وللأجيال القادمة. كل منشأة ننجزها هي التزام ملموس في مواجهة تغيّر المناخ.',
    engLabel: 'التزاماتنا البيئية',
    engagements: [
      {
        n: '01', title: 'مواد مستدامة', img: IMG.eco1,
        desc: 'نختار حصراً المعدات القابلة لإعادة التدوير في نهاية دورة حياتها، مع بصمة كربونية للتصنيع معتمدة. ألواحنا قابلة لإعادة التدوير بنسبة 95%.',
      },
      {
        n: '02', title: 'أوراش بدون نفايات', img: IMG.eco2,
        desc: 'كل ورشة تُدار وفق بروتوكول صفر نفايات. تُفرز العبوات والأسلاك ومواد التركيب وتُوجَّه نحو مسالك التدوير المعتمدة.',
      },
      {
        n: '03', title: 'ميزان CO₂ إيجابي', img: IMG.eco3,
        desc: 'منشأة شمسية بقدرة 6 كيلوواط تعوّض بصمتها الكربونية في التصنيع في أقل من سنتين، ثم تنتج طاقة 100% نظيفة لمدة 25 سنة.',
      },
    ],
    commitTitle: 'التزام',
    commitHighlight: 'لمدة 25 سنة',
    commitDesc: 'الاستدامة بالنسبة لنا ليست حجة تسويقية — إنها قيد تصميم. كل اختيار تقني، كل مادة، كل إجراء يُقيَّم بمعيار أثره البيئي على مدى كامل دورة حياة المنشأة.',
    features: [
      'ألواح قابلة لإعادة التدوير بنسبة 95% في نهاية الحياة',
      'البصمة الكربونية تتعادل في أقل من سنتين',
      'لا مواد كيميائية ضارة في إجراءات التركيب',
      'أسلاك جهد منخفض للحد من خسائر الطاقة',
      'تقرير أثر بيئي سنوي يُسلَّم للعملاء',
    ],
    stats: [
      { value: '120T', label: 'CO₂ موفَّر/سنة' },
      { value: '95%',  label: 'قابل للتدوير' },
      { value: '<2 سنوات', label: 'عودة الكربون' },
    ],
  },
};

export default async function SustainabilityPage({ params }: { params: Promise<{ locale: string }> }) {
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
            <span className="font-black text-[11px] tracking-[0.3em] uppercase" style={{ color: '#a3d42a' }}>{c.num}</span>
            <div className="w-6 h-px bg-gray-200" />
            <span className="text-gray-400 text-[11px] tracking-[0.2em] uppercase font-medium">{c.tagline}</span>
          </div>
          <h1 className={`font-display font-black leading-tight tracking-tight mb-6 ${isRTL ? 'text-right' : ''}`}
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', color: '#a3d42a' }}>
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
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 8px 40px rgba(163,212,42,0.12)' }}>
            <img src={IMG.hero} alt={c.title} className="w-full h-64 sm:h-96 object-cover" />
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="bg-white border-t border-gray-100">
        <div className="px-6 sm:px-12 lg:px-20 py-20">
          <div className={`text-[11px] font-semibold text-gray-300 uppercase tracking-[0.2em] mb-10 ${isRTL ? 'text-right' : ''}`}>{c.engLabel}</div>
          <div className="grid md:grid-cols-3 gap-5">
            {c.engagements.map(({ n, title, img, desc }) => (
              <div key={n} className="rounded-xl border border-gray-100 overflow-hidden hover:shadow-sm transition-shadow">
                <img src={img} alt={title} className="w-full h-44 object-cover" />
                <div className={`p-6 ${isRTL ? 'text-right' : ''}`}>
                  <div className="font-semibold text-[11px] mb-3" style={{ color: '#a3d42a' }}>{n}</div>
                  <h3 className="font-bold text-gray-900 text-[15px] mb-2">{title}</h3>
                  <p className="text-gray-400 text-[13px] leading-relaxed font-light">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="bg-gray-50/50 border-t border-gray-100">
        <div className="px-6 sm:px-12 lg:px-20 py-20 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className={isRTL ? 'text-right' : ''}>
            <h2 className="font-display font-black text-gray-950 leading-tight tracking-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
              {c.commitTitle}<br /><span style={{ color: '#a3d42a' }}>{c.commitHighlight}</span>
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed font-light mb-8">{c.commitDesc}</p>
            <div className="space-y-4">
              {c.features.map((item) => (
                <div key={item} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="#a3d42a">
                    <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" />
                  </svg>
                  <span className="text-gray-600 text-[14px] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <img src={IMG.planet} alt={c.title} className="rounded-2xl w-full h-64 object-cover" style={{ boxShadow: '0 4px 24px rgba(163,212,42,0.1)' }} />
            <div className="grid grid-cols-3 gap-4">
              {c.stats.map(({ value, label }) => (
                <div key={label} className="bg-white rounded-xl p-4 border border-gray-100 text-center">
                  <div className="font-black text-xl" style={{ color: '#a3d42a' }} dir="ltr">{value}</div>
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
