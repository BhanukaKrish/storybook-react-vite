import type { Preview } from '@storybook/react-vite'
import React, { useEffect, useRef } from 'react'
import '../src/index.css'
import { DocsPageWithHtml, CUSTOM_EVENT_HTML_CAPTURED } from './DocsPageWithHtml'

declare global {
  interface Window {
    __storybookRenderedHtml?: Record<string, string>
  }
}

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const wrapperRef = useRef<HTMLDivElement>(null)
      const storyId = context.id

      useEffect(() => {
        if (!storyId) return
        const capture = () => {
          if (!wrapperRef.current) return
          const html = wrapperRef.current.innerHTML
          if (html) {
            window.__storybookRenderedHtml =
              window.__storybookRenderedHtml ?? {}
            window.__storybookRenderedHtml[storyId] = html
            window.dispatchEvent(
              new CustomEvent(CUSTOM_EVENT_HTML_CAPTURED, {
                detail: { storyId },
              })
            )
          }
        }
        const t = setTimeout(capture, 100)
        return () => clearTimeout(t)
      })

      return React.createElement(
        'div',
        { ref: wrapperRef, 'data-story-id': storyId },
        React.createElement(Story, null)
      )
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#020617' },
        { name: 'light', value: '#f9fafb' },
      ],
    },
    a11y: {
      test: 'todo',
    },
    docs: {
      page: DocsPageWithHtml,
    },
  },
}

export default preview