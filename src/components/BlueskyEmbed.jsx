import React, { useEffect, useRef } from 'react'

/**
 * BlueskyEmbed React component
 * Ensures the Bluesky embed script is loaded and re-runs on mount (SPA compatible)
 * Usage: <BlueskyEmbed uri="at://did:plc:..." cid="bafyrei..." colorMode="system" />
 */
export default function BlueskyEmbed({ uri, cid, colorMode = 'system', ...props }) {
  const containerRef = useRef(null)

  useEffect(() => {
    // Remove any previous script
    const prevScript = document.querySelector('script[data-bluesky-embed]')
    if (prevScript) prevScript.remove()

    // Only add the script if not already present
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://embed.bsky.app/static/embed.js'
    script.charset = 'utf-8'
    script.setAttribute('data-bluesky-embed', 'true')
    document.body.appendChild(script)

    // Cleanup: remove script on unmount
    return () => {
      script.remove()
    }
  }, [uri, cid, colorMode])

  return (
    <blockquote
      className="bluesky-embed"
      data-bluesky-uri={uri}
      data-bluesky-cid={cid}
      data-bluesky-embed-color-mode={colorMode}
      ref={containerRef}
      {...props}
    >
      {/* Fallback content for no-JS environments */}
      <p>
        View this post on{' '}
        <a href={`https://bsky.app/profile/${uri.split('/')[2]}/post/${uri.split('/').pop()}?ref_src=embed`}>Bluesky</a>
      </p>
    </blockquote>
  )
}
