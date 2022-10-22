import { MenuItem as ChakraMenuItem, Flex, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'

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

export default MenuItem
