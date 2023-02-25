import { Button, Divider, Flex, Icon, Text } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { BsDot, BsReddit } from 'react-icons/bs'
import { useSetRecoilState } from 'recoil'

import { ViewEnum } from '@src/shared/enums/View.enum'

import { authModalAtom } from '@atoms/authModalAtom'

import type {
  FirebaseErrorType,
  SendPasswordResetEmailErrorType
} from '@shared/types/firebaseMethods.types'

import Input from '@components/common/Input'

export const ICONS = {
  REDDIT: BsReddit,
  DOT: BsDot
}

type ResetPasswordProps = {
  sendPasswordResetEmail: SendPasswordResetEmailErrorType
  loading: boolean
  error: FirebaseErrorType
}

const ResetPasswordForm = ({
  sendPasswordResetEmail,
  loading,
  error
}: ResetPasswordProps) => {
  const setAuthModalState = useSetRecoilState(authModalAtom)
  const emailRef = useRef<HTMLInputElement>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!emailRef.current?.value) return

    setSuccess(true)

    await sendPasswordResetEmail(emailRef.current.value)
  }

  const handleClickRegister = () => {
    setAuthModalState(prev => ({ ...prev, view: ViewEnum.REGISTER }))
  }

  const handleClickLogin = () => {
    setAuthModalState(prev => ({ ...prev, view: ViewEnum.LOGIN }))
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
            Digite seu e-mail e enviaremos um link para você redefinir sua
            senha.
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
              isLoading={loading}
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
          Entrar
        </Text>
        <Icon as={ICONS.DOT} />
        <Text
          fontWeight={700}
          color="pink.500"
          cursor="pointer"
          _hover={{ textDecoration: 'underline' }}
          onClick={handleClickRegister}
        >
          Criar conta
        </Text>
      </Flex>
    </Flex>
  )
}

export default ResetPasswordForm
