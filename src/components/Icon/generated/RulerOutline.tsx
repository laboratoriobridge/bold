import React from 'react'

const SvgRulerOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path clipRule='evenodd' d='M10 20H7V4h3v16zm-3 2a2 2 0 01-2-2V4a2 2 0 012-2h3a2 2 0 012 2v16a2 2 0 01-2 2H7z' />
    <path d='M8 14h2v-1H8v1zM9 12h1v-1H9v1zM9 20h1v-1H9v1zM8 10h2V9H8v1zM8 18h2v-1H8v1zM8 6h2V5H8v1zM9 8h1V7H9v1zM9 16h1v-1H9v1zM14 2h6v2h-2v16h2v2h-6v-2h2V4h-2V2z' />
  </svg>
)

export default SvgRulerOutline
