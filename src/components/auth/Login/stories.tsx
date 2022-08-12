import { ComponentMeta, ComponentStory } from '@storybook/react'

import Login from '.'

export default {
  title: 'Login',
  component: Login
} as ComponentMeta<typeof Login>

export const Default: ComponentStory<typeof Login> = () => <Login />
