import { Button, Flex } from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil'

import { authModalAtom } from '@atoms/authModalAtom'

const AuthButtons = () => {
  const setAuthModalState = useSetRecoilState(authModalAtom)

  const handleClick = (view: 'login' | 'register') =>
    setAuthModalState({ isOpen: true, view })

  return (
    <Flex justify="center" align="center">
      <Button
        variant="outline"
        height="28px"
        mr={2}
        display={{ base: 'none', sm: 'flex' }}
        width={{ base: '70px', md: '110px' }}
        onClick={() => handleClick('login')}
      >
        Login
      </Button>

      <Button
        height="28px"
        mr={2}
        display={{ base: 'none', sm: 'flex' }}
        width={{ base: '70px', md: '110px' }}
        onClick={() => handleClick('register')}
      >
        Registrar
      </Button>
    </Flex>
  )
}

export default AuthButtons
