import {
  Box,
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text
} from '@chakra-ui/react'
import { useState } from 'react'

import Input from '@components/common/Input'

import CommunityCheckbox, { CommunityType } from './CommunityCheckbox'

type CommunityModalProps = {
  isOpen: boolean
  onClose: () => void
}

const CommunityModal = ({ isOpen, onClose }: CommunityModalProps) => {
  const [communityName, setCommunityName] = useState('')
  const [communityType, setCommunityType] = useState<CommunityType>('public')
  const [charsRemaining, setCharsRemaining] = useState(21)

  const handleCommunityNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target

    if (value.length > 21) return

    setCommunityName(value)
    setCharsRemaining(21 - value.length)
  }

  const handleCommunityTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {
      target: { name }
    } = event

    if (name === communityType) return

    setCommunityType(name as CommunityType)
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />

        <ModalContent>
          <ModalHeader
            display="flex"
            flexDirection="column"
            fontSize={15}
            padding={3}
          >
            Criar comunidade
          </ModalHeader>

          <Box paddingX={3}>
            <Divider />

            <ModalCloseButton />
            <ModalBody display="flex" flexDirection="column" padding="10px 0px">
              <Text fontSize={15} fontWeight={600}>
                Nome
              </Text>

              <Text fontSize={11} color="gray.500">
                Comunidades incluindo letras maiúsculas não podem ser alteradas.
              </Text>

              <Text
                position="relative"
                top="32px"
                left="10px"
                width="20px"
                color="gray.400"
              >
                r/
              </Text>
              <Input
                position="relative"
                paddingLeft="22px"
                value={communityName}
                onChange={handleCommunityNameChange}
              />
              <Text
                fontSize="9pt"
                color={charsRemaining === 0 ? 'red.500' : 'gray.400'}
              >
                {charsRemaining} caracteres restantes
              </Text>

              <Box marginY={4}>
                <Text fontSize={15} fontWeight={600}>
                  Tipo de comunidade
                </Text>

                <Stack spacing={2}>
                  <CommunityCheckbox
                    name="public"
                    communityType={communityType}
                    onChange={handleCommunityTypeChange}
                  />

                  <CommunityCheckbox
                    name="restricted"
                    communityType={communityType}
                    onChange={handleCommunityTypeChange}
                  />

                  <CommunityCheckbox
                    name="private"
                    communityType={communityType}
                    onChange={handleCommunityTypeChange}
                  />
                </Stack>
              </Box>
            </ModalBody>
          </Box>

          <ModalFooter background="gray.600" borderRadius="0px 0px 10px 10px">
            <Button marginRight={3} variant="outline" onClick={onClose}>
              Cancelar
            </Button>

            <Button variant="solid">Criar comunidade</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CommunityModal
