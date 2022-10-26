import { Flex, Image } from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth'

import MainMenu from '@src/components/common/MainMenu'
import { auth } from '@src/lib/firebase/clientApp'

import AuthModal from '@components/auth/AuthModal'
import SearchInput from '@components/common/SearchInput'

import RightContent from './RightContent'

const Navbar = () => {
  const [user] = useAuthState(auth)
  return (
    <>
      <AuthModal />

      <Flex
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

        <RightContent />
      </Flex>
    </>
  )
}

export default Navbar
