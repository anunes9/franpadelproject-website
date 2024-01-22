import Link from "next/link"
import { ReactNode } from "react"

export const Button = ({
  children,
  className,
  ...props
}: {
  children: ReactNode
  className?: string
  onClick?: any
}) => (
  <button
    className={`py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover flex items-center gap-2 ${className}`}
    {...props}
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
