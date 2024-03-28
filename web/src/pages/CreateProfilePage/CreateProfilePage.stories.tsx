import type { Meta, StoryObj } from '@storybook/react'

import CreateProfilePage from './CreateProfilePage'

const meta: Meta<typeof CreateProfilePage> = {
  component: CreateProfilePage,
}

export default meta

type Story = StoryObj<typeof CreateProfilePage>

export const Primary: Story = {}
