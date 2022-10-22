import { MenuItem as ChakraMenuItem, Flex, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'

type MenuItemProps = {
  text: string
  icon: IconType
  onClick?: () => void
  size?: number
}

const MenuItem = ({ text, icon, onClick, size = 20 }: MenuItemProps) => (
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

export default MenuItem
