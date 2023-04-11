import { CSSReset } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

import Layout from '@components/ui/Layout'
import MainContainer from '@components/ui/MainContainer'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <MainContainer cookies={pageProps.cookies}>
        <CSSReset />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MainContainer>
    </RecoilRoot>
  )
}

export default App
