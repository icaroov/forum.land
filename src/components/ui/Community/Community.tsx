import { Flex } from '@chakra-ui/react'

import { CommunityType } from '@src/shared/types/community.type'

import PageContent from '../PageContent/PageContent'
import CommunityHeader from './CommunityHeader'

type CommunityProps = {
  community: CommunityType
}

const Community = ({ community }: CommunityProps) => {
  return (
    <Flex
      sx={{
        width: '100%',
        flexDirection: 'column'
      }}
    >
      <CommunityHeader community={community} />

      <PageContent
        leftSideContent={<>esquerda</>}
        rightSideContent={<>direita</>}
      />
    </Flex>
  )
}

export default Community
