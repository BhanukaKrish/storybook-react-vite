import type { Meta, StoryObj } from '@storybook/react'
import { TypographySection } from './TypographySection'

const meta: Meta<typeof TypographySection> = {
  title: 'Foundation/Typography',
  component: TypographySection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Foundation typography scale: display, headline, title, body, and label styles with font, size, and tracking notes. Use for design reference and type documentation.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof TypographySection>

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-slate-50">
      <div className="mx-auto max-w-4xl">
        <TypographySection />
      </div>
    </div>
  ),
}

