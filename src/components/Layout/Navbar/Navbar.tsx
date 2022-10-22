import { Button, Flex, Image } from '@chakra-ui/react'
import { signOut } from 'firebase/auth'
import { useTranslation } from 'next-i18next'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from '@lib/firebase/clientApp'

import SearchInput from '@components/SearchInput'
import AuthButtons from '@components/auth/AuthButtons'
import AuthModal from '@components/auth/AuthModal'
import UserAvatar from '@components/common/UserAvatar'

const Navbar = () => {
  const { t } = useTranslation('auth')
  const [user] = useAuthState(auth)

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
                {t('logout.title')}
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
