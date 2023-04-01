import { Container } from '@chakra-ui/react'

import { UserType } from '@shared/types/user.type'

import Navbar from '../Navbar'

type LayoutProps = {
  children: React.ReactNode
  user: UserType
}

const Layout = ({ children, user }: LayoutProps) => {
  return (
    <Container maxW="1700px" paddingX={0}>
      <Navbar user={user} />

      <main>{children}</main>
    </Container>
  )
}

export default Layout
