import { Flex } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'

import { authModalAtom } from '@src/atoms/authModalAtom'
import Login from '@src/components/auth/Login'
import Register from '@src/components/auth/Register'

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
