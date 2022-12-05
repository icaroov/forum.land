import { Flex } from '@chakra-ui/react'

import { UserType } from '@shared/user.type'

import AuthButtons from '@components/auth/AuthButtons'
import UserMenu from '@components/common/UserMenu'

import NavbarIcons from './NavbarIcons'

type RightContentProps = {
  user: UserType
}

const RightContent = ({ user }: RightContentProps) => {
  return (
    <Flex justify="center" align="center" gap={2}>
      {user ? <NavbarIcons /> : <AuthButtons />}

      <UserMenu user={user} />
    </Flex>
  )
}

export default RightContent
