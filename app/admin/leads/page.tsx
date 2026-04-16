import { prisma } from "@/lib/prisma"

type LeadListItem = {
  id: number
  name: string
  phone: string
  email: string | null
  city: string
  service: string
  message: string | null
  createdAt: Date
}

export default async function AdminLeadsPage() {
  const potansiyelMusteriler: LeadListItem[] = await prisma.lead.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      name: true,
      phone: true,
      email: true,
      city: true,
      service: true,
      message: true,
      createdAt: true,
    },
  })

  return (
    <div className="space-y-10">
      <div className="rounded-[32px] border border-[#eadfce] bg-white p-10 shadow-sm">
        <p className="text-xs uppercase tracking-[0.35em] text-[#9c8a73]">
          Admin Panel
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-[#1a1a1a]">
          Danışma Talepleri
        </h1>
        <p className="mt-2 text-sm text-[#6f675f]">
          Formdan gelen tüm potansiyel müşteri taleplerini buradan takip
          edebilirsin.
        </p>
      </div>

      <div className="overflow-hidden rounded-[32px] border border-[#eadfce] bg-white shadow-sm">
        {potansiyelMusteriler.length === 0 ? (
          <div className="p-12 text-center">
            <h2 className="text-xl font-semibold text-[#1a1a1a]">
              Henüz talep yok
            </h2>
            <p className="mt-2 text-sm text-[#6f675f]">
              Danışma formundan gelen başvurular burada listelenecek.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead className="bg-[#fcfaf7]">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-[#9c8a73]">
                    Tarih
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-[#9c8a73]">
                    İsim
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-[#9c8a73]">
                    Telefon
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-[#9c8a73]">
                    E-posta
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-[#9c8a73]">
                    Şehir
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-[#9c8a73]">
                    İşlem
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-[#9c8a73]">
                    Mesaj
                  </th>
                </tr>
              </thead>

              <tbody>
                {potansiyelMusteriler.map((lead: LeadListItem) => {
                  return (
                    <tr
                      key={lead.id}
                      className="border-t border-[#f0e5d8] align-top"
                    >
                      <td className="px-6 py-4 text-sm text-[#6f675f]">
                        {new Date(lead.createdAt).toLocaleDateString("tr-TR")}
                      </td>

                      <td className="px-6 py-4 text-sm font-medium text-[#1a1a1a]">
                        {lead.name}
                      </td>

                      <td className="px-6 py-4 text-sm text-[#1a1a1a]">
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

                      <td className="max-w-[320px] px-6 py-4 text-sm leading-6 text-[#6f675f]">
                        {lead.message || "-"}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}