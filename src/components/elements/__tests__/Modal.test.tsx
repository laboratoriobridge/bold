import * as React from 'react'
import { shallowRenderAndMatch } from '../../../__tests__/test.defaults'
import { Modal } from '../Modal'

describe('Modal', () => {
    it('render', () => {
        shallowRenderAndMatch(
            <Modal active={false}>
                child
            </Modal>
        )
    })
    it('render active', () => {
        shallowRenderAndMatch(
            <Modal active>
                child
            </Modal>
        )
    })
})
