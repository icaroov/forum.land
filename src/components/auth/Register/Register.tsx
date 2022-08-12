import { Flex, Text } from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil'

import { authModalAtom } from '@src/atoms/authModalAtom'

const Register = () => {
  const setAuthModalState = useSetRecoilState(authModalAtom)

  const handleClickLogin = () => {
    setAuthModalState(prev => ({ ...prev, view: 'login' }))
  }
  return (
    <>
      <h1>Register</h1>

      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Já tem conta?</Text>
        <Text
          color="pink.500"
          fontWeight={700}
          cursor="pointer"
          onClick={handleClickLogin}
        >
          Faça login agora
        </Text>
      </Flex>
    </>
  )
}

export default Register
