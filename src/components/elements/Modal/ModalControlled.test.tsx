import { mount, ReactWrapper, render, shallow } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'
import { Button } from '../button/Button/Button'

import { ModalControlled, ModalController } from './ModalControlled'

describe('ModalControlled', () => {
    let controller: ModalController = null

    const createFooter = () => (
        <Button label='Action' />
    )

    it('should render correcly', () => {
        const wrapper = mount(withTheme(
            // tslint:disable jsx-no-lambda
            <ModalControlled control={(ctrl) => controller = ctrl} renderFooter={createFooter}>
                Testing.
            </ModalControlled>
        ))

        controller.close()
        expect(wrapper.render()).toMatchSnapshot()
        controller.open()
        expect(wrapper.render()).toMatchSnapshot()
    })
})
