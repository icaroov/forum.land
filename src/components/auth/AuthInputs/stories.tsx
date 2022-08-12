import { ComponentMeta, ComponentStory } from '@storybook/react'

import AuthInputs from '.'

export default {
  title: 'AuthInputs',
  component: AuthInputs
} as ComponentMeta<typeof AuthInputs>

export const Default: ComponentStory<typeof AuthInputs> = () => <AuthInputs />
