import { ComponentMeta, ComponentStory } from '@storybook/react'

import ResetPassword from '.'

export default {
  title: 'ResetPassword',
  component: ResetPassword
} as ComponentMeta<typeof ResetPassword>

export const Default: ComponentStory<typeof ResetPassword> = () => <ResetPassword />
