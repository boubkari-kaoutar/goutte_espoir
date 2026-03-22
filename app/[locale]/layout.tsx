import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import PageLoader from '@/components/PageLoader';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import '../globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Goutte d'Espoir — Énergie Renouvelable & Développement Durable",
  description:
    "Organisation marocaine engagée pour les énergies renouvelables, la protection de l'environnement et le développement communautaire durable.",
  keywords: ['énergie solaire', 'renouvelable', 'Maroc', 'durabilité', 'environnement'],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: "Goutte d'Espoir",
    description: "Construisons un avenir durable ensemble.",
    locale: 'fr_MA',
    type: 'website',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'fr' | 'ar')) {
    notFound();
  }

  const messages = await getMessages();
  const isRTL = locale === 'ar';

  return (
    <html
      lang={locale}
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`${nunito.variable} light`}
    >
      <body className="bg-white text-gray-900 antialiased">
        <NextIntlClientProvider messages={messages}>
          <PageLoader />
          <SmoothScroll>
            <Navbar />
            <main className="relative overflow-hidden">
              {children}
            </main>
            <Footer />
            <FloatingWhatsApp />
          </SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
