import { render } from '@testing-library/react'
import React from 'react'

import { RootRef } from './RootRef'

export const FancyButton = props => <button {...props} />

it('should return referente to the root DOM component', () => {
  const ref = React.createRef<HTMLButtonElement>()
  render(
    <RootRef rootRef={ref}>
      <FancyButton />
    </RootRef>
  )
  expect(ref.current.tagName).toEqual('BUTTON')
})
