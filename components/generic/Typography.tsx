import { ReactNode } from "react"

type Heading = "1" | "2" | "3" | "4"

export const Title = ({
  children,
  className,
  heading = "2",
}: {
  children: string | null | ReactNode
  className?: string
  heading?: Heading
}) => {
  switch (heading) {
    case "1":
      return (
        <h1
          className={`roboto text-2xl md:text-3xl font-bold text-gray-900 mb-4 ${className}`}
        >
          {children}
        </h1>
      )
    case "3":
      return (
        <h3
          className={`roboto text-lg md:text-xl font-bold text-gray-900 mb-4 ${className}`}
        >
          {children}
        </h3>
      )
    default:
      return (
        <h2
          className={`roboto text-xl md:text-2xl font-bold text-gray-900 mb-4 ${className}`}
        >
          {children}
        </h2>
      )
  }
}

export const Text = ({
  children,
  className,
}: {
  children?: string | null | ReactNode
  className?: string
}) => (
  <p className={`roboto text-base font-light text-gray-900 mb-2 ${className}`}>
    {children}
  </p>
)
