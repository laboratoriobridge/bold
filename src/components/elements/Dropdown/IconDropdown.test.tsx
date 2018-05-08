import { mount, render, shallow } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { IconDropdown } from './IconDropdown'

const options = [
    {
        title: 'Option 1',
        onClick: () => alert('Option 1 selected'),
    },
    {
        title: 'Option 2',
        onClick: () => alert('Option 2 selected'),
    },
]

describe('IconDropdown', () => {
    it('deve renderizar corretamente', () => {
        const wrapper = render(withTheme(<IconDropdown options={options} icon={'triangleDown'} />))
        expect(wrapper).toMatchSnapshot()
    })
})
