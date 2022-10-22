import { Button, Divider, Flex, Icon, Text } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth'
import { BsDot, BsReddit } from 'react-icons/bs'
import { useSetRecoilState } from 'recoil'

import { auth } from '@lib/firebase/clientApp'

import { authModalAtom } from '@atoms/authModalAtom'

import Input from '@components/common/Input'

export const ICONS = {
  REDDIT: BsReddit,
  DOT: BsDot
}

const ResetPassword = () => {
  const setAuthModalState = useSetRecoilState(authModalAtom)
  const emailRef = useRef<HTMLInputElement>(null)
  const [success, setSuccess] = useState(false)
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!emailRef.current?.value) return

    await sendPasswordResetEmail(emailRef.current.value)
    setSuccess(true)
  }

  const handleClickRegister = () => {
    setAuthModalState(prev => ({ ...prev, view: 'register' }))
  }

  const handleClickLogin = () => {
    setAuthModalState(prev => ({ ...prev, view: 'login' }))
  }

  return (
    <Flex flexDirection="column" alignItems="center" width="100%">
      <Icon as={ICONS.REDDIT} color="green.200" fontSize={40} mb={4} />
      {success ? (
        <Flex flexDirection="column" alignItems="center">
          <Text fontSize={25}>Uhul, veja seu e-mail! 🥳</Text>
          <Text fontSize="sm" color="gray.500">
            Cheque também sua caixa de spam.
          </Text>
        </Flex>
      ) : (
        <>
          <Text fontSize="sm" textAlign="center" mb={2}>
            Digite o e-mail associado à sua conta e nós lhe enviaremos um link
            para redefinir sua senha.
          </Text>

          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Input
              innerRef={emailRef}
              type="email"
              placeholder="E-mail"
              required
              autoFocus
              mb={3}
            />
            <Text textAlign="center" fontSize="10pt" color="red">
              {error?.message}
            </Text>
            <Button
              width="100%"
              height="36px"
              mb={2}
              mt={2}
              type="submit"
              isLoading={sending}
            >
              Resetar senha
            </Button>
          </form>
        </>
      )}

      <Divider orientation="horizontal" mt={4} mb={4} />

      <Flex fontSize="9pt" justifyContent="center" alignItems="center" gap={2}>
        <Text
          color="pink.500"
          fontWeight={700}
          cursor="pointer"
          onClick={handleClickLogin}
          _hover={{ textDecoration: 'underline' }}
        >
          Faça login
        </Text>
        <Icon as={ICONS.DOT} />
        <Text
          fontWeight={700}
          color="pink.500"
          cursor="pointer"
          _hover={{ textDecoration: 'underline' }}
          onClick={handleClickRegister}
        >
          Registre-se
        </Text>
      </Flex>
    </Flex>
  )
}

export default ResetPassword
