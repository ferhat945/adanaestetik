import { ReactNode } from "react"
import { requireAdmin } from "@/lib/admin-auth"
import { AdminSidebar } from "@/components/admin-sidebar"

export default async function AdminLayout({
  children,
}: {
  children: ReactNode
}) {
  await requireAdmin()

  return (
    <main className="min-h-screen bg-[#f9f3ea]">
      <section className="container-main py-10">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <AdminSidebar />
          <div>{children}</div>
        </div>
      </section>
    </main>
  )
}