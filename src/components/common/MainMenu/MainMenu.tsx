import { ChevronDownIcon } from '@chakra-ui/icons'
import { Flex, Icon, Menu, MenuButton, MenuList, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { TiHome } from 'react-icons/ti'

import CommunitiesMenu from '../CommunitiesMenu'

const ICONS = {
  HOME: TiHome,
  CHEVRON_DOWN: <ChevronDownIcon />
}

const MainMenu = () => {
  const { t } = useTranslation('menu')

  const trans = {
    home: t('mainMenu.home')
  }

  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0x 6x"
        borderRadius={4}
        transition="all 0.2s"
        marginRight={2}
        marginLeft={{ base: 0, md: 2 }}
        _hover={{
          outline: '1px solid',
          outlineColor: 'gray.400'
        }}
      >
        <Flex
          alignItems="center"
          justify="space-between"
          width={{ base: 'auto', lg: '100%' }}
        >
          <Flex alignItems="center">
            <Icon
              as={ICONS.HOME}
              fontSize={24}
              marginRight={{ base: 1, md: 2 }}
            />

            <Flex display={{ base: 'none', lg: 'flex' }}>
              <Text fontSize="10pt">{trans.home}</Text>
            </Flex>
          </Flex>
          {ICONS.CHEVRON_DOWN}
        </Flex>
      </MenuButton>

      <MenuList>
        <CommunitiesMenu />
      </MenuList>
    </Menu>
  )
}

export default MainMenu
