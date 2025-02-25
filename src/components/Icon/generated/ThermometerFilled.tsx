import React from 'react'

const SvgThermometerFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path d='M9 4.5a.5.5 0 01.5.5v12.134a1 1 0 11-1 0V5a.5.5 0 01.5-.5z' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 15.354V5a3 3 0 10-6 0v10.354a4 4 0 106 0zm-2 .914V5a1 1 0 00-2 0v11.268A2 2 0 009 20a2 2 0 001-3.732zM16 10a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 100-2 1 1 0 000 2z'
    />
  </svg>
)

export default SvgThermometerFilled
