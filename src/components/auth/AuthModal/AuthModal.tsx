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
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRecoilState } from 'recoil'

import { authModalAtom } from '@src/atoms/authModalAtom'
import AuthInputs from '@src/components/auth/AuthInputs'
import OAuthButtons from '@src/components/auth/OAuthButtons'
import ResetPassword from '@src/components/auth/ResetPassword'
import { auth } from '@src/lib/firebase/clientApp'

const AuthModal = () => {
  const [{ isOpen, view }, setModalState] = useRecoilState(authModalAtom)
  const [user, _loading, _error] = useAuthState(auth)

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
          {isLoginView && 'Login'}
          {isRegisterView && 'Registre-se'}
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
                <OAuthButtons />
                <Text color="gray.600" fontWeight={700}>
                  OU
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
