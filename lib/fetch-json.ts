export async function readJsonResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get("content-type") || ""

  if (!contentType.includes("application/json")) {
    const text = await response.text()
    throw new Error(
      text.startsWith("<!DOCTYPE")
        ? "Sunucu JSON yerine HTML döndürdü. Route veya yönlendirme hatası var."
        : "Sunucudan beklenmeyen yanıt geldi."
    )
  }

  return (await response.json()) as T
}