import React from 'react'

const SvgKanbanOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20 4H4v16h16V4zM4 2a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2H4z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9 6.75A.75.75 0 008.25 6h-1.5a.75.75 0 00-.75.75v7.501c0 .415.336.75.75.75h1.5a.75.75 0 00.75-.75v-7.5zM12.75 6a.75.75 0 01.75.75v4.499a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75V6.75a.75.75 0 01.75-.75h1.5zm5.25.75a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V6.75z'
    />
  </svg>
)

export default SvgKanbanOutline
