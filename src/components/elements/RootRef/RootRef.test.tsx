import React from 'react'
import { render } from 'react-testing-library'

import { RootRef } from './RootRef'

export const FancyButton = (props) => <button {...props} />

it('should return referente to the root DOM component', () => {
    const ref = React.createRef<HTMLButtonElement>()
    render(<RootRef rootRef={ref}><FancyButton /></RootRef>)
    expect(ref.current.tagName).toEqual('BUTTON')
})
