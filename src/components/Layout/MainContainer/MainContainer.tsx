import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager
} from '@chakra-ui/react'
import { GetServerSidePropsContext } from 'next'

import theme from '@styles/theme'

type MainContainerProps = {
  cookies: string | undefined
  children: React.ReactNode
}

const MainContainer = ({ cookies, children }: MainContainerProps) => {
  const colorModeManager =
    typeof cookies === 'string' ? cookieStorageManager : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

export function getServerSideProps({ req }: GetServerSidePropsContext) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}

export default MainContainer
