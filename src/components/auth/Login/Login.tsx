import { Button, Divider, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useSetRecoilState } from 'recoil'

import { authModalAtom } from '@src/atoms/authModalAtom'
import Input from '@src/components/common/Input'
import { auth } from '@src/lib/firebase/clientApp'
import { FIREBASE_ERRORS } from '@src/utils/constants'

const EMAIL_INPUT = 'email'
const PASSWORD_INPUT = 'password'

const initialData = {
  [EMAIL_INPUT]: '',
  [PASSWORD_INPUT]: ''
}

const Login = () => {
  const [formData, setFormData] = useState(initialData)
  const setAuthModalState = useSetRecoilState(authModalAtom)
  const [signInWithEmailAndPassword, _, loading, error] =
    useSignInWithEmailAndPassword(auth)

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { email, password } = formData
    signInWithEmailAndPassword(email, password)
  }

  const handleClickRegister = () => {
    setAuthModalState(prev => ({ ...prev, view: 'register' }))
  }

  const handleClickResetPassword = () => {
    setAuthModalState(prev => ({ ...prev, view: 'resetPassword' }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name={EMAIL_INPUT}
        type="email"
        placeholder="E-mail"
        onChange={handleDataChange}
        required
        mb={3}
        autoFocus
      />

      <Input
        name={PASSWORD_INPUT}
        type="password"
        placeholder="Senha"
        onChange={handleDataChange}
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
        disabled={!formData.email || !formData.password}
      >
        Login
      </Button>

      <Flex justifyContent="center" mb={2}>
        <Text
          fontSize="sm"
          cursor="pointer"
          color="gray.500"
          _hover={{ color: 'blue.100', textDecoration: 'underline' }}
          onClick={handleClickResetPassword}
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
          onClick={handleClickRegister}
        >
          Registre-se agora
        </Text>
      </Flex>
    </form>
  )
}

export default Login
