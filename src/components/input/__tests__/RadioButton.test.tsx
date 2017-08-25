import * as React from 'react'
import { shallowRenderAndMatch } from '../../../__tests__/test.defaults'
import { RadioButton } from '../RadioButton'

describe('RadioButton', () => {
    it('render', function () {
        shallowRenderAndMatch(<RadioButton name='radio1' label='label' value='radio1' />)
    })
    it('render disabled', function () {
        shallowRenderAndMatch(<RadioButton name='radio1' label='label' disabled value='radio1' />)
    })
    it('render checked', function () {
        shallowRenderAndMatch(<RadioButton name='radio1' label='label' checked value='radio1' />)
    })
    it('render checked disabled', function () {
        shallowRenderAndMatch(<RadioButton name='radio1' label='label' checked disabled value='radio1' />)
    })
})
