import { Flex } from '@chakra-ui/react'
import { BsArrowRightCircle, BsChatDots } from 'react-icons/bs'
import {
  IoAddOutline,
  IoFilterCircleOutline,
  IoNotificationsCircleOutline,
  IoVideocamOutline
} from 'react-icons/io5'

import NavbarSingleIcon from './NavbarSingleIcon'

const ICONS = {
  FILTER: IoFilterCircleOutline,
  NOTIFICATIONS: IoNotificationsCircleOutline,
  VIDEO: IoVideocamOutline,
  CHAT: BsChatDots,
  ARROW: BsArrowRightCircle,
  ADD: IoAddOutline
}

const NavbarIcons = () => (
  <Flex>
    <Flex
      display={{ base: 'none', md: 'flex' }}
      align="center"
      borderRight="1px solid"
      borderColor="gray.600"
    >
      <NavbarSingleIcon icon={ICONS.ARROW} size={20} />
      <NavbarSingleIcon icon={ICONS.FILTER} size={22} />
      <NavbarSingleIcon icon={ICONS.VIDEO} size={22} />
    </Flex>

    <>
      <NavbarSingleIcon icon={ICONS.CHAT} size={20} />
      <NavbarSingleIcon icon={ICONS.NOTIFICATIONS} size={20} />
      <NavbarSingleIcon icon={ICONS.ADD} size={22} hideOnMobile />
    </>
  </Flex>
)

export default NavbarIcons
