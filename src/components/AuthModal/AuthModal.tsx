import {
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import { useRecoilState } from 'recoil'

import { authModalAtom } from '@src/atoms/authModalAtom'

// export type AuthModalProps = {}

const AuthModal = () => {
  const [{ isOpen }, setModalState] = useRecoilState(authModalAtom)

  const handleClose = () => setModalState(prev => ({ ...prev, isOpen: false }))

  return (
    <ChakraModal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Qualquer coisa</ModalBody>
      </ModalContent>
    </ChakraModal>
  )
}

export default AuthModal
