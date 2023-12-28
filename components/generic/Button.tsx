import Link from "next/link"
import { ReactNode } from "react"

export const Button = ({
  children,
  className,
}: {
  children: ReactNode
  className: string
}) => (
  <button
    className={`py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover ${className}`}
  >
    {children}
  </button>
)

export const ButtonLink = ({
  children,
  href,
  className,
}: {
  children: ReactNode
  href: string
  className?: string
}) => (
  <Link
    href={href}
    className={`py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover ${className}`}
  >
    {children}
  </Link>
)
