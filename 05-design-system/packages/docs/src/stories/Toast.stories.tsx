import type { Meta, StoryObj } from '@storybook/react'
import {
  Toast,
  ToastProps,
  ToastProvider,
  ToastViewport,
} from '@ldm-ignite-ui/react'
import { useRef } from 'react'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['foreground', 'background'],
      },
    },
  },
  decorators: [
    (Story) => {
      const ref = useRef()
      return (
        <ToastProvider swipeDirection="right">
          {Story({
            ...Primary.args,
            ref,
          })}
          <ToastViewport />
        </ToastProvider>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    open: true,
    type: 'foreground',
    title: 'Heading',
    description: 'Description',
  },
}
