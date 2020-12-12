import React from 'react'

const SvgUserCard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M2.5 2.5c.34-.336.849-.503 1.528-.5H20c.665-.005 1.165.161 1.5.5.335.34.502.847.5 1.523V20c0 .667-.166 1.167-.5 1.5-.333.334-.833.5-1.5.5H4.01c-.672 0-1.176-.167-1.51-.5-.334-.332-.5-.832-.5-1.5V4.01c-.006-.67.16-1.173.5-1.51zM12 11a3 3 0 100-6 3 3 0 000 6zm-3 2c-1.566 0-2.864 1.3-3 3-.008.098 0 1.993 2 2 2 .007 6 0 8 0s2.009-1.898 2-2c-.14-1.695-1.437-3-3-3H9z'
    />
  </svg>
)

export default SvgUserCard
