import type { Meta, StoryObj } from '@storybook/react'

import AttendingGigsPage from './AttendingGigsPage'

const meta: Meta<typeof AttendingGigsPage> = {
  component: AttendingGigsPage,
}

export default meta

type Story = StoryObj<typeof AttendingGigsPage>

export const Primary: Story = {}
