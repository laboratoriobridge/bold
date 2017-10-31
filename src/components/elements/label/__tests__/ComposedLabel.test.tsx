import * as React from 'react'
import { ComposedLabel } from '../ComposedLabel'
import { shallowRenderAndMatch } from '../../../../__tests__/test.defaults'

describe('ComposedLabel', () => {
    it('render', () => {
        shallowRenderAndMatch(
            <ComposedLabel title='label'>
                valor
            </ComposedLabel>
        )
    })
    it('size small', () => {
        shallowRenderAndMatch(
            <ComposedLabel title='label' size='small'>
                valor
            </ComposedLabel>
        )
    })
    it('horizontal', () => {
        shallowRenderAndMatch(
            <ComposedLabel title='label' horizontal>
                valor
            </ComposedLabel>
        )
    })
    it('horizontal e small', () => {
        shallowRenderAndMatch(
            <ComposedLabel title='label' horizontal size='small'>
                valor
            </ComposedLabel>
        )
    })
    it('classNames props', () => {
        shallowRenderAndMatch(
            <ComposedLabel className='has-text-centered' title='label' horizontal size='small'>
                valor
            </ComposedLabel>
        )
    })
})
