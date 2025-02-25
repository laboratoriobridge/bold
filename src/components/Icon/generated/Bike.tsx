import React from 'react'

const SvgBike = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path d='M18 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10 16a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0zM22 16a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z'
    />
    <path d='M12.657 12.243a.86.86 0 01.026.027A.997.997 0 0113 13v4a1 1 0 11-2 0v-3.586l-2.585-2.585a1.01 1.01 0 01-.096-.111 1.5 1.5 0 01.386-2.28l3.813-2.201a1.5 1.5 0 011.828.255.997.997 0 01.187.235L15.846 9h2.434a1 1 0 110 2h-3a.996.996 0 01-.51-.14.995.995 0 01-.373-.37l-.812-1.406-2.59 1.496 1.662 1.663z' />
  </svg>
)

export default SvgBike
