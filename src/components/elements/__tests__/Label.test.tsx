import * as React from 'react'
import { Label } from '../Label'
import { render } from 'enzyme'
import { withTheme } from '../../../test'

describe('Label', () => {
    it('render', () => {
        const wrapper = render(withTheme(<Label value='Label' />))
        expect(wrapper).toMatchSnapshot()
    })
})
