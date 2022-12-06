import { CSSReset } from '@chakra-ui/react'
import { appWithTranslation } from 'next-i18next'
import { AppProps } from 'next/app'
import { useAuthState } from 'react-firebase-hooks/auth'
import { RecoilRoot } from 'recoil'

import { auth } from '@lib/firebase/clientApp'

import Layout from '@components/Layout'
import MainContainer from '@components/Layout/MainContainer'

const App = ({ Component, pageProps }: AppProps) => {
  const [user] = useAuthState(auth)
  return (
    <RecoilRoot>
      <MainContainer cookies={pageProps.cookies}>
        <CSSReset />

        <Layout user={user}>
          <Component {...pageProps} />
        </Layout>
      </MainContainer>
    </RecoilRoot>
  )
}

export default appWithTranslation(App)
