import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
    const resolvedLocale = await requestLocale;
    console.log("requestLocale:", resolvedLocale);

    const locale = hasLocale(routing.locales, resolvedLocale)
        ? resolvedLocale
        : routing.defaultLocale;

    console.log("Using locale:", locale);

    try {
        // Load messages from multiple namespaces
        const commonMessages = (await import(`../../locales/${locale}/common.json`)).default;

        const messages = {
            ...commonMessages,
        };

        return { locale, messages };
    } catch (error) {
        console.error(`Error loading messages for locale ${locale}:`, error);

        // Fallback to default locale
        const fallbackCommon = (await import(`../../locales/${routing.defaultLocale}/common.json`)).default;
        return {
            locale: routing.defaultLocale,
            messages: {
                ...fallbackCommon,
            },
        };
    }
});
