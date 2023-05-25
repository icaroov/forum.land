import { useToast } from '@chakra-ui/react'
import { doc, runTransaction, serverTimestamp } from 'firebase/firestore'
import { useState } from 'react'

import { firestore } from '@src/lib/firebase/clientApp'
import {
  COMMUNITY_PRIVACY_TYPE,
  CommunitySnippetType,
  CommunityType
} from '@src/shared/types/community.type'

import { UserType } from '@shared/types/user.type'

const MINIMUM_NAME_LENGTH = 3

type CreateCommunityProps = {
  communityName: string
  communityType: COMMUNITY_PRIVACY_TYPE
  currentUser: UserType
  onFinished?: () => void
}

export const useCreateCommunity = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const toast = useToast()

  const cleanErrorMessage = () => setError('')

  const createCommunity = async ({
    communityName,
    communityType,
    currentUser,
    onFinished
  }: CreateCommunityProps) => {
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

      await runTransaction(firestore, async transaction => {
        const communityDoc = await transaction.get(docRef)

        if (communityDoc.exists()) {
          throw new Error('Comunidade já existe, tente outro nome.')
        }

        const community: CommunityType = {
          name: communityName,
          membersCount: 1,
          creatorId: currentUser?.uid,
          privacyType: communityType,
          createdAt: serverTimestamp()
        }

        transaction.set(docRef, community)

        const communitySnippet: CommunitySnippetType = {
          communityId: communityName,
          isModerator: true
        }

        transaction.set(
          doc(
            firestore,
            `users/${currentUser?.uid}/communitySnippets`,
            communityName
          ),
          communitySnippet
        )
      })
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

      onFinished && onFinished()
    }
  }

  return { loading, error, createCommunity, cleanErrorMessage }
}
