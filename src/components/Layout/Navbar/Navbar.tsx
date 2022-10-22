import { Flex, Image } from '@chakra-ui/react'

import SearchInput from '@components/SearchInput'
import AuthModal from '@components/auth/AuthModal'

import RightContent from './RightContent'

const Navbar = () => {
  return (
    <>
      <AuthModal />

      <Flex bg="gray.800" height="55px" padding="6px 12px">
        <Flex align="center">
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

        <SearchInput />

        <RightContent />
      </Flex>
    </>
  )
}

export default Navbar
