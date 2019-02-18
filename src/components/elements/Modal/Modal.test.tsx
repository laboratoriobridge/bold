import { mount, render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'
import { Button } from '../Button'

import { Modal } from './Modal'
import { ModalBody } from './ModalBody'
import { ModalContainer } from './ModalContainer'
import { ModalFooter } from './ModalFooter'

describe('Modal', () => {

    const createFooter = () => (
        <Button>Action</Button>
    )

    it('should render closed', () => {
        expect(render(withTheme(
            <Modal open={false} renderFooter={createFooter}>
                Testing.
            </Modal>
        ))).toMatchSnapshot()
    })

    it('should render open', () => {
        expect(render(withTheme(
            <Modal open={true} renderFooter={createFooter}>
                Testing.
            </Modal>
        ))).toMatchSnapshot()
    })

    it('should use modal parts', () => {
        const wrapper = mount(withTheme(
            <Modal open={true} renderFooter={createFooter}>
                Testing.
            </Modal>
        ))
        expect(wrapper.find(ModalContainer).length).toEqual(1)
        expect(wrapper.find(ModalBody).length).toEqual(1)
        expect(wrapper.find(ModalFooter).length).toEqual(1)
    })

    it('should not render footer if renderFooter is not provided', () => {
        const noFooter = mount(withTheme(
            <Modal open={true}>
                Testing.
            </Modal>
        ))
        expect(noFooter.find(ModalFooter).length).toEqual(0)
    })

    it('render different sizes', () => {
        expect(render(withTheme(<Modal open={true} size='small'>Testing.</Modal>))).toMatchSnapshot()
        expect(render(withTheme(<Modal open={true} size='large'>Testing.</Modal>))).toMatchSnapshot()
        expect(render(withTheme(<Modal open={true} size='auto'>Testing.</Modal>))).toMatchSnapshot()
    })

    it('accept style prop', () => {
        expect(render(withTheme(<Modal open={true} style={{ color: 'red' }}>Testing.</Modal>))).toMatchSnapshot()
    })
})
