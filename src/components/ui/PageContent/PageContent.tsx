import { Flex } from '@chakra-ui/react'

type PageContentProps = {
  leftSideContent: React.ReactNode
  rightSideContent: React.ReactNode
}

const PageContent = ({
  leftSideContent,
  rightSideContent
}: PageContentProps) => {
  const leftSide = (
    <Flex
      sx={{
        flexDirection: 'column',
        width: ['100%', null, '65%'],
        marginRight: [0, null, 6]
      }}
    >
      {leftSideContent}
    </Flex>
  )

  const rightSide = (
    <Flex
      sx={{
        display: ['none', null, 'flex'],
        flexGrow: 1,
        flexDirection: 'column'
      }}
    >
      {rightSideContent}
    </Flex>
  )

  return (
    <Flex
      sx={{
        width: '100%',
        justifyContent: 'center',
        paddingY: 4
      }}
    >
      <Flex
        sx={{
          width: '95%',
          maxWidth: '860px',
          justifyContent: 'center'
        }}
      >
        {leftSide}
        {rightSide}
      </Flex>
    </Flex>
  )
}

export default PageContent
