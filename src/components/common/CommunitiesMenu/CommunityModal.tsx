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
  Text,
  useToast
} from '@chakra-ui/react'
import { ChangeEvent, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { useCreateCommunity } from '@src/hooks/useCreateCommunity'
import { COMMUNITY_PRIVACY_TYPE } from '@src/shared/types/community.type'

import { auth } from '@lib/firebase/clientApp'

import Input from '@components/common/Input'

import CommunityCheckbox from './CommunityCheckbox'

const MINIMUM_CHARS = 21

type CommunityModalProps = {
  isOpen: boolean
  onClose: () => void
}

const CommunityModal = ({ isOpen, onClose }: CommunityModalProps) => {
  const toast = useToast()

  const [communityName, setCommunityName] = useState('')
  const [charsRemaining, setCharsRemaining] = useState(MINIMUM_CHARS)
  const [communityType, setCommunityType] = useState(
    COMMUNITY_PRIVACY_TYPE.PUBLIC
  )

  const [user] = useAuthState(auth)

  const { createCommunity, loading, error, cleanErrorMessage } =
    useCreateCommunity()

  const handleCommunityNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (error) cleanErrorMessage()

    const { value } = event.target

    if (value.length > MINIMUM_CHARS) return

    setCommunityName(value)
    setCharsRemaining(MINIMUM_CHARS - value.length)
  }

  const handleCommunityTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event

    if (value === communityType) return

    setCommunityType(value as COMMUNITY_PRIVACY_TYPE)
  }

  const handleCreateCommunity = async () => {
    createCommunity({
      communityName,
      communityType,
      currentUser: user,
      onFinished: () => {
        setCommunityName('')
        setCommunityType(COMMUNITY_PRIVACY_TYPE.PUBLIC)

        toast({
          title: 'Sucesso!',
          description: 'Comunidade criada com sucesso!',
          status: 'success',
          duration: 4000,
          isClosable: true
        })

        onClose()
      }
    })
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
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
            <ModalBody display="flex" flexDirection="column" paddingY="10px">
              <Text fontSize="md" fontWeight={600}>
                Nome
              </Text>

              <Text fontSize="xs" color="gray.500">
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
                fontSize="xs"
                color={charsRemaining === 0 ? 'red.500' : 'gray.400'}
              >
                {charsRemaining} caracteres restantes
              </Text>

              {error && (
                <Text fontSize="xs" color="red.500">
                  {error}
                </Text>
              )}

              <Box marginY={4}>
                <Text fontSize="md" fontWeight={600}>
                  Tipo de comunidade
                </Text>

                <Stack spacing={2}>
                  <CommunityCheckbox
                    name={COMMUNITY_PRIVACY_TYPE.PUBLIC}
                    communityType={communityType}
                    onChange={handleCommunityTypeChange}
                  />

                  <CommunityCheckbox
                    name={COMMUNITY_PRIVACY_TYPE.RESTRICTED}
                    communityType={communityType}
                    onChange={handleCommunityTypeChange}
                  />

                  <CommunityCheckbox
                    name={COMMUNITY_PRIVACY_TYPE.PRIVATE}
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

            <Button
              variant="solid"
              onClick={handleCreateCommunity}
              isLoading={loading}
            >
              Criar comunidade
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CommunityModal
