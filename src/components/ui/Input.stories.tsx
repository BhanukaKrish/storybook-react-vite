import type { Meta, StoryObj } from '@storybook/react'
import { Input, InputWithButton } from './Input'

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Text input with optional label, helper text, and trailing button. Supports default and small sizes, and label above or to the left. Use `InputWithButton` for subscribe-style fields.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="min-w-[400px] rounded-xl bg-slate-100 p-6">
        <Story />
      </div>
    ),
  ],
  args: {
    label: 'Email',
    placeholder: 'Email',
    helperText: 'Enter your email address',
    size: 'default',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label shown above or to the left of the input.',
      table: { type: { summary: 'string' } },
    },
    helperText: {
      control: 'text',
      description: 'Helper text below the input.',
      table: { type: { summary: 'string' } },
    },
    labelPosition: {
      control: { type: 'radio' },
      description: 'Position of the label: above input or to the left.',
      options: ['default', 'left'],
      table: {
        type: { summary: 'default | left' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'radio' },
      description: 'Visual and touch target size.',
      options: ['default', 'small'],
      table: {
        type: { summary: 'default | small' },
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input and shows reduced opacity.',
      table: { type: { summary: 'boolean' } },
    },
    placeholder: {
      control: 'text',
      table: { type: { summary: 'string' } },
    },
  },
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Email',
    helperText: 'Enter your email address',
  },
}

export const WithButton: Story = {
  render: (args) => (
    <InputWithButton
      {...args}
      label="Email"
      placeholder="Email"
      helperText="Enter your email address"
      onButtonClick={() => {}}
    />
  ),
}

export const Filled: Story = {
  args: {
    label: 'Email',
    placeholder: 'Email',
    helperText: 'Enter your email address',
    defaultValue: 'pietro.schirano@gmail.com',
  },
}

export const FilledWithButton: Story = {
  render: (args) => (
    <InputWithButton
      {...args}
      label="Email"
      placeholder="Email"
      helperText="Enter your email address"
      defaultValue="pietro.schirano@gmail.com"
      onButtonClick={() => {}}
    />
  ),
}

export const Disabled: Story = {
  args: {
    label: 'Email',
    placeholder: 'Email',
    helperText: 'Enter your email address',
    disabled: true,
  },
}

export const DisabledWithButton: Story = {
  render: (args) => (
    <InputWithButton
      {...args}
      label="Email"
      placeholder="Email"
      helperText="Enter your email address"
      disabled
      onButtonClick={() => {}}
    />
  ),
}

export const Small: Story = {
  args: {
    label: 'Email',
    placeholder: 'Email',
    helperText: 'Enter your email address',
    size: 'small',
  },
}

export const SmallWithButton: Story = {
  render: (args) => (
    <InputWithButton
      {...args}
      label="Email"
      placeholder="Email"
      helperText="Enter your email address"
      size="small"
      onButtonClick={() => {}}
    />
  ),
}

export const LabelLeft: Story = {
  args: {
    label: 'Width',
    placeholder: 'Add value',
    labelPosition: 'left',
    size: 'small',
  },
}

export const LabelLeftFilled: Story = {
  args: {
    label: 'Width',
    placeholder: 'Add value',
    labelPosition: 'left',
    size: 'small',
    defaultValue: '100%',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <Input
          label="Email"
          placeholder="Email"
          helperText="Enter your email address"
          size="default"
        />
        <InputWithButton
          label="Email"
          placeholder="Email"
          helperText="Enter your email address"
          defaultValue="pietro.schirano@gmail.com"
          onButtonClick={() => {}}
        />
        <Input
          label="Email"
          placeholder="Email"
          helperText="Enter your email address"
          size="default"
          disabled
        />
        <InputWithButton
          label="Email"
          placeholder="Email"
          helperText="Enter your email address"
          size="default"
          disabled
          onButtonClick={() => {}}
        />
      </div>
      <div className="flex flex-col gap-6">
        <InputWithButton
          label="Email"
          placeholder="Email"
          helperText="Enter your email address"
          size="small"
          onButtonClick={() => {}}
        />
        <InputWithButton
          label="Email"
          placeholder="Email"
          helperText="Enter your email address"
          size="small"
          defaultValue="pietro.schirano@gmail.com"
          onButtonClick={() => {}}
        />
        <InputWithButton
          label="Email"
          placeholder="Email"
          helperText="Enter your email address"
          size="small"
          disabled
          onButtonClick={() => {}}
        />
      </div>
      <div className="flex flex-col gap-6">
        <Input
          label="Width"
          placeholder="Add value"
          labelPosition="left"
          size="small"
        />
        <Input
          label="Width"
          placeholder="Add value"
          labelPosition="left"
          size="small"
          defaultValue="100%"
        />
        <Input
          label="Width"
          placeholder="Add value"
          labelPosition="left"
          size="small"
          disabled
        />
      </div>
    </div>
  ),
  parameters: {
    decorators: undefined,
  },
  decorators: [
    (Story) => (
      <div className="min-w-[420px] rounded-xl bg-slate-100 p-8">
        <Story />
      </div>
    ),
  ],
}
