import React from 'react'

const SvgFence = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2 4a2 2 0 114 0v2h4V4a2 2 0 114 0v2h4V4a2 2 0 114 0v17a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1h-4v1a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1H6v1a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm4 13h4V9H6v8zm8 0h4V9h-4v8z'
    />
  </svg>
)

export default SvgFence
