import { Button, Flex, Image, Text } from '@chakra-ui/react'
import { TFunction, useTranslation } from 'next-i18next'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'

import { FIREBASE_ERRORS } from '@src/constants/firebase'

import { auth } from '@lib/firebase/clientApp'

export const trans = (t: TFunction) => ({
  google: t('login.buttons.google')
})

const OAuthButtons = () => {
  const { t } = useTranslation('auth')
  const { google } = trans(t)

  const [signInWithGoogle, _, loading, error] = useSignInWithGoogle(auth)

  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button
        variant="oauth"
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image
          src="/assets/img/googlelogo.png"
          alt="Google Logo"
          height="20px"
          mr={4}
        />
        <Text>{google}</Text>
      </Button>

      {error && (
        <Text color="red.500" fontSize="sm" mt={2} textAlign="center">
          {FIREBASE_ERRORS[error.message]}
        </Text>
      )}
    </Flex>
  )
}

export default OAuthButtons
