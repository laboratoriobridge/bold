import { mount, render } from 'enzyme'
import React from 'react'

import { withTheme } from '../../../test'
import { Button } from '../Button'

import { ButtonGroup } from './ButtonGroup'

it('should render correctly', () => {
    expect(render(withTheme(
        <ButtonGroup />
    ))).toMatchSnapshot()
})

it('should should accept stlye prop', () => {
    expect(render(withTheme(
        <ButtonGroup style={{ color: 'red' }} />
    ))).toMatchSnapshot()
})

it('should mount children', () => {
    const wrapper = mount(withTheme(
        <ButtonGroup>
            <Button>First</Button>
        </ButtonGroup>
    ))
    expect(wrapper.find(Button).length).toEqual(1)
})
