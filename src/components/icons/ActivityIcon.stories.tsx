import type { Meta, StoryObj } from '@storybook/react'
import { ActivityIcon } from './ActivityIcon'

const meta: Meta<typeof ActivityIcon> = {
  title: 'Assets/Icons/ActivityIcon',
  component: ActivityIcon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Activity icon (activity / heartbeat style). Accepts standard SVG props; use `className` for size and color (e.g. `h-6 w-6 text-slate-900`).',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    className: 'h-6 w-6 text-slate-900',
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Tailwind classes for size and color (e.g. h-4 w-4, text-slate-400).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'h-6 w-6 text-slate-900' },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof ActivityIcon>

export const Default: Story = {}

export const SizesAndColors: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <ActivityIcon {...args} className="h-4 w-4 text-slate-400" />
      <ActivityIcon {...args} className="h-6 w-6 text-slate-900" />
      <ActivityIcon {...args} className="h-8 w-8 text-slate-900" />
    </div>
  ),
}

