import React from 'react'

const SvgMapMarkerOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M12 22c-5.333-5.054-8-9.054-8-12a8 8 0 1116 0c0 2.946-2.667 6.946-8 12zm0-2.667c4-4.013 6-7.124 6-9.333a6 6 0 10-12 0c0 2.21 2 5.32 6 9.333zM12 14a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z'
    />
  </svg>
)

export default SvgMapMarkerOutline
