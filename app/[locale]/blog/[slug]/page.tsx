import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import CTABanner from '@/components/CTABanner';
import ArticleStyles from '@/components/ArticleStyles';
import { blogArticles } from '@/lib/blogData';

export async function generateStaticParams() {
  return blogArticles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const isRTL = locale === 'ar';
  const c = isRTL ? article.ar : article.fr;
  const color = article.color;

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>

      {/* Hero image */}
      <div className="relative w-full h-[70vh] min-h-[500px] overflow-hidden" style={{ paddingTop: '20px' }}>
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${article.image}')` }} />
        
        {/* Gradient overlays for cinematic effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />

        <div className={`relative h-full max-w-4xl mx-auto px-6 sm:px-12 flex flex-col justify-end pb-12 sm:pb-20 ${isRTL ? 'items-end text-right' : ''}`}>
          <h1 className="font-display font-black text-white leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 3rem)' }}>
            {c.title}
          </h1>
          <div className={`flex items-center gap-4 text-white/70 text-[13px] flex-wrap ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span>{c.author}</span>
            <span>·</span>
            <span>{c.date}</span>
            <span>·</span>
            <span>{c.readTime} {isRTL ? 'دقائق قراءة' : 'min de lecture'}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 sm:px-12 py-14">

        {/* Back link */}
        <Link href="/blog"
          className={`inline-flex items-center gap-2 text-[12px] text-gray-400 hover:text-gray-700 font-medium transition-colors mb-10 group ${isRTL ? 'flex-row-reverse' : ''}`}>
          <svg className={`w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5 ${isRTL ? '' : 'rotate-180'}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          {isRTL ? 'العودة للمدونة' : 'Retour au blog'}
        </Link>

        {/* Article body */}
        <ArticleStyles color={color} />

        <div
          className={`article-body ${isRTL ? 'text-right' : ''}`}
          dangerouslySetInnerHTML={{ __html: c.content }}
        />

        {/* Author */}
        <div className={`mt-14 pt-8 border-t border-gray-100 flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-lg flex-shrink-0"
            style={{ background: color }}>
            G
          </div>
          <div className={isRTL ? 'text-right' : ''}>
            <div className="font-bold text-gray-900 text-[14px]">{c.author}</div>
            <div className="text-gray-400 text-[12px]">
              {isRTL ? 'قطرة أمل — طاقة شمسية، المغرب' : "Goutte d'Espoir — Énergie Solaire, Maroc"}
            </div>
          </div>
        </div>

        {/* Related CTA */}
        <div className="mt-12 rounded-2xl p-8 text-center text-white"
          style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)` }}>
          <h3 className="font-display font-black text-xl mb-2">
            {isRTL ? 'اكتشف مقالاتنا الأخرى' : 'Découvrez nos autres articles'}
          </h3>
          <p className="text-white/80 text-[14px] mb-6">
            {isRTL
              ? 'نصائح وتحليلات وأخبار حول الطاقة الشمسية في المغرب.'
              : "Conseils, analyses et actualités sur l'énergie solaire au Maroc."}
          </p>
          <Link href="/blog"
            className="inline-block bg-white font-bold text-[12px] uppercase tracking-widest px-6 py-3 rounded-full transition-opacity hover:opacity-90"
            style={{ color }}>
            {isRTL ? 'كل المقالات' : 'Voir tous les articles'}
          </Link>
        </div>
      </div>

      <CTABanner />
    </div>
  );
}
