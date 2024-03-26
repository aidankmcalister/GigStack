// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import GigListingsList from './GigListingsList'

const meta: Meta<typeof GigListingsList> = {
  component: GigListingsList,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof GigListingsList>

export const Primary: Story = {}
