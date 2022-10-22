import { Flex } from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from '@lib/firebase/clientApp'

import AuthButtons from '@components/auth/AuthButtons'
import UserMenu from '@components/common/UserMenu'

import NavbarIcons from './NavbarIcons'

const RightContent = () => {
  const [user] = useAuthState(auth)

  return (
    <Flex justify="center" align="center" gap={2}>
      {user ? <NavbarIcons /> : <AuthButtons />}

      <UserMenu user={user} />
    </Flex>
  )
}

export default RightContent
