import React from 'react'

const SvgFloorPlan = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path fillRule='evenodd' clipRule='evenodd' d='M10.24 9a1 1 0 011 1v4a1 1 0 01-2 0v-4a1 1 0 011-1z' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.125 12a1 1 0 011-1h6.116a1 1 0 110 2H4.125a1 1 0 01-1-1zM14.125 12a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16.27 21.978c.012 0 .022-.01.022-.022v-3.649c-.042 0-.363.024-.405.026v-.004a1.5 1.5 0 00-1.154.542c-.293.312-.47.905-.47 1.379v1.728c0 .012.01.022.021.022H4.124a2 2 0 01-2-2V4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2l-3.854-.022zM4.125 4h16v16h-1.816v-2.711a1 1 0 00-1-1h-1.794c-.394 0-.838.03-1.202.18s-.774.441-1.053.72c-.279.278-.553.66-.704 1.025-.151.364-.274 1.392-.274 1.786H4.125V4z'
    />
    <path fillRule='evenodd' clipRule='evenodd' d='M10.298 2a1 1 0 011 1v3a1 1 0 11-2 0V3a1 1 0 011-1z' />
  </svg>
)

export default SvgFloorPlan
