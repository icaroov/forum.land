import { Flex } from '@chakra-ui/react'

import type { UserType } from '@shared/types/user.type'

import AuthButtons from '@components/auth/AuthButtons'
import UserMenu from '@components/common/UserMenu'

import NavbarIcons from './NavbarIcons'

type NavbarRightContentProps = {
  user: UserType
}

const NavbarRightContent = ({ user }: NavbarRightContentProps) => (
  <Flex justify="center" align="center" gap={2}>
    {user ? <NavbarIcons /> : <AuthButtons />}

    <UserMenu user={user} />
  </Flex>
)

export default NavbarRightContent
