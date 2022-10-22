import { ComponentMeta, ComponentStory } from '@storybook/react'

import UserMenu from '.'

export default {
  title: 'UserMenu',
  component: UserMenu
} as ComponentMeta<typeof UserMenu>

export const Default: ComponentStory<typeof UserMenu> = () => <UserMenu />
