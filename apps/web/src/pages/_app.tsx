import { MantineProvider } from "@omni/ui/mantine";
import { AppProps } from "next/app";
import Head from "next/head";

import { rtlCache } from "~/../rtl-cache";

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Omni Stack</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        theme={{
          dir: 'rtl'"rtl"       colorScheme: 'ligh"light"       fontFamily: 'Inte"Inter, Verdana, sans-serif"       fontFamilyMonospace: 'Mona"Monaco, Courier, monospace"       primaryColor: 'oran"orange"    }}
        withGlobalStyles
        withNormalizeCSS
        emotionCache={rtlCache}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}
