import { Button, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'

import { authModalAtom } from '@src/atoms/authModalAtom'
import Input from '@src/components/common/Input'

const EMAIL_INPUT = 'email'
const PASSWORD_INPUT = 'password'

const initialData = {
  [EMAIL_INPUT]: '',
  [PASSWORD_INPUT]: ''
}

const Login = () => {
  const [formData, setFormData] = useState(initialData)
  const setAuthModalState = useSetRecoilState(authModalAtom)

  const updateFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
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
        onChange={updateFormData}
        required
        mb={3}
        autoFocus
      />

      <Input
        name={PASSWORD_INPUT}
        type="password"
        placeholder="Senha"
        onChange={updateFormData}
        required
        mb={2}
      />

      <Button width="100%" height="36px" mt={2} mb={2} type="submit">
        Login
      </Button>

      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Novo aqui?</Text>
        <Text
          color="pink.500"
          fontWeight={700}
          cursor="pointer"
          onClick={handleClickRegister}
        >
          Registre-se agora
        </Text>
      </Flex>
    </form>
  )
}

export default Login
