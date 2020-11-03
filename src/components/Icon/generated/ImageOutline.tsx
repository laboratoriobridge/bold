import React from 'react'

const SvgImageOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M20 17.274V4H4v16h16v-5l-3.297-2.637c-.549-.36-1.087-.501-1.613-.424-.527.077-.96.369-1.3.876L11 17l-2.612-1.96c-.508-.298-.975-.43-1.4-.395-.425.035-.83.228-1.215.582L4 17v2.326l3.143-3.035 2.642 1.962c.495.336 1.016.457 1.564.363a1.84 1.84 0 001.28-.841l2.82-4.135L20 17.274zM2 4c0-1.333.667-2 2-2h16c1.333 0 2 .667 2 2v15.997C22 21.332 21.333 22 20 22H4c-1.333 0-2-.667-2-2V4zm7 7.919A3 3 0 119 5.92a3 3 0 010 5.999zm0-2a1 1 0 100-2 1 1 0 000 2z'
    />
  </svg>
)

export default SvgImageOutline
