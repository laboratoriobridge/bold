import * as React from 'react'
import { Label } from '../Label'
import { shallow } from 'enzyme'

describe('Label', () => {
    it('render', () => {
        expect(shallow(<Label value='Label' />)).toMatchSnapshot()
    })
})
