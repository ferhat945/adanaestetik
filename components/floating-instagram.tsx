import Link from "next/link"

export function FloatingInstagram() {
  return (
    <Link
      href="https://instagram.com/dr.inza"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram sayfasını aç"
      className="fixed bottom-6 right-10 z-[60] group md:bottom-7 md:right-12"
    >
      <div className="relative flex h-[74px] w-[74px] items-center justify-center rounded-[24px] bg-[linear-gradient(145deg,#ffdc80_0%,#f77737_25%,#e1306c_55%,#c13584_75%,#833ab4_100%)] shadow-[0_22px_40px_rgba(193,53,132,0.35)] transition duration-300 group-hover:-translate-y-1 group-hover:scale-105">
        <div className="absolute inset-[3px] rounded-[21px] bg-[linear-gradient(145deg,rgba(255,255,255,0.30),rgba(255,255,255,0.08))]" />
        <div className="absolute inset-0 rounded-[24px] shadow-[inset_0_2px_6px_rgba(255,255,255,0.35),inset_0_-6px_10px_rgba(0,0,0,0.12)]" />

        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="relative z-10 h-9 w-9 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]"
          aria-hidden="true"
        >
          <rect
            x="3.5"
            y="3.5"
            width="17"
            height="17"
            rx="5"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
        </svg>
      </div>
    </Link>
  )
}