import React from 'react'

const SvgPath = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path d='M2 3a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H3a1 1 0 01-1-1V3zM17 16a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1h-4z' />
    <path d='M19 11a1 1 0 001-1V7a1 1 0 00-1-1h-9V4h9a3 3 0 013 3v3a3 3 0 01-3 3H5a1 1 0 00-1 1v3a1 1 0 001 1h9v2H5a3 3 0 01-3-3v-3a3 3 0 013-3h14z' />
  </svg>
)

export default SvgPath
