"use server";

export async function findUserByID(id) {
  try {
    const res = await fetch(`/api/users/${id}`, {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Category not found");
    return await res.json();
  } catch (error) {
    return { success: false, message: error.message };
  }
}