import {
  Modal as ChakraModal,
  Flex,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react'
import { useCallback, useEffect } from 'react'
import {
  useSendPasswordResetEmail,
  useSignInWithGoogle
} from 'react-firebase-hooks/auth'
import { useRecoilState } from 'recoil'

import { useCreateUserDocument } from '@src/hooks/useCreateUserDocument'

import { auth } from '@lib/firebase/clientApp'

import { authModalAtom } from '@atoms/authModalAtom'

import { ViewEnum } from '@shared/enums/View.enum'
import type { UserType } from '@shared/types/user.type'

import AuthInputs from '@components/auth/AuthInputs'
import OAuthButtons from '@components/auth/OAuthButtons'
import ResetPasswordForm from '@components/forms/ResetPasswordForm'

type AuthModalProps = {
  user: UserType
}

const AuthModal = ({ user }: AuthModalProps) => {
  const [{ isOpen, view }, setModalState] = useRecoilState(authModalAtom)

  const [signInWithGoogle, userCredential, loading, signInError] =
    useSignInWithGoogle(auth)
  const [sendPasswordResetEmail, sending, sendPasswordError] =
    useSendPasswordResetEmail(auth)

  const handleClose = useCallback(
    () => setModalState(prev => ({ ...prev, isOpen: false })),
    [setModalState]
  )

  const createUserDocument = useCreateUserDocument()

  const isLoginView = view === ViewEnum.LOGIN
  const isRegisterView = view === ViewEnum.REGISTER
  const isResetPasswordView = view === ViewEnum.RESET_PASSWORD

  useEffect(() => {
    if (user) handleClose()
  }, [user, handleClose])

  useEffect(() => {
    if (userCredential) {
      const user: Partial<UserType> = {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: userCredential.user.displayName,
        photoURL: userCredential.user.photoURL,
        providerData: userCredential.user.providerData
      }

      createUserDocument(user)
    }
  }, [userCredential, createUserDocument])

  return (
    <ChakraModal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader textAlign="center">
          {isLoginView && 'Login'}
          {isRegisterView && 'Cadastre-se'}
          {isResetPasswordView && 'Esqueci minha senha'}
        </ModalHeader>

        <ModalCloseButton
          _focus={{
            outline: 'none',
            border: '1px solid',
            borderColor: 'pink.500'
          }}
        />

        <ModalBody
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          pb={6}
        >
          <Flex direction="column" align="center" justify="center" width="70%">
            {isLoginView || isRegisterView ? (
              <>
                <OAuthButtons
                  signInWithGoogle={signInWithGoogle}
                  loading={loading}
                  error={signInError}
                />

                <Text
                  color="gray.600"
                  fontWeight={700}
                  textTransform="uppercase"
                >
                  ou
                </Text>

                <AuthInputs view={view} />
              </>
            ) : (
              <ResetPasswordForm
                sendPasswordResetEmail={sendPasswordResetEmail}
                loading={sending}
                error={sendPasswordError}
              />
            )}
          </Flex>
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  )
}

export default AuthModal
