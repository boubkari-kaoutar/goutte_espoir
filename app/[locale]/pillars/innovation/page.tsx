import { Link } from '@/i18n/navigation';
import CTABanner from '@/components/CTABanner';

const IMG = {
  hero:   'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&h=500&q=80',
  lab:    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&h=460&q=80',
  panel1: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&h=360&q=80',
  panel2: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=600&h=360&q=80',
  panel3: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=600&h=360&q=80',
};

const t = {
  fr: {
    back: 'Retour à notre vision',
    num: '01',
    tagline: 'La technologie au service du soleil marocain.',
    title: 'Innovation',
    desc: "Technologies photovoltaïques de pointe, adaptées aux réalités climatiques et économiques du Maroc. Nous intégrons les meilleures solutions du marché mondial pour maximiser chaque rayon de soleil.",
    techLabel: 'Nos technologies clés',
    techs: [
      {
        n: '01', title: 'Panneaux monocristallins', img: IMG.panel1,
        desc: "Les cellules monocristallines offrent le meilleur rendement disponible (jusqu'à 23%). Parfaitement adaptées aux toits résidentiels et aux installations compactes.",
      },
      {
        n: '02', title: 'Systèmes bifaciaux', img: IMG.panel2,
        desc: "Nos panneaux bifaciaux captent la lumière des deux côtés, augmentant la production de 10 à 30% selon l'albédo du sol. Idéaux pour les grandes surfaces et l'agrivoltaïque.",
      },
      {
        n: '03', title: 'Monitoring intelligent', img: IMG.panel3,
        desc: "Onduleurs hybrides, stockage batterie et plateformes de monitoring cloud pour piloter votre installation depuis votre téléphone, en temps réel.",
      },
    ],
    whyTitle: "Pourquoi l'innovation",
    whyHighlight: 'fait la différence',
    whyDesc: "Au Maroc, l'ensoleillement dépasse 3 000 heures par an — l'un des meilleurs au monde. Nos solutions techniques sont sélectionnées pour tirer le maximum de cette ressource unique, tout en résistant aux conditions locales : chaleur, poussière, vent.",
    features: [
      'Sélection rigoureuse des équipements parmi 20+ fabricants certifiés',
      'Dimensionnement logiciel basé sur les données météo locales réelles',
      "Intégration de batteries lithium pour l'autoconsommation maximale",
      'Câblage et protections conformes aux normes IEC et NM marocaines',
      'Mises à jour firmware à distance sur toute la durée de vie',
    ],
    stats: [
      { value: '23%', label: 'rendement max' },
      { value: '3 000h', label: 'soleil/an au Maroc' },
      { value: '+30%', label: 'gain bifacial' },
    ],
  },
  ar: {
    back: 'العودة إلى رؤيتنا',
    num: '01',
    tagline: 'التكنولوجيا في خدمة الشمس المغربية.',
    title: 'الابتكار',
    desc: 'تقنيات كهروضوئية متطورة، مكيّفة مع الواقع المناخي والاقتصادي للمغرب. نستخدم أفضل الحلول المتاحة في السوق العالمية لتعظيم الاستفادة من كل شعاع شمسي.',
    techLabel: 'تقنياتنا الرئيسية',
    techs: [
      {
        n: '01', title: 'ألواح أحادية البلورة', img: IMG.panel1,
        desc: 'توفر الخلايا أحادية البلورة أعلى مردودية متاحة (حتى 23%). مثالية للأسطح السكنية والمنشآت المدمجة.',
      },
      {
        n: '02', title: 'أنظمة ثنائية الوجه', img: IMG.panel2,
        desc: 'ألواحنا ثنائية الوجه تلتقط الضوء من الجهتين، بزيادة في الإنتاج من 10 إلى 30% حسب انعكاسية السطح. مثالية للمساحات الكبيرة والزراعة الشمسية.',
      },
      {
        n: '03', title: 'مراقبة ذكية', img: IMG.panel3,
        desc: 'عاكسات هجينة، تخزين بطاريات ومنصات مراقبة سحابية لإدارة منشأتك من هاتفك في الوقت الفعلي.',
      },
    ],
    whyTitle: 'لماذا الابتكار',
    whyHighlight: 'يصنع الفارق',
    whyDesc: 'في المغرب، تتجاوز ساعات الشمس 3000 ساعة في السنة — من بين الأعلى في العالم. حلولنا التقنية مختارة لاستغلال هذه الثروة الفريدة مع تحمّل الظروف المحلية: الحرارة، الغبار والرياح.',
    features: [
      'انتقاء صارم للمعدات من بين أكثر من 20 مصنّعًا معتمدًا',
      'تحجيم برمجي مبني على بيانات الطقس المحلية الحقيقية',
      'تكامل بطاريات الليثيوم لتعظيم الاستهلاك الذاتي',
      'أسلاك وحمايات وفق المعايير الدولية IEC والمغربية NM',
      'تحديثات برمجية عن بُعد طوال مدة الحياة',
    ],
    stats: [
      { value: '23%', label: 'أقصى مردودية' },
      { value: '3 000h', label: 'شمس/سنة بالمغرب' },
      { value: '+30%', label: 'مكسب ثنائي الوجه' },
    ],
  },
};

