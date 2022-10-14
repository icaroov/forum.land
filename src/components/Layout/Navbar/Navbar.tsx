import { Button, Flex, Image } from '@chakra-ui/react'
import { signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

import SearchInput from '@src/components/SearchInput'
import AuthButtons from '@src/components/auth/AuthButtons'
import AuthModal from '@src/components/auth/AuthModal'
import UserAvatar from '@src/components/common/UserAvatar'
import { auth } from '@src/lib/firebase/clientApp'

const Navbar = () => {
  const [user, _loading, _error] = useAuthState(auth)

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

        <Flex justify="center" align="center" gap={2}>
          {user ? (
            <>
              <UserAvatar user={user} />

              <Button
                width={user.displayName ? 'unset' : '100px'}
                height="28px"
                variant="outline"
                onClick={() => signOut(auth)}
              >
                Sair
              </Button>
            </>
          ) : (
            <AuthButtons />
          )}
        </Flex>
      </Flex>
    </>
  )
}

export default Navbar
