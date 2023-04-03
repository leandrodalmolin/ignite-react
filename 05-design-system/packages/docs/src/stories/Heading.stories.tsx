import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Heading One',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Heading will always be `h2` by default, but we can change that with the `as` property',
      },
    },
  },
}