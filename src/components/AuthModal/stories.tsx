import { ComponentMeta, ComponentStory } from '@storybook/react'

import AuthModal from '.'

export default {
  title: 'AuthModal',
  component: AuthModal
} as ComponentMeta<typeof AuthModal>

export const Default: ComponentStory<typeof AuthModal> = () => <AuthModal />