export default async function InnovationPage({ params }: { params: Promise<{ locale: string }> }) {
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
            <span className="font-black text-[11px] tracking-[0.3em] uppercase" style={{ color: '#327700' }}>{c.num}</span>
            <div className="w-6 h-px bg-gray-200" />
            <span className="text-gray-400 text-[11px] tracking-[0.2em] uppercase font-medium">{c.tagline}</span>
          </div>
          <h1 className={`font-display font-black leading-tight tracking-tight mb-6 ${isRTL ? 'text-right' : ''}`}
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', color: '#327700' }}>
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
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 8px 40px rgba(38,171,82,0.12)' }}>
            <img src={IMG.hero} alt={c.title} className="w-full h-64 sm:h-96 object-cover" />
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-white border-t border-gray-100">
        <div className="px-6 sm:px-12 lg:px-20 py-20">
          <div className={`text-[11px] font-semibold text-gray-300 uppercase tracking-[0.2em] mb-10 ${isRTL ? 'text-right' : ''}`}>{c.techLabel}</div>
          <div className="grid md:grid-cols-3 gap-5">
            {c.techs.map(({ n, title, img, desc }) => (
              <div key={n} className="rounded-xl border border-gray-100 overflow-hidden hover:shadow-sm transition-shadow">
                <img src={img} alt={title} className="w-full h-44 object-cover" />
                <div className={`p-6 ${isRTL ? 'text-right' : ''}`}>
                  <div className="font-semibold text-[11px] mb-3" style={{ color: '#327700' }}>{n}</div>
                  <h3 className="font-bold text-gray-900 text-[15px] mb-2">{title}</h3>
                  <p className="text-gray-400 text-[13px] leading-relaxed font-light">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-gray-50/50 border-t border-gray-100">
        <div className="px-6 sm:px-12 lg:px-20 py-20 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className={isRTL ? 'text-right' : ''}>
            <h2 className="font-display font-black text-gray-950 leading-tight tracking-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
              {c.whyTitle}<br /><span style={{ color: '#327700' }}>{c.whyHighlight}</span>
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed font-light mb-8">{c.whyDesc}</p>
            <div className="space-y-4">
              {c.features.map((item) => (
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
            <img src={IMG.lab} alt={c.title} className="rounded-2xl w-full h-64 object-cover" style={{ boxShadow: '0 4px 24px rgba(38,171,82,0.1)' }} />
            <div className="grid grid-cols-3 gap-4">
              {c.stats.map(({ value, label }) => (
                <div key={label} className="bg-white rounded-xl p-4 border border-gray-100 text-center">
                  <div className="font-black text-xl" style={{ color: '#327700' }} dir="ltr">{value}</div>
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
