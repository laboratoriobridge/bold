import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { TooltipPopper } from './TooltipPopper'

it('should render the small version when text length is <= 60', () => {
    expect(render(withTheme(
        <TooltipPopper text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ' />
    ))).toMatchSnapshot()
})
it('should render the big version when text length is > 60', () => {
    expect(render(withTheme(
        <TooltipPopper
            text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                + 'In non urna sit amet eros finibus auctor ut vitae magna. '
                + 'Donec mollis eu velit nec ullamcorper.'
            }
        />
    ))).toMatchSnapshot()
})
it('should accept style prop', () => {
    expect(render(withTheme(
        <TooltipPopper text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In' style={{ color: 'red' }} />
    ))).toMatchSnapshot()
})
