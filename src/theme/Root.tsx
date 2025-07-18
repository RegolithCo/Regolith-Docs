import React from 'react'
import type { Props } from '@theme/Root'
import { useScrollFix } from '../lib/useScrollFix'

/**
 * Note: This component is used to wrap the entire application.
 */
export default function Root({ children }: Props) {
  // This effect scrolls to the element with the ID from the URL hash when the page loads.
  // This is a workaround for Docusaurus's default behavior of scrolling to the top on page load.
  useScrollFix()

  return <div>{children}</div>
}
