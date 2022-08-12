import {
  Modal as ChakraModal,
  Flex,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import { useRecoilState } from 'recoil'

import { authModalAtom } from '@src/atoms/authModalAtom'
import AuthInputs from '@src/components/auth/AuthInputs'

const AuthModal = () => {
  const [{ isOpen, view }, setModalState] = useRecoilState(authModalAtom)

  const handleClose = () => setModalState(prev => ({ ...prev, isOpen: false }))

  const modalTitle =
    view === 'login'
      ? 'Login'
      : view === 'register'
      ? 'Registre-se'
      : 'Resetar senha'

  return (
    <ChakraModal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader textAlign="center">{modalTitle}</ModalHeader>
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
            {/* <OAuthButtons /> */}
            <AuthInputs />
            {/* <ResetPassword /> */}
          </Flex>
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  )
}

export default AuthModal
