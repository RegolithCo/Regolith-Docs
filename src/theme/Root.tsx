import React from 'react'
import type { Props } from '@theme/Root'
import { useScrollFix } from '../lib/useScrollFix'
import { StarsParallax } from '../components/StarsParallax'

// Note: This component is used to wrap the entire application.
export default function Root({ children }: Props) {
  // This effect scrolls to the element with the ID from the URL hash when the page loads.
  // This is a workaround for Docusaurus's default behavior of scrolling to the top on page load.
  useScrollFix()

  // The wrapper div is set to relative so the background can be absolutely positioned
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <StarsParallax />
      <div style={{ position: 'relative', zIndex: 1, flex: '1 0 auto', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  )
}
