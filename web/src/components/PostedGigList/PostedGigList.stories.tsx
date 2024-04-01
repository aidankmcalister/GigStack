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

import PostedGigList from './PostedGigList'

const meta: Meta<typeof PostedGigList> = {
  component: PostedGigList,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PostedGigList>

export const Primary: Story = {}
