import React from 'react'

const SvgMinusCircleOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path d='M8 11h8v2H8v-2z' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.522-4.477 10-10 10S2 17.522 2 12zm2 0a8 8 0 1116 0 8 8 0 01-16 0z'
    />
  </svg>
)

export default SvgMinusCircleOutline
