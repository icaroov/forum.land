import { Button, Flex, Image, Text } from '@chakra-ui/react'

const OAuthButtons = () => {
  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button variant="oauth">
        <Image src="/assets/img/googlelogo.png" height="20px" mr={4} />
        <Text>Continue com uma conta Google</Text>
      </Button>
    </Flex>
  )
}

export default OAuthButtons
