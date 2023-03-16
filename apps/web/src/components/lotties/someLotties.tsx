import Lottie, { Options } from 'react-lottie'

import animationData from '~/assets/lotties/1.json'

export function SomeLotties() {
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return <Lottie options={defaultOptions} height={500} width={500} />
}
