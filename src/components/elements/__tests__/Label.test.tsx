import * as React from 'react'
import { shallowRenderAndMatch } from '../../../__tests__/test.defaults'
import { Label } from '../Label'

describe('Label', () => {
    it('render', () => {
        shallowRenderAndMatch(<Label />)
    })
    it('render disabled', () => {
        shallowRenderAndMatch(<Label disabled={true} />)
    })
    it('render custom classes', () => {
        shallowRenderAndMatch(<Label className='test' />)
    })
})
