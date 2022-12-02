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
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRecoilState } from 'recoil'

import { auth } from '@lib/firebase/clientApp'

import { authModalAtom } from '@atoms/authModalAtom'

import AuthInputs from '@components/auth/AuthInputs'
import OAuthButtons from '@components/auth/OAuthButtons'
import ResetPassword from '@components/forms/ResetPassword'

const AuthModal = () => {
  const { t } = useTranslation('auth')

  const trans = {
    login: t('login.title'),
    register: t('register.title'),
    forgotPassword: t('login.buttons.forgotPassword'),
    or: t('login.or')
  }

  const [{ isOpen, view }, setModalState] = useRecoilState(authModalAtom)
  const [user] = useAuthState(auth)

  const handleClose = () => setModalState(prev => ({ ...prev, isOpen: false }))

  const isLoginView = view === 'login'
  const isRegisterView = view === 'register'
  const isResetPasswordView = view === 'resetPassword'

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
                <OAuthButtons />

                <Text color="gray.600" fontWeight={700}>
                  {trans.or.toUpperCase()}
                </Text>

                <AuthInputs />
              </>
            ) : (
              <ResetPassword />
            )}
          </Flex>
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  )
}

export default AuthModal
