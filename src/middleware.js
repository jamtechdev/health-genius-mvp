
import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';


const routing = {
    locales: ['en', 'fr',],
    defaultLocale: 'en',
};

// Setup next-intl middleware
const intlMiddleware = createMiddleware(routing, {
    localeDetection: false,
});

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const pathSegments = pathname.split('/');
    const maybeLocale = pathSegments[1]?.toLowerCase();
    const isLocaleValid = routing.locales.includes(maybeLocale);

    // ✅ Redirect `/` to default locale
    if (pathname === '/') {
        return NextResponse.redirect(new URL(`/${routing.defaultLocale}`, request.url));
    }

    // ✅ Allow static files & assets to pass through
    if (!isLocaleValid) {
        const isStaticAsset =
            pathname.startsWith('/_next') ||
            pathname.startsWith('/icons') ||
            pathname.includes('.') || // files like .png, .ico, .js etc
            pathname === '/favicon.ico';

        if (isStaticAsset) {
            return NextResponse.next();
        }

        // Rewrite to not-found under default locale
        return NextResponse.rewrite(new URL(`/${routing.defaultLocale}/not-found`, request.url));
    }
    // ✅ Proceed with intl middleware for valid locales
    const response = intlMiddleware(request);
    const protectedPaths = ['/my',];
    const isProtected = protectedPaths.some(path =>
        pathname.startsWith(`/${maybeLocale}${path}`)
    );

    // const token = request.cookies.get(SHORT_TERM_COOKIES.accesser)?.value || null;
    const token = '';

    if (isProtected && !token) {
        return NextResponse.redirect(new URL(`/${maybeLocale}`, request.url));
    }

    return response;
}

// ✅ Middleware matcher: apply only to non-static paths
export const config = {
    matcher: ['/((?!api|_next|static|icons|.*\\..*).*)'],
};
