import { ReactNode } from 'react'
import { Header } from './Header'

export const PageLayout = ({
  children,
  headerTitle,
  bgColor,
  locale,
}: {
  children: ReactNode
  headerTitle: string
  bgColor?: boolean
  locale: string
}) => (
  <div className={bgColor ? 'bg-blueWhite' : ''}>
    <div className="bg-bodyPattern bg-cover h-full w-full absolute left-0 opacity-10 z-0" />

    <Header title={headerTitle} locale={locale} />

    <div className="content">{children}</div>
  </div>
)
