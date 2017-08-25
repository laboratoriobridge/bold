import * as React from 'react'
import { shallowRenderAndMatch } from '../../../../__tests__/test.defaults'
import { DateLabel } from '../DateLabel'

describe('DateLabel', () => {
    it('render', () => {
        shallowRenderAndMatch(
            <DateLabel title='label' value='1990-10-10' />
        )
    })
    it('size small', () => {
        shallowRenderAndMatch(
            <DateLabel title='label' value='1990-10-10' size='small' />
        )
    })
    it('horizontal', () => {
        shallowRenderAndMatch(
            <DateLabel title='label' value='1990-10-10' horizontal />
        )
    })
    it('horizontal e small', () => {
        shallowRenderAndMatch(
            <DateLabel title='label' value='1990-10-10' horizontal size='small' />
        )
    })
})
