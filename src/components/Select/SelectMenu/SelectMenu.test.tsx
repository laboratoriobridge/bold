import { render } from '@testing-library/react'
import React, { createRef } from 'react'

import { SelectMenu } from './SelectMenu'
import { SelectMenuItem } from './SelectMenuItem'

it('should render correctly', () => {
  const { container } = render(
    <SelectMenu>
      <SelectMenuItem>Item 1</SelectMenuItem>
      <SelectMenuItem>Item 2</SelectMenuItem>
    </SelectMenu>
  )
  expect(container).toMatchSnapshot()
})

it('should provide a ref to the underling ul HTML element', () => {
  const menu = createRef<HTMLUListElement>()
  render(<SelectMenu menuRef={menu} />)
  expect(menu.current.tagName).toEqual('UL')
})
