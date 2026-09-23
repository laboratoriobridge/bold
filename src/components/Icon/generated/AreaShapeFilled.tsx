import React from 'react'

const SvgAreaShapeFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6 2a4.002 4.002 0 013.874 3h4.252A4.002 4.002 0 0122 6a4.002 4.002 0 01-3 3.874v4.252A4.002 4.002 0 0118 22a4.002 4.002 0 01-3.874-3H9.874A4.002 4.002 0 012 18a4.002 4.002 0 013-3.874V9.874A4.002 4.002 0 016 2zm1 7.874v4.252A4.007 4.007 0 019.874 17h4.252A4.007 4.007 0 0117 14.126V9.874A4.007 4.007 0 0114.126 7H9.874A4.007 4.007 0 017 9.874z'
    />
  </svg>
)

export default SvgAreaShapeFilled
