import { useToast } from '@chakra-ui/react'
import { doc, setDoc } from 'firebase/firestore'
import { useCallback } from 'react'

import { firestore } from '@src/lib/firebase/clientApp'
import { UserType } from '@src/shared/types/user.type'

export const useCreateUserDocument = () => {
  const toast = useToast()

  return useCallback(
    async (user: Partial<UserType>) => {
      if (!user?.uid) throw new Error('Usuário não encontrado.')

      try {
        const docRef = doc(firestore, 'users', user.uid)
        await setDoc(docRef, user)

        toast({
          title: 'Benvenuto! 🎉',
          status: 'success',
          duration: 4000,
          isClosable: true
        })
      } catch (error) {
        if (error instanceof Error) {
          toast({
            title: 'Erro ao criar usuário.',
            description: error.message,
            duration: 4000,
            status: 'error',
            isClosable: true
          })
        }

        toast({
          title: 'Algo deu errado.',
          status: 'error',
          duration: 4000,
          isClosable: true
        })
      }
    },
    [toast]
  )
}
