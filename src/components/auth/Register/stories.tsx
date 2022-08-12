import { ComponentMeta, ComponentStory } from '@storybook/react'

import Register from '.'

export default {
  title: 'Register',
  component: Register
} as ComponentMeta<typeof Register>

export const Default: ComponentStory<typeof Register> = () => <Register />
