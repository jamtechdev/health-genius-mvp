import { NextResponse } from 'next/server';
import users from '../../user.json'; // Adjust path if needed

export async function GET(request, { params }) {
  const { id } = params;

  // Find the user by ID, excluding admins
  const user = users.find(u => u.id === id && u.role !== 'admin');

  if (!user) {
    return NextResponse.json(
      { error: 'User not found or is an admin' },
      { status: 404 }
    );
  }

  return NextResponse.json(user);
}
