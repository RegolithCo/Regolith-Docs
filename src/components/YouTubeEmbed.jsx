import React from 'react'

/**
 * YouTubeEmbed - A reusable YouTube video embed component for MDX/Docusaurus.
 *
 * @param {string} id - The YouTube video ID (e.g., 'uiHEni0v5I0').
 * @param {string} [title] - The title for accessibility (optional).
 * @param {string} [aspectRatio] - Aspect ratio (e.g., '16/9', '4/3'). Default is '16/9'.
 * @param {string} [className] - Optional CSS class for styling.
 * @param {string} [params] - Optional extra query params for the embed URL (e.g., 'si=_1m9WAd3QyZIt6gz').
 */
export default function YouTubeEmbed({
  id,
  title = 'YouTube video player',
  aspectRatio = '16/9',
  className = '',
  params = '',
}) {
  const src = `https://www.youtube.com/embed/${id}${params ? `?${params}` : ''}`
  const [w, h] = aspectRatio.split('/').map(Number)
  const padding = h && w ? `${(h / w) * 100}%` : '56.25%'

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        paddingBottom: padding,
        height: 0,
        margin: '2rem 0',
      }}
    >
      <iframe
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  )
}
