import { Flex } from '@chakra-ui/react'

import Login from '@components/forms/Login'
import Register from '@components/forms/Register'

type AuthInputsProps = {
  view: 'login' | 'register'
}

const AuthInputs = ({ view = 'login' }: AuthInputsProps) => {
  return (
    <Flex direction="column" align="center" width="100%" mt={4}>
      {view === 'login' && <Login />}
      {view === 'register' && <Register />}
    </Flex>
  )
}

export default AuthInputs
