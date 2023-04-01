import { Avatar, Flex, Text } from '@chakra-ui/react'

import { UserType } from '@shared/types/user.type'

export type UserAvatarProps = {
  user: Partial<UserType>
}

const UserAvatar = ({ user }: UserAvatarProps) => {
  if (!user?.displayName) return null

  return (
    <Flex
      sx={{
        alignItems: 'center',
        gap: 3
      }}
    >
      <Avatar
        name={user.displayName || user.email || ''}
        src={user.photoURL || ''}
        size="sm"
      />

      <Text
        sx={{
          fontSize: ['sm', null, 'md']
        }}
      >
        {user.displayName}
      </Text>
    </Flex>
  )
}

export default UserAvatar
