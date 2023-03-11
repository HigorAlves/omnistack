import { ReactElement } from 'react'

import { BaseLayout } from './Base/Base.layout'
import { DashboardLayout } from './Dashboard/Dashboard.layout'

export enum LayoutTypes {
  BASE = 'BASE',
  DASHBOARD = 'DASHBOARD',
}

interface Props {
  layout: LayoutTypes
  children: ReactElement
}

export function Layout({ layout = LayoutTypes.BASE, children }: Props) {
  function getLayout(type: LayoutTypes) {
    const list = {
      [LayoutTypes.BASE]: <BaseLayout main={children} />,
      [LayoutTypes.DASHBOARD]: (
        <DashboardLayout main={children} header={<div />} navbar={<div />} />
      ),
    }

    return list[layout]
  }

  return getLayout(layout)
}
