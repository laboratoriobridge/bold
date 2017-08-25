import * as React from 'react'
import { Input } from '../Input'
import { shallowRenderAndMatch } from '../../../__tests__/test.defaults'


describe('Input', () => {
    it('render', function () {
        shallowRenderAndMatch(<Input type='text' />)
    })
})
