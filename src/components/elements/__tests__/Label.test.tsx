import { render } from 'enzyme'
import * as React from 'react'
import { withTheme } from '../../../test'
import { Label } from '../Label'

describe('Label', () => {
    it('render', () => {
        const wrapper = render(withTheme(<Label value='Label' />))
        expect(wrapper).toMatchSnapshot()
    })
})
