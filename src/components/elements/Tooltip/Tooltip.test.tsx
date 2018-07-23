import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { Tooltip, TooltipBase } from './Tooltip'

describe (Tooltip, () => {
    it('should render correctly', () => {
        expect(render(withTheme(
            <Tooltip text='Tooltip text' placement='bottom-start'>
                <span>Testing</span>
            </Tooltip>
        ))).toMatchSnapshot()
    })
})

describe(TooltipBase, () => {
    it('should render the small version when text length is <= 60', () => {
        expect(render(withTheme(
            <TooltipBase text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ' />
        ))).toMatchSnapshot()
    })
    it('should render the big version when text length is > 60', () => {
        expect(render(withTheme(
            <TooltipBase text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non urna sit amet eros finibus auctor ut vitae magna. Donec mollis eu velit nec ullamcorper.' />
        ))).toMatchSnapshot()
    })
})
