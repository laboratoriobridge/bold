import React from 'react'

const SvgGlucometer = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M16.5 2c.441.018.797.167 1.066.447.27.28.414.63.434 1.053v13c0 .404-.145.754-.434 1.049-.29.295-.655.445-1.096.451H13v4h-2v-4H7.5c-.416 0-.77-.15-1.064-.451A1.44 1.44 0 016 16.5v-13c.016-.419.162-.77.436-1.053.275-.283.63-.432 1.064-.447h9zM11 14H9v2h2v-2zm4 0h-2v2h2v-2zm1-10H8v8h8V4zm-4 1.5c1.333 1.264 2 2.264 2 3a2 2 0 11-4 0c0-.736.667-1.736 2-3z'
    />
  </svg>
)

export default SvgGlucometer
