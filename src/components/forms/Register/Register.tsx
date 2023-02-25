import { Button, Divider, Flex, Text } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useSetRecoilState } from 'recoil'

import { FIREBASE_ERRORS } from '@src/constants/firebase'
import { ViewEnum } from '@src/shared/enums/View.enum'

import { auth } from '@lib/firebase/clientApp'

import { authModalAtom } from '@atoms/authModalAtom'

import Input from '@components/common/Input'

const Register = () => {
  const [error, setError] = useState('')

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const confirmPasswordRef = useRef<HTMLInputElement>(null)

  const setAuthModalState = useSetRecoilState(authModalAtom)

  const [createUserWithEmailAndPassword, _, loading, userError] =
    useCreateUserWithEmailAndPassword(auth)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (error) setError('')

    const data = {
      email: emailRef.current?.value || '',
      password: passwordRef.current?.value || '',
      confirmPassword: confirmPasswordRef.current?.value || ''
    }

    if (data.password !== data.confirmPassword) {
      setError('Senhas não conferem')
      return
    }

    createUserWithEmailAndPassword(data.email, data.password)
  }

  const handleClickLogin = () => {
    setAuthModalState(prev => ({ ...prev, view: ViewEnum.LOGIN }))
  }

  return (
    <form onSubmit={handleSubmit} data-testid="register-form">
      <Input
        innerRef={emailRef}
        type="email"
        placeholder="E-mail"
        mb={3}
        required
        autoFocus
      />

      <Input
        innerRef={passwordRef}
        type="password"
        placeholder="Senha"
        required
        mb={3}
        pattern=".{6,}"
        title="A senha deve ter no mínimo 6 caracteres."
      />

      <Input
        innerRef={confirmPasswordRef}
        type="password"
        placeholder="Confirme sua senha"
        required
        mb={2}
      />

      {(error || userError) && (
        <Text color="red.500" fontSize="sm" mt={2} mb={2} textAlign="center">
          {error || FIREBASE_ERRORS[userError?.message as string]}
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
        Criar conta
      </Button>

      <Divider orientation="horizontal" mt={4} mb={4} />

      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Já tem uma conta?</Text>
        <Text
          color="pink.500"
          fontWeight={700}
          cursor="pointer"
          onClick={handleClickLogin}
          _hover={{ textDecoration: 'underline' }}
        >
          Entrar
        </Text>
      </Flex>
    </form>
  )
}

export default Register
