import { Flex, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'

const NavbarSingleIcon = ({
  icon,
  size,
  hideOnMobile = false
}: {
  icon: IconType
  size: number
  hideOnMobile?: boolean
}) => (
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

export default NavbarSingleIcon
