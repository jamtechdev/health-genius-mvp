// middleware.ts
import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

const routing = {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
};

const intlMiddleware = createMiddleware(routing, {
    localeDetection: false,
});

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const pathSegments = pathname.split('/');
    const maybeLocale = pathSegments[1]?.toLowerCase();
    const isLocaleValid = routing.locales.includes(maybeLocale);
    // 🍪 Get auth token
    const token = request.cookies.get('auth_token')?.value || null;
    // Redirect `/` to default locale
    if (pathname === '/') {
        return NextResponse.redirect(new URL(`/${routing.defaultLocale}`, request.url));
    }
    // Allow static assets
    const isStaticAsset =
        pathname.startsWith('/_next') ||
        pathname.startsWith('/icons') ||
        pathname.includes('.') ||
        pathname === '/favicon.ico';
    if (!isLocaleValid) {
        if (isStaticAsset) {
            return NextResponse.next();
        }
        return NextResponse.rewrite(new URL(`/${routing.defaultLocale}/not-found`, request.url));
    }
    // 🔒 PROTECT ROUTES
    const protectedPaths = ['/profile'];
    const isProtected = protectedPaths.some((path) =>
        pathname.startsWith(`/${maybeLocale}${path}`)
    );
    if (token &&
        (pathname === `/${maybeLocale}` || pathname.startsWith(`/${maybeLocale}/sign-in`))
    ) {
        return NextResponse.redirect(new URL(`/${maybeLocale}/profile`, request.url));
    }
    // Redirect unauthenticated
    if (isProtected && !token) {
        return NextResponse.redirect(new URL(`/${maybeLocale}`, request.url));
    }

    return intlMiddleware(request);
}

export const config = {
    matcher: ['/((?!api|_next|static|icons|.*\\..*).*)'],
};
