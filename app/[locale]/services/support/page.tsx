import { Link } from '@/i18n/navigation';
import CTABanner from '@/components/CTABanner';

const IMG = {
  hero:    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&h=500&q=80',
  monitor: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&h=500&q=80',
};

const t = {
  fr: {
    back: 'Retour aux services',
    tagline: 'Votre système mérite une attention continue.',
    title: 'Maintenance & Monitoring',
    desc: "Contrats d'entretien préventif, nettoyage des panneaux, diagnostics à distance et interventions rapides. Votre installation produit à son plein potentiel, chaque jour.",
    plansLabel: 'Nos formules de maintenance',
    plans: [
      {
        plan: 'Essentiel', price: 'À partir de 800 DH/an', color: '#a3d42a',
        features: ['Visite annuelle de contrôle', 'Nettoyage des panneaux (1×/an)', 'Rapport de performance annuel', 'Hotline téléphonique'],
      },
      {
        plan: 'Confort', price: 'À partir de 1 800 DH/an', color: '#26ab52', featured: true,
        features: ['2 visites de contrôle/an', 'Nettoyage des panneaux (2×/an)', 'Monitoring en temps réel', 'Intervention sous 48h', 'Rapport trimestriel'],
        badge: 'Recommandé',
      },
      {
        plan: 'Premium', price: 'À partir de 3 200 DH/an', color: '#0762d2',
        features: ['Visites illimitées', 'Nettoyage mensuel', 'Monitoring 24h/7j avec alertes', 'Intervention sous 24h', 'Remplacement pièces inclus', 'Rapport mensuel détaillé'],
      },
    ],
    choosePlan: 'Choisir ce plan',
    monitorTitle: 'Monitoring en',
    monitorHighlight: 'temps réel',
    monitorDesc: "Notre plateforme de monitoring vous permet de suivre la production de votre installation en temps réel, depuis votre téléphone. Recevez des alertes instantanées en cas d'anomalie.",
    monitorFeatures: [
      'Tableau de bord de production journalière, mensuelle et annuelle',
      'Alertes SMS et e-mail en cas de baisse de performance',
      "Comparatif avec l'ensoleillement local en temps réel",
      'Historique complet des données sur toute la durée de vie',
      'Rapport automatique envoyé chaque mois',
    ],
    stats: [
      { value: '6j/7',  label: 'disponibilité' },
      { value: '<24h',  label: 'intervention' },
      { value: '100%',  label: 'suivi en ligne' },
    ],
  },
  ar: {
    back: 'العودة إلى الخدمات',
    tagline: 'نظامك يستحق عناية مستمرة.',
    title: 'الصيانة والمراقبة',
    desc: 'عقود صيانة وقائية، تنظيف الألواح، تشخيص عن بُعد وتدخلات سريعة. منشأتك تعمل بكامل طاقتها، كل يوم.',
    plansLabel: 'صيغ الصيانة لدينا',
    plans: [
      {
        plan: 'أساسي', price: 'ابتداءً من 800 درهم/سنة', color: '#a3d42a',
        features: ['زيارة مراقبة سنوية', 'تنظيف الألواح (مرة/سنة)', 'تقرير أداء سنوي', 'خط ساخن هاتفي'],
      },
      {
        plan: 'مريح', price: 'ابتداءً من 1 800 درهم/سنة', color: '#26ab52', featured: true,
        features: ['زيارتا مراقبة/سنة', 'تنظيف الألواح (مرتين/سنة)', 'مراقبة فورية', 'تدخل خلال 48 ساعة', 'تقرير ربع سنوي'],
        badge: 'موصى به',
      },
      {
        plan: 'بريميوم', price: 'ابتداءً من 3 200 درهم/سنة', color: '#0762d2',
        features: ['زيارات غير محدودة', 'تنظيف شهري', 'مراقبة 24 ساعة/7 أيام مع تنبيهات', 'تدخل خلال 24 ساعة', 'استبدال القطع مشمول', 'تقرير شهري مفصّل'],
      },
    ],
    choosePlan: 'اختر هذه الصيغة',
    monitorTitle: 'مراقبة في',
    monitorHighlight: 'الوقت الفعلي',
    monitorDesc: 'منصة المراقبة لدينا تتيح لك متابعة إنتاج منشأتك في الوقت الفعلي من هاتفك. تلقّ تنبيهات فورية عند أي شذوذ.',
    monitorFeatures: [
      'لوحة تحكم للإنتاج اليومي والشهري والسنوي',
      'تنبيهات SMS وبريد إلكتروني عند انخفاض الأداء',
      'مقارنة مع الإشعاع الشمسي المحلي في الوقت الفعلي',
      'سجل كامل للبيانات طوال مدة الحياة',
      'تقرير تلقائي يُرسل كل شهر',
    ],
    stats: [
      { value: '6أ/7', label: 'التوفر' },
      { value: '<24h', label: 'وقت التدخل' },
      { value: '100%', label: 'متابعة إلكترونية' },
    ],
  },
};

