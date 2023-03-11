import { ReactElement } from 'react'

import { DashboardLayout } from './Dashboard/Dashboard.layout'

export enum LayoutTypes {
  BASE = 'BASE',
  DASHBOARD = 'DASHBOARD',
}

interface LayoutProps {
  layout: LayoutTypes
  children: ReactElement
}

export function Layout({ layout = LayoutTypes.BASE, children }: LayoutProps) {
  function getLayout(type: LayoutTypes) {
    const list = {
      [LayoutTypes.BASE]: <main>{children}</main>,
      [LayoutTypes.DASHBOARD]: (
        <DashboardLayout main={children} header={<div />} navbar={<div />} />
      ),
    }

    return list[layout]
  }

  return getLayout(layout)
}
