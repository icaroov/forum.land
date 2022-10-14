import { ComponentMeta, ComponentStory } from '@storybook/react'

import OAuthButtons from '.'

export default {
  title: 'OAuthButtons',
  component: OAuthButtons
} as ComponentMeta<typeof OAuthButtons>

export const Default: ComponentStory<typeof OAuthButtons> = () => (
  <OAuthButtons />
)
