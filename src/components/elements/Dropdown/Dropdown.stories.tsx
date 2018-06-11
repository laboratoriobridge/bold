import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../stories-addons'
import { HFlow } from '../../layout/Flow/HFlow'
import { Button } from '../button/Button/Button'

import { Dropdown } from './Dropdown'
import { DropdownItem, DropdownMenu } from './DropdownMenu'

storiesOf('Components/Dropdown', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('trigger', () => (
        // tslint:disable jsx-no-lambda
        <HFlow hSpacing={0.5} alignItems='center'>
            <Dropdown
                renderTarget={(ctrl) => (
                    <Button label='Menu' size='small' onClick={ctrl.show} />
                )}
            >
                {ctrl => (
                    <>
                        <DropdownItem onClick={action('clicked item 1')}>Item 1</DropdownItem>
                        <DropdownItem onClick={action('clicked item 2')}>Item 2</DropdownItem>
                        <DropdownItem onClick={action('clicked item 3')}>Item 3</DropdownItem>
                    </>
                )}
            </Dropdown>
            <Dropdown
                renderTarget={(ctrl) => (
                    <Button icon='dots' skin='ghost' size='small' onClick={ctrl.show} />
                )}
            >
                {ctrl => (
                    <>
                        <DropdownItem onClick={action('clicked item 1')}>Item 1</DropdownItem>
                        <DropdownItem onClick={action('clicked item 2')}>Item 2</DropdownItem>
                        <DropdownItem onClick={action('clicked item 3')}>Item 3</DropdownItem>
                    </>
                )}
            </Dropdown>
        </HFlow>
    ))
    .add('menu', () => (
        <DropdownMenu>
            <DropdownItem onClick={action('clicked item 1')}>Item 1</DropdownItem>
            <DropdownItem onClick={action('clicked item 2')}>Item 2</DropdownItem>
            <DropdownItem onClick={action('clicked item 3')}>Item 3</DropdownItem>
        </DropdownMenu>
    ))
