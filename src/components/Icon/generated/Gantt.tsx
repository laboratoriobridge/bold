import React from 'react'

const SvgGantt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path d='M2 3a1 1 0 012 0v17h17a1 1 0 010 2H3a1 1 0 01-1-1V3z' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.75 7.5a1 1 0 011-1h8a1 1 0 010 2h-8a1 1 0 01-1-1zM10 16.5a1 1 0 011-1h6a1 1 0 010 2h-6a1 1 0 01-1-1zM8 12a1 1 0 011-1h10a1 1 0 010 2H9a1 1 0 01-1-1z'
    />
  </svg>
)

export default SvgGantt
