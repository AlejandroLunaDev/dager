import '../../scss/globals.scss';
import { Metadata } from 'next';
import Navbar from '@/app/shared/navbar/Navbar';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../../scss/globals.scss'

export const metadata: Metadata = {
  title: 'Mariano Luis Villa',
  description:
    'Senior full-stack/lead software developer with a passion for SOLID code and amazing products',
  icons: {
    icon: '/image/Logo.png',
  },
};

export default async function PortfolioLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>; 
}>) {
  const resolvedParams = await params; // Asegúrate de esperar la promesa
  const { locale } = resolvedParams;

  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  const messages = await getMessages(locale as never);

  return (
    <html lang={locale}>
           <head>
        {/* Metaetiqueta para evitar la traducción automática */}
        <meta name="google" content="notranslate" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <header>
            <Navbar />
          </header>
          {children}

        </NextIntlClientProvider>
      </body>
    </html>
  );
}
