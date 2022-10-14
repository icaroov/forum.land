import { Button, Flex, Text } from '@chakra-ui/react'
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
      >
        Login
      </Button>

      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Ainda não possui uma conta?</Text>
        <Text
          color="pink.500"
          fontWeight={700}
          cursor="pointer"
          onClick={handleClickRegister}
          _hover={{ textDecoration: 'underline' }}
        >
          Registre-se agora
        </Text>
      </Flex>
    </form>
  )
}

export default Login
