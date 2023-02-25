import { Button, Flex, Image, Text } from '@chakra-ui/react'

import { FIREBASE_ERRORS } from '@src/constants/firebase'

import type {
  FirebaseErrorType,
  SignInWithGoogleType
} from '@shared/types/firebaseMethods.types'

type OAuthButtonsProps = {
  signInWithGoogle: SignInWithGoogleType
  loading: boolean
  error: FirebaseErrorType
}

const OAuthButtons = ({
  signInWithGoogle,
  loading,
  error
}: OAuthButtonsProps) => (
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
      <Text>Continue com uma conta Google</Text>
    </Button>

    {error && (
      <Text color="red.500" fontSize="sm" mt={2} textAlign="center">
        {FIREBASE_ERRORS[error.message]}
      </Text>
    )}
  </Flex>
)

export default OAuthButtons
