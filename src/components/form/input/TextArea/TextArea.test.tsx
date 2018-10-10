import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test/'

import { TextArea } from './TextArea'

it('should render correctly', () => {
    expect(render(withTheme(
        <TextArea name='input' placeholder='Test' defaultValue='Value' />
    ))).toMatchSnapshot()
})

it('should render disabled', () => {
    expect(render(withTheme(
        <TextArea name='input' disabled />
    ))).toMatchSnapshot()
})

it('should render with error status', () => {
    expect(render(withTheme(
        <TextArea name='input' status='error' />
    ))).toMatchSnapshot()
})

it('should accept style prop', () => {
    expect(render(withTheme(
        <TextArea name='input' style={{ color: 'green' }} />
    ))).toMatchSnapshot()
})

it('should render character counter', () => {
    expect(render(withTheme(
        <TextArea name='input' defaultValue='Testing counter' maxLength={200} />
    ))).toMatchSnapshot()

    expect(render(withTheme(
        <TextArea name='input' maxLength={200} />
    ))).toMatchSnapshot()
})
