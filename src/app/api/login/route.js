// app/api/login/route.js

import { NextResponse } from 'next/server';
import { mockUsers } from '@/app/api/data/user';
import profiles from '../user.json';

export async function POST(request) {
    const body = await request.json();
    const { email, password } = body;
    const user = mockUsers.find(
        (u) => u.email === email && u.password === password
    );
    if (!user) {
        return NextResponse.json(
            { success: false, message: 'Invalid credentials' },
            { status: 401 }
        );
    }
    const profile = profiles.find((p) => p.id === user.id);
    if (!profile) {
        return NextResponse.json(
            { success: false, message: 'User profile not found' },
            { status: 404 }
        );
    }

    let redirectTo = '/';
    switch (profile.type) {
        case 'B2C':
            redirectTo = '/dashboard/b2c';
            break;
        case 'B2B':
            redirectTo = '/dashboard/b2b';
            break;
        case 'admin':
            redirectTo = '/dashboard/admin';
            break;
    }

    const response = NextResponse.json({
        success: true,
        user: {
            id: profile.id,
            name: profile.name,
            type: profile.type
        },
        redirectTo
    });
    // 🍪 Set cookie
    response.cookies.set('auth_token', profile.id, {
        path: '/',
        httpOnly: false,
        maxAge: 60 * 60 * 24,
    });

    return response;
}
export async function GET(request) {
    const response = NextResponse.redirect(new URL('/', request.url));
    response.cookies.set('auth_token', '', { maxAge: 0 });
    return response;
}