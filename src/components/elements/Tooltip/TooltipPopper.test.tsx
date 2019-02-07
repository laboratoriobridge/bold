import * as React from 'react'
import { render } from 'react-testing-library'

import { withTheme } from '../../../test'

import { TooltipPopper } from './TooltipPopper'

it('should render the small version when text length is <= 60', () => {
    const { container } = render(withTheme(
        <TooltipPopper text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ' />
    ))
    expect(container).toMatchSnapshot()
})
it('should render the big version when text length is > 60', () => {
    const { container } = render(withTheme(
        <TooltipPopper
            text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                + 'In non urna sit amet eros finibus auctor ut vitae magna. '
                + 'Donec mollis eu velit nec ullamcorper.'
            }
        />
    ))
    expect(container).toMatchSnapshot()
})
it('should accept style prop', () => {
    const { container } = render(withTheme(
        <TooltipPopper text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In' style={{ color: 'red' }} />
    ))
    expect(container).toMatchSnapshot()
})
it('should accept empty text', () => {
    render(withTheme(<TooltipPopper text={null} />))
})
