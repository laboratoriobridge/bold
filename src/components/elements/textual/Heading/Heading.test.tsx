import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'

import { Heading } from './Heading'

it('should render correctly', () => {
    expect(render(withTheme(<Heading level={1}>Heading 1</Heading>))).toMatchSnapshot()
    expect(render(withTheme(<Heading level={2}>Heading 2</Heading>))).toMatchSnapshot()
    expect(render(withTheme(<Heading level={3}>Heading 3</Heading>))).toMatchSnapshot()
    expect(render(withTheme(<Heading level={4}>Heading 4</Heading>))).toMatchSnapshot()
    expect(render(withTheme(<Heading level={5}>Heading 5</Heading>))).toMatchSnapshot()
    expect(render(withTheme(<Heading level={6}>Heading 6</Heading>))).toMatchSnapshot()
})

it('should accept color prop', () => {
    expect(render(withTheme(<Heading level={1} color='primary'>Heading Primary color</Heading>))).toMatchSnapshot()
})

it('should accept style prop', () => {
    expect(render(withTheme(
        <Heading level={1} style={{ fontStyle: 'italic' }}>Heading Primary color</Heading>
    ))).toMatchSnapshot()
})
