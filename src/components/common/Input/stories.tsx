import { ComponentMeta, ComponentStory } from '@storybook/react'

import Input from '.'

export default {
  title: 'Input',
  component: Input
} as ComponentMeta<typeof Input>

export const Default: ComponentStory<typeof Input> = () => <Input />
