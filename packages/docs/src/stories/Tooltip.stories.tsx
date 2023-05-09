import type { Meta, StoryObj } from '@storybook/react'
import { Text, Tooltip, TooltipProps } from '@ldm-ignite-ui/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  args: {
    content: 'Some text',
    children: <Text as="span">Tooltip Trigger</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
