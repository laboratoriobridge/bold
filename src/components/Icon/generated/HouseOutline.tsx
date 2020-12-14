import React from 'react'

const SvgHouseOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M11.993 2c.492 0 .938.167 1.338.502l8.322 6.743c.328.349.414.726.258 1.132-.156.407-.465.61-.927.612L20 11v9c0 1.333-.667 2-2 2h-2c-1.333-.01-2-.676-2-2v-6h-4v5.986c0 1.324-.667 1.99-2 2H6c-1.333.01-2-.653-2-1.986l-.004-9-1.028-.011c-.483 0-.786-.204-.911-.612-.125-.407-.043-.786.246-1.136l8.352-6.739c.4-.335.847-.502 1.338-.502zM6 9v11h2v-6c0-1.333.667-2 2-2h4c1.333 0 2 .667 2 2v6h1.998V9L12 4.419 6 9z'
    />
  </svg>
)

export default SvgHouseOutline
