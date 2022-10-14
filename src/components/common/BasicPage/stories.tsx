import { ComponentMeta, ComponentStory } from '@storybook/react'

import BasicPage from '.'

export default {
  title: 'BasicPage',
  component: BasicPage
} as ComponentMeta<typeof BasicPage>

export const Default: ComponentStory<typeof BasicPage> = () => <BasicPage />
