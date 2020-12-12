import React from 'react'

const SvgRulerFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M4 20a2 2 0 002 2h3a2 2 0 002-2V4a2 2 0 00-2-2H6a2 2 0 00-2 2v16zm6-15H7v1h3V5zm0 2H8v1h2V7zm0 2H7v1h3V9zm0 2H8v1h2v-1zm0 2H7v1h3v-1zm0 2H8v1h2v-1zm0 2H7v1h3v-1zm0 2H8v1h2v-1z'
    />
    <path d='M19 2h-6v2h2v16h-2v2h6v-2h-2V4h2V2z' />
  </svg>
)

export default SvgRulerFilled
