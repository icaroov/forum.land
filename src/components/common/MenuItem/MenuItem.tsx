import {
  MenuItem as ChakraMenuItem,
  MenuItemProps as ChakraMenuItemProps,
  Flex,
  Icon
} from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'

type MenuItemProps = {
  text: string
  icon: IconType
  iconColor?: string
  onClick?: () => void
  size?: number
} & Omit<ChakraMenuItemProps, 'icon'>

const MenuItem = ({
  text,
  icon,
  iconColor,
  onClick,
  size = 20
}: MenuItemProps) => (
  <ChakraMenuItem
    fontSize="sm"
    fontWeight={700}
    onClick={onClick}
    _hover={{ bg: 'pink.500', color: 'white' }}
  >
    <Flex alignItems="center">
      <Icon as={icon} fontSize={size} marginRight={2} color={iconColor} />
      {text}
    </Flex>
  </ChakraMenuItem>
)

export default MenuItem
