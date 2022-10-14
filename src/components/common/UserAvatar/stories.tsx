import { ComponentMeta, ComponentStory } from '@storybook/react'

import UserAvatar from '.'

export default {
  title: 'UserAvatar',
  component: UserAvatar
} as ComponentMeta<typeof UserAvatar>

export const Default: ComponentStory<typeof UserAvatar> = () => <UserAvatar />
