import { Button, Flex } from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil'

import { authModalAtom } from '@atoms/authModalAtom'

import { ViewEnum } from '@shared/enums/View.enum'

const AuthButtons = () => {
  const setAuthModalState = useSetRecoilState(authModalAtom)

  const handleClick = (view: ViewEnum.LOGIN | ViewEnum.REGISTER) =>
    setAuthModalState({ isOpen: true, view })

  return (
    <Flex justify="center" align="center">
      <Button
        variant="outline"
        height="28px"
        mr={2}
        display={{ base: 'none', sm: 'flex' }}
        width={{ base: '70px', md: '110px' }}
        onClick={() => handleClick(ViewEnum.LOGIN)}
      >
        Login
      </Button>

      <Button
        height="28px"
        mr={2}
        display={{ base: 'none', sm: 'flex' }}
        width={{ base: '70px', md: '110px' }}
        onClick={() => handleClick(ViewEnum.REGISTER)}
      >
        Cadastre-se
      </Button>
    </Flex>
  )
}

export default AuthButtons
