import React from 'react'

const SvgHamburguerMenu = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='hamburguer-menu_svg__a'
        d='M1 10h14c.667 0 1 .332 1 1 0 .62-.287.952-.862.995L15 12H1c-.667 0-1-.333-1-1 0-.619.287-.95.862-.995L1 10h14zm14-5c.667 0 1 .333 1 1s-.333 1-1 1H1c-.667 0-1-.334-1-1.002C0 5.329.333 4.997 1 5zM1 0h14c.667 0 1 .333 1 1 0 .619-.287.95-.862.995L15 2H1c-.667 0-1-.333-1-1C0 .381.287.05.862.005L1 0h14z'
      />
    </defs>
    <use transform='translate(4 6)' xlinkHref='#hamburguer-menu_svg__a' />
  </svg>
)

export default SvgHamburguerMenu
