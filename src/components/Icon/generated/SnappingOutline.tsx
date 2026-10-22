import React from 'react'

const SvgSnappingOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path d='M20 12c0-2.63-2.174-4.852-5-4.993v2.007c1.532.14 2.766 1.403 2.766 2.986 0 1.583-1.234 2.844-2.766 2.985v2.007c2.826-.14 5-2.362 5-4.992zm-8 5h1v-2h-1v2zm0-8h1V7h-1v2zm10 3c0 3.91-3.306 7-7.285 7H11a1 1 0 01-1-1v-4a1 1 0 011-1h3.715c.604 0 1.05-.472 1.05-1s-.446-1-1.05-1H11a1 1 0 01-1-1V6a1 1 0 011-1h3.715C18.694 5 22 8.09 22 12z' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4 3v6.17a3.001 3.001 0 000 5.66V21a1 1 0 002 0v-6.17a3.001 3.001 0 000-5.66V3a1 1 0 00-2 0zm1 8a1 1 0 100 2 1 1 0 000-2z'
    />
  </svg>
)

export default SvgSnappingOutline
