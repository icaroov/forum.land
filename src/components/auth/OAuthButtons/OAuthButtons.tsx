import { Button, Flex, Image, Text } from '@chakra-ui/react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'

import { auth } from '@src/lib/firebase/clientApp'
import { FIREBASE_ERRORS } from '@src/utils/constants'

const OAuthButtons = () => {
  const [signInWithGoogle, _, loading, error] = useSignInWithGoogle(auth)

  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button
        variant="oauth"
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image src="/assets/img/googlelogo.png" height="20px" mr={4} />
        <Text>Continue com uma conta Google</Text>
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
