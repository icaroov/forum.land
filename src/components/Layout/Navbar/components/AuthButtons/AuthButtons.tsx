import { Button, Flex } from '@chakra-ui/react'

// export type SearchInputProps = {}

const AuthButtons = () => {
  return (
    <>
      {/* <AuthModal /> */}

      <Flex justify="center" align="center">
        <Button
          variant="outline"
          height="28px"
          mr={2}
          display={{ base: 'none', sm: 'flex' }}
          width={{ base: '70px', md: '110px' }}
        >
          Login
        </Button>

        <Button
          height="28px"
          mr={2}
          display={{ base: 'none', sm: 'flex' }}
          width={{ base: '70px', md: '110px' }}
        >
          Registrar
        </Button>
      </Flex>
    </>
  )
}

export default AuthButtons
