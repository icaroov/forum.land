import { Flex } from '@chakra-ui/react'

import type { UserType } from '@shared/types/user.type'

import UserMenu from '@components/common/UserMenu'

type NavbarRightContentProps = {
  user: UserType
}

const NavbarRightContent = ({ user }: NavbarRightContentProps) => (
  <Flex justify="center" align="center" gap={2}>
    <UserMenu user={user} />
  </Flex>
)

export default NavbarRightContent
