import { Flex } from '@chakra-ui/react'

import { ViewEnum } from '@src/shared/enums/View.enum'

import LoginForm from '@components/forms/LoginForm'
import RegisterForm from '@components/forms/RegisterForm'

type AuthInputsProps = {
  view: ViewEnum.LOGIN | ViewEnum.REGISTER
}

const AuthInputs = ({ view = ViewEnum.LOGIN }: AuthInputsProps) => {
  return (
    <Flex direction="column" align="center" width="100%" mt={4}>
      {view === ViewEnum.LOGIN && <LoginForm />}
      {view === ViewEnum.REGISTER && <RegisterForm />}
    </Flex>
  )
}

export default AuthInputs
