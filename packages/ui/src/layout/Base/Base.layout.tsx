import { ReactNode } from 'react'

interface BaseLayoutProps {
  main: ReactNode
}

export function BaseLayout({ main }: BaseLayoutProps) {
  return <main>{main}</main>
}
