import { action } from '@storybook/addon-actions'
import { boolean, select, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../stories-addons'
import { HFlow } from '../../layout/Flow/HFlow'
import { Button } from '../button/Button/Button'

import { modal } from './auto'
import { ModalAutoMountingTarget } from './auto/ModalAutoMountingTarget'
import { Modal } from './Modal'
import { ModalBody } from './ModalBody'
import { ModalContainer, ModalSize } from './ModalContainer'
import { ModalControlled, ModalController } from './ModalControlled'
import { ModalFooter } from './ModalFooter'

const sizes: { [key in ModalSize]: any } = {
    'large': 'large',
    'small': 'small',
}

let controller1: ModalController = null
let controller2: ModalController = null

const createFooter = (ctrl: ModalController = null) => (
    <HFlow justifyContent='flex-end'>
        <Button label='Cancel' onClick={ctrl && ctrl.close || action('cancel clicked')} />
        <Button label='Save' type='primary' onClick={ctrl && ctrl.close || action('save clicked')} />
    </HFlow>
)

storiesOf('Components/Modal', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('default', () => (
        // tslint:disable jsx-no-lambda
        <Modal
            open={boolean('open', true)}
            size={select('size', sizes, 'large')}
            renderFooter={createFooter}
        >
            Lorem ipsum.
        </Modal>
    ))
    .add('auto', () => (
        <>
            <Button
                label='Auto modal'
                onClick={modal({
                    size: 'small',
                    render: () => 'Confirm?',
                    actions: [
                        { label: 'Cancel', onClick: action('Cancel') },
                        { label: 'Ok', type: 'primary', onClick: action('Ok') },
                    ],
                })}
            />
            <ModalAutoMountingTarget />
        </>
    ))
    .add('controlled/trigger', () => (
        // tslint:disable jsx-no-lambda
        <HFlow>
            <Button label='Modal with actions' onClick={() => controller1.open()} />
            <Button label='Simple Modal' onClick={() => controller2.open()} />

            <ModalControlled
                control={(ctrl) => controller1 = ctrl}
                size={select('size', sizes, 'large')}
                renderFooter={createFooter}
            >
                Lorem ipsum.
            </ModalControlled>

            <ModalControlled
                control={(ctrl) => controller2 = ctrl}
                size={select('size', sizes, 'large')}
            >
                Lorem ipsum.
            </ModalControlled>
        </HFlow>
    ))
    .add('parts', () => (
        <ModalContainer size={select('size', sizes, 'large')} onClose={action('onClose')}>
            <ModalBody>
                Teste
            </ModalBody>
            <ModalFooter>
                <HFlow justifyContent='flex-end'>
                    <Button label='Secondary' />
                    <Button label='Primary' type='primary' />
                </HFlow>
            </ModalFooter>
        </ModalContainer>
    ))