export default async function SupportPage({ params }: { params: Promise<{ locale: string }> }) {
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
            <span className="font-black text-[11px] tracking-[0.3em] uppercase" style={{ color: '#a3d42a' }}>03</span>
            <div className="w-6 h-px bg-gray-200" />
            <span className="text-gray-400 text-[11px] tracking-[0.2em] uppercase font-medium">{c.tagline}</span>
          </div>
          <h1 className={`font-display font-black text-gray-950 leading-tight tracking-tight mb-6 ${isRTL ? 'text-right' : ''}`}
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', color: '#a3d42a' }}>
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
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 8px 40px rgba(163,212,42,0.1)' }}>
            <img src={IMG.hero} alt={c.title} className="w-full h-64 sm:h-96 object-cover" />
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-white border-t border-gray-100">
        <div className="px-6 sm:px-12 lg:px-20 py-20">
          <div className={`text-[11px] font-semibold text-gray-300 uppercase tracking-[0.2em] mb-10 ${isRTL ? 'text-right' : ''}`}>{c.plansLabel}</div>
          <div className="grid md:grid-cols-3 gap-5">
            {c.plans.map(({ plan, price, color, features, featured, badge }) => (
              <div key={plan}
                className={`rounded-xl border overflow-hidden ${featured ? 'border-[#26ab52] shadow-md' : 'border-gray-100'}`}>
                {featured && badge && (
                  <div className="py-2 text-center text-[11px] font-bold text-white uppercase tracking-widest"
                    style={{ background: '#26ab52' }}>
                    {badge}
                  </div>
                )}
                <div className="p-7">
                  <div className="font-black text-gray-900 text-[18px] mb-1">{plan}</div>
                  <div className="text-[13px] font-semibold mb-6" style={{ color }}>{price}</div>
                  <div className="flex flex-col gap-3">
                    {features.map((f) => (
                      <div key={f} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill={color}>
                          <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" />
                        </svg>
                        <span className="text-gray-600 text-[13px]">{f}</span>
                      </div>
                    ))}
                  </div>
                  <a href="https://wa.me/212636227511" target="_blank" rel="noopener noreferrer"
                    className="mt-7 w-full flex items-center justify-center gap-2 rounded-lg text-[13px] font-semibold py-3 transition-opacity hover:opacity-85"
                    style={featured ? { background: color, color: '#fff' } : { border: `1px solid ${color}40`, color }}>
                    {c.choosePlan}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring */}
      <section className="bg-gray-50/50 border-t border-gray-100">
        <div className="px-6 sm:px-12 lg:px-20 py-20 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className={isRTL ? 'text-right' : ''}>
            <h2 className="font-display font-black text-gray-950 leading-tight tracking-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
              {c.monitorTitle}<br /><span style={{ color: '#a3d42a' }}>{c.monitorHighlight}</span>
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed font-light mb-8">{c.monitorDesc}</p>
            <div className="space-y-4 mb-8">
              {c.monitorFeatures.map((item) => (
                <div key={item} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="#a3d42a">
                    <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" />
                  </svg>
                  <span className="text-gray-600 text-[14px] font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100">
              {c.stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="font-black text-xl number-badge" style={{ color: '#a3d42a' }} dir="ltr">{value}</div>
                  <div className="text-gray-400 text-[11px] font-medium mt-1 uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src={IMG.monitor} alt={c.title}
              className="rounded-2xl w-full h-80 object-cover" style={{ boxShadow: '0 4px 24px rgba(163,212,42,0.1)' }} />
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
