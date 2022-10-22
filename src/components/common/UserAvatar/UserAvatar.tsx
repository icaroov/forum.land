import { Avatar, Text } from '@chakra-ui/react'

import { UserType } from '@src/shared/user.type'

export type UserAvatarProps = {
  user: Partial<UserType>
}

const UserAvatar = ({ user }: UserAvatarProps) => {
  if (!user?.displayName) return null

  return (
    <>
      <Avatar
        name={user.displayName || user.email || ''}
        src={user.photoURL || ''}
        height="100%"
      />
      <Text>{user.displayName}</Text>
    </>
  )
}

export default UserAvatar
