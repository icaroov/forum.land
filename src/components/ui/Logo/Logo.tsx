import { Text } from '@chakra-ui/react'

const Logo = () => {
  return (
    <Text
      fontSize="xl"
      fontWeight={700}
      sx={{
        '& strong': {
          color: 'pink.500'
        }
      }}
    >
      FÓRUM.<strong>LAND</strong>
    </Text>
  )
}

export default Logo
