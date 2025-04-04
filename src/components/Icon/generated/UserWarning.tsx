import React from 'react'

const SvgUserWarning = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.536 10.536a5 5 0 10-7.071-7.071 5 5 0 007.07 7.07zM14.12 4.879A3 3 0 119.88 9.12 3 3 0 0114.12 4.88z'
    />
    <path d='M8.004 14C4.001 14 2 16 2 20c0 1.333.667 2 2 2h6.175a3.012 3.012 0 01-.006-2H4c0-2.667 1.333-4 4-4h4.15l1.004-2h-5.15z' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.11 20.538l4.012-7.99a.979.979 0 011.756 0l4.013 7.99c.335.668-.142 1.462-.879 1.462h-8.024c-.737 0-1.214-.794-.878-1.462zm3.837-.5a.996.996 0 01.986-1.004c.545 0 .987.45.987 1.004a.996.996 0 01-.987 1.005.996.996 0 01-.986-1.005zm1.726-5.024a.747.747 0 00-.74-.753.747.747 0 00-.74.753v2.512c0 .417.332.754.74.754.409 0 .74-.337.74-.754v-2.512z'
    />
  </svg>
)

export default SvgUserWarning
