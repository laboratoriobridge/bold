import React from 'react'

const SvgDogLeashed = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M3 8c.667 0 1 .334 1 1.003L5 9h8v6H8v5c0 1.333-.666 2-1.999 2-1.332 0-2-.667-2-2v-8.997c-1.334 0-2.001-.667-2.001-2C2 9 2.001 8 3 8zm11 .987l6 4.662V20c0 1.333-.667 2-2 2s-2-.667-2-2v-5h-2V8.987zM15 2c1 0 .459 2 1 2h1.993c.507 0 .675.05.852.2.177.15.226.348.37.514.11.127.372.222.785.286h1.004C22 5 22 5.76 22 7c0 1-2 1-2 2.321v3.13l-6-4.682V3c0-.666.333-.999 1-.999zm-9.7.076l3.257.033 4.404 3.415.018 2.497L5.3 2.076z'
    />
  </svg>
)

export default SvgDogLeashed
