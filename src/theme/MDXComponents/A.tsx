import React, { type ReactNode } from 'react'
import Link from '@docusaurus/Link'
import type { Props } from '@theme/MDXComponents/A'

export default function MDXA(props: Props): ReactNode {
  const isExternal = props.href?.startsWith('http')
  return (
    <Link
      {...props}
      target={isExternal ? '_blank' : props.target}
      rel={isExternal ? 'noopener noreferrer' : props.rel}
    />
  )
}
