import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  MenuItem as ChakraMenuItem,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
  Text
} from '@chakra-ui/react'
import { signOut } from 'firebase/auth'
import { useTranslation } from 'next-i18next'
import { CgProfile } from 'react-icons/cg'
import { FaRedditSquare } from 'react-icons/fa'
import { IoSparkles } from 'react-icons/io5'
import { IconType } from 'react-icons/lib'
import { MdOutlineLogin } from 'react-icons/md'
import { VscAccount } from 'react-icons/vsc'
import { useSetRecoilState } from 'recoil'

import { authModalAtom } from '@src/atoms/authModalAtom'
import { auth } from '@src/lib/firebase/clientApp'
import { UserType } from '@src/types/user'

const ICONS = {
  REDDIT: FaRedditSquare,
  SPARKLES: IoSparkles,
  ACCOUNT: VscAccount,
  PROFILE: CgProfile,
  LOGIN: MdOutlineLogin,
  CHEVRON_DOWN: <ChevronDownIcon />
}

export type UserMenuProps = {
  user?: UserType | null
}

const MenuItem = ({
  icon,
  text,
  onClick,
  size = 20
}: {
  icon: IconType
  text: string
  onClick?: () => void
  size?: number
}) => (
  <ChakraMenuItem
    fontSize="sm"
    fontWeight={700}
    _hover={{ bg: 'pink.500', color: 'white' }}
    onClick={onClick}
  >
    <Flex alignItems="center">
      <Icon as={icon} fontSize={size} marginRight={2} />
      {text}
    </Flex>
  </ChakraMenuItem>
)

const UserMenu = ({ user }: UserMenuProps) => {
  const { t } = useTranslation('menu')

  const trans = {
    profile: t('profile'),
    logout: t('logout'),
    loginOrRegister: t('loginOrRegister')
  }

  const setAuthModalState = useSetRecoilState(authModalAtom)

  const username = user?.displayName || user?.email?.split('@')[0]

  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0x 6x"
        borderRadius={4}
        _hover={{
          outline: '1px solid',
          outlineColor: 'gray.400'
        }}
        transition="all 0.2s"
      >
        <Flex alignItems="center">
          <Flex alignItems="center">
            {user ? (
              <>
                <Icon
                  as={ICONS.REDDIT}
                  fontSize={24}
                  marginRight={2}
                  color="gray.400"
                />
                <Flex
                  display={{ base: 'none', lg: 'flex' }}
                  direction="column"
                  fontSize="8pt"
                  align="flex-start"
                  marginRight={8}
                >
                  <Text fontWeight={700}>{username}</Text>
                  <Flex alignItems="center">
                    <Icon
                      as={ICONS.SPARKLES}
                      color="yellow.500"
                      marginRight={2}
                    />
                    <Text color="gray.400">1 karma</Text>
                  </Flex>
                </Flex>
              </>
            ) : (
              <Icon as={ICONS.ACCOUNT} fontSize={24} color="gray.400" />
            )}
          </Flex>

          {ICONS.CHEVRON_DOWN}
        </Flex>
      </MenuButton>

      <MenuList>
        {user ? (
          <>
            <MenuItem icon={ICONS.PROFILE} text={trans.profile} />
            <MenuDivider />
            <MenuItem
              icon={ICONS.LOGIN}
              text={trans.logout}
              onClick={() => signOut(auth)}
            />
          </>
        ) : (
          <>
            <MenuItem
              icon={ICONS.LOGIN}
              text={trans.loginOrRegister}
              onClick={() => setAuthModalState({ isOpen: true, view: 'login' })}
            />
          </>
        )}
      </MenuList>
    </Menu>
  )
}

export default UserMenu
