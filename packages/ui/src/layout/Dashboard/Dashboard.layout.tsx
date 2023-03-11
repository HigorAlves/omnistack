import { JSXElementConstructor, ReactElement } from 'react'

import { AppShell } from '@mantine/core'

export interface DashboardLayoutProps {
  main: ReactElement<unknown, string | JSXElementConstructor<unknown>>
  navbar: ReactElement
  header: ReactElement
}

export function DashboardLayout({
  main,
  navbar,
  header,
}: DashboardLayoutProps) {
  return (
    <AppShell navbar={navbar} header={header}>
      {main}
    </AppShell>
  )
}
