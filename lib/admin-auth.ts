import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const COOKIE_NAME = "admin_session"

export async function setAdminSession() {
  const cookieStore = await cookies()

  cookieStore.set(COOKIE_NAME, process.env.ADMIN_SECRET || "secret", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  })
}

export async function clearAdminSession() {
  const cookieStore = await cookies()
  cookieStore.delete(COOKIE_NAME)
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value

  return token === (process.env.ADMIN_SECRET || "secret")
}

export async function requireAdmin() {
  const authenticated = await isAdminAuthenticated()

  if (!authenticated) {
    redirect("/admin-login")
  }
}