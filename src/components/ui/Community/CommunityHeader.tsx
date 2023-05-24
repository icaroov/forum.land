import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { FaReddit as RedditIcon } from 'react-icons/fa'

import { CommunityType } from '@src/shared/types/community.type'

type CommunityHeaderProps = {
  community: CommunityType
}

const CommunityHeader = ({ community }: CommunityHeaderProps) => {
  const isJoined = false

  const communityImage = (
    <>
      {community.imageURL ? (
        <Image
          src={community.imageURL}
          alt={community.name}
          width={128}
          height={128}
        />
      ) : (
        <Icon
          as={RedditIcon}
          sx={{
            fontSize: 64,
            position: 'relative',
            top: -3,
            color: 'pink.400',
            border: '4px solid white',
            borderRadius: '50%'
          }}
        />
      )}
    </>
  )

  return (
    <Flex
      sx={{
        width: '100%',
        height: '146px',
        flexDirection: 'column'
      }}
    >
      <Box
        sx={{
          height: '50%',
          background: 'pink.400'
        }}
      />

      <Flex
        sx={{
          justifyContent: 'center',
          background: 'white',
          flexGrow: 1
        }}
      >
        <Flex
          sx={{
            width: '95%',
            maxWidth: '860px',
            gap: 2
          }}
        >
          {communityImage}

          <Flex
            sx={{
              paddingY: 2,
              paddingX: 4,
              alignItems: 'center'
            }}
          >
            <Flex
              sx={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginRight: 6
              }}
            >
              <Text
                noOfLines={1}
                sx={{
                  fontSize: '2xl',
                  fontWeight: 700,
                  color: 'gray.800'
                }}
              >
                {community.id}
              </Text>
              <Text
                noOfLines={1}
                sx={{
                  fontSize: 'sm',
                  fontWeight: 600,
                  color: 'gray.500'
                }}
              >
                r/{community.id}
              </Text>
            </Flex>

            <Button variant={isJoined ? 'outline' : 'solid'}>
              {isJoined ? 'Sair' : 'Participar'}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default CommunityHeader
