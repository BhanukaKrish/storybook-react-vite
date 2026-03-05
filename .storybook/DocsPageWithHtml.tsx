import React, { useContext, useState, useEffect, useMemo } from 'react'
import {
  DocsContext,
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
  Source,
  Heading,
} from '@storybook/addon-docs/blocks'

declare global {
  interface Window {
    __storybookRenderedHtml?: Record<string, string>
  }
}

const getRenderedHtmlStore = (): Record<string, string> | undefined =>
  (globalThis as unknown as { __storybookRenderedHtml?: Record<string, string> }).__storybookRenderedHtml

const CUSTOM_EVENT_HTML_CAPTURED = 'storybook-html-captured'

function RenderedHtmlSection() {
  const context = useContext(DocsContext)
  const storyId = useMemo(() => {
    if (!context) return null
    const stories = context.componentStories?.() ?? []
    const primaryStory =
      stories.find((s: { tags?: string[] }) => s.tags?.includes('autodocs')) ??
      stories[0]
    return primaryStory?.id ?? null
  }, [context])

  const [html, setHtml] = useState<string | null>(null)

  useEffect(() => {
    if (!storyId) return
    const captured = getRenderedHtmlStore()?.[storyId]
    if (captured) queueMicrotask(() => setHtml(captured))
  }, [storyId])

  useEffect(() => {
    if (!storyId) return
    const handler = () => {
      const captured = getRenderedHtmlStore()?.[storyId]
      if (captured) setHtml(captured)
    }
    globalThis.addEventListener(CUSTOM_EVENT_HTML_CAPTURED, handler)
    return () =>
      globalThis.removeEventListener(CUSTOM_EVENT_HTML_CAPTURED, handler)
  }, [storyId])

  useEffect(() => {
    if (!storyId || html) return
    const id = setInterval(() => {
      const captured = getRenderedHtmlStore()?.[storyId]
      if (captured) {
        setHtml(captured)
        clearInterval(id)
      }
    }, 100)
    return () => clearInterval(id)
  }, [storyId, html])

  if (html == null) return null

  const formatted = html
    .replaceAll(/>\s+</g, '>\n<')
    .replaceAll(/\s{2,}/g, ' ')
    .trim()

  return (
    <>
      <Heading>Rendered HTML</Heading>
      <Source code={formatted} language="html" />
    </>
  )
}

export function DocsPageWithHtml() {
  return (
    <>
      <Title />
      <Subtitle />
      <Description of="meta" />
      <Primary />
      <Controls />
      <Stories />
      <RenderedHtmlSection />
    </>
  )
}

export { CUSTOM_EVENT_HTML_CAPTURED }
