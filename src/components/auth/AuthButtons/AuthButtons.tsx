import { Button, Flex } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { useSetRecoilState } from 'recoil'

import { ViewEnum } from '@src/shared/enums/View.enum'

import { authModalAtom } from '@atoms/authModalAtom'

const AuthButtons = () => {
  const { t } = useTranslation('auth')

  const trans = {
    login: t('login.title'),
    register: t('register.title')
  }

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
        {trans.login}
      </Button>

      <Button
        height="28px"
        mr={2}
        display={{ base: 'none', sm: 'flex' }}
        width={{ base: '70px', md: '110px' }}
        onClick={() => handleClick(ViewEnum.REGISTER)}
      >
        {trans.register}
      </Button>
    </Flex>
  )
}

export default AuthButtons
