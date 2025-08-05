import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

const routing = {
    locales: ['en', 'fr'],
    defaultLocale: 'en'
};

const intlMiddleware = createMiddleware(routing, {
    localeDetection: false
});

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const pathSegments = pathname.split('/');
    const maybeLocale = pathSegments[1]?.toLowerCase();
    const isLocaleValid = routing.locales.includes(maybeLocale);

    // Redirect `/` to `/en` or default
    if (pathname === '/') {
        return NextResponse.redirect(new URL(`/${routing.defaultLocale}`, request.url));
    }

    // Let static assets through
    if (!isLocaleValid) {
        const isStaticAsset =
            pathname.startsWith('/_next') ||
            pathname.startsWith('/icons') ||
            pathname.includes('.') ||
            pathname === '/favicon.ico';

        if (isStaticAsset) {
            return NextResponse.next();
        }

        return NextResponse.rewrite(new URL(`/${routing.defaultLocale}/not-found`, request.url));
    }

    // 🍪 Get auth cookie
    const token = request.cookies.get('auth_token')?.value || null;

    // Protect specific pages
    const protectedPaths = ['/dashboard', '/profile'];
    const isProtected = protectedPaths?.some((path) =>
        pathname.startsWith(`/${maybeLocale}${path}`)
    );
    if (pathname.startsWith(`/${maybeLocale}/sign-in`) && token) {
        return NextResponse.redirect(new URL(`/${maybeLocale}/dashboard`, request.url));
    }
    if (isProtected && !token) {
        // Not logged in → redirect to locale root (e.g., /en)
        return NextResponse.redirect(new URL(`/${maybeLocale}`, request.url));
    }

    return intlMiddleware(request);
}

export const config = {
    matcher: ['/((?!api|_next|static|icons|.*\\..*).*)']
};
