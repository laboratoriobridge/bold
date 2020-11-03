import React from 'react'

const SvgBoxFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M13 8h9v11.983c0 1.307-.667 1.973-2 1.998-1.333.025-6.667.025-16 0-1.333 0-2-.666-2-1.998V8h9v1c0 .668.334 1 1 1 .666 0 1-.332 1-1V8zm-2-2H2.385l1.49-3.001C4.14 2.333 4.514 2 5 2h14c.486 0 .855.333 1.107.999L21.617 6H13V2h-2v4zM6 16c-.667 0-1 .333-1 1 0 .665.333.998 1 .998h6c.667 0 1-.333 1-.999 0-.666-.333-.999-1-.999H6zm0-4c-.667 0-1 .333-1 1 0 .665.333.998 1 .998h3c.667 0 1-.333 1-.999 0-.666-.333-.999-1-.999H6z'
    />
  </svg>
)

export default SvgBoxFilled
