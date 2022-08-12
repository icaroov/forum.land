import { Flex, Image } from '@chakra-ui/react'

import SearchInput from '@src/components/SearchInput'
import AuthButtons from '@src/components/auth/AuthButtons'
import AuthModal from '@src/components/auth/AuthModal'

const Navbar = () => {
  return (
    <>
      <AuthModal />

      <Flex bg="gray.800" height="44px" padding="6px 12px">
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

        <Flex justify="center" align="center">
          <AuthButtons />
        </Flex>
      </Flex>
    </>
  )
}

export default Navbar
