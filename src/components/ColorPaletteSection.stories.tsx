import type { Meta, StoryObj } from '@storybook/react'
import { ColorPaletteSection } from './ColorPaletteSection'

const meta: Meta<typeof ColorPaletteSection> = {
  title: 'Foundation/Color',
  component: ColorPaletteSection,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Foundation color palette section showing the Slate scale (50–900) with swatches and hex values. Use for design reference and color documentation.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ColorPaletteSection>

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-slate-50">
      <div className="mx-auto max-w-4xl">
        <ColorPaletteSection />
      </div>
    </div>
  ),
}

