import { Flex, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { BsArrowRightCircle, BsChatDots } from 'react-icons/bs'
import {
  IoAddOutline,
  IoFilterCircleOutline,
  IoNotificationsCircleOutline,
  IoVideocamOutline
} from 'react-icons/io5'

const ICONS = {
  FILTER: IoFilterCircleOutline,
  NOTIFICATIONS: IoNotificationsCircleOutline,
  VIDEO: IoVideocamOutline,
  CHAT: BsChatDots,
  ARROW: BsArrowRightCircle,
  ADD: IoAddOutline
}

const SingleIcon = ({
  icon,
  size,
  hideOnMobile = false
}: {
  icon: IconType
  size: number
  hideOnMobile?: boolean
}) => {
  return (
    <Flex
      display={{ base: hideOnMobile ? 'none' : 'flex', md: 'flex' }}
      marginX={1.5}
      padding={1}
      cursor="pointer"
      borderRadius={4}
      _hover={{ bg: 'pink.400' }}
      color="gray.200"
    >
      <Icon as={icon} fontSize={size} />
    </Flex>
  )
}

const NavbarIcons = () => {
  return (
    <Flex>
      <Flex
        display={{ base: 'none', md: 'flex' }}
        align="center"
        borderRight="1px solid"
        borderColor="gray.600"
      >
        <SingleIcon icon={ICONS.ARROW} size={20} />
        <SingleIcon icon={ICONS.FILTER} size={22} />
        <SingleIcon icon={ICONS.VIDEO} size={22} />
      </Flex>

      <>
        <SingleIcon icon={ICONS.CHAT} size={20} />
        <SingleIcon icon={ICONS.NOTIFICATIONS} size={20} />
        <SingleIcon icon={ICONS.ADD} size={22} hideOnMobile />
      </>
    </Flex>
  )
}

export default NavbarIcons
