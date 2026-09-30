"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function authenticate(username: string, password: string) {
  const validUser = process.env.ADMIN_USERNAME?.trim();
  const validPwd = process.env.ADMIN_PASSWORD?.trim();

  if (!validUser || !validPwd) {
    return { error: "Server misconfiguration. Admin credentials not set." };
  }

  const trimmedUsername = (username || "").trim();
  const trimmedPassword = (password || "").trim();

  if (
    trimmedUsername.toLowerCase() === validUser.toLowerCase() &&
    trimmedPassword === validPwd
  ) {
    cookies().set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });
    
    return { success: true };
  }

  return { error: "Invalid username or password." };
}

export async function logout() {
  cookies().delete("admin_session");
  redirect("/admin/login");
}
