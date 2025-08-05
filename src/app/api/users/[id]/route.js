import { NextResponse } from 'next/server';
import { users } from '@/app/api/data/user';
import userDetails from "../../user.json";

export async function GET(request, { params }) {
    const { id } = params;
    const user = users.find(u => u.id === id);
    const details = userDetails.find(u => u.id === id);

    if (!user) {
        return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
    // Optional: Exclude password or sensitive fields
    const { password, ...safeUser } = user;

    return NextResponse.json({
        ...safeUser,
        profile: details?.profile || null
    });
}
