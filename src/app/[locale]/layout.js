import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../globals.css';
import Script from 'next/script';
import AppProvider from '@/_components/provider';
import { Suspense } from 'react';
import { getMessages } from 'next-intl/server';
import Navbar from '@/_components/navbar';
import Footer from '@/_components/footer';


export default async function LocaleLayout({ children, params }) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    const messages = await getMessages(); // if using next-intl dynamic messages

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <AppProvider>
                <Script async src="https://cdn.jsdelivr.net/npm/apexcharts" />
                {/* <Script id="google-analytics">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname + window.location.search,
            });
          `}
                </Script> */}
                {/* <Navbar /> */}
                {children}
                {/* <Footer /> */}
            </AppProvider>
        </NextIntlClientProvider>
    );
}
