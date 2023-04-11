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
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { serverTimestamp } from 'firebase/firestore'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import {
  COMMUNITY_PRIVACY_TYPE,
  CommunityType
} from '@src/shared/types/community.type'

import { firestore } from '@lib/firebase/clientApp'
import { auth } from '@lib/firebase/clientApp'

import Input from '@components/common/Input'

import CommunityCheckbox from './CommunityCheckbox'

const MINIMUM_CHARS = 21
const MINIMUM_NAME_LENGTH = 3

type CommunityModalProps = {
  isOpen: boolean
  onClose: () => void
}

const CommunityModal = ({ isOpen, onClose }: CommunityModalProps) => {
  const toast = useToast()

  const [communityName, setCommunityName] = useState('')
  const [communityType, setCommunityType] = useState(
    COMMUNITY_PRIVACY_TYPE.PUBLIC
  )
  const [charsRemaining, setCharsRemaining] = useState(MINIMUM_CHARS)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [user] = useAuthState(auth)

  const handleCommunityNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (error) setError('')

    const { value } = event.target

    if (value.length > MINIMUM_CHARS) return

    setCommunityName(value)
    setCharsRemaining(MINIMUM_CHARS - value.length)
  }

  const handleCommunityTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {
      target: { value }
    } = event

    if (value === communityType) return

    setCommunityType(value as COMMUNITY_PRIVACY_TYPE)
  }

  const handleCreateCommunity = async () => {
    if (error) setError('')

    const format = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/g

    if (
      format.test(communityName) ||
      communityName.length < MINIMUM_NAME_LENGTH
    ) {
      setError(
        `Nomes de comunidades devem ter no mínimo ${MINIMUM_NAME_LENGTH}
         caracteres e não podem conter caracteres especiais.`
      )

      return
    }

    try {
      setLoading(true)

      const docRef = doc(firestore, 'communities', communityName)
      const communityDoc = await getDoc(docRef)

      if (communityDoc.exists()) {
        throw new Error('Comunidade já existe, tente outro nome.')
      }

      const community: CommunityType = {
        name: communityName,
        membersCount: 1,
        creatorId: user?.uid,
        privacyType: communityType,
        createdAt: serverTimestamp()
      }

      await setDoc(docRef, community)
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: 'Erro ao criar comunidade.',
          description: error.message,
          status: 'error',
          duration: 4000,
          isClosable: true
        })
      }

      toast({
        title: 'Algo deu errado...',
        status: 'error',
        duration: 4000,
        isClosable: true
      })
    } finally {
      setLoading(false)
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
