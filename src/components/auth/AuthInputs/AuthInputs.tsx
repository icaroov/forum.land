import { Flex } from '@chakra-ui/react'

import { ViewEnum } from '@src/shared/enums/View.enum'

import Login from '@components/forms/Login'
import Register from '@components/forms/Register'

type AuthInputsProps = {
  view: ViewEnum.LOGIN | ViewEnum.REGISTER
}

const AuthInputs = ({ view = ViewEnum.LOGIN }: AuthInputsProps) => {
  return (
    <Flex direction="column" align="center" width="100%" mt={4}>
      {view === ViewEnum.LOGIN && <Login />}
      {view === ViewEnum.REGISTER && <Register />}
    </Flex>
  )
}

export default AuthInputs
