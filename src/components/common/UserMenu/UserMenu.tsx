import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
  Text
} from '@chakra-ui/react'
import { signOut } from 'firebase/auth'
import { CgProfile } from 'react-icons/cg'
import { FaRedditSquare } from 'react-icons/fa'
import { IoSparkles } from 'react-icons/io5'
import { MdOutlineLogin } from 'react-icons/md'
import { VscAccount } from 'react-icons/vsc'
import { useSetRecoilState } from 'recoil'

import { ViewEnum } from '@src/shared/enums/View.enum'

import { auth } from '@lib/firebase/clientApp'

import { authModalAtom } from '@atoms/authModalAtom'

import type { UserType } from '@shared/types/user.type'

import MenuItem from '@components/common/MenuItem'

const ICONS = {
  REDDIT: FaRedditSquare,
  SPARKLES: IoSparkles,
  ACCOUNT: VscAccount,
  PROFILE: CgProfile,
  LOGIN: MdOutlineLogin,
  CHEVRON_DOWN: <ChevronDownIcon />
}

export type UserMenuProps = {
  user?: UserType
}

const UserMenu = ({ user }: UserMenuProps) => {
  const setAuthModalState = useSetRecoilState(authModalAtom)

  const username = user?.displayName || user?.email?.split('@')[0]

  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0x 6x"
        borderRadius={4}
        transition="all 0.2s ease-in-out"
        _hover={{
          outline: '1px solid',
          outlineColor: 'gray.400'
        }}
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
            <MenuItem icon={ICONS.PROFILE} text="Perfil" />
            <MenuDivider />
            <MenuItem
              icon={ICONS.LOGIN}
              text="Sair"
              onClick={() => signOut(auth)}
            />
          </>
        ) : (
          <>
            <MenuItem
              icon={ICONS.LOGIN}
              text="Entrar / Registrar"
              onClick={() =>
                setAuthModalState({ isOpen: true, view: ViewEnum.LOGIN })
              }
            />
          </>
        )}
      </MenuList>
    </Menu>
  )
}

export default UserMenu
