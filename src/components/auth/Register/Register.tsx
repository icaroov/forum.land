import { Button, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useSetRecoilState } from 'recoil'

import { authModalAtom } from '@src/atoms/authModalAtom'
import Input from '@src/components/common/Input'
import { auth } from '@src/lib/firebase/clientApp'
import { FIREBASE_ERRORS } from '@src/utils/constants'

const EMAIL_INPUT = 'email'
const PASSWORD_INPUT = 'password'
const CONFIRM_PASSWORD_INPUT = 'confirmPassword'

const initialData = {
  [EMAIL_INPUT]: '',
  [PASSWORD_INPUT]: '',
  [CONFIRM_PASSWORD_INPUT]: ''
}

const Register = () => {
  const [error, setError] = useState('')
  const [formData, setFormData] = useState(initialData)
  const setAuthModalState = useSetRecoilState(authModalAtom)

  const [createUserWithEmailAndPassword, _, loading, userError] =
    useCreateUserWithEmailAndPassword(auth)

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (error) setError('')

    const { email, password, confirmPassword } = formData

    if (password !== confirmPassword) {
      setError('Senhas não conferem')
      return
    }

    createUserWithEmailAndPassword(email, password)
  }

  const handleClickLogin = () => {
    setAuthModalState(prev => ({ ...prev, view: 'login' }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name={EMAIL_INPUT}
        type="email"
        placeholder="E-mail"
        onChange={handleDataChange}
        mb={3}
        required
        autoFocus
      />

      <Input
        name={PASSWORD_INPUT}
        type="password"
        placeholder="Senha"
        onChange={handleDataChange}
        required
        mb={3}
        pattern=".{6,}"
        title="A senha deve ter no mínimo 6 caracteres."
      />

      <Input
        name={CONFIRM_PASSWORD_INPUT}
        type="password"
        placeholder="Confirme sua senha"
        onChange={handleDataChange}
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
        Registrar-se
      </Button>

      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Já possui uma conta?</Text>
        <Text
          color="pink.500"
          fontWeight={700}
          cursor="pointer"
          onClick={handleClickLogin}
          _hover={{ textDecoration: 'underline' }}
        >
          Entre agora
        </Text>
      </Flex>
    </form>
  )
}

export default Register
