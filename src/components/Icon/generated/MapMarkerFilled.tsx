import React from 'react'

const SvgMapMarkerFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M12 22c-5.333-5.054-8-9.054-8-12a8 8 0 1116 0c0 2.946-2.667 6.946-8 12zm0-9a3 3 0 100-6 3 3 0 000 6z'
    />
  </svg>
)

export default SvgMapMarkerFilled
