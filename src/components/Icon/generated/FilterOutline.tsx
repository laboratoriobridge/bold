import React from 'react'

const SvgFilterOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='filter-outline_svg__a'
        d='M7.5 8v5.243l-2 .75V8L2.002 2h8.936L7.5 8zM2.002 0C.45 0-.51 1.696.288 3.029L3.505 9v5.027c.034.696.3 1.227.799 1.592.498.366 1.11.467 1.837.305l1.965-.66c.418-.156.74-.39.966-.701.226-.31.358-.71.398-1.196V9l3.182-5.971c.8-1.333-.16-3.029-1.714-3.029H2.002z'
      />
    </defs>
    <use transform='translate(6 4)' xlinkHref='#filter-outline_svg__a' />
  </svg>
)

export default SvgFilterOutline
