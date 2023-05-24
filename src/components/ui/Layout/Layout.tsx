import { Container } from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from '@src/lib/firebase/clientApp'

import Navbar from '../Navbar'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [user] = useAuthState(auth)

  return (
    <Container maxW="1700px" paddingX={0}>
      <Navbar user={user} />

      <main>{children}</main>
    </Container>
  )
}

export default Layout
