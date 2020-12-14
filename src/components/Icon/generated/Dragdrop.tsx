import React from 'react'

const SvgDragdrop = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M8.234 7.848a2 2 0 101.532-3.696 2 2 0 00-1.532 3.696zm1.532 2.304a2.001 2.001 0 10-1.533 3.698 2.001 2.001 0 001.533-3.697zm0 6a2.001 2.001 0 10-1.533 3.698 2.001 2.001 0 001.533-3.698zm4.469-8.304a2 2 0 101.531-3.696 2 2 0 00-1.531 3.696zm1.53 2.304a2.001 2.001 0 10-1.532 3.698 2.001 2.001 0 001.532-3.697zm0 6a2.001 2.001 0 10-1.532 3.698 2.001 2.001 0 001.532-3.698z'
    />
  </svg>
)

export default SvgDragdrop
