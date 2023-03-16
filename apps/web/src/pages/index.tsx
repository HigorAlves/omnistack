import { Layout, LayoutTypes, Flex } from '@omni/ui'

import { HeroTextComponent } from '~/components/Hero/HeroText.component'

export default function Web() {
  return (
    <Layout layout={LayoutTypes.BASE}>
      <Flex gap="md" justify="center" align="center" direction="column" wrap="wrap">
        <HeroTextComponent />
      </Flex>
    </Layout>
  )
}
