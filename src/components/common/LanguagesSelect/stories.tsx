import { ComponentMeta, ComponentStory } from '@storybook/react'

import LanguagesSelect from '.'

export default {
  title: 'LanguagesSelect',
  component: LanguagesSelect
} as ComponentMeta<typeof LanguagesSelect>

export const Default: ComponentStory<typeof LanguagesSelect> = () => (
  <LanguagesSelect />
)
