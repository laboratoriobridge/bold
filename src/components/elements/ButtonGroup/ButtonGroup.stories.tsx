import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { HFlow } from '../../layout/Flow/HFlow'
import { Button } from '../button/Button/Button'

import { ButtonGroup } from './ButtonGroup'

storiesOf('Components/ButtonGroup', module)
    .add('default', () => (
        <HFlow>
            <ButtonGroup>
                <Button label='First' size='small' type='primary' />
                <Button label='Second' size='small' />
                <Button label='Third' size='small' disabled />
            </ButtonGroup>
            <ButtonGroup>
                <Button icon='trashcan' size='small' />
                <Button icon='search' size='small' />
            </ButtonGroup>
        </HFlow>
    ))
