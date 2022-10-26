import { Flex } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'

import { authModalAtom } from '@atoms/authModalAtom'

import Login from '@components/forms/Login'
import Register from '@components/forms/Register'

const AuthInputs = () => {
  const { view } = useRecoilValue(authModalAtom)

  return (
    <Flex direction="column" align="center" width="100%" mt={4}>
      {view === 'login' && <Login />}
      {view === 'register' && <Register />}
    </Flex>
  )
}

export default AuthInputs
