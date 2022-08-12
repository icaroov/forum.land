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

const AuthModal = () => {
  const [{ isOpen, view }, setModalState] = useRecoilState(authModalAtom)

  const handleClose = () => setModalState(prev => ({ ...prev, isOpen: false }))

  const modalTitle =
    view === 'login'
      ? 'Login'
      : view === 'register'
      ? 'Registrar'
      : 'Resetar senha'

  return (
    <ChakraModal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>{modalTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            direction="column"
            align="center"
            justify="center"
            width="70%"
            border="1px solid red"
          >
            {/* <OAuthButtons /> */}
            {/* <AuthInputs /> */}
            {/* <ResetPassword /> */}
          </Flex>
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  )
}

export default AuthModal
