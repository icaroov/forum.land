import { Flex } from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth'

import AuthButtons from '@src/components/auth/AuthButtons'

import { auth } from '@lib/firebase/clientApp'

import NavbarIcons from './NavbarIcons'

const RightContent = () => {
  const [user] = useAuthState(auth)

  return (
    <Flex justify="center" align="center" gap={2}>
      {user ? <NavbarIcons /> : <AuthButtons />}
    </Flex>
  )
}

export default RightContent