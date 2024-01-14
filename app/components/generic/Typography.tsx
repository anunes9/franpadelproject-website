type Heading = "1" | "2" | "3" | "4"

export const Title = ({
  children,
  className,
  heading = "2",
}: {
  children: string
  className?: string
  heading?: Heading
}) => {
  switch (heading) {
    case "1":
      return (
        <h1
          className={`text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-100 ${className}`}
        >
          {children}
        </h1>
      )
    case "3":
      return (
        <h3
          className={`text-lg md:text-xl font-bold text-gray-700 dark:text-gray-100 ${className}`}
        >
          {children}
        </h3>
      )
    case "4":
      return (
        <h3
          className={`text-md md:text-lg font-bold text-gray-700 dark:text-gray-100 ${className}`}
        >
          {children}
        </h3>
      )
    default:
      return (
        <h2
          className={`text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-100 ${className}`}
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
  children: string
  className?: string
}) => (
  <p
    className={`text-base font-light text-gray-500 dark:text-gray-200 ${className}`}
  >
    {children}
  </p>
)
