import React from 'react'

const SvgFileEmptyOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='file-empty-outline_svg__a'
        d='M10 .186c.252.125.531.342.84.651l.156.162 4.007 4.006c.427.38.7.712.819.997.095.228.152.487.17.777l.008.223v11c0 1.273-.607 1.938-1.822 1.996l-.178.004H2.002c-1.274.001-1.94-.606-1.998-1.822L0 18.002v-16C0 .73.607.064 1.822.006L2 .002h6.996c.058 0 .564-.035 1.004.184zM8 2.002H2v16h12.001l-.001-10h-4a2 2 0 01-1.995-1.85L8 6.001v-4zm2 1v3h3l-3-3z'
      />
    </defs>
    <use transform='translate(4 2)' xlinkHref='#file-empty-outline_svg__a' />
  </svg>
)

export default SvgFileEmptyOutline
