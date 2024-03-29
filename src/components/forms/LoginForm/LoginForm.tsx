import { Button, Divider, Flex, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useSetRecoilState } from 'recoil'

import { FIREBASE_ERRORS } from '@src/constants/firebase'
import { ViewEnum } from '@src/shared/enums/View.enum'

import { auth } from '@lib/firebase/clientApp'

import { authModalAtom } from '@atoms/authModalAtom'

import Input from '@components/common/Input'

const LoginForm = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const setAuthModalState = useSetRecoilState(authModalAtom)
  const [signInWithEmailAndPassword, _, loading, error] =
    useSignInWithEmailAndPassword(auth)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = {
      email: emailRef.current?.value || '',
      password: passwordRef.current?.value || ''
    }

    signInWithEmailAndPassword(data.email, data.password)
  }

  const handleClickModalView = (
    view: ViewEnum.REGISTER | ViewEnum.RESET_PASSWORD
  ) => {
    setAuthModalState(prev => ({ ...prev, view }))
  }

  return (
    <form onSubmit={handleSubmit} data-testid="login-form">
      <Input
        innerRef={emailRef}
        type="email"
        placeholder="Seu melhor e-mail"
        required
        mb={3}
        autoFocus
      />

      <Input
        innerRef={passwordRef}
        type="password"
        placeholder="Sua senha secreta"
        required
        mb={2}
      />

      {error && (
        <Text color="red.500" fontSize="sm" mt={2} mb={2} textAlign="center">
          {FIREBASE_ERRORS[error?.message]}
        </Text>
      )}

      <Button
        width="100%"
        height="36px"
        mt={2}
        mb={2}
        type="submit"
        isLoading={loading}
      >
        Entrar
      </Button>

      <Flex justifyContent="center" mb={2}>
        <Text
          fontSize="sm"
          cursor="pointer"
          color="gray.500"
          _hover={{ color: 'blue.100', textDecoration: 'underline' }}
          onClick={() => handleClickModalView(ViewEnum.RESET_PASSWORD)}
        >
          Esqueci minha senha
        </Text>
      </Flex>

      <Divider orientation="horizontal" mt={4} mb={4} />

      <Flex fontSize="sm" justifyContent="center">
        <Text mr={1}>Ainda não possui uma conta?</Text>
        <Text
          fontWeight={700}
          color="pink.500"
          cursor="pointer"
          _hover={{ textDecoration: 'underline' }}
          onClick={() => handleClickModalView(ViewEnum.REGISTER)}
        >
          Cadastre-se
        </Text>
      </Flex>
    </form>
  )
}

export default LoginForm
