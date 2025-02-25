import React from 'react'

const SvgFlowchart = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path d='M3 2a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V3a1 1 0 00-1-1H3zM10 9a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1h-4zM16 17a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z' />
    <path d='M5 11h2v2H5a1 1 0 00-1 1v3a1 1 0 001 1h9v2H5a3 3 0 01-3-3v-3a3 3 0 013-3zM19 13h-2v-2h2a1 1 0 001-1V7a1 1 0 00-1-1h-9V4h9a3 3 0 013 3v3a3 3 0 01-3 3z' />
  </svg>
)

export default SvgFlowchart
