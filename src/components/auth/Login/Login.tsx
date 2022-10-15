import { Button, Divider, Flex, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import React, { useRef } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useSetRecoilState } from 'recoil'

import { authModalAtom } from '@src/atoms/authModalAtom'
import Input from '@src/components/common/Input'
import { auth } from '@src/lib/firebase/clientApp'
import { FIREBASE_ERRORS } from '@src/utils/constants'

const Login = () => {
  const { t } = useTranslation('auth')

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

  const handleClickModalView = (view: 'register' | 'resetPassword') => {
    setAuthModalState(prev => ({ ...prev, view }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        innerRef={emailRef}
        type="email"
        placeholder="E-mail"
        required
        mb={3}
        autoFocus
      />

      <Input
        innerRef={passwordRef}
        type="password"
        placeholder={t('modals.login.fields.password')}
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
        Login
      </Button>

      <Flex justifyContent="center" mb={2}>
        <Text
          fontSize="sm"
          cursor="pointer"
          color="gray.500"
          _hover={{ color: 'blue.100', textDecoration: 'underline' }}
          onClick={() => handleClickModalView('resetPassword')}
        >
          Esqueci minha senha
        </Text>
      </Flex>

      <Divider orientation="horizontal" mt={4} mb={4} />

      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Ainda não possui uma conta?</Text>
        <Text
          fontWeight={700}
          color="pink.500"
          cursor="pointer"
          _hover={{ textDecoration: 'underline' }}
          onClick={() => handleClickModalView('register')}
        >
          Registre-se agora
        </Text>
      </Flex>
    </form>
  )
}

export default Login
