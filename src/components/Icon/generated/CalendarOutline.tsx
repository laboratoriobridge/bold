/* tslint:disable */
import React from 'react'

const SvgCalendarOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='calendar-outline_svg__a'
        d='M12 0c.619 0 .95.27.995.812l.005.13V2h1c1.273 0 1.938.607 1.996 1.822L16 4v14c0 1.273-.607 1.938-1.822 1.996L14 20H2C.727 20 .062 19.393.004 18.178L0 18V4.004c0-1.275.607-1.942 1.822-2L2 2h1V1c-.002-.667.33-1 1-1 .621 0 .954.287.998.862L5.004 1v1H11V.941C11 .314 11.333 0 12 0zm2 8H2v10h12V8zm-8.998 6H6c.667 0 1 .333 1 1 0 .619-.287.95-.862.995L6 16H5c-.667.001-1-.332-1-1 0-.62.289-.952.864-.995L5.002 14H6zM11 14c.667 0 1 .333 1 1s-.333 1-1 1h-1c-.667.001-1-.332-1-1 0-.668.335-1.001 1.002-1zm-5-4c.667 0 1 .333 1 1 0 .619-.287.95-.862.995L6 12H5c-.667.001-1-.332-1-1 0-.62.289-.952.864-.995L5.002 10H6zm5 0c.667 0 1 .333 1 1 0 .619-.287.95-.862.995L11 12h-1c-.667.001-1-.332-1-1 0-.62.289-.952.864-.995l.138-.005H11zm3-6H2v2h12V4z'
      />
    </defs>
    <use transform='translate(4 2)' xlinkHref='#calendar-outline_svg__a' />
  </svg>
)

export default SvgCalendarOutline
