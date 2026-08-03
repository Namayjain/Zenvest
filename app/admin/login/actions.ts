"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function authenticate(username: string, password: string) {
  const validUser = process.env.ADMIN_USERNAME;
  const validPwd = process.env.ADMIN_PASSWORD;

  if (!validUser || !validPwd) {
    return { error: "Server misconfiguration. Admin credentials not set." };
  }

  if (username === validUser && password === validPwd) {
    cookies().set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });
    
    redirect("/admin");
  }

  return { error: "Invalid username or password." };
}

export async function logout() {
  cookies().delete("admin_session");
  redirect("/admin/login");
}
