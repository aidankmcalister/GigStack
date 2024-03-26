import type { Meta, StoryObj } from '@storybook/react'

import PostedGigsPage from './PostedGigsPage'

const meta: Meta<typeof PostedGigsPage> = {
  component: PostedGigsPage,
}

export default meta

type Story = StoryObj<typeof PostedGigsPage>

export const Primary: Story = {}
