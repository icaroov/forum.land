import { ComponentMeta, ComponentStory } from '@storybook/react'

import { UserType } from '@src/shared/user.type'

import UserAvatar from '.'

const userMock: Partial<UserType> = {
  displayName: 'John Doe',
  email: '',
  emailVerified: true,
  isAnonymous: false,
  metadata: {
    creationTime: '',
    lastSignInTime: ''
  },
  phoneNumber: '',
  photoURL: '',
  providerData: [],
  providerId: '',
  refreshToken: '',
  tenantId: '',
  uid: ''
}

export default {
  title: 'UserAvatar',
  component: UserAvatar
} as ComponentMeta<typeof UserAvatar>

export const Default: ComponentStory<typeof UserAvatar> = () => (
  <UserAvatar user={userMock} />
)
