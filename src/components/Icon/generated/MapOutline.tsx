import React from 'react'

const SvgMapOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='map-outline_svg__a'
        d='M6.704 0c.285-.001.643.049 1.074.149L8 .203l4.95 1.183L17.469.088a2.09 2.09 0 011.792.302c.423.307.683.75.731 1.237l.008.164v11.337c0 .734-.482 1.381-1.214 1.653l-.15.05-4.32 1.083a4.456 4.456 0 01-.898.086 4.655 4.655 0 01-.865-.085l-.237-.049L7 14.612l-4.469 1.307a2.145 2.145 0 01-.584.081c-.433 0-.86-.132-1.208-.385a1.735 1.735 0 01-.731-1.236L0 14.215V3.088c0-.736.482-1.383 1.215-1.653l.15-.05L5.451.204C5.954.07 6.37.001 6.704 0zM6 2L2 3.125v10.79l4-1.099V2zm12 0l-4 1.125v10.79l4-1.099V2zM8 2v10.816l4 1.1V3.124L8 2z'
      />
    </defs>
    <use transform='translate(2 4)' xlinkHref='#map-outline_svg__a' />
  </svg>
)

export default SvgMapOutline
