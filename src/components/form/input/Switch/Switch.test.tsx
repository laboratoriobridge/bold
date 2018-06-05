import { mount, render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test/'

import { Switch } from './Switch'

it('should render correctly', () => {
    expect(render(withTheme(
        <Switch />
    ))).toMatchSnapshot()

    expect(render(withTheme(
        <Switch label='Active' value={true} />
    ))).toMatchSnapshot()

    expect(render(withTheme(
        <Switch label='Disabled' value={true} disabled />
    ))).toMatchSnapshot()
})
