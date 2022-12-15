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
import { useTranslation } from 'next-i18next'
import { useEffect } from 'react'
import {
  useSendPasswordResetEmail,
  useSignInWithGoogle
} from 'react-firebase-hooks/auth'
import { useRecoilState } from 'recoil'

import { ViewEnum } from '@src/shared/enums/View.enum'

import { auth } from '@lib/firebase/clientApp'

import { authModalAtom } from '@atoms/authModalAtom'

import type { UserType } from '@shared/types/user.type'

import AuthInputs from '@components/auth/AuthInputs'
import OAuthButtons from '@components/auth/OAuthButtons'
import ResetPassword from '@components/forms/ResetPassword'

type AuthModalProps = {
  user: UserType
}

const AuthModal = ({ user }: AuthModalProps) => {
  const { t } = useTranslation('auth')

  const trans = {
    login: t('login.title'),
    register: t('register.title'),
    forgotPassword: t('login.buttons.forgotPassword'),
    or: t('login.or')
  }

  const [{ isOpen, view }, setModalState] = useRecoilState(authModalAtom)
  const [signInWithGoogle, _, loading, signInError] = useSignInWithGoogle(auth)
  const [sendPasswordResetEmail, sending, sendPasswordError] =
    useSendPasswordResetEmail(auth)

  const handleClose = () => setModalState(prev => ({ ...prev, isOpen: false }))

  const isLoginView = view === ViewEnum.LOGIN
  const isRegisterView = view === ViewEnum.REGISTER
  const isResetPasswordView = view === ViewEnum.RESET_PASSWORD

  useEffect(() => {
    if (user) handleClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <ChakraModal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader textAlign="center">
          {isLoginView && trans.login}
          {isRegisterView && trans.register}
          {isResetPasswordView && trans.forgotPassword}
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
                  {trans.or}
                </Text>

                <AuthInputs view={view} />
              </>
            ) : (
              <ResetPassword
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
