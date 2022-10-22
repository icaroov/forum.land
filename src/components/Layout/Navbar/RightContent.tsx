import { Button, Flex } from '@chakra-ui/react'
import { signOut } from 'firebase/auth'
import { useTranslation } from 'next-i18next'
import { useAuthState } from 'react-firebase-hooks/auth'

import AuthButtons from '@src/components/auth/AuthButtons'
import UserAvatar from '@src/components/common/UserAvatar'

import { auth } from '@lib/firebase/clientApp'

const RightContent = () => {
  const [user] = useAuthState(auth)
  const { t } = useTranslation('auth')

  const trans = {
    logout: t('logout.title')
  }

  return (
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
            {trans.logout}
          </Button>
        </>
      ) : (
        <AuthButtons />
      )}
    </Flex>
  )
}

export default RightContent
