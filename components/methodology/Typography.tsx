export const H1Title = ({ children }: { children: any }) => (
  <h1 className="roboto text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-6">
    {children}
  </h1>
)

export const H2Title = ({ children }: { children: any }) => (
  <h2 className="roboto text-xl md:text-2xl font-bold text-gray-900 mt-6 mb-4">
    {children}
  </h2>
)

export const PText = ({ children }: { children: any }) => (
  <h2 className="roboto text-base font-light text-gray-900 mb-2">{children}</h2>
)
