import { ChakraProvider } from '@chakra-ui/react'

import theme from '@styles/theme'

type MainContainerProps = {
  cookies?: string | undefined
  children: React.ReactNode
}

const MainContainer = ({ children }: MainContainerProps) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

export default MainContainer
