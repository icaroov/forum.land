import { CSSReset } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

import Layout from '@src/components/Layout'
import MainContainer from '@src/components/Layout/MainContainer'

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

export { getServerSideProps } from '@src/components/Layout/MainContainer/MainContainer'

export default App
