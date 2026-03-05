import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { BrushIcon } from '../icons/BrushIcon'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The `Button` component provides a small set of opinionated variants and sizes for primary and secondary actions on dark surfaces. It supports leading and trailing icons and an icon-only mode.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    children: 'Primary button',
    variant: 'primary',
    size: 'md',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      description: 'Visual style of the button.',
      options: ['primary', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
      table: {
        type: { summary: 'primary | secondary | destructive | outline | ghost | link' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: { type: 'radio' },
      description: 'Overall size of the button.',
      options: ['sm', 'md', 'lg', 'icon'],
      table: {
        type: { summary: 'sm | md | lg | icon' },
        defaultValue: { summary: 'md' },
      },
    },
    leftIcon: {
      control: false,
      description: 'Optional icon rendered before the label.',
    },
    rightIcon: {
      control: false,
      description: 'Optional icon rendered after the label.',
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary button',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive button',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline button',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost button',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link button',
  },
}

export const WithLeadingIcon: Story = {
  args: {
    variant: 'primary',
    children: 'With leading icon',
    leftIcon: (
      <BrushIcon className="h-4 w-4 text-slate-50" />
    ),
  },
}

export const WithTrailingIcon: Story = {
  args: {
    variant: 'primary',
    children: 'With trailing icon',
    rightIcon: (
      <BrushIcon className="h-4 w-4 text-slate-50" />
    ),
  },
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
  args: {
    variant: 'primary',
  },
}

export const IconOnly: Story = {
  args: {
    variant: 'primary',
    size: 'icon',
    'aria-label': 'Primary action',
    children: (
      <BrushIcon className="h-4 w-4 text-slate-50" />
    ),
  },
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled button',
  },
}

