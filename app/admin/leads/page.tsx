import { prisma } from "@/lib/prisma"

export default async function AdminLeadsPage() {
  const leads = await prisma.lead.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })

  return (
    <div className="space-y-8">
      <div className="rounded-[32px]border border-[#eadfce] bg-white p-8 shadow-sm">
        <p className="text-xs uppercase tracking-[0.35em] text-[#9c8a73]">
          Lead Yönetimi
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-[#1a1a1a]">
          Danışma Talepleri
        </h1>
      </div>

      <div className="overflow-hidden rounded-[32px]border border-[#eadfce] bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-[#faf6f0]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#1a1a1a]">
                  Ad Soyad
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#1a1a1a]">
                  Telefon
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#1a1a1a]">
                  E-posta
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#1a1a1a]">
                  Şehir
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#1a1a1a]">
                  İşlem
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#1a1a1a]">
                  Mesaj
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#1a1a1a]">
                  Tarih
                </th>
              </tr>
            </thead>

            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-t border-[#f0e5d8] align-top">
                  <td className="px-6 py-4 text-sm text-[#1a1a1a]">
                    {lead.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#6f675f]">
                    {lead.phone}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#6f675f]">
                    {lead.email || "-"}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#6f675f]">
                    {lead.city}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#6f675f]">
                    {lead.service}
                  </td>
                  <td className="max-w-[280px]px-6 py-4 text-sm text-[#6f675f]">
                    {lead.message || "-"}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#6f675f]">
                    {new Date(lead.createdAt).toLocaleDateString("tr-TR")}
                  </td>
                </tr>
              ))}

              {leads.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-10 text-center text-sm text-[#6f675f]"
                  >
                    Henüz danışma talebi yok.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}