import * as React from 'react'
import { fireEvent, render } from 'react-testing-library'

import { withTheme } from '../../../test'
import * as stringUtils from '../../../util/string'

import { Tooltip, TooltipProps } from './Tooltip'

(stringUtils as any).randomStr = jest.fn(() => 'abc')

beforeEach(() => render(<div id='portal-root' />))

const createComponent = (props: Partial<TooltipProps> = {}) => {
    return withTheme(
        <Tooltip
            text='Tooltip text'
            offset={2}
            placement='bottom-start'
            target={document.getElementById('portal-root')}
            {...props}
        >
            <span>Testing</span>
        </Tooltip>
    )
}

it('should render correctly', () => {
    const { getByText } = render(createComponent())
    expect(document.body).toMatchSnapshot()

    fireEvent.focus(getByText('Testing'))
    expect(document.body).toMatchSnapshot()
})

it('should not render tooltip if text if null or empty', () => {
    const { getByText } = render(createComponent({ text: '' }))
    expect(document.getElementById('portal-root').innerHTML).toEqual('')

    fireEvent.focus(getByText('Testing'))
    expect(document.getElementById('portal-root').innerHTML).toEqual('')
})

it('should show tooltip when mouse enters component', () => {
    const { getByText } = render(createComponent())
    expect(document.body.querySelector('[role="tooltip"]')).toBeFalsy()
    fireEvent.mouseEnter(getByText('Testing'))
    expect(document.body.querySelector('[role="tooltip"]')).toBeTruthy()
})

it('should show tooltip when focus component', () => {
    const { getByText } = render(createComponent())
    expect(document.body.querySelector('[role="tooltip"]')).toBeFalsy()
    fireEvent.focus(getByText('Testing'))
    expect(document.body.querySelector('[role="tooltip"]')).toBeTruthy()
})

it('should hide tooltip when mouse leaves component', () => {
    const { getByText } = render(createComponent())
    fireEvent.mouseEnter(getByText('Testing'))
    fireEvent.mouseLeave(getByText('Testing'))
    expect(document.body.querySelector('[role="tooltip"]')).toBeFalsy()
})

it('should hide tooltip when blur component', () => {
    const { getByText } = render(createComponent())
    fireEvent.focus(getByText('Testing'))
    fireEvent.blur(getByText('Testing'))
    expect(document.body.querySelector('[role="tooltip"]')).toBeFalsy()
})

it('should compose onMouseEnter, onMouseLeave, onFocus and onBlur functions', () => {
    const focus = jest.fn()
    const blur = jest.fn()
    const mouseEnter = jest.fn()
    const mouseLeave = jest.fn()
    const { getByText } = render(withTheme(
        <Tooltip text='Tooltip text' offset={2} placement='bottom-start'>
            <button onFocus={focus} onBlur={blur} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>Testing</button>
        </Tooltip>
    ))

    const target = getByText('Testing')
    expect(document.body.querySelector('[role="tooltip"]')).toBeFalsy()

    fireEvent.focus(target)
    expect(focus).toHaveBeenCalledTimes(1)
    expect(document.body.querySelector('[role="tooltip"]')).toBeTruthy()

    fireEvent.blur(target)
    expect(blur).toHaveBeenCalledTimes(1)
    expect(document.body.querySelector('[role="tooltip"]')).toBeFalsy()

    fireEvent.mouseEnter(target)
    expect(mouseEnter).toHaveBeenCalledTimes(1)
    expect(document.body.querySelector('[role="tooltip"]')).toBeTruthy()

    fireEvent.mouseLeave(target)
    expect(mouseLeave).toHaveBeenCalledTimes(1)
    expect(document.body.querySelector('[role="tooltip"]')).toBeFalsy()
})
