import * as React from 'react'
import { shallowRenderAndMatch } from '../../../../__tests__/test.defaults'
import { TextLabel } from '../TextLabel'

describe('TextLabel', () => {
    it('render', () => {
        shallowRenderAndMatch(<TextLabel title='label' value='valor' />)
    })
})
