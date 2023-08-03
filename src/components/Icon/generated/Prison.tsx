import React from 'react'

const SvgPrison = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M4 2a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2H4zm12 2h-3v16h3V4zm2 10v6h2v-6h-2zm2-5V4h-2v5h2zM8 4h3v16H8V4zM4 4h2v16H4V4z'
    />
  </svg>
)

export default SvgPrison
