import { Button, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const NotFoundPage = () => {
  const router = useRouter()

  return (
    <Flex
      sx={{
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 3
      }}
    >
      <Text as="h1" fontSize="lg">
        Página não encontrada.
      </Text>
      <Button onClick={() => router.push('/')}>
        Voltar para a página inicial
      </Button>
    </Flex>
  )
}

export default NotFoundPage
