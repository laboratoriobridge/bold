import React from 'react'

const SvgRulerOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M5 20a2 2 0 002 2h3a2 2 0 002-2V4a2 2 0 00-2-2H7a2 2 0 00-2 2v16zm4-1v1H7V4h3v1H8v1h2v1H9v1h1v1H8v1h2v1H9v1h1v1H8v1h2v1H9v1h1v1H8v1h2v1H9z'
    />
    <path d='M20 2h-6v2h2v16h-2v2h6v-2h-2V4h2V2z' />
  </svg>
)

export default SvgRulerOutline
