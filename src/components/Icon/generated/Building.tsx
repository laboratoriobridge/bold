import React from 'react'

const SvgBuilding = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4 4a2 2 0 012-2h12a2 2 0 012 2v17a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6h-4v6a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm15 6v3h-2v-3h2zm-4 0h-2v3h2v-3zm-6 0h2v3H9v-3zm-2 0H5v3h2v-3zm12-5v3h-2V5h2zm-4 0h-2v3h2V5zM9 5h2v3H9V5zM7 5H5v3h2V5z'
    />
  </svg>
)

export default SvgBuilding
