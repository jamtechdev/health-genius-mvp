import { NextResponse } from 'next/server';
import users from '../user.json'; // adjust if path is different

export async function GET() {
    const filteredUsers = users.filter(user => user.role !== 'admin');
    return NextResponse.json(filteredUsers);
}