import { Flex, Image } from '@chakra-ui/react'

import type { UserType } from '@shared/types/user.type'

import AuthModal from '@components/auth/AuthModal'
import MainMenu from '@components/common/MainMenu'
import SearchInput from '@components/common/SearchInput'

import NavbarRightContent from './components/NavbarRightContent'

type NavbarProps = {
  user: UserType
}

const Navbar = ({ user }: NavbarProps) => (
  <>
    <AuthModal user={user} />

    <Flex
      as="nav"
      bg="gray.800"
      height="55px"
      padding="6px 12px"
      justify={{ md: 'space-between' }}
    >
      <Flex align="center" width={['40px', 'auto']} marginRight={[0, 2]}>
        <Image
          src="assets/img/reddit-face.svg"
          height="30px"
          mr={{
            md: '0px',
            sm: '8px'
          }}
        />
        <Image
          src="assets/img/reddit-text.svg"
          height="46px"
          display={{ base: 'none', md: 'unset' }}
        />
      </Flex>

      {user && <MainMenu />}

      <SearchInput user={user} />

      <NavbarRightContent user={user} />
    </Flex>
  </>
)

export default Navbar
