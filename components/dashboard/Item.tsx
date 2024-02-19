import { ReactNode } from "react"
import Link from "next/link"

export const Item = ({
  icon,
  title,
  details,
  href,
}: {
  icon: ReactNode
  title: string
  details: string
  href: string
}) => (
  <div className="p-4">
    <div className="flex justify-between rounded-lg h-full bg-gray-100 p-8 flex-col">
      <div>
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full text-projectGreen flex-shrink-0">
            {icon}
          </div>

          <h2 className="text-gray-900 text-lg title-font font-medium">
            {title}
          </h2>
        </div>

        <p className="leading-relaxed text-base text-gray-600">{details}</p>
      </div>

      <Link
        href={href}
        className="mt-3 text-projectGreen inline-flex items-center"
      >
        Ver mais
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
  </div>
)
